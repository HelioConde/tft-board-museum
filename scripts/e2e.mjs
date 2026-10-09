import { chromium } from "playwright";

const baseUrl = process.env.E2E_BASE_URL || "http://127.0.0.1:4173/";
const browser = await chromium.launch({ headless: true });

async function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function runDesktop() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForSelector("#museum");

  await assert(await page.locator(".board-card").count() >= 1, "Demo boards did not render");

  await page.locator(".board-card").first().click();
  await assert(await page.locator("#boardDialog").evaluate(el => el.open), "Board dialog did not open");
  await page.locator("#closeDialog").click();

  await page.locator('[data-filter="top4"]').click();
  await assert(await page.locator(".board-card").count() >= 1, "Top 4 filter returned no cards");

  await page.locator('[data-filter="all"]').click();
  const compareButtons = page.locator("[data-compare]");
  await compareButtons.nth(0).click();
  await compareButtons.nth(1).click();
  await assert(await page.locator("#compareBtn").isEnabled(), "Compare button should be enabled after two boards");
  await page.locator("#compareBtn").click();
  await assert(await page.locator("#compareDialog").evaluate(el => el.open), "Compare dialog did not open");
  await page.locator("#closeCompare").click();

  const coverage = await page.evaluate(() => {
    const pt = Object.keys(window.copy?.pt || {}).sort();
    const en = Object.keys(window.copy?.en || {}).sort();
    return {
      missingInEn: pt.filter(key => !en.includes(key)),
      missingInPt: en.filter(key => !pt.includes(key))
    };
  });
  await assert(coverage.missingInEn.length === 0, "Missing EN keys: " + coverage.missingInEn.join(", "));
  await assert(coverage.missingInPt.length === 0, "Missing PT-BR keys: " + coverage.missingInPt.join(", "));

  await page.locator("#langToggle").click();
  await assert((await page.locator("html").getAttribute("lang")) === "en", "Language did not change to EN");
  await assert((await page.locator('[data-i18n="recentEvolution"]').textContent()) === "RECENT EVOLUTION", "Recent evolution section did not translate");
  await assert((await page.locator("#hallOfFame h2").textContent()) === "Preserved moments", "Hall of Fame did not translate");
  await assert((await page.locator("#setHistory .section-head h2").textContent()) === "Collection evolution", "Set history did not translate");
  await assert((await page.locator("#newCollectionBtn").textContent()) === "New collection", "Collections UI did not translate");
  await assert((await page.locator("#authDialog h2").textContent()) === "Take your museum across devices.", "Auth dialog did not translate");

  await page.locator("#langToggle").click();
  await assert((await page.locator("html").getAttribute("lang")) === "pt-BR", "Language did not return to PT-BR");
  await assert((await page.locator('[data-i18n="recentEvolution"]').textContent()) === "EVOLUÇÃO RECENTE", "Recent evolution did not return to PT-BR");

  await page.close();
}

async function runMobile() {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForSelector("#museum");
  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  await assert(metrics.scrollWidth <= metrics.innerWidth + 1, `Horizontal overflow: ${metrics.scrollWidth}px > ${metrics.innerWidth}px`);
  await assert(await page.locator(".board-card").count() >= 1, "Mobile demo boards did not render");
  await page.close();
}

async function runPwaSecurity() {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 45000 });

  await page.evaluate(async () => {
    const otherProject = await caches.open("agendaleve-shell-sentinel");
    await otherProject.put("/other-project-sentinel", new Response("keep", { status: 200 }));
    await navigator.serviceWorker.register("./sw.js");
    await navigator.serviceWorker.ready;
  });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));

  // Query-bearing links must never be written into Cache Storage.
  const privateUrl = new URL(baseUrl);
  privateUrl.searchParams.set("token", "private-regression-token");
  await page.goto(privateUrl.href, { waitUntil: "domcontentloaded" });
  await page.evaluate(async () => {
    await fetch("./version.json?token=private-regression-token", { cache: "no-store" });
  });

  let state = await page.evaluate(async () => {
    const names = await caches.keys();
    const cachedUrls = [];
    for (const name of names) {
      const cache = await caches.open(name);
      cachedUrls.push(...(await cache.keys()).map(request => request.url));
    }
    const foreign = await caches.open("agendaleve-shell-sentinel");
    return {
      names,
      cachedUrls,
      foreignValue: await (await foreign.match("/other-project-sentinel"))?.text()
    };
  });

  await assert(state.names.includes("tbm-shell-v4"), "Current Museum shell was not installed");
  await assert(state.foreignValue === "keep", "Museum PWA cleared another project's cache");
  await assert(!state.cachedUrls.some(url => url.includes("private-regression-token")), "Private URL leaked into Cache Storage");

  // Trigger a fresh worker activation rather than checking after an already activated worker.
  await page.evaluate(async () => {
    await caches.open("tbm-shell-v2");
    await navigator.serviceWorker.register("./sw.js?qa=pwa-upgrade", { scope: "./" });
  });
  await page.waitForFunction(async () => !(await caches.keys()).includes("tbm-shell-v2"), null, { timeout: 12000 });
  state = await page.evaluate(() => caches.keys());
  await assert(state.includes("tbm-shell-v4"), "Current Museum shell was lost after upgrade");
  await assert(state.includes("agendaleve-shell-sentinel"), "Upgrade erased another project's cache");

  // Offline mode must return the local Museum app shell rather than an HTTP error.
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  // After an upgrade, claim/control can lag behind activation by one navigation.
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller), null, { timeout: 12000 });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller), null, { timeout: 12000 });
  await page.context().setOffline(true);
  try {
    const offlineShell = await page.evaluate(async () => {
      const response = await fetch("./index.html");
      return { ok: response.ok, text: await response.text() };
    });
    await assert(offlineShell.ok && offlineShell.text.includes('id="museum"'),
      "Museum app shell unavailable offline");
  } finally {
    await page.context().setOffline(false);
    await page.close();
  }
}

try {
  await runDesktop();
  await runMobile();
  await runPwaSecurity();
  console.log("E2E smoke tests passed");
} finally {
  await browser.close();
}

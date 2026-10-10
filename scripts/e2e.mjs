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

async function runMobileBoardCardOverlapRegression() {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForSelector("#museum");
  await page.evaluate(() => {
    // Match the long Set 18 trait shown in the real-device screenshot.
    const units = demoBoards[0].units.map((u, i) => [u[0], u[1], i < 7 ? i : i === 7 ? 14 : 27, u[3], u[4], u[5]]);
    boards = [
      { ...demoBoards[0], id: "mobile-layout-1", title: "3 Congregação das Bruxas", set: 18,
        patch: "TFT Unreal Version ?.?", units,
        traits: ["3 Congregação das Bruxas", "3 Vanguarda", "2 Devastador", "1 Flora Fatalis"] },
      { ...demoBoards[0], id: "mobile-layout-2", title: "4 Congregação das Bruxas", set: 18,
        patch: "TFT Unreal Version ?.?", units }
    ];
    activeFilter = "all"; activeSet = "all"; searchTerm = ""; patchValue = "all"; visibleLimit = 2;
    document.querySelector("#setFilter").value = "all";
    render();
  });
  for (const width of [320, 360, 390, 430]) {
    await page.setViewportSize({ width, height: 844 });
    const issues = await page.evaluate(() => {
      const errors = [];
      for (const card of document.querySelectorAll(".board-card")) {
        const title = card.querySelector(".board-meta-heading h3")?.getBoundingClientRect();
        const button = card.querySelector(".board-meta-heading .compare-toggle")?.getBoundingClientRect();
        const top = card.querySelector(".board-card-top")?.getBoundingClientRect();
        const mini = card.querySelector(".mini-board")?.getBoundingClientRect();
        const meta = card.querySelector(".board-meta")?.getBoundingClientRect();
        const footer = card.querySelector(".board-card-footer")?.getBoundingClientRect();
        if (!title || !button || !top || !mini || !meta || !footer) {
          errors.push("Missing board regions");
          continue;
        }
        if (mini.bottom > top.bottom + 2) errors.push("Hex portraits overlap metadata");
        if (top.bottom > meta.top + 2) errors.push("Board region overlaps title");
        if (title.right > button.left - 3 && title.top < button.bottom && button.top < title.bottom) {
          errors.push("Composition title overlaps comparison control");
        }
        if (button.bottom > meta.bottom + 2) errors.push("Comparison control overlaps footer");
        if (footer.top < title.bottom - 2) errors.push("Footer overlaps composition title");
      }
      if (document.documentElement.scrollWidth > innerWidth + 1) errors.push("Horizontal scrolling");
      return errors;
    });
    await assert(issues.length === 0, width + "px Set 18 mobile card: " + issues.join("; "));
  }
  await assert((await page.locator(".board-card-footer").first().textContent()).includes("Patch não informado"),
    "Unknown TFT Unreal patch must have a readable fallback");
  await page.locator(".board-card .compare-toggle").first().click();
  await assert((await page.locator("#compareHint").textContent()).includes("1 / 2"), "Compare control does not work after relocation");
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
  await runMobileBoardCardOverlapRegression();
  await runPwaSecurity();
  console.log("E2E smoke tests passed");
} finally {
  await browser.close();
}

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

try {
  await runDesktop();
  await runMobile();
  console.log("E2E smoke tests passed");
} finally {
  await browser.close();
}

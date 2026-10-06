import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.SCREENSHOT_BASE_URL || "http://127.0.0.1:4173";
const outputDir = process.env.SCREENSHOT_DIR || "screenshots";
const riotId = process.env.SCREENSHOT_RIOT_ID || "AlchemyFlames#br1";
const region = process.env.SCREENSHOT_REGION || "br1";

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

async function capture({ name, url, viewport, waitForProfile = false }) {
  const page = await browser.newPage({ viewport });

  page.on("console", msg => {
    if (msg.type() === "error") console.error("[browser]", msg.text());
  });

  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForSelector("#museum", { timeout: 15000 });
  await page.waitForTimeout(1200);

  if (waitForProfile) {
    try {
      await page.waitForSelector("#profilePanel:not(.hidden)", { timeout: 20000 });
      await page.waitForTimeout(1500);
    } catch {
      console.warn("Profile did not become visible before timeout; capturing current state.");
    }
  }

  await page.screenshot({
    path: path.join(outputDir, name),
    fullPage: true
  });

  const size = await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const overflow = Array.from(document.querySelectorAll("body *"))
      .map(el => {
        const r = el.getBoundingClientRect();
        return { tag: el.tagName.toLowerCase(), id: el.id || "", className: String(el.className || "").slice(0,120), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) };
      })
      .filter(x => (x.left < -1 || x.right > viewportWidth + 1) && !x.className.split(" ").includes("ambient"))
      .slice(0, 25);
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      viewportWidth,
      title: document.title,
      overflow
    };
  });

  await page.close();
  return { name, url, viewport, ...size };
}

const encodedRiot = encodeURIComponent(riotId);
const captures = [];

captures.push(await capture({
  name: "desktop-full.png",
  url: baseUrl,
  viewport: { width: 1440, height: 1000 }
}));

captures.push(await capture({
  name: "mobile-full.png",
  url: baseUrl,
  viewport: { width: 390, height: 844 }
}));

captures.push(await capture({
  name: "alchemyflames-desktop-full.png",
  url: `${baseUrl}?riot=${encodedRiot}&region=${encodeURIComponent(region)}`,
  viewport: { width: 1440, height: 1000 },
  waitForProfile: true
}));

captures.push(await capture({
  name: "alchemyflames-mobile-full.png",
  url: `${baseUrl}?riot=${encodedRiot}&region=${encodeURIComponent(region)}`,
  viewport: { width: 390, height: 844 },
  waitForProfile: true
}));

await fs.writeFile(
  path.join(outputDir, "capture-report.json"),
  JSON.stringify({
    generatedAt: new Date().toISOString(),
    baseUrl,
    riotId,
    region,
    captures
  }, null, 2)
);

await browser.close();
console.log("Screenshots saved in", outputDir);

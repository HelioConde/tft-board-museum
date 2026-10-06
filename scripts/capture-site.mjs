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

  const consoleErrors = [];
  const failedRequests = [];
  page.on("console", msg => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
      console.error("[browser]", msg.text());
    }
  });
  page.on("requestfailed", request => {
    failedRequests.push({
      url: request.url(),
      error: request.failure()?.errorText || "request_failed"
    });
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
    const viewportHeight = window.innerHeight;
    const all = Array.from(document.querySelectorAll("body *"));
    const rectInfo = el => {
      const r = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        id: el.id || "",
        className: String(el.className || "").slice(0, 120),
        top: Math.round(r.top + scrollY),
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
        height: Math.round(r.height),
        display: style.display,
        visibility: style.visibility,
        fontSize: parseFloat(style.fontSize) || 0
      };
    };
    const overflow = all
      .filter(el => {
        const r = el.getBoundingClientRect();
        const className = String(el.className || "");
        const intentional = el.closest(".hall-grid,.set-stats-grid,.collection-grid,.period-stats-grid,.timeline-sets,.timeline-patches,.evolution-grid,.placement-distribution");
        return (r.left < -1 || r.right > viewportWidth + 1) && !className.split(" ").includes("ambient") && !intentional;
      })
      .map(rectInfo)
      .slice(0, 25);
    const selectors = [
      ".topbar",".hero","#profilePanel",".ad-slot","#museum",".stats",
      "#insights","#recentEvolution","#hallOfFame","#setHistory","#cloudCollections","footer"
    ];
    const sections = selectors.map(selector => {
      const el = document.querySelector(selector);
      return el ? { selector, ...rectInfo(el) } : { selector, missing: true };
    });
    const horizontalScrollers = all
      .filter(el => {
        const style = getComputedStyle(el);
        return el.scrollWidth > el.clientWidth + 2 && ["auto","scroll"].includes(style.overflowX);
      })
      .map(el => ({
        ...rectInfo(el),
        clientWidth: el.clientWidth,
        scrollWidth: el.scrollWidth
      }))
      .filter(x => !x.className.split(" ").includes("ambient"))
      .slice(0, 30);
    const smallTapTargets = all
      .filter(el => ["BUTTON","A","INPUT","SELECT"].includes(el.tagName))
      .map(rectInfo)
      .filter(x => x.width > 0 && x.height > 0 && (x.width < 40 || x.height < 40))
      .slice(0, 40);
    const tinyText = all
      .filter(el => {
        const text = (el.textContent || "").trim();
        if (!text || el.children.length) return false;
        const r = el.getBoundingClientRect();
        const fs = parseFloat(getComputedStyle(el).fontSize) || 0;
        return r.width > 0 && r.height > 0 && fs > 0 && fs < 11;
      })
      .map(el => ({ text: (el.textContent || "").trim().slice(0, 80), ...rectInfo(el) }))
      .slice(0, 40);
    const imageAudit = Array.from(document.images).map(img => ({
      src: img.currentSrc || img.src || "",
      complete: img.complete,
      naturalWidth: img.naturalWidth || 0,
      naturalHeight: img.naturalHeight || 0,
      renderedWidth: Math.round(img.getBoundingClientRect().width),
      renderedHeight: Math.round(img.getBoundingClientRect().height),
      loading: img.loading || "auto"
    }));
    const brokenImages = imageAudit.filter(img =>
      img.complete &&
      img.naturalWidth === 0 &&
      (img.renderedWidth > 0 || img.renderedHeight > 0)
    );
    const counts = {
      images: imageAudit.length,
      brokenImages: brokenImages.length,
      lazyImages: imageAudit.filter(img => img.loading === "lazy").length,
      autoImages: imageAudit.filter(img => img.loading !== "lazy").length,
      boardCards: document.querySelectorAll(".board-card:not(.skeleton-card)").length,
      skeletonCards: document.querySelectorAll(".skeleton-card").length,
      filters: document.querySelectorAll(".filter").length,
      hallCards: document.querySelectorAll(".hall-card").length,
      insightCards: document.querySelectorAll(".insight-card").length,
      evolutionCards: document.querySelectorAll(".evolution-card").length,
      collectionCards: document.querySelectorAll(".collection-card").length
    };
    const heroTitle = document.querySelector(".hero h1");
    const metrics = {
      heroTitleFontSize: heroTitle ? parseFloat(getComputedStyle(heroTitle).fontSize) : null,
      bodyFontSize: parseFloat(getComputedStyle(document.body).fontSize),
      pageHeightInViewports: Number((document.documentElement.scrollHeight / viewportHeight).toFixed(2))
    };
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      viewportWidth,
      viewportHeight,
      title: document.title,
      overflow,
      sections,
      horizontalScrollers,
      smallTapTargets,
      tinyText,
      counts,
      imageAudit,
      brokenImages,
      metrics
    };
  });

  await page.close();
  return { name, url, viewport, ...size, consoleErrors: consoleErrors.slice(0,20), failedRequests: failedRequests.slice(0,20) };
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

const generatedAt = new Date().toISOString();
await fs.writeFile(
  path.join(outputDir, "capture-report.json"),
  JSON.stringify({ generatedAt, baseUrl, riotId, region, captures }, null, 2)
);

const auditLines = [
  "# Visual audit",
  "",
  `Generated: ${generatedAt}`,
  ""
];
for (const capture of captures) {
  auditLines.push(`## ${capture.name}`);
  auditLines.push("");
  auditLines.push(`- Viewport: ${capture.viewportWidth}×${capture.viewportHeight}`);
  auditLines.push(`- Page: ${capture.width}×${capture.height} (${capture.metrics.pageHeightInViewports} viewports tall)`);
  auditLines.push(`- Boards rendered: ${capture.counts.boardCards}`);
  auditLines.push(`- Overflow elements: ${capture.overflow.length}`);
  auditLines.push(`- Horizontal scrollers: ${capture.horizontalScrollers.length}`);
  auditLines.push(`- Small tap targets: ${capture.smallTapTargets.length}`);
  auditLines.push(`- Tiny text nodes (<11px): ${capture.tinyText.length}`);
  auditLines.push(`- Console errors: ${capture.consoleErrors.length}`);
  auditLines.push(`- Failed requests: ${capture.failedRequests.length}`);
  auditLines.push(`- Images loaded: ${capture.counts.images}`);
  auditLines.push(`- Lazy images: ${capture.counts.lazyImages}`);
  auditLines.push(`- Auto/eager images: ${capture.counts.autoImages}`);
  auditLines.push(`- Broken images: ${capture.counts.brokenImages}`);
  auditLines.push("");
  auditLines.push("### Sections");
  for (const section of capture.sections) {
    if (section.missing) auditLines.push(`- ${section.selector}: missing`);
    else auditLines.push(`- ${section.selector}: top ${section.top}px · ${section.width}×${section.height}px`);
  }
  auditLines.push("");
  if (capture.overflow.length) {
    auditLines.push("### Overflow");
    for (const item of capture.overflow) auditLines.push(`- ${item.tag}#${item.id}.${item.className}: left ${item.left}, right ${item.right}, width ${item.width}`);
    auditLines.push("");
  }
  if (capture.smallTapTargets.length) {
    auditLines.push("### Small tap targets");
    for (const item of capture.smallTapTargets.slice(0,15)) auditLines.push(`- ${item.tag}#${item.id}.${item.className}: ${item.width}×${item.height}px`);
    auditLines.push("");
  }
  if (capture.tinyText.length) {
    auditLines.push("### Tiny text");
    for (const item of capture.tinyText.slice(0,15)) auditLines.push(`- ${item.fontSize}px: ${item.text}`);
    auditLines.push("");
  }
}
await fs.writeFile(path.join(outputDir, "visual-audit.md"), auditLines.join("\n"));

const qualityFailures = [];
for (const capture of captures) {
  if (capture.overflow.length) qualityFailures.push(`${capture.name}: ${capture.overflow.length} unintended overflow element(s)`);
  if (capture.smallTapTargets.length) qualityFailures.push(`${capture.name}: ${capture.smallTapTargets.length} small tap target(s)`);
  if (capture.consoleErrors.length) qualityFailures.push(`${capture.name}: ${capture.consoleErrors.length} console error(s)`);
  if (capture.failedRequests.length) qualityFailures.push(`${capture.name}: ${capture.failedRequests.length} failed request(s)`);
  if (capture.brokenImages.length) qualityFailures.push(`${capture.name}: ${capture.brokenImages.length} broken image(s)`);
  if (capture.viewportWidth >= 1000) {
    if (capture.height > 5000) qualityFailures.push(`${capture.name}: desktop page too tall (${capture.height}px > 5000px)`);
    const sectionHeight = selector => capture.sections.find(section => section.selector === selector)?.height || 0;
    const budgets = [
      [".hero", 720],
      ["#profilePanel", 180],
      ["#museum", 1600],
      ["#recentEvolution", 470],
      ["#setHistory", 540]
    ];
    for (const [selector, maxHeight] of budgets) {
      const height = sectionHeight(selector);
      if (height > maxHeight) qualityFailures.push(`${capture.name}: ${selector} too tall (${height}px > ${maxHeight}px)`);
    }
  }
  if (capture.viewportWidth <= 420) {
    if (capture.height > 5200) qualityFailures.push(`${capture.name}: mobile page too tall (${capture.height}px > 5200px)`);
    const sectionHeight = selector => capture.sections.find(section => section.selector === selector)?.height || 0;
    const budgets = [
      [".hero", 740],
      ["#profilePanel", 280],
      ["#museum", 1500],
      [".stats", 120],
      ["#insights", 300],
      ["#recentEvolution", 520],
      ["#setHistory", 520]
    ];
    for (const [selector, maxHeight] of budgets) {
      const height = sectionHeight(selector);
      if (height > maxHeight) qualityFailures.push(`${capture.name}: ${selector} too tall (${height}px > ${maxHeight}px)`);
    }
  }
}
await fs.writeFile(
  path.join(outputDir, "visual-quality.json"),
  JSON.stringify({
    generatedAt,
    passed: qualityFailures.length === 0,
    failures: qualityFailures
  }, null, 2)
);
if (qualityFailures.length) {
  console.error("Visual quality issues detected:\n" + qualityFailures.map(x => "- " + x).join("\n"));
}

await browser.close();
console.log("Screenshots saved in", outputDir);

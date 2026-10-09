// TFT Board Museum PWA cache. GitHub Pages shares this origin with other products.
const CACHE_NAME = "tbm-shell-v4";
const SHELL = [
  "./", "./index.html", "./styles.css", "./app.js",
  "./museum-cloud.js", "./ads-config.js", "./ads-consent.js",
  "./live-update.js", "./favicon.svg", "./manifest.webmanifest",
  "./og-card.svg", "./about.html", "./privacy.html", "./terms.html",
  "./contact.html", "./404.html",
  "./img/tft-board-museum-image-pack/backgrounds/hero-desktop.png",
  "./img/tft-board-museum-image-pack/backgrounds/hero-mobile.png",
  "./img/tft-board-museum-image-pack/backgrounds/card-board.png",
  "./img/tft-board-museum-image-pack/mascots/poro-main.png",
  "./img/tft-board-museum-image-pack/mascots/poro-explorer.png",
  "./img/tft-board-museum-image-pack/mascots/poro-trophy.png",
  "./img/tft-board-museum-image-pack/mascots/poro-books.png",
  "./img/tft-board-museum-image-pack/social/og-default.png",
  "./img/tft-board-museum-image-pack/brand/app-icon-192.png",
  "./img/tft-board-museum-image-pack/backgrounds/section-dark.png",
  "./img/tft-board-museum-image-pack/cards/hover-overlay.png",
  "./img/tft-board-museum-image-pack/cards/image-placeholder.png",
  "./img/tft-board-museum-image-pack/cards/skeleton-loading.png",
  "./img/tft-board-museum-image-pack/icons/set-icon.png",
  "./img/tft-board-museum-image-pack/mascots/poro-sleeping.png",
  "./img/tft-board-museum-image-pack/mascots/raid-boss.png"
];
const APP_SCOPE = new URL(self.registration.scope);
const SHELL_PATHS = new Set(SHELL.map(file => new URL(file, self.registration.scope).pathname));

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    // Do not clear cached content from other apps on helioconde.github.io.
    await Promise.all(names
      .filter(name => name.startsWith("tbm-shell-") && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  // Never intercept other project folders, foreign origins or Supabase APIs.
  if (url.origin !== APP_SCOPE.origin || !url.pathname.startsWith(APP_SCOPE.pathname)) return;
  if (url.pathname.endsWith("/version.json") || url.pathname.includes("/functions/")) return;

  const isNavigation = request.mode === "navigate";
  // Profile/board URLs have query parameters. Never store them as an app-shell response.
  const canCache = !url.search && SHELL_PATHS.has(url.pathname);
  if (!canCache && !isNavigation) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (canCache && response.ok && response.type === "basic") {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      if (canCache) {
        const cached = await caches.match(request);
        if (cached) return cached;
      }
      // Offline deep links may load the generic shell, without caching personal URLs.
      if (isNavigation) {
        const directPage = SHELL_PATHS.has(url.pathname)
          ? url.pathname
          : new URL("./index.html", APP_SCOPE).pathname;
        const fallback = await caches.match(APP_SCOPE.origin + directPage);
        if (fallback) return fallback;
      }
      return Response.error();
    }
  })());
});

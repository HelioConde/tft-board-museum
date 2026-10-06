const CACHE_NAME="tbm-shell-v3";
const SHELL=[
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./museum-cloud.js",
  "./ads-config.js",
  "./ads-consent.js",
  "./live-update.js",
  "./favicon.svg",
  "./manifest.webmanifest",
  "./og-card.svg",
  "./img/tft-board-museum-image-pack/backgrounds/hero-desktop.png",
  "./img/tft-board-museum-image-pack/backgrounds/hero-mobile.png",
  "./img/tft-board-museum-image-pack/backgrounds/card-board.png",
  "./img/tft-board-museum-image-pack/mascots/poro-main.png",
  "./img/tft-board-museum-image-pack/mascots/poro-explorer.png",
  "./img/tft-board-museum-image-pack/mascots/poro-trophy.png",
  "./img/tft-board-museum-image-pack/mascots/poro-books.png",
  "./img/tft-board-museum-image-pack/social/og-default.png",
  "./img/tft-board-museum-image-pack/brand/app-icon-192.png",
  "./img/tft-board-museum-image-pack/backgrounds/section-dark.png"
];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith("tbm-shell-")&&key!==CACHE_NAME).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  const request=event.request;
  if(request.method!=="GET")return;
  const url=new URL(request.url);
  const scope=new URL(self.registration.scope);

  if(url.origin!==scope.origin)return;
  if(url.pathname.endsWith("/version.json"))return;
  if(url.pathname.includes("/functions/"))return;

  if(request.mode==="navigate"){
    event.respondWith(
      fetch(request)
        .then(response=>{
          const clone=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put("./index.html",clone));
          return response;
        })
        .catch(()=>caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached=>{
      const network=fetch(request).then(response=>{
        if(response.ok)caches.open(CACHE_NAME).then(cache=>cache.put(request,response.clone()));
        return response;
      }).catch(()=>cached);
      return cached||network;
    })
  );
});

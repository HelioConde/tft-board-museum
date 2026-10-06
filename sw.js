const CACHE_NAME="tbm-shell-v1";
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
  "./og-card.svg"
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

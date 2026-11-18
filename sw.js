// Service worker minimo: rende l'app installabile e apribile anche con rete lenta.
const CACHE="tipvault-share-v1";
const FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  // Prima la rete (così i parametri condivisi arrivano sempre), poi la copia salvata.
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});

//Minimal Precaching & Runtime Caching ServiceWorker

//https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
//https://developers.google.com/web/ilt/pwa/lab-caching-files-with-service-worker
//https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith
//https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil

const filesToCache = [
          'style.css',
          'index.html',
          'manifest.json',
          'maskable_icon.png',
          'icon_512.png',
          'favicon.ico',
          'script.js'
        ];

//IMPORTANT this needs to change eveytime you make changes ANY file of the website, then reload the browser
//You can enable skip cache for netwoek in the netwoek panel in chrome dev tools
const staticCacheName = 'sampe-v13';


//Setting up precaching
self.addEventListener('install', async event => {
  // console.log('Attempting to install service worker and cache static assets');
  
  self.skipWaiting();

  //create preCache
  const precache = async()=>{
    const cache = await caches.open(staticCacheName);
    return cache.addAll(filesToCache);
  }
  
  //do not finish install until precaching is complete
  event.waitUntil(precache());
});

//clears any old caches
self.addEventListener('activate', event => {

  const clearCaches = async ()=>{
    const keys = await caches.keys();
    const oldKeys = keys.filter(key => key !== staticCacheName);
    const promises = oldKeys.map(key=>caches.delete(key));
    return Promise.all(promises);
  }

  event.waitUntil(clearCaches());

});

//intercepts request and responds with any cached responses.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

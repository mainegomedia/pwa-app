importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/main.css",
    "revision": "d3072ab3693c185313018e404e07d914"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "500d8fb00fc88b12e64e2b64beae30dc"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "1e8bde650879f8f8524e450e3d94e390"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "15adb83cb65fd1c56539155ab101e8df"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "98b662975cbe72a8f00baad06be41e14"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "a94aef9b9156517f7aa2f21e52356b47"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "61dec9dd3e29014e1138071b3d8494fb"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "b252a9697e7f26b5f10a22362912aa3c"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a91981f976b4e78a2c34423047bca3bc"
  },
  {
    "url": "index.html",
    "revision": "9f5b3baacaf4d14dbfb124203da4b99f"
  },
  {
    "url": "js/app.js",
    "revision": "f59737714913998e9cc55a028d846a00"
  },
  {
    "url": "manifest.json",
    "revision": "fc8f3e1b860d4ff0ddae6b6822885a4e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

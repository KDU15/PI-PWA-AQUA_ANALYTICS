var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        '/index.html',
        '/entrar.html',
        '/home.html'

        // '/assets/css/main.css',

        // '/assets/css/style-2pl.css',
        // '/assets/css/style-3pl.css',
        // '/assets/css/style-4pl.css',

        // '/assets/js/jquery.min.js',

        // '/assets/js/js-prop.js',
        // '/assets/js/main.js',
        // '/assets/js/breakpoints.min.js',

        // '/images/bg.webp',
        // '/images/d20-icon-icon.jpg',

        // '/images/bg-pl/player1.webp',
        // '/images/bg-pl/player2.webp',
        // '/images/bg-pl/player3.png',
        // '/images/bg-pl/player3.webp',

        // '/images/icon.png',
        // '/images/128.png',
        // '/images/144.png',
        // '/images/152.png',
        // '/images/167.png',
        // '/images/180.png',
        // '/images/192.png',
        // '/images/512.png',
        // '/images/1024.png',
        // '/images/mask196.png',
        // '/images/mask512.png',
        // '/images/mask102.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});
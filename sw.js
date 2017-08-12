var cacheName = 'pwa-commit-v3';

var filesToCache = [
	'.',
    './css/style.css',
    './images/books.png',
    './images/Home.svg',
    './images/ic_refresh_white_24px.svg',
    './images/profile.png',
    './images/push-off.png',
    './images/push-on.png',
    './js/app.js',
    './js/menu.js',
    './js/offline.js',
    './js/toast.js'
];

// Install Service Worker
self.addEventListener('install', function(e) {
	console.log('Service worker: Installing...');

	e.waitUntil(

		//Open the cache
		caches.open(cacheName).then(function(cache) {
			console.log('Service worker: Caching app shell at the moment');

			//Add files to the cache
			return cache.addAll(filesToCache);
		})
	)
})

// Fired when the service worker starts up
self.addEventListener('activate', function(e) {

	console.log('Service Worker: Activating');

	e.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(key) {
				if(key !== cacheName){
					console.log('Service Worker: Remove old cache', key);
					return caches.delete(key);
				}
			}))
		})
	);

	return self.clients.claim();

});

self.addEventListener('fetch', function(e) {
	console.log('Service Worker: Fetch', e.request.url);

	console.log("Url", e.request.url);

	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);

})



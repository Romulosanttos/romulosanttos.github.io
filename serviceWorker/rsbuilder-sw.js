var cacheName = 'rsbuilder-offline';
// lista de arquivos necessários para o shell do aplicativo
var filesToCache = [
    '../offline.html',
    '../index.html',
	'../assets/bootstrap/css/bootstrap.min.css',
	'../assets/bootstrap/js/bootstrap.min.js',
	'../assets/js/custom.js',
	'../assets/js/jquery-1.11.1.min.js',
	'../assets/js/jquery.parallax-1.1.3.js',
	'../assets/js/jquery.sticky.js',
	'../assets/js/modernizr.custom.js',
	'../assets/js/imagesloaded.pkgd.js',
	'../assets/js/jquery.cbpQTRotator.js',
	'../assets/js/jquery.sticky.js',
	'../assets/js/smoothscroll.js',
	'../assets/js/waypoints.min.js',
	'../assets/js/wow.min.js',
	'../assets/css/style.css',
	'../assets/css/animate.css',
	'../assets/css/font-awesome.min.css',
	'../assets/css/simple-line-icons.css',
	'../assets/images/preloader.gif',
	'../assets/images/cover.jpeg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function(){
  // console.log('[RS Builder] Install Event processing');
  return caches.open(cacheName).then(function(cache) {
    // console.log('[RS Builder] Cached index and offline page during Install');
    return cache.addAll(filesToCache);
  });
};

// Serve from Cache
self.addEventListener("fetch", function(event){
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		}).catch(function() {
			return caches.match('../offline.html');
		})
	)
});



if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ',registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ',err);
        
        });
    })

}
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    'index.html',
];
self.addEventListener('install',function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    )
});


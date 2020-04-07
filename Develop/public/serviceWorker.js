const filesToCache = [
    'index.html',
    'styles.css',
    'index.js',
    'serviceWorker.js'
];

const cacheName = 'myCache';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(filesToCache)
            })
            .catch(function (error) {
                console.error(error);
            })
    )
});
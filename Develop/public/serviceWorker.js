const filesToCache = [
    './index.html',
    './styles.css',
    './index.js',
];

const cacheName = 'myCache';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(filesToCache)
            });
            .cache(function (error) {
                console.error(error);
            })
    )
});
const CACHE_NAME = 'arjun-portfolio-v2.2.0';
const OFFLINE_URL = '/web-resume/404.html';

// Critical resources to cache immediately
const CRITICAL_CACHE = [
  '/web-resume/',
  '/web-resume/index.html',
  '/web-resume/resume/',
  '/web-resume/resume/index.html',
  '/web-resume/styles.css?v=2.1',
  '/web-resume/resume/styles.css?v=2.1',
  '/web-resume/js/theme-toggle.js',
  '/web-resume/404.html',
  '/web-resume/assets/images/photo.jpg'
];

// External resources to cache
const EXTERNAL_CACHE = [
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// Install service worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(CACHE_NAME).then(cache => {
        console.log('Service Worker: Caching critical resources');
        return cache.addAll(CRITICAL_CACHE);
      }),
      // Cache external resources separately (may fail)
      caches.open(CACHE_NAME + '-external').then(cache => {
        console.log('Service Worker: Caching external resources');
        return Promise.allSettled(
          EXTERNAL_CACHE.map(url => 
            cache.add(url).catch(err => console.log(`Failed to cache ${url}:`, err))
          )
        );
      })
    ]).then(() => {
      console.log('Service Worker: Install completed');
      return self.skipWaiting();
    })
  );
});

// Activate service worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== CACHE_NAME + '-external') {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activation completed');
      return self.clients.claim();
    })
  );
});

// Fetch event with network-first strategy for HTML, cache-first for assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests that aren't our external resources
  if (url.origin !== location.origin && !EXTERNAL_CACHE.includes(request.url)) {
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful responses
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached version or offline page
          return caches.match(request)
            .then(response => response || caches.match('/404.html'));
        })
    );
    return;
  }

  // Handle asset requests (cache-first strategy)
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response;
        }

        // Fetch from network and cache
        return fetch(request).then(response => {
          // Only cache successful responses
          if (response.ok) {
            const responseClone = response.clone();
            const cacheName = EXTERNAL_CACHE.includes(request.url) 
              ? CACHE_NAME + '-external' 
              : CACHE_NAME;
              
            caches.open(cacheName).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        }).catch(() => {
          // Return a fallback for failed requests
          if (request.destination === 'image') {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image unavailable</text></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
          return new Response('Resource unavailable offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});

// Handle messages from the main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background sync for analytics (if implemented)
self.addEventListener('sync', event => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

// Push notifications support (for future use)
self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/assets/images/photo.jpg',
      badge: '/assets/images/photo.jpg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification('Arjun Surendran Portfolio', options)
    );
  }
});

// Helper function for analytics sync
async function syncAnalytics() {
  try {
    // Implement analytics sync logic here
    console.log('Syncing analytics data...');
  } catch (error) {
    console.error('Analytics sync failed:', error);
  }
}
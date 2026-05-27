// ── Soul Art Hotel – Service Worker ──────────────────────────────────────────
// Versione cache: incrementare per forzare l'aggiornamento
const CACHE = 'soulart-v1';

// Asset pre-cachati al primo avvio (app shell)
const APP_SHELL = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './img/logo-hotel.png',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
];

// ── INSTALL: pre-cacha l'app shell ───────────────────────────────────────────
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

// ── ACTIVATE: rimuovi vecchie cache ──────────────────────────────────────────
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

// ── FETCH: strategie di caching per tipo di risorsa ──────────────────────────
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    // Ignora richieste non-GET e protocolli non-HTTP
    if (req.method !== 'GET') return;
    if (!url.protocol.startsWith('http')) return;

    // 1. Tile della mappa (CartoDB) → cache-first
    //    Le tile non cambiano: le serviamo dalla cache se disponibili,
    //    altrimenti le scarichiamo e le salviamo per la prossima volta.
    if (url.hostname.includes('cartocdn.com')) {
        event.respondWith(cacheFirst(req));
        return;
    }

    // 2. Wikipedia REST API (JSON per immagini) → network-only con fallback
    //    Non cachare le risposte JSON: cambiano e pesano poco.
    if (url.hostname.includes('wikipedia.org') && url.pathname.includes('rest_v1')) {
        event.respondWith(
            fetch(req).catch(() => new Response('{}', {
                headers: { 'Content-Type': 'application/json' }
            }))
        );
        return;
    }

    // 3. Immagini esterne (Wikimedia, Wikipedia CDN, ecc.) → network-first
    //    Prova la rete; se offline restituisce la versione in cache se esiste.
    if (url.hostname.includes('wikimedia.org') ||
        url.hostname.includes('upload.wikimedia') ||
        url.hostname.includes('encrypted-tbn') ||
        url.hostname.includes('tripadvisor') ||
        url.hostname.includes('dynamic-media-cdn') ||
        req.destination === 'image') {
        event.respondWith(networkFirstWithCache(req));
        return;
    }

    // 4. App shell e CDN Leaflet → cache-first
    event.respondWith(cacheFirst(req));
});

// ── Helper: cache-first ───────────────────────────────────────────────────────
async function cacheFirst(req) {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
        const res = await fetch(req);
        if (res.ok) {
            const cache = await caches.open(CACHE);
            cache.put(req, res.clone());
        }
        return res;
    } catch {
        return new Response('Offline', { status: 503, statusText: 'Offline' });
    }
}

// ── Helper: network-first con salvataggio in cache ───────────────────────────
async function networkFirstWithCache(req) {
    try {
        const res = await fetch(req);
        if (res.ok) {
            const cache = await caches.open(CACHE);
            cache.put(req, res.clone());
        }
        return res;
    } catch {
        const cached = await caches.match(req);
        return cached || new Response('', { status: 503 });
    }
}

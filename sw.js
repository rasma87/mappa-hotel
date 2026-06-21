// ── Soul Art Hotel – Service Worker ──────────────────────────────────────────
// Incrementa CACHE_VERSION per forzare l'aggiornamento su tutti i client
const CACHE_VERSION = 18;
const CACHE = 'soulart-v' + CACHE_VERSION;

// App shell: caricata al primo avvio e sempre servita dalla cache
const APP_SHELL = [
    './',
    './index.html',
    './css/style.css',
    './js/data-translations.js',
    './js/data-poi.js',
    './js/data-transit.js',
    './js/app.js',
    './img/logo-hotel.png',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
];

// PNG trasparente 1×1 px — usato come tile vuota quando offline
const BLANK_TILE = Uint8Array.from(atob(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
), c => c.charCodeAt(0));

// ── INSTALL ───────────────────────────────────────────────────────────────────
// Usa Promise.allSettled così un singolo URL fallito non blocca tutto
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE).then(cache =>
            Promise.allSettled(
                APP_SHELL.map(url =>
                    cache.add(url).catch(err =>
                        console.warn('[SW] Pre-cache fallito:', url, err)
                    )
                )
            )
        ).then(() => self.skipWaiting())
    );
});

// ── ACTIVATE ──────────────────────────────────────────────────────────────────
// Elimina cache di versioni precedenti e prende controllo subito
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

// ── FETCH ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if (req.method !== 'GET') return;
    if (!url.protocol.startsWith('http')) return;

    // 1. TILE DELLA MAPPA (CartoDB) → cache-first con gestione opaque
    //    CartoDB non invia header CORS → le risposte sono "opaque" (status 0).
    //    Vanno comunque salvate in cache controllando status === 0.
    if (url.hostname.includes('cartocdn.com')) {
        event.respondWith(cacheTile(req));
        return;
    }

    // 2. WIKIPEDIA REST API (JSON) → network-only con fallback {} offline
    if (url.hostname.includes('wikipedia.org') && url.pathname.includes('rest_v1')) {
        event.respondWith(
            fetch(req).catch(() =>
                new Response('{}', { headers: { 'Content-Type': 'application/json' } })
            )
        );
        return;
    }

    // 3. IMMAGINI ESTERNE (Wikipedia, Wikimedia, TripAdvisor…) → network-first
    //    Scarica sempre la versione aggiornata; salva in cache; usa la cache se offline.
    if (url.hostname.includes('wikimedia.org') ||
        url.hostname.includes('upload.wikimedia') ||
        url.hostname.includes('encrypted-tbn') ||
        url.hostname.includes('dynamic-media-cdn') ||
        url.hostname.includes('tripadvisor') ||
        req.destination === 'image') {
        event.respondWith(networkFirstWithCache(req));
        return;
    }

    // 4. APP SHELL e CDN Leaflet → cache-first (sempre aggiornata all'install)
    event.respondWith(cacheFirst(req));
});

// ── STRATEGIE ─────────────────────────────────────────────────────────────────

/**
 * cache-first: restituisce subito dalla cache;
 * se non c'è, scarica, salva e restituisce.
 */
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
        // Fallback all'index.html per le navigazioni
        const fallback = await caches.match('./index.html');
        return fallback || new Response('Offline', { status: 503 });
    }
}

/**
 * cacheTile: come cache-first ma accetta anche risposte opaque (status 0).
 * Le risposte cross-origin senza CORS hanno status 0 ma sono comunque valide.
 * Quando offline restituisce una tile trasparente invece di un'immagine rotta.
 */
async function cacheTile(req) {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
        const res = await fetch(req);
        // res.ok  → risposta normale con CORS  (status 200-299)
        // status 0 → risposta opaque senza CORS (tipica dei tile server)
        if (res.ok || res.status === 0) {
            const cache = await caches.open(CACHE);
            cache.put(req, res.clone());
        }
        return res;
    } catch {
        // Offline: tile trasparente → la mappa rimane pulita senza immagini rotte
        return new Response(BLANK_TILE, {
            status: 200,
            headers: { 'Content-Type': 'image/png' }
        });
    }
}

/**
 * network-first: prova la rete; se fallisce usa la cache.
 * Accetta anche opaque per immagini cross-origin.
 */
async function networkFirstWithCache(req) {
    try {
        const res = await fetch(req);
        if (res.ok || res.status === 0) {
            const cache = await caches.open(CACHE);
            cache.put(req, res.clone());
        }
        return res;
    } catch {
        const cached = await caches.match(req);
        return cached || new Response('', { status: 503 });
    }
}

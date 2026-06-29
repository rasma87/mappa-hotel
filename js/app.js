// ── Soul Art Hotel – APP LOGIC ──────────────────────────────────────────────
// UI · Map · Image loading · Detail · Lang · Tabs · Markers · Init



// ── MOBILE TAB NAVIGATION ─────────────────────────────────────────────────────
let currentMobileTab = 'map';
let mobileCatFilter = 'all';
let transitAddTimer = null;

function mobileTab(tab) {
    if (window.innerWidth > 680) return;
    currentMobileTab = tab;
    const panel = document.getElementById('mobile-panel');

    ['map','places','transit','hotel'].forEach(t => {
        const el = document.getElementById('mob-tab-' + t);
        if (el) el.classList.toggle('active', t === tab);
    });

    if (tab === 'map') {
        panel.classList.remove('open');
        panel.classList.remove('transit-mode');
        if (transitAddTimer) { clearTimeout(transitAddTimer); transitAddTimer = null; }
        transitMarkers.forEach(m => { try { m.closePopup(); if (map.hasLayer(m)) map.removeLayer(m); } catch(e){} });
        map.closePopup();
        return;
    }

    const inner = document.getElementById('mobile-panel-inner');

    if (tab === 'transit') {
        panel.classList.add('transit-mode');
        panel.classList.add('open');
        transitAddTimer = setTimeout(function() {
            transitAddTimer = null;
            transitMarkers.forEach(function(m) {
                try { if (!map.hasLayer(m)) m.addTo(map); } catch(e) {}
            });
            map.invalidateSize();
        }, 50);
        renderTransit(currentLang);
        inner.innerHTML = document.getElementById('panel-tab-transit').innerHTML;
    } else {
        if (transitAddTimer) { clearTimeout(transitAddTimer); transitAddTimer = null; }
        transitMarkers.forEach(m => { try { m.closePopup(); if (map.hasLayer(m)) map.removeLayer(m); } catch(e){} });
        map.closePopup();
        panel.classList.remove('transit-mode');
        panel.classList.add('open');
        inner.innerHTML = '';
        if (tab === 'places') {
            renderMobilePlaces();
        } else if (tab === 'hotel') {
            renderHotelInfo(currentLang);
            inner.innerHTML = document.getElementById('panel-tab-hotel').innerHTML;
        }
    }
}

function renderMobilePlaces() {
    const t = T[currentLang];
    const inner = document.getElementById('mobile-panel-inner');
    const cats    = ['all','monument','museum','transport','nature','daytrip'];
    const labels  = [t.all, t.monument, t.museum, t.transport, t.nature, t.daytrip];

    const filterBar = '<div style="display:flex;gap:6px;flex-wrap:wrap;padding:10px 0 12px;position:sticky;top:0;background:var(--cream);z-index:1;border-bottom:1px solid #E0D8CC;margin-bottom:4px">' +
        cats.map((cat, i) => {
            const active = mobileCatFilter === cat;
            return '<button onclick="setMobileFilter(\'' + cat + '\')" style="touch-action:manipulation;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:0.62rem;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;border:1px solid ' + (active ? 'var(--gold)' : '#C8BFA8') + ';background:' + (active ? 'var(--gold)' : 'transparent') + ';color:' + (active ? 'white' : 'var(--text-muted)') + ';padding:5px 10px;border-radius:20px;cursor:pointer">' + labels[i] + '</button>';
        }).join('') + '</div>';

    const pois = mobileCatFilter === 'all' ? POI_DATA : POI_DATA.filter(p => p.cat === mobileCatFilter);
    const list = pois.map(poi => {
        const cat = CATEGORIE[poi.cat];
        return '<div onclick="mobilePoi(\'' + poi.id + '\')" style="padding:13px 4px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(0,0,0,0.06);cursor:pointer">' +
            '<div style="width:10px;height:10px;border-radius:50%;background:' + cat.color + ';flex-shrink:0"></div>' +
            '<div><div style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1rem;font-weight:600;color:var(--dark)">' + (poi.nome[currentLang] || poi.nome.en) + '</div>' +
            '<div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase">' + t.catLabel[poi.cat] + '</div></div></div>';
    }).join('');

    inner.innerHTML = filterBar + '<div>' + list + '</div>';
}

function setMobileFilter(cat) {
    mobileCatFilter = cat;
    renderMobilePlaces();
}

function mobilePoi(id) {
    const poi = POI_DATA.find(p => p.id === id);
    if (!poi) return;
    mobileTab('map');
    setTimeout(() => {
        map.setView(poi.coor, 16, {animate:true});
        openDetail(poi);
    }, 350);
}


const HOTEL = { coor:[40.844445798762386, 14.2496106966444] };
const imgCache = {};
let currentLang = "it";
let currentOpenPoi = null;

// ── MAP ───────────────────────────────────────────────────────────────────────
const map = L.map("map", { zoomControl:false }).setView(HOTEL.coor, 14);
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution:"\u00A9 OpenStreetMap, \u00A9 CARTO", subdomains:"abcd", maxZoom:19
}).addTo(map);
L.control.zoom({ position:"bottomright" }).addTo(map);

const hotelIcon = L.divIcon({
    html:'<div class="hotel-marker-wrap"><img src="img/logo-hotel.png" alt="SA"></div>',
    className:"", iconSize:[44,44], iconAnchor:[22,22], popupAnchor:[0,-26]
});
const hotelMarker = L.marker(HOTEL.coor, { icon:hotelIcon }).addTo(map);

// ── BUILD LIST & MARKERS ──────────────────────────────────────────────────────
const listEl = document.getElementById("poi-list");
const poiMarkers = {};

POI_DATA.forEach(poi => {
    const cat = CATEGORIE[poi.cat];
    const icon = L.divIcon({
        html:'<div class="custom-marker" style="background:' + cat.color + '">' + cat.emoji + '</div>',
        className:"", iconSize:[32,32], iconAnchor:[16,16], popupAnchor:[0,-18]
    });
    const marker = L.marker(poi.coor, { icon }).addTo(map);
    marker.on("click", () => { map.setView(poi.coor, 16, {animate:true}); openDetail(poi); });
    poiMarkers[poi.id] = marker;

    const item = document.createElement("div");
    item.className = "poi-item";
    item.dataset.cat = poi.cat;
    item.dataset.id = poi.id;
    item.innerHTML = '<div class="poi-dot" style="background:' + cat.color + '"></div><div class="poi-info"><h3 class="poi-name">' + poi.nome.en + '</h3><span>' + cat.emoji + ' <span class="poi-cat-label">Monument</span></span></div>';
    item.addEventListener("click", () => {
        map.setView(poi.coor, 16, {animate:true});
        openDetail(poi);
        document.querySelectorAll(".poi-item").forEach(el => el.classList.remove("active"));
        item.classList.add("active");
    });
    listEl.appendChild(item);
});

// ── IMAGE LOADING ─────────────────────────────────────────────────────────────
function loadImage(poi) {
    const imgEl = document.getElementById("detail-img");
    const wrap  = document.getElementById("detail-img-wrap");
    imgEl.classList.remove("loaded");
    imgEl.src = "";
    const oldPh = wrap.querySelector("#detail-img-placeholder");
    if (oldPh) oldPh.remove();

    // imgForce: URL esplicita che bypassa Wikipedia (solo per immagini custom)
    if (poi.imgForce) { applyImg(imgEl, poi.imgForce, wrap, poi); return; }

    const poiName = poi.nome[currentLang] || poi.nome.en;
    const page = WIKI_PAGES[poiName] || WIKI_PAGES[poi.nome.en];

    if (imgCache[poi.id]) { applyImg(imgEl, imgCache[poi.id], wrap, poi); return; }
    if (!page) { poi.img ? applyImg(imgEl, poi.img, wrap, poi) : showFallback(wrap, poi); return; }

    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(page))
        .then(r => r.json())
        .then(d => {
            const src = (d && d.originalimage && d.originalimage.source) || (d && d.thumbnail && d.thumbnail.source);
            if (src) { imgCache[poi.id] = src; applyImg(imgEl, src, wrap, poi); }
            else if (poi.img) { applyImg(imgEl, poi.img, wrap, poi); }
            else showFallback(wrap, poi);
        })
        .catch(() => poi.img ? applyImg(imgEl, poi.img, wrap, poi) : showFallback(wrap, poi));
}

function applyImg(imgEl, src, wrap, poi) {
    imgEl.onload  = () => imgEl.classList.add("loaded");
    imgEl.onerror = () => showFallback(wrap, poi);
    imgEl.src = src;
}
function showFallback(wrap, poi) {
    const ph = document.createElement("div");
    ph.id = "detail-img-placeholder";
    ph.textContent = poi ? CATEGORIE[poi.cat].emoji : "\u{1F4CD}";
    wrap.appendChild(ph);
}

// ── OPEN DETAIL ───────────────────────────────────────────────────────────────
function openDetail(poi) {
    currentOpenPoi = poi;
    const t  = T[currentLang];
    const cat = CATEGORIE[poi.cat];

    document.getElementById("detail-category").textContent = cat.emoji + "  " + t.catLabel[poi.cat];
    document.getElementById("detail-name").textContent = poi.nome[currentLang] || poi.nome.en;
    document.getElementById("detail-desc").textContent = poi.desc[currentLang] || poi.desc.en;
    loadImage(poi);

    const dist = typeof poi.distanza === "object" ? (poi.distanza[currentLang] || poi.distanza.en) : poi.distanza;
    document.getElementById("detail-meta").innerHTML =
        '<div class="meta-item"><span class="meta-icon">\u{1F4CD}</span><div><span class="meta-label">' + t.fromHotel + '</span><span class="meta-value">' + dist + '</span></div></div>';

    const tc = document.getElementById("detail-ticket");
    if (!poi.sempreAperto && poi.ticketInfo) {
        const ti = poi.ticketInfo;
        const orHtml = ti.orari.map(o => {
            const g = typeof o.giorni === "object" ? (o.giorni[currentLang] || o.giorni.en) : o.giorni;
            const r = typeof o.ore === "object" ? (o.ore[currentLang] || o.ore.en) : o.ore;
            return '<div class="ticket-row"><span class="ticket-row-label">' + g + '</span><span class="ticket-row-value">' + r + '</span></div>';
        }).join("");
        const biHtml = ti.biglietti.map(b => {
            const tipo = typeof b.tipo === "object" ? (b.tipo[currentLang] || b.tipo.en) : b.tipo;
            const isFree = b.prezzo === "Free";
            const prLabel = isFree ? t.free : b.prezzo;
            return '<div class="ticket-row"><span class="ticket-row-label">' + tipo + '</span><span class="ticket-row-value' + (isFree ? " free" : "") + '">' + prLabel + '</span></div>';
        }).join("");
        const noteText = ti.note ? (typeof ti.note === "object" ? (ti.note[currentLang] || ti.note.en) : ti.note) : "";
        tc.innerHTML = '<div class="ticket-box"><div class="ticket-box-title">' + t.ticketTitle + '</div><div class="ticket-section"><div><div class="ticket-col-label">' + t.hours + '</div>' + orHtml + '</div><div><div class="ticket-col-label">' + t.tickets + '</div>' + biHtml + '</div></div>' + (noteText ? '<div class="ticket-note">\u2139\uFE0F ' + noteText + '</div>' : '') + '</div>';
        tc.style.display = "block";
    } else {
        tc.innerHTML = "";
        tc.style.display = "none";
    }

    // Travel tip box (daytrip POIs only)
    const tipEl = document.getElementById("detail-travel-tip");
    if (tipEl) {
        if (poi.travelTip) {
            tipEl.textContent = poi.travelTip[currentLang] || poi.travelTip.en;
            tipEl.style.display = "block";
        } else {
            tipEl.style.display = "none";
        }
    }

    const dirLbl = poi.dirLabel ? (poi.dirLabel[currentLang] || poi.dirLabel.en) : t.directions;
    document.getElementById("dir-label").textContent = dirLbl;
    const dest = poi.dirTo || poi.coor;
    document.getElementById("detail-directions").href =
        "https://www.google.com/maps/dir/?api=1&origin=" + HOTEL.coor[0] + "," + HOTEL.coor[1] + "&destination=" + dest[0] + "," + dest[1] + "&travelmode=walking";
    document.getElementById("detail-card").classList.add("open");
}

// ── LANGUAGE SWITCH ───────────────────────────────────────────────────────────
function setLang(lang) {
    currentLang = lang;
    const t = T[lang];

    // Update all lang buttons (panel + mobile)
    document.querySelectorAll(".lang-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.lang === lang);
    });

    // Header subtitle
    document.getElementById("hdr-subtitle").textContent = t.subtitle;
    const mobSub = document.getElementById("mob-subtitle");
    if (mobSub) mobSub.textContent = "Guest Guide";

    // Filter labels
    document.getElementById("f-all").textContent = t.all;
    document.getElementById("f-monument").textContent = t.monument;
    document.getElementById("f-museum").textContent = t.museum;
    document.getElementById("f-transport").textContent = t.transport;
    document.getElementById("f-nature").textContent = t.nature;
    document.getElementById("f-daytrip").textContent = t.daytrip;

    // Hotel popup
    hotelMarker.setPopupContent('<b style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif">Soul Art Hotel</b><br><small style="color:#888">' + t.youAreHere + '</small>');

    // List items
    document.querySelectorAll(".poi-item").forEach(item => {
        const poi = POI_DATA.find(p => p.id === item.dataset.id);
        if (!poi) return;
        item.querySelector(".poi-name").textContent = poi.nome[lang] || poi.nome.en;
        item.querySelector(".poi-cat-label").textContent = t.catLabel[poi.cat];
    });

    // Re-render open card if any
    if (currentOpenPoi) openDetail(currentOpenPoi);

    // Update tab labels
    const tl = TAB_LABELS[lang];
    if (tl) {
        document.getElementById("tab-places-label").textContent = tl.places;
        document.getElementById("tab-transit-label").textContent = tl.transit;
    }

    // Re-render transit if visible
    const transitEl = document.getElementById("panel-tab-transit");
    if (transitEl && transitEl.style.display !== "none") renderTransit(lang);
    const hotelEl = document.getElementById("panel-tab-hotel");
    if (hotelEl && hotelEl.style.display !== "none") renderHotelInfo(lang);

    // Update mobile tab labels
    const ml = MOBILE_TAB_LABELS[lang] || MOBILE_TAB_LABELS.en;
    ['map','places','transit','hotel'].forEach(t => {
        const el = document.getElementById('mobt-' + t);
        if (el) el.textContent = ml[t];
    });
    // Re-render mobile panel if open
    if (currentMobileTab !== 'map') mobileTab(currentMobileTab);

    // Aggiorna testo banner offline nella nuova lingua
    if (typeof window._updateOfflineBanner === 'function') window._updateOfflineBanner();
}



function renderTransit(lang) {
    const tu = TRANSIT_UI[lang] || TRANSIT_UI.en;
    let html = '';

    // Helper to render a group of lines
    function renderGroup(sectionTitle, lines) {
        html += '<div class="transit-section"><div class="transit-section-title">' + sectionTitle + '</div>';
        lines.forEach(l => {
            html += '<div class="transit-line">';
            html += '<div class="transit-line-header">';
            html += '<span class="transit-badge" style="background:' + l.color + ';border-radius:6px;font-size:0.58rem">' + l.icon + '</span>';
            html += '<div><div class="transit-line-name">' + (l.name[lang]||l.name.en) + '</div>';
            html += '<div class="transit-line-sub">' + (l.sub[lang]||l.sub.en) + '</div></div></div>';
            html += '<div class="transit-hours">';
            html += '<div class="transit-hour-item"><span class="transit-hour-label">' + tu.first + '</span><span class="transit-hour-value">' + l.first + '</span></div>';
            html += '<div class="transit-hour-item"><span class="transit-hour-label">' + tu.last + '</span><span class="transit-hour-value">' + l.last + '</span></div>';
            html += '</div>';
            html += '<div class="transit-freq">' + (l.freq[lang]||l.freq.en) + '</div>';
            if (l.closureNote) html += '<div style="font-size:0.7rem;font-weight:600;color:#b71c1c;background:#fdecea;border-left:3px solid #b71c1c;border-radius:4px;padding:5px 8px;margin-top:7px">\u26A0\uFE0F ' + (l.closureNote[lang]||l.closureNote.en) + '</div>';
            if (l.note) html += '<div style="font-size:0.65rem;color:#888;margin-top:5px;font-style:italic">\u2139\uFE0F ' + (l.note[lang]||l.note.en) + '</div>';
            // Fermate: clic centra la mappa sulla stazione
            const lineStops = TRANSIT_STATIONS.filter(s => s.type === l.icon);
            if (lineStops.length) {
                html += '<div style="margin-top:9px;border-top:1px solid rgba(0,0,0,0.07);padding-top:7px">';
                lineStops.forEach(stop => {
                    const idx = TRANSIT_STATIONS.indexOf(stop);
                    html += '<div onclick="goToStation(' + idx + ')" style="padding:3px 0;cursor:pointer">';
                    html += '<span style="font-size:0.78rem;color:#4285F4">' + stop.label + '</span>';
                    html += '</div>';
                });
                html += '</div>';
            }
            html += '</div>';
        });
        html += '</div>';
    }

    renderGroup('<span class="transit-badge" style="background:#E53935;margin-right:4px">M</span>' + tu.metro, TRANSIT.metro.lines);
    html += '<div class="transit-divider"></div>';
    renderGroup('<span class="transit-badge" style="background:#1565C0;margin-right:4px">F</span>' + tu.funicolare, TRANSIT.funicolare.lines);
    html += '<div class="transit-tip"><strong>' + tu.tipTitle + '</strong>' + tu.tip + '</div>';

    document.getElementById("panel-tab-transit").innerHTML = html;
}

function goToStation(idx) {
    const st = TRANSIT_STATIONS[idx];
    const marker = transitMarkers[idx];
    if (!st) return;
    const focus = () => {
        map.panTo(st.coor, { animate: true });
        if (marker) { if (!map.hasLayer(marker)) marker.addTo(map); marker.openPopup(); }
    };
    if (window.innerWidth <= 680) {
        mobileTab('map');
        setTimeout(focus, 350);
    } else {
        focus();
    }
}

// ── TAB SWITCHING ─────────────────────────────────────────────────────────────
function switchTab(tab) {
    const isPlaces  = (tab === 'places');
    const isTransit = (tab === 'transit');
    const isHotel   = (tab === 'hotel');
    document.getElementById('tab-places').classList.toggle('active', isPlaces);
    document.getElementById('tab-transit').classList.toggle('active', isTransit);
    document.getElementById('tab-hotel').classList.toggle('active', isHotel);
    document.getElementById('panel-tab-places').style.display  = isPlaces  ? 'flex'  : 'none';
    document.getElementById('panel-tab-transit').style.display = isTransit ? 'block' : 'none';
    document.getElementById('panel-tab-hotel').style.display   = isHotel   ? 'block' : 'none';
    if (isTransit) renderTransit(currentLang);
    if (isHotel)   renderHotelInfo(currentLang);
    if (typeof transitMarkers !== 'undefined') {
        transitMarkers.forEach(m => {
            if (isTransit) { if (!map.hasLayer(m)) m.addTo(map); }
            else { if (map.hasLayer(m)) map.removeLayer(m); }
        });
    }
}

const TAB_LABELS = {
    en: { places:"\uD83D\uDDFA Places",   transit:"\uD83D\uDE87 Transport", hotel:"\uD83C\uDFE8 Hotel" },
    it: { places:"\uD83D\uDDFA Luoghi",   transit:"\uD83D\uDE87 Trasporti", hotel:"\uD83C\uDFE8 Hotel" },
    fr: { places:"\uD83D\uDDFA Lieux",    transit:"\uD83D\uDE87 Transports", hotel:"\uD83C\uDFE8 H\u00F4tel" },
    es: { places:"\uD83D\uDDFA Lugares",  transit:"\uD83D\uDE87 Transportes", hotel:"\uD83C\uDFE8 Hotel" }
};

// Bind lang buttons
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

// Close card
document.getElementById("detail-close").addEventListener("click", () => {
    document.getElementById("detail-card").classList.remove("open");
    document.querySelectorAll(".poi-item").forEach(el => el.classList.remove("active"));
    currentOpenPoi = null;
});

// Filters
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.cat;
        document.querySelectorAll(".poi-item").forEach(item => {
            item.style.display = (cat === "all" || item.dataset.cat === cat) ? "flex" : "none";
        });
    });
});



const transitMarkers = [];

TRANSIT_STATIONS.forEach(st => {
    const s = STATION_STYLE[st.type];
    const isMetro = st.type.startsWith("M");
    const icon = L.divIcon({
        html: '<div style="width:' + (isMetro ? 22 : 20) + 'px;height:' + (isMetro ? 22 : 20) + 'px;border-radius:50%;background:' + s.bg + ';border:2px solid white;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:white;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;box-shadow:0 2px 6px rgba(0,0,0,0.35)">' + s.label + '</div>',
        className: "", iconSize: [isMetro ? 22 : 20, isMetro ? 22 : 20], iconAnchor: [isMetro ? 11 : 10, isMetro ? 11 : 10]
    });
    const marker = L.marker(st.coor, { icon, interactive:true });
    marker.bindPopup(
        '<div style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif;display:flex;align-items:center;gap:6px;padding:2px 0">' +
        '<span style="background:' + s.bg + ';color:white;border-radius:4px;padding:2px 6px;font-size:0.6rem;font-weight:700;flex-shrink:0">' + st.type + '</span>' +
        '<b style="font-size:0.85rem">' + st.label + '</b>' +
        '</div>'
    );
    transitMarkers.push(marker);
});

// Show/hide transit markers when switching tabs

// ── OFFLINE INDICATOR ─────────────────────────────────────────────────────────
const OFFLINE_MSG = {
    it: "📡 Modalità offline — la mappa e i contenuti in cache sono disponibili",
    en: "📡 Offline mode — map and cached content are available",
    fr: "📡 Mode hors ligne — la carte et le contenu en cache sont disponibles",
    es: "📡 Modo sin conexión — el mapa y el contenido en caché están disponibles"
};

(function () {
    const banner = document.createElement('div');
    banner.id = 'offline-banner';
    document.body.appendChild(banner);

    function updateStatus() {
        document.body.classList.toggle('is-offline', !navigator.onLine);
        banner.textContent = OFFLINE_MSG[currentLang] || OFFLINE_MSG.en;
    }
    window.addEventListener('online',  updateStatus);
    window.addEventListener('offline', updateStatus);
    // Esponi per aggiornare il testo al cambio lingua
    window._updateOfflineBanner = () => {
        banner.textContent = OFFLINE_MSG[currentLang] || OFFLINE_MSG.en;
    };
    updateStatus();
})();

// ── INIT ──────────────────────────────────────────────────────────────────────
hotelMarker.bindPopup('<b style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif">Soul Art Hotel</b><br><small style="color:#888">' + T.it.youAreHere + '</small>');
switchTab('places');
setLang("it");
mobileTab('hotel');


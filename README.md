# Soul Art Hotel – Guest Guide Naples

Mappa interattiva per gli ospiti del **Soul Art Hotel** di Napoli.  
Realizzata con HTML, CSS e JavaScript vanilla + [Leaflet.js](https://leafletjs.com/).

## Struttura del progetto

```
├── index.html       → struttura HTML della pagina
├── css/
│   └── style.css    → tutti gli stili (desktop + responsive mobile)
└── js/
    └── app.js       → logica, dati POI, traduzioni, mappa
```

## Funzionalità

- 🗺 **Mappa interattiva** con marker per ogni punto di interesse
- 🏨 **Scheda Hotel** con codice portone, contatti, Wi-Fi, check-in/out
- 🚇 **Trasporti** — metro, funicolari, orari e biglietti
- 🌍 **4 lingue** — Italiano, English, Français, Español
- 📱 **Responsive** — ottimizzato per mobile e desktop
- 🔍 **Filtri per categoria** — Monumenti, Musei, Trasporti, Panoramici

## Come aprire

Apri `index.html` direttamente nel browser oppure servilo con un server locale:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

## Tecnologie

- HTML5 / CSS3 / JavaScript ES6
- [Leaflet 1.9.4](https://leafletjs.com/)
- [CartoDB Basemaps](https://carto.com/basemaps/)
- [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/) per le immagini

---

© Soul Art Hotel Napoli

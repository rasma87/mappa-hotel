# Soul Art Hotel – Guest Guide

PWA interattiva per ospiti dell'hotel: mappa Leaflet di Napoli con POI, trasporti e info hotel.
**GitHub Pages:** https://rasma87.github.io/mappa-hotel/

---

## Struttura file

```
js/
├── data-translations.js   — MOBILE_TAB_LABELS · HOTEL_STRINGS · T (stringhe multilingua)
├── data-poi.js            — POI_DATA · WIKI_PAGES · CATEGORIE
├── data-transit.js        — TRANSIT · TRANSIT_UI · TRANSIT_STATIONS · STATION_STYLE
└── app.js                 — tutta la logica (mappa, UI, rendering, init)
css/
└── style.css
img/
└── logo-hotel.png
index.html                 — carica i 4 JS in ordine
sw.js                      — Service Worker PWA (CACHE_VERSION attuale: 8)
soul-art-hotel-guide.html  — file standalone con tutto inlined (per distribuzione diretta)
```

---

## Deploy

```bash
# 1. Modifica i file
# 2. Rebuild standalone HTML
python -c "
import base64, re
with open('js/data-translations.js','r',encoding='utf-8') as f: js_t=f.read()
with open('js/data-poi.js','r',encoding='utf-8') as f: js_p=f.read()
with open('js/data-transit.js','r',encoding='utf-8') as f: js_tr=f.read()
with open('js/app.js','r',encoding='utf-8') as f: js_a=f.read()
with open('css/style.css','r',encoding='utf-8') as f: css=f.read()
with open('img/logo-hotel.png','rb') as f: logo=base64.b64encode(f.read()).decode()
with open('index.html','r',encoding='utf-8') as f: html=f.read()
html=re.sub(r'<link rel=\"stylesheet\" href=\"css/style\.css\" />','<style>'+css+'</style>',html)
html=html.replace('src=\"img/logo-hotel.png\"','src=\"data:image/png;base64,'+logo+'\"')
combined=js_t+'\n\n'+js_p+'\n\n'+js_tr+'\n\n'+js_a
for tag in ['<script src=\"js/data-translations.js\"></script>','<script src=\"js/data-poi.js\"></script>','<script src=\"js/data-transit.js\"></script>']:
    html=html.replace(tag,'')
html=html.replace('<script src=\"js/app.js\"></script>','<script>'+combined+'</script>')
html=re.sub(r'<script>\s*// Registra il Service Worker.*?</script>','',html,flags=re.DOTALL)
with open('soul-art-hotel-guide.html','w',encoding='utf-8') as f: f.write(html)
print('Done.',len(html),'bytes')
"
# 3. Commit e push
git add -A && git commit -m "descrizione" && git push origin master
```

**GitHub Pages** aggiorna in ~1 min dopo il push.

---

## Service Worker – regola importante

**Ogni volta che si modificano file JS o CSS, bumbare `CACHE_VERSION` in `sw.js`** altrimenti il browser serve la versione in cache.

```js
// sw.js – riga 3
const CACHE_VERSION = 8;  // incrementare ad ogni deploy con modifiche
```

Dopo il bump l'utente deve: aprire l'app → aspettare 10 sec → chiudere e riaprire la scheda.

---

## Immagini nei POI (`data-poi.js`)

Ogni POI può avere:

| Campo | Comportamento |
|-------|---------------|
| `imgForce: "url"` | Usa questa URL direttamente, bypassa Wikipedia |
| `img: "url"` | Fallback se Wikipedia non ha immagine |
| (nessuno) | Solo Wikipedia API |

**Priorità in `loadImage()`:**
1. `imgForce` → usa direttamente
2. `imgCache[poi.id]` → se già scaricata in sessione
3. `WIKI_PAGES[nome]` → chiama Wikipedia API (network-only, non cachata dal SW)
4. `poi.img` → fallback diretto
5. nessuna → sfondo beige (placeholder emoji nascosta via CSS)

**`WIKI_PAGES`** mappa `nome[currentLang]` → nome articolo Wikipedia en.
Le chiavi devono corrispondere ESATTAMENTE ai valori di `poi.nome[lang]`.

---

## Aggiungere un POI

In `js/data-poi.js`, aggiungere un oggetto a `POI_DATA`:

```js
{
    id: "mypoi",
    cat: "monument",          // monument | museum | transport | nature | daytrip
    coor: [40.xxx, 14.xxx],
    img: "https://...",       // fallback immagine
    dirTo: [40.xxx, 14.xxx],  // opzionale: destinazione indicazioni (default: coor del POI)
    nome: { en:"Name", it:"Nome", fr:"Nom", es:"Nombre" },
    desc: { en:"...", it:"...", fr:"...", es:"..." },
    distanza: { en:"10 min walk", it:"10 min a piedi", fr:"10 min à pied", es:"10 min a pie" },
    sempreAperto: true,       // omettere se ha orari/biglietti
    ticketInfo: { ... }       // opzionale
}
```

Aggiungere la chiave nome.en (e varianti linguistiche) a `WIKI_PAGES` se esiste articolo Wikipedia.

---

## Indicazioni Google Maps

- **POI normali**: dal hotel al POI (`poi.coor`)
- **Gite (daytrip)**: dal hotel a `poi.dirTo`
  - Pompei, Ercolano → Napoli Centrale `[40.85314, 14.26879]`
  - Capri, Ischia, Procida → Molo Beverello `[40.83820, 14.25479]`

---

## Lingue supportate

`it` · `en` · `fr` · `es`
Lingua default: `it`
Traduzione UI in `js/data-translations.js` → oggetto `T`

---

## Dati hotel

Coordinate: `[40.844445798762386, 14.2496106966444]` (in `js/app.js` → `const HOTEL`)

---

## Trasporti (`data-transit.js`)

- `TRANSIT` → dati linee metro/funicolare (orari, frequenze, chiusure)
- `TRANSIT_UI` → etichette multilingua pannello trasporti
- `TRANSIT_STATIONS` → coordinate fermate per i marker sulla mappa
- `STATION_STYLE` → colori/label badge per tipo stazione (M1, M2, FC, CH, MO)

**Chiusura funicolare**: campo `closureNote` nell'oggetto linea → banner rosso nel pannello.

---

## Preview locale

Server Python già configurato in `.claude/launch.json` sulla porta **8181**:
```bash
python -m http.server 8181
# poi aprire http://localhost:8181
```

// ── Soul Art Hotel – TRANSIT DATA ──────────────────────────────────────────
// TRANSIT · TRANSIT_UI · TRANSIT_STATIONS · STATION_STYLE

// ── TRANSIT DATA ──────────────────────────────────────────────────────────────
const TRANSIT = {
    metro: {
        lines: [
            {
                name: { en:"Line 1 \u2013 Piscinola / Garibaldi", it:"Linea 1 \u2013 Piscinola / Garibaldi", fr:"Ligne 1 \u2013 Piscinola / Garibaldi", es:"L\u00EDnea 1 \u2013 Piscinola / Garibaldi" },
                sub:  { en:"Vomero \u00B7 Chiaia \u00B7 City Centre", it:"Vomero \u00B7 Chiaia \u00B7 Centro", fr:"Vomero \u00B7 Chiaia \u00B7 Centre-ville", es:"Vomero \u00B7 Chiaia \u00B7 Centro" },
                color:"#E53935", icon:"M1",
                first:"5:30", last:"23:00",
                freq: { en:"Every 6\u201310 min", it:"Ogni 6\u201310 min", fr:"Toutes les 6\u201310 min", es:"Cada 6\u201310 min" },
                note: { en:"Until 2:00 on Fri & Sat nights", it:"Fino alle 2:00 ven. e sab. notte", fr:"Jusqu\u2019\u00E0 2h le ven. et sam.", es:"Hasta las 2:00 vier. y s\u00E1b." }
            },
            {
                name: { en:"Line 2 \u2013 Pozzuoli / Gianturco", it:"Linea 2 \u2013 Pozzuoli / Gianturco", fr:"Ligne 2 \u2013 Pozzuoli / Gianturco", es:"L\u00EDnea 2 \u2013 Pozzuoli / Gianturco" },
                sub:  { en:"Mergellina \u00B7 P. Amedeo \u00B7 Garibaldi", it:"Mergellina \u00B7 P.za Amedeo \u00B7 Garibaldi", fr:"Mergellina \u00B7 P. Amedeo \u00B7 Garibaldi", es:"Mergellina \u00B7 P. Amedeo \u00B7 Garibaldi" },
                color:"#E53935", icon:"M2",
                first:"5:00", last:"23:00",
                freq: { en:"Every 8\u201312 min", it:"Ogni 8\u201312 min", fr:"Toutes les 8\u201312 min", es:"Cada 8\u201312 min" },
                note: null
            }
        ]
    },
    funicolare: {
        lines: [
            {
                name: { en:"Funicolare Centrale", it:"Funicolare Centrale", fr:"Funiculaire Central", es:"Funicular Central" },
                sub:  { en:"Augusteo \u2192 Vomero (P. Fuga)", it:"Augusteo \u2192 Vomero (P.za Fuga)", fr:"Augusteo \u2192 Vomero (P. Fuga)", es:"Augusteo \u2192 Vomero (P. Fuga)" },
                color:"#1565C0", icon:"FC",
                first:"6:00", last:"00:30",
                freq: { en:"Every 10 min", it:"Ogni 10 min", fr:"Toutes les 10 min", es:"Cada 10 min" },
                note: { en:"Until 1:30 on Fri & Sat", it:"Fino all\u20191:30 ven. e sab.", fr:"Jusqu\u2019\u00E0 1h30 ven. & sam.", es:"Hasta la 1:30 vier. y s\u00E1b." }
            },
            {
                name: { en:"Funicolare di Chiaia", it:"Funicolare di Chiaia", fr:"Funiculaire de Chiaia", es:"Funicular de Chiaia" },
                sub:  { en:"P. Margherita \u2192 Via Cimarosa", it:"P. Margherita \u2192 Via Cimarosa", fr:"P. Margherita \u2192 Via Cimarosa", es:"P. Margherita \u2192 Via Cimarosa" },
                color:"#1565C0", icon:"CH",
                first:"6:30", last:"00:30",
                freq: { en:"Every 10 min", it:"Ogni 10 min", fr:"Toutes les 10 min", es:"Cada 10 min" },
                note: { en:"Closest stop to Castel Sant\u2019Elmo", it:"Pi\u00F9 vicina a Castel Sant\u2019Elmo", fr:"La plus proche du Castel Sant\u2019Elmo", es:"M\u00E1s cercana al Castel Sant\u2019Elmo" }
            },
            {
                name: { en:"Funicolare di Montesanto", it:"Funicolare di Montesanto", fr:"Funiculaire de Montesanto", es:"Funicular de Montesanto" },
                sub:  { en:"Montesanto \u2192 Via Morghen", it:"Montesanto \u2192 Via Morghen", fr:"Montesanto \u2192 Via Morghen", es:"Montesanto \u2192 Via Morghen" },
                color:"#1565C0", icon:"MO",
                first:"7:00", last:"22:00",
                freq: { en:"Every 10 min", it:"Ogni 10 min", fr:"Toutes les 10 min", es:"Cada 10 min" },
                note: null,
                closureNote: { en:"Closed for maintenance works \u2014 reopening date TBC", it:"Chiusa per lavori di manutenzione \u2014 riapertura a data da destinarsi", fr:"Ferm\u00e9e pour travaux de maintenance \u2014 date de r\u00e9ouverture \u00e0 confirmer", es:"Cerrada por obras de mantenimiento \u2014 fecha de reapertura por confirmar" }
            },
            {
                name: { en:"Funicolare di Mergellina", it:"Funicolare di Mergellina", fr:"Funiculaire de Mergellina", es:"Funicular de Mergellina" },
                sub:  { en:"Via Mergellina \u2192 Via Manzoni", it:"Via Mergellina \u2192 Via Manzoni", fr:"Via Mergellina \u2192 Via Manzoni", es:"Via Mergellina \u2192 Via Manzoni" },
                color:"#1565C0", icon:"ME",
                first:"7:00", last:"22:00",
                freq: { en:"Every 12 min", it:"Ogni 12 min", fr:"Toutes les 12 min", es:"Cada 12 min" },
                note: null
            }
        ]
    }
};

const TRANSIT_UI = {
    en: { metro:"Metro", funicolare:"Funiculars", first:"First", last:"Last", freq:"Frequency", tipTitle:"\uD83C\uDFAB Tickets & Fares", tip:"Single ticket (ANM): \u20AC1.30 \u00B7 valid 90 min on all lines. Daily pass: \u20AC4.50. Weekly: \u20AC15.80. Available at stations, tobacconists and ANM app." },
    it: { metro:"Metro", funicolare:"Funicolari", first:"Prima", last:"Ultima", freq:"Frequenza", tipTitle:"\uD83C\uDFAB Biglietti & Tariffe", tip:"Biglietto singolo (ANM): \u20AC1,30 \u00B7 valido 90 min su tutte le linee. Giornaliero: \u20AC4,50. Settimanale: \u20AC15,80. Disponibile alle stazioni, tabaccherie e app ANM." },
    fr: { metro:"M\u00E9tro", funicolare:"Funiculaires", first:"Premier", last:"Dernier", freq:"Fr\u00E9quence", tipTitle:"\uD83C\uDFAB Billets & Tarifs", tip:"Billet simple (ANM)\u00A0: \u20AC1,30 \u00B7 valable 90 min sur toutes les lignes. Journalier\u00A0: \u20AC4,50. Hebdomadaire\u00A0: \u20AC15,80. Disponible aux stations, bureaux de tabac et app ANM." },
    es: { metro:"Metro", funicolare:"Funiculares", first:"Primero", last:"\u00DAltimo", freq:"Frecuencia", tipTitle:"\uD83C\uDFAB Billetes & Tarifas", tip:"Billete sencillo (ANM): \u20AC1,30 \u00B7 v\u00E1lido 90 min en todas las l\u00EDneas. Bono diario: \u20AC4,50. Semanal: \u20AC15,80. Disponible en estaciones, estancos y app ANM." }
};

// ── TRANSIT STATIONS ON MAP ───────────────────────────────────────────────────
const TRANSIT_STATIONS = [
    // Metro L1
    { type:"M1", label:"Piscinola",        coor:[40.89298982993001, 14.239798149111499] },
    { type:"M1", label:"Chiaiano",         coor:[40.890854875079235, 14.22330531907403] },
    { type:"M1", label:"Frullone",         coor:[40.88040896755757, 14.23117126439655] },
    { type:"M1", label:"Colli Aminei",     coor:[40.869830985022716, 14.22845927976055] },
    { type:"M1", label:"Rione Alto",       coor:[40.861262798187, 14.220807883710497] },
    { type:"M1", label:"Montedonzelli",    coor:[40.85618295632831, 14.223901353024868] },
    { type:"M1", label:"Medaglie d'Oro",   coor:[40.85080084250615, 14.230696008846309] },
    { type:"M1", label:"Vanvitelli",       coor:[40.844060629708814, 14.231822512545579] },
    { type:"M1", label:"Salvator Rosa",    coor:[40.85141566368461, 14.236417883710125] },
    { type:"M1", label:"Materdei",         coor:[40.855881427570004, 14.243276012545921] },
    { type:"M1", label:"Museo",            coor:[40.85397677281112, 14.251992497203231] },
    { type:"M1", label:"Dante",            coor:[40.848773952670285, 14.25000342021712] },
    { type:"M1", label:"Toledo",           coor:[40.84261536825952, 14.248956541381174] },
    { type:"M1", label:"Municipio",        coor:[40.84004125694725, 14.251943542198333] },
    { type:"M1", label:"Università",       coor:[40.84408180152788, 14.255692881860183] },
    { type:"M1", label:"Garibaldi",        coor:[40.852036632302095, 14.269559203465954] },
    // Metro L2
    { type:"M2", label:"Pozzuoli",         coor:[40.82774136464286, 14.126538520810362] },
    { type:"M2", label:"Bagnoli",          coor:[40.819529471087044, 14.16664353000944] },
    { type:"M2", label:"Cavalleggeri",	coor:[40.819357197198336, 14.187180807821434] },
    { type:"M2", label:"Campi Flegrei",    coor:[40.8226093700316, 14.194420945352237] },
    { type:"M2", label:"Leopardi",      coor:[40.8249970538682, 14.200423111476768] },
    { type:"M2", label:"Mergellina",       coor:[40.83157460636615, 14.21923582391593] },
    { type:"M2", label:"P.za Amedeo",      coor:[40.83752612604927, 14.233630359506304] },
    { type:"M2", label:"Montesanto",       coor:[40.84773663565816, 14.244148539531599] },
    { type:"M2", label:"Cavour",           coor:[40.85549573940782, 14.255049610672424] },
    { type:"M2", label:"Garibaldi",        coor:[40.852343857138685, 14.272035959472955] },
    { type:"M2", label:"Gianturco",        coor:[40.85390557298563, 14.287950572066961] },
    // Funicolare Centrale
    { type:"FC", label:"Augusteo",         coor:[40.83960906081489, 14.248131091335388] },
    { type:"FC", label:"Corso Vittorio Em.",coor:[40.83977507378117, 14.242635217868681] },
    { type:"FC", label:"Petraio",          coor:[40.84160986853483, 14.23871679278687] },
    { type:"FC", label:"P.za Fuga",        coor:[40.84293007373718, 14.233543760148116] },
    // Funicolare di Chiaia
    { type:"CH", label:"P.za Margherita",  coor:[40.8342, 14.2415] },
    { type:"CH", label:"C.so V. E.", coor:[40.839393750687826, 14.233980040003107] },
    { type:"CH", label:"Palazzolo",        coor:[40.841274837360814, 14.232673454874162] },
    { type:"CH", label:"Via Cimarosa",     coor:[40.84247615310109, 14.231941904874127] },
    // Funicolare di Montesanto
    { type:"MO", label:"Montesanto",       coor:[40.84719077397959, 14.24568318270698] },
    { type:"MO", label:"Corso V. E.",   coor:[40.846452196930755, 14.24226270605364] },
    { type:"MO", label:"Via Morghen",      coor:[40.84432690165668, 14.235852357382303] },
];

const STATION_STYLE = {
    M1: { bg:"#E53935", label:"M1" },
    M2: { bg:"#E53935", label:"M2" },
    FC: { bg:"#1565C0", label:"FC" },
    CH: { bg:"#1565C0", label:"CH" },
    MO: { bg:"#1565C0", label:"MO" },
};

// ── Soul Art Hotel – POI DATA ───────────────────────────────────────────────
// POI_DATA · WIKI_PAGES · CATEGORIE

// ── POI DATA (multilingual) ───────────────────────────────────────────────────
const POI_DATA = [
    {
        id: "plebiscito", cat: "monument", coor: [40.8359, 14.2488],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/P.Plebiscito_Napoli.jpg/1280px-P.Plebiscito_Napoli.jpg",
        nome: {
            en: "Piazza del Plebiscito & Royal Palace",
            it: "Piazza del Plebiscito e Palazzo Reale",
            fr: "Piazza del Plebiscito & Palais Royal",
            es: "Piazza del Plebiscito y Palacio Real"
        },
        desc: {
            en: "The symbolic heart of Naples: its largest square, framed by the Basilica of San Francesco di Paola, opens directly onto the Royal Palace (1600) \u2014 residence of the Spanish viceroys and later the Bourbons. The eighteen royal apartments house extraordinary tapestries, paintings and period furniture. The square is free and unmissable at sunset; the Palace requires a ticket.",
            it: "Il cuore simbolico di Napoli: la piazza pi\u00F9 grande della citt\u00E0, incorniciata dalla Basilica di San Francesco di Paola, si apre direttamente sul Palazzo Reale (1600) \u2014 residenza dei vicer\u00E9 spagnoli e poi dei Borbone. I diciotto appartamenti reali conservano straordinari arazzi, dipinti e arredi d\u2019epoca. La piazza \u00E8 libera e imperdibile al tramonto; il Palazzo \u00E8 a pagamento.",
            fr: "Le c\u0153ur symbolique de Naples\u00A0: sa plus grande place, encadr\u00E9e par la Basilique de San Francesco di Paola, s\u2019ouvre directement sur le Palais Royal (1600) \u2014 r\u00E9sidence des vice-rois espagnols puis des Bourbons. Les dix-huit appartements royaux conservent tapisseries, peintures et meubles d\u2019\u00E9poque. La place est gratuite et incontournable au coucher du soleil\u00A0; le Palais est payant.",
            es: "El coraz\u00F3n simb\u00F3lico de N\u00E1poles: su plaza m\u00E1s grande, enmarcada por la Bas\u00EDlica de San Francisco de Paula, se abre directamente al Palacio Real (1600) \u2014 residencia de los virreyes espa\u00F1oles y luego de los Borbones. Los dieciocho apartamentos reales conservan tapices, pinturas y muebles de \u00E9poca. La plaza es gratuita e imprescindible al atardecer; el Palacio es de pago."
        },
        distanza: { en:"~15 min walk", it:"~15 min a piedi", fr:"~15 min \u00E0 pied", es:"~15 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Piazza", it:"Piazza", fr:"Piazza", es:"Plaza" }, ore:{ en:"Always open", it:"Sempre aperta", fr:"Toujours ouverte", es:"Siempre abierta" } },
                { giorni:{ en:"Palace: Thu \u2013 Tue", it:"Palazzo: Gio \u2013 Mar", fr:"Palais\u00A0: Jeu \u2013 Mar", es:"Palacio: Jue \u2013 Mar" }, ore:"9:00 \u2013 20:00" },
                { giorni:{ en:"Palace: Wednesday", it:"Palazzo: Mercoled\u00EC", fr:"Palais\u00A0: Mercredi", es:"Palacio: Mi\u00E9rcoles" }, ore:{ en:"Closed", it:"Chiuso", fr:"Ferm\u00E9", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Piazza (square)", it:"Piazza", fr:"Piazza", es:"Plaza" }, prezzo:"Free" },
                { tipo:{ en:"Palace \u2013 full", it:"Palazzo \u2013 intero", fr:"Palais \u2013 plein", es:"Palacio \u2013 normal" }, prezzo:"\u20AC10" },
                { tipo:{ en:"Palace \u2013 reduced", it:"Palazzo \u2013 ridotto", fr:"Palais \u2013 r\u00E9duit", es:"Palacio \u2013 reducido" }, prezzo:"\u20AC5" }
            ],
            note:{ en:"Palace free on the first Sunday of the month. Last entry 1h before closing.", it:"Palazzo gratuito la prima domenica del mese. Ultimo ingresso 1h prima della chiusura.", fr:"Palais gratuit le premier dimanche du mois. Derni\u00E8re entr\u00E9e 1h avant la fermeture.", es:"Palacio gratis el primer domingo del mes. \u00DAltima entrada 1h antes del cierre." }
        }
    },
    {
        id: "castelovo", cat: "monument", coor: [40.828453680805055, 14.247582938971487],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Castel_dell%27_Ovo.jpg/1280px-Castel_dell%27_Ovo.jpg",
        nome: { en:"Castel dell'Ovo", it:"Castel dell'Ovo", fr:"Castel dell'Ovo", es:"Castel dell'Ovo" },
        desc: {
            en: "Naples\u2019 oldest castle, perched on a small island by the sea. Legend has it that the poet Virgil hid a magic egg in its foundations. Breathtaking panoramic views over the gulf.",
            it: "Il castello pi\u00F9 antico di Napoli si erge su un isolotto sul mare. Secondo la leggenda, il poeta Virgilio nascose un uovo magico nelle sue fondamenta. Vista panoramica mozzafiato sul golfo.",
            fr: "Le plus ancien ch\u00E2teau de Naples, perch\u00E9 sur un \u00EElot face \u00E0 la mer. La l\u00E9gende dit que Virgile y cacha un \u0153uf magique dans ses fondations. Vue panoramique \u00E9poustouflante sur le golfe.",
            es: "El castillo m\u00E1s antiguo de N\u00E1poles, encaramado en un islote frente al mar. Seg\u00FAn la leyenda, el poeta Virgilio ocult\u00F3 un huevo m\u00E1gico en sus cimientos. Vistas panor\u00E1micas al golfo."
        },
        distanza: { en:"~25 min walk", it:"~25 min a piedi", fr:"~25 min \u00E0 pied", es:"~25 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Mon \u2013 Sat", it:"Lun \u2013 Sab", fr:"Lun \u2013 Sam", es:"Lun \u2013 S\u00E1b" }, ore:"9:00 \u2013 19:30" },
                { giorni:{ en:"Sunday", it:"Domenica", fr:"Dimanche", es:"Domingo" }, ore:"9:00 \u2013 14:00" }
            ],
            biglietti: [{ tipo:{ en:"Admission", it:"Ingresso", fr:"Entr\u00E9e", es:"Entrada" }, prezzo:"Free" }],
            note: { en:"Last entry 30 min before closing", it:"Ultimo ingresso 30 min prima della chiusura", fr:"Derni\u00E8re entr\u00E9e 30 min avant la fermeture", es:"\u00DAltima entrada 30 min antes del cierre" }
        }
    },
    {
        id: "angioino", cat: "monument", coor: [40.8384, 14.2525],
        img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Municip.jpg",
        nome: { en:"Maschio Angioino", it:"Maschio Angioino", fr:"Maschio Angioino", es:"Maschio Angioino" },
        desc: {
            en: "An imposing medieval fortress built in 1279, with five mighty cylindrical towers. Houses the Civic Museum with frescoes and sculptures from the Aragonese period.",
            it: "Imponente fortezza medievale costruita nel 1279, con cinque possenti torri cilindriche. Ospita il Museo Civico con affreschi e sculture di et\u00E0 aragonese.",
            fr: "Une imposante forteresse m\u00E9di\u00E9vale construite en 1279, avec cinq puissantes tours cylindriques. Abrite le Mus\u00E9e Civique avec fresques et sculptures de l\u2019\u00E9poque aragonaise.",
            es: "Una imponente fortaleza medieval construida en 1279, con cinco poderosas torres cilind\u00E9ricas. Alberga el Museo C\u00EDvico con frescos y esculturas de \u00E9poca aragonesa."
        },
        distanza: { en:"~20 min walk", it:"~20 min a piedi", fr:"~20 min \u00E0 pied", es:"~20 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Mon \u2013 Sat", it:"Lun \u2013 Sab", fr:"Lun \u2013 Sam", es:"Lun \u2013 S\u00E1b" }, ore:"9:00 \u2013 18:00" },
                { giorni:{ en:"Sunday", it:"Domenica", fr:"Dimanche", es:"Domingo" }, ore:{ en:"Closed", it:"Chiuso", fr:"Ferm\u00E9", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC6" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"R\u00E9duit", es:"Reducido" }, prezzo:"\u20AC3" }
            ],
            note: { en:"Civic Museum included in the ticket", it:"Museo Civico incluso nel biglietto", fr:"Mus\u00E9e Civique inclus dans le billet", es:"Museo C\u00EDvico incluido en la entrada" }
        }
    },
    {
        id: "galleria", cat: "monument", coor: [40.8386, 14.2494],
        img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Inside_of_Galleria_Umberto_I_-_Naples_2013-05-16_14-11-46_1_DxO.jpg",
        nome: { en:"Galleria Umberto I", it:"Galleria Umberto I", fr:"Galerie Umberto I", es:"Galer\u00EDa Umberto I" },
        desc: {
            en: "A cathedral of iron and glass built in 1890. The most elegant covered gallery in Southern Italy, with its cross-shaped dome inspired by the Galleria Vittorio Emanuele II in Milan.",
            it: "Una cattedrale di ferro e vetro realizzata nel 1890. La galleria coperta pi\u00F9 elegante del Sud Italia, con la sua cupola a crociera ispirata alla Galleria Vittorio Emanuele II di Milano.",
            fr: "Une cath\u00E9drale de fer et de verre construite en 1890. La galerie couverte la plus \u00E9l\u00E9gante du Sud de l\u2019Italie, avec sa coupole en croix inspir\u00E9e de la Galleria Vittorio Emanuele II \u00E0 Milan.",
            es: "Una catedral de hierro y vidrio construida en 1890. La galer\u00EDa cubierta m\u00E1s elegante del sur de Italia, con su c\u00FApula cruciforme inspirada en la Galleria Vittorio Emanuele II de Mil\u00E1n."
        },
        distanza: { en:"~18 min walk", it:"~18 min a piedi", fr:"~18 min \u00E0 pied", es:"~18 min a pie" },
        sempreAperto: true
    },
    {
        id: "museo", cat: "museum", coor: [40.8534, 14.2505],
        img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Natmuseumnaples.jpg",
        nome: { en:"Museo Archeologico Nazionale", it:"Museo Archeologico Nazionale", fr:"Mus\u00E9e Arch\u00E9ologique National", es:"Museo Arqueol\u00F3gico Nacional" },
        desc: {
            en: "One of the world\u2019s most important museums for Greco-Roman antiquity. Houses treasures from Pompeii and Herculaneum: extraordinary mosaics, frescoes, the Farnese Collection and the famous Secret Cabinet.",
            it: "Uno dei pi\u00F9 importanti musei al mondo per l\u2019antichit\u00E0 greco-romana. Conserva i tesori di Pompei ed Ercolano: mosaici straordinari, affreschi, la Collezione Farnese e il celebre Gabinetto Segreto.",
            fr: "L\u2019un des mus\u00E9es les plus importants au monde pour l\u2019Antiquit\u00E9 gr\u00E9co-romaine. Il abrite les tr\u00E9sors de Pomp\u00E9i et d\u2019Herculanum : mosa\u00EFques, fresques, la Collection Farn\u00E8se et le Cabinet Secret.",
            es: "Uno de los museos m\u00E1s importantes del mundo para la antig\u00FCedad grecorromana. Alberga los tesoros de Pompeya y Herculano: mosaicos extraordinarios, frescos, la Colecci\u00F3n Farnesio y el famoso Gabinete Secreto."
        },
        distanza: { en:"~10 min walk", it:"~10 min a piedi", fr:"~10 min \u00E0 pied", es:"~10 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Wed \u2013 Mon", it:"Mer \u2013 Lun", fr:"Mer \u2013 Lun", es:"Mi\u00E9 \u2013 Lun" }, ore:"9:00 \u2013 19:30" },
                { giorni:{ en:"Tuesday", it:"Marted\u00EC", fr:"Mardi", es:"Martes" }, ore:{ en:"Closed", it:"Chiuso", fr:"Ferm\u00E9", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC15" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"R\u00E9duit", es:"Reducido" }, prezzo:"\u20AC2" },
                { tipo:{ en:"Under 18 EU", it:"Under 18 UE", fr:"Moins de 18 ans UE", es:"Menores 18 UE" }, prezzo:"Free" }
            ],
            note: { en:"Free admission on the first Sunday of each month", it:"Gratuito la prima domenica del mese", fr:"Gratuit le premier dimanche du mois", es:"Entrada gratuita el primer domingo de cada mes" }
        }
    },
    {
        id: "sansevero", cat: "museum", coor: [40.8494, 14.2549],
        img: "https://back.museosansevero.it/uploads/statua-cristo-velato-napoli.jpg",
        nome: { en:"Cappella Sansevero & Cristo Velato", it:"Cappella Sansevero e Cristo Velato", fr:"Chapelle Sansevero & Christ Voil\u00E9", es:"Capilla Sansevero & Cristo Velado" },
        desc: {
            en: "An absolute masterpiece of 18th-century Neapolitan art. Giuseppe Sanmartino\u2019s Veiled Christ is considered one of the most extraordinary marble sculptures ever created \u2014 the veil looks like real fabric.",
            it: "Un capolavoro assoluto dell\u2019arte napoletana del \u201800. Il Cristo Velato di Giuseppe Sanmartino \u00E8 considerato uno dei marmi pi\u00F9 straordinari mai scolpiti: il velo sembra vero tessuto.",
            fr: "Un chef-d\u2019\u0153uvre absolu de l\u2019art napolitain du XVIIIe si\u00E8cle. Le Christ Voil\u00E9 de Sanmartino est consid\u00E9r\u00E9 comme l\u2019une des sculptures en marbre les plus extraordinaires jamais cr\u00E9\u00E9es.",
            es: "Una obra maestra absoluta del arte napolitano del siglo XVIII. El Cristo Velado de Sanmartino es considerado una de las esculturas en m\u00E1rmol m\u00E1s extraordinarias jam\u00E1s creadas \u2014 el velo parece tejido real."
        },
        distanza: { en:"~12 min walk", it:"~12 min a piedi", fr:"~12 min \u00E0 pied", es:"~12 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Wed \u2013 Mon", it:"Mer \u2013 Lun", fr:"Mer \u2013 Lun", es:"Mi\u00E9 \u2013 Lun" }, ore:"9:00 \u2013 19:00" },
                { giorni:{ en:"Tuesday", it:"Marted\u00EC", fr:"Mardi", es:"Martes" }, ore:{ en:"Closed", it:"Chiuso", fr:"Ferm\u00E9", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC8" },
                { tipo:{ en:"Reduced (ages 6\u201325)", it:"Ridotto (6\u201325 anni)", fr:"R\u00E9duit (6\u201325 ans)", es:"Reducido (6\u201325 a\u00F1os)" }, prezzo:"\u20AC5" }
            ],
            note: { en:"Online booking strongly recommended \u2014 often sold out", it:"Prenotazione online consigliata \u2014 spesso esaurito", fr:"R\u00E9servation en ligne fortement conseill\u00E9e \u2014 souvent complet", es:"Reserva online muy recomendada \u2014 a menudo agotado" }
        }
    },
    {
        id: "sangregorio", cat: "monument", coor: [40.8502, 14.2578],
        img: "https://www.laneapolissotterrata.it/Images/san-gregorio-armeno-.jpg",
        nome: { en:"San Gregorio Armeno", it:"San Gregorio Armeno", fr:"San Gregorio Armeno", es:"San Gregorio Armeno" },
        desc: {
            en: "The famous street of shepherds and the Neapolitan nativity scene, busy all year round. Artisan workshops where sacred figures sit alongside satirical reproductions of contemporary celebrities.",
            it: "La celebre via dei pastori e del presepe napoletano, attiva tutto l\u2019anno. Botteghe artigiane dove figure sacre convivono con riproduzioni di personaggi contemporanei.",
            fr: "La c\u00E9l\u00E8bre rue des santons et de la cr\u00E8che napolitaine, anim\u00E9e toute l\u2019ann\u00E9e. Des ateliers artisanaux o\u00F9 les figures sacr\u00E9es voisinent avec des repr\u00E9sentations satiriques de c\u00E9l\u00E9brit\u00E9s.",
            es: "La famosa calle de los pastores y el bel\u00E9n napolitano, animada todo el a\u00F1o. Talleres artesanales donde las figuras sagradas conviven con reproducciones sat\u00EDricas de famosos contempor\u00E1neos."
        },
        distanza: { en:"~13 min walk", it:"~13 min a piedi", fr:"~13 min \u00E0 pied", es:"~13 min a pie" },
        sempreAperto: true
    },
    {
        id: "sotterranea", cat: "monument", coor: [40.8511, 14.2568],
        img: "https://www.finestresullarte.info/rivista/immagini/2022/fn/catacombe-di-san-gennaro.jpg",
        nome: { en:"Napoli Sotterranea", it:"Napoli Sotterranea", fr:"Naples Souterraine", es:"N\u00E1poles Subterr\u00E1nea" },
        desc: {
            en: "A labyrinth of galleries, cisterns and tunnels carved into volcanic tuff, some dating back to the 4th century BC. A city beneath the city, also used as an air-raid shelter during World War II.",
            it: "Un labirinto di gallerie, cisterne e cunicoli scavati nel tufo vulcanico, alcuni risalenti al IV secolo a.C. Una citt\u00E0 sotto la citt\u00E0, usata come rifugio antiaereo nella Seconda Guerra Mondiale.",
            fr: "Un labyrinthe de galeries, citernes et tunnels creus\u00E9s dans le tuf volcanique, certains datant du IVe si\u00E8cle av. J.-C. Une ville sous la ville, utilis\u00E9e comme abri anti-a\u00E9rien pendant la Seconde Guerre mondiale.",
            es: "Un laberinto de galer\u00EDas, cisternas y t\u00FAneles excavados en la toba volc\u00E1nica, algunos del siglo IV a.C. Una ciudad bajo la ciudad, usada como refugio anticreo durante la Segunda Guerra Mundial."
        },
        distanza: { en:"~12 min walk", it:"~12 min a piedi", fr:"~12 min \u00E0 pied", es:"~12 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [{ giorni:{ en:"Every day", it:"Tutti i giorni", fr:"Tous les jours", es:"Todos los d\u00EDas" }, ore:"10:00 \u2013 18:00" }],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC10" },
                { tipo:{ en:"Reduced (under 10)", it:"Ridotto (under 10)", fr:"R\u00E9duit (moins de 10 ans)", es:"Reducido (menores 10)" }, prezzo:"\u20AC8" }
            ],
            note: { en:"Guided tours every hour, ~80 min. Bring a jacket \u2014 constant 12\u00B0C", it:"Tour guidati ogni ora, ~80 min. Portare giacca \u2014 temperatura costante 12\u00B0C", fr:"Visites guid\u00E9es toutes les heures, ~80 min. Pr\u00E9voir une veste \u2014 temp\u00E9rature constante 12\u00B0C", es:"Visitas guiadas cada hora, ~80 min. Llevar chaqueta \u2014 temperatura constante 12\u00B0C" }
        }
    },
    {
        id: "duomo", cat: "monument", coor: [40.852770097801915, 14.259266853001233],
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Naples_Cathedral_-_Duomo_di_Napoli%2C_Fa%C3%A7ade_%285315-Pan%29.jpg",
        nome: { en:"Naples Cathedral", it:"Duomo di Napoli", fr:"Cath\u00E9drale de Naples", es:"Catedral de N\u00E1poles" },
        desc: {
            en: "The cathedral dedicated to San Gennaro, patron saint of Naples. Three times a year the miracle of the liquefaction of the saint\u2019s blood takes place here. The Treasury Chapel is a baroque masterpiece.",
            it: "La cattedrale dedicata a San Gennaro, patrono della citt\u00E0. Tre volte l\u2019anno si compie il miracolo della liquefazione del sangue del santo. La cappella del Tesoro \u00E8 un capolavoro barocco.",
            fr: "La cath\u00E9drale d\u00E9di\u00E9e \u00E0 San Gennaro, saint patron de Naples. Trois fois par an s\u2019y accomplit le miracle de la liqu\u00E9faction du sang du saint. La chapelle du Tr\u00E9sor est un chef-d\u2019\u0153uvre baroque.",
            es: "La catedral dedicada a San Jenaro, patr\u00F3n de N\u00E1poles. Tres veces al a\u00F1o se produce el milagro de la licuefacci\u00F3n de la sangre del santo. La capilla del Tesoro es una obra maestra barroca."
        },
        distanza: { en:"~15 min walk", it:"~15 min a piedi", fr:"~15 min \u00E0 pied", es:"~15 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Mon \u2013 Sat", it:"Lun \u2013 Sab", fr:"Lun \u2013 Sam", es:"Lun \u2013 S\u00E1b" }, ore:"8:30 \u2013 13:00 / 14:30 \u2013 19:30" },
                { giorni:{ en:"Sunday", it:"Domenica", fr:"Dimanche", es:"Domingo" }, ore:"8:00 \u2013 13:30" }
            ],
            biglietti: [
                { tipo:{ en:"Cathedral", it:"Cattedrale", fr:"Cath\u00E9drale", es:"Catedral" }, prezzo:"Free" },
                { tipo:{ en:"Diocesan Museum", it:"Museo Diocesano", fr:"Mus\u00E9e Dioc\u00E9sain", es:"Museo Diocesano" }, prezzo:"\u20AC3" }
            ],
            note: { en:"Tourist access limited during religious services", it:"Durante le funzioni l\u2019accesso turistico \u00E8 limitato", fr:"L\u2019acc\u00E8s touristique est limit\u00E9 pendant les offices", es:"El acceso tur\u00EDstico es limitado durante los oficios religiosos" }
        }
    },
    {
        id: "santelmo", cat: "nature", coor: [40.84457321478196, 14.238862910672024],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Castel_Sant_Elmo_Napoli_lato_ingresso.jpg/1280px-Castel_Sant_Elmo_Napoli_lato_ingresso.jpg",
        nome: { en:"Castel Sant'Elmo", it:"Castel Sant'Elmo", fr:"Castel Sant'Elmo", es:"Castel Sant'Elmo" },
        desc: {
            en: "A star-shaped 16th-century fortress perched on the Vomero hill. Offers the most complete panorama over Naples, Vesuvius and the gulf. Reachable by the Chiaia funicular.",
            it: "Fortezza stellare del \u201800 arroccata sulla collina del Vomero. Offre il panorama pi\u00F9 completo su Napoli, il Vesuvio e il golfo. Raggiungibile con la funicolare di Chiaia.",
            fr: "Une forteresse \u00E9toil\u00E9e du XVIe si\u00E8cle perch\u00E9e sur la colline du Vomero. Offre le panorama le plus complet sur Naples, le V\u00E9suve et le golfe. Accessible par le funiculaire de Chiaia.",
            es: "Una fortaleza estrellada del siglo XVI encaramada en la colina del Vomero. Ofrece el panorama m\u00E1s completo sobre N\u00E1poles, el Vesubio y el golfo. Accesible por el funicular de Chiaia."
        },
        distanza: { en:"~20 min by funicular", it:"~20 min in funicolare", fr:"~20 min en funiculaire", es:"~20 min en funicular" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Wed \u2013 Mon", it:"Mer \u2013 Lun", fr:"Mer \u2013 Lun", es:"Mi\u00E9 \u2013 Lun" }, ore:"9:00 \u2013 19:30" },
                { giorni:{ en:"Tuesday", it:"Marted\u00EC", fr:"Mardi", es:"Martes" }, ore:{ en:"Closed", it:"Chiuso", fr:"Ferm\u00E9", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC5" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"R\u00E9duit", es:"Reducido" }, prezzo:"\u20AC2.50" },
                { tipo:{ en:"Under 18 EU", it:"Under 18 UE", fr:"Moins de 18 ans UE", es:"Menores 18 UE" }, prezzo:"Free" }
            ],
            note: { en:"Chiaia funicular: \u20AC1.30 (integrated with ANM ticket)", it:"Funicolare di Chiaia: \u20AC1,30 (integrata con biglietto ANM)", fr:"Funiculaire de Chiaia\u00A0: \u20AC1,30 (int\u00E9gr\u00E9 au billet ANM)", es:"Funicular de Chiaia: \u20AC1,30 (integrado en billete ANM)" }
        }
    },
    {
        id: "beverello", cat: "transport", coor: [40.8384, 14.2550],
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Napoli-porto01.jpg",
        nome: { en:"Molo Beverello", it:"Molo Beverello", fr:"Embarcad\u00E8re Beverello", es:"Muelle Beverello" },
        desc: {
            en: "Naples\u2019 main port for hydrofoils and ferries to Capri, Ischia, Procida and the Amalfi Coast. Departures also for the Aeolian Islands and Sicily.",
            it: "Il porto principale di Napoli per aliscafi e traghetti verso Capri, Ischia, Procida e la Costiera Amalfitana. Partenze anche per le Eolie e la Sicilia.",
            fr: "Le principal port de Naples pour les hydroglisseurs et ferries vers Capri, Ischia, Procida et la C\u00F4te Amalfitaine. D\u00E9parts aussi pour les \u00CEles \u00C9oliennes et la Sicile.",
            es: "El principal puerto de N\u00E1poles para aliscafos y ferris hacia Capri, Isquia, P\u00F3cida y la Costa Amalfitana. Tambi\u00E9n salidas hacia las Islas Eolias y Sicilia."
        },
        distanza: { en:"~20 min walk", it:"~20 min a piedi", fr:"~20 min \u00E0 pied", es:"~20 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [{ giorni:{ en:"Every day", it:"Tutti i giorni", fr:"Tous les jours", es:"Todos los d\u00EDas" }, ore:"From 6:00" }],
            biglietti: [
                { tipo:{ en:"Capri (hydrofoil)", it:"Capri (aliscafo)", fr:"Capri (hydroglisseur)", es:"Capri (aliscafo)" }, prezzo:"~\u20AC20" },
                { tipo:{ en:"Ischia (ferry)", it:"Ischia (traghetto)", fr:"Ischia (ferry)", es:"Isquia (ferry)" }, prezzo:"~\u20AC14" },
                { tipo:{ en:"Procida", it:"Procida", fr:"Procida", es:"P\u00F3cida" }, prezzo:"~\u20AC13" }
            ],
            note: { en:"Prices vary by company & season. Book ahead in summer", it:"Prezzi variabili per compagnia e stagione. Prenotare in anticipo d\u2019estate", fr:"Prix variables selon la compagnie et la saison. R\u00E9server \u00E0 l\u2019avance en \u00E9t\u00E9", es:"Precios variables por compa\u00F1\u00EDa y temporada. Reservar con antelaci\u00F3n en verano" }
        }
    },
    {
        id: "stazione", cat: "transport", coor: [40.8529, 14.2726],
	img: "https://www.napolivillage.com/wp-content/uploads/2023/06/Stazione-Napoli-Centrale-scaled.jpg",
        nome: { en:"Naples Central Station", it:"Stazione Napoli Centrale", fr:"Gare Centrale de Naples", es:"Estaci\u00F3n Central de N\u00E1poles" },
        desc: {
            en: "The main railway hub: high-speed trains to Rome (1h 10m) and Milan. Also hub for the Circumvesuviana line to Pompeii, Herculaneum and Sorrento.",
            it: "Il principale hub ferroviario: Frecce per Roma (1h 10m) e Milano. Hub anche per la Circumvesuviana verso Pompei, Ercolano e Sorrento.",
            fr: "Le principal hub ferroviaire\u00A0: trains \u00E0 grande vitesse pour Rome (1h10) et Milan. Hub aussi pour la Circumvesuviana vers Pomp\u00E9i, Herculanum et Sorrente.",
            es: "El principal hub ferroviario: trenes de alta velocidad a Roma (1h 10m) y Mil\u00E1n. Tambi\u00E9n hub de la Circumvesuviana hacia Pompeya, Herculano y Sorrento."
        },
        distanza: { en:"~20 min walk", it:"~20 min a piedi", fr:"~20 min \u00E0 pied", es:"~20 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [{ giorni:{ en:"Every day", it:"Tutti i giorni", fr:"Tous les jours", es:"Todos los d\u00EDas" }, ore:{ en:"Open 24h", it:"Aperta 24h", fr:"Ouverte 24h/24", es:"Abierta 24h" } }],
            biglietti: [
                { tipo:{ en:"Rome (Frecciarossa)", it:"Roma (Frecciarossa)", fr:"Rome (Frecciarossa)", es:"Roma (Frecciarossa)" }, prezzo:"from \u20AC19" },
                { tipo:{ en:"Pompeii (Circumvesuv.)", it:"Pompei (Circumvesuv.)", fr:"Pomp\u00E9i (Circumvesuv.)", es:"Pompeya (Circumvesuv.)" }, prezzo:"\u20AC2.80" },
                { tipo:{ en:"Sorrento (Circumvesuv.)", it:"Sorrento (Circumvesuv.)", fr:"Sorrente (Circumvesuv.)", es:"Sorrento (Circumvesuv.)" }, prezzo:"\u20AC4.60" }
            ],
            note: { en:"Circumvesuviana: separate platforms on Piazza Garibaldi side", it:"Circumvesuviana: binari separati, lato piazza Garibaldi", fr:"Circumvesuviana\u00A0: quais s\u00E9par\u00E9s, c\u00F4t\u00E9 piazza Garibaldi", es:"Circumvesuviana: andenes separados, lado Piazza Garibaldi" }
        }
    },
    {
        id: "lungomare", cat: "nature", coor: [40.8247, 14.2209],
        nome: { en:"Lungomare Caracciolo", it:"Lungomare Caracciolo", fr:"Promenade Caracciolo", es:"Paseo Mar\u00EDtimo Caracciolo" },
	img: "https://naplespompeii.com/images/what-to-do-in-naples.jpg",
        desc: {
            en: "The most beautiful seafront promenade in Southern Italy, with views of Vesuvius and the islands of the gulf. At sunset it bursts into colour. Perfect for a morning run or an evening aperitivo.",
            it: "La passeggiata a mare pi\u00F9 bella del Mezzogiorno, con vista sul Vesuvio e sulle isole del golfo. Al tramonto diventa un\u2019esplosione di colori. Perfetta per una corsa mattutina o un aperitivo serale.",
            fr: "La plus belle promenade maritime du sud de l\u2019Italie, avec vue sur le V\u00E9suve et les \u00EEles du golfe. Au coucher du soleil, c\u2019est une explosion de couleurs. Parfaite pour un jogging matinal ou un ap\u00E9ritif.",
            es: "El paseo mar\u00EDtimo m\u00E1s bello del sur de Italia, con vistas al Vesubio y las islas del golfo. Al atardecer es una explosi\u00F3n de colores. Perfecto para correr por la ma\u00F1ana o tomar un aperitivo al atardecer."
        },
        distanza: { en:"~35 min walk", it:"~35 min a piedi", fr:"~35 min \u00E0 pied", es:"~35 min a pie" },
        sempreAperto: true
    },
    {
        id: "teatrosancarlo", cat: "museum", coor: [40.8376226617232, 14.249680712520334],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Teatro_de_San_Carlos%2C_N%C3%A1poles%2C_Italia%2C_2023-03-25%2C_DD_184-186_HDR.jpg/1280px-Teatro_de_San_Carlos%2C_N%C3%A1poles%2C_Italia%2C_2023-03-25%2C_DD_184-186_HDR.jpg",
        nome: { en:"Teatro San Carlo", it:"Teatro San Carlo", fr:"Théâtre San Carlo", es:"Teatro San Carlo" },
        desc: {
            en: "One of the oldest and most prestigious opera houses in the world, built in 1737 — even older than La Scala in Milan. Its sumptuous auditorium seats over 1,300 spectators and is a UNESCO World Heritage Site.",
            it: "Uno dei teatri lirici più antichi e prestigiosi del mondo, costruito nel 1737 — persino più antico della Scala di Milano. Il suo sontuoso auditorium ospita oltre 1.300 spettatori ed è Patrimonio UNESCO.",
            fr: "L’un des opéras les plus anciens et prestigieux du monde, construit en 1737 — plus ancien que la Scala de Milan. Son somptueux auditorium accueille plus de 1 300 spectateurs et est classé au patrimoine UNESCO.",
            es: "Uno de los teatros de ópera más antiguos y prestigiosos del mundo, construido en 1737 — incluso más antiguo que La Scala de Milán. Su suntuoso auditorio acoge a más de 1.300 espectadores y es Patrimonio UNESCO."
        },
        distanza: { en:"~18 min walk", it:"~18 min a piedi", fr:"~18 min à pied", es:"~18 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Tue – Sun", it:"Mar – Dom", fr:"Mar – Dim", es:"Mar – Dom" }, ore:"10:30 – 17:30" },
                { giorni:{ en:"Monday", it:"Lunedì", fr:"Lundi", es:"Lunes" }, ore:{ en:"Closed", it:"Chiuso", fr:"Fermé", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Tour (full)", it:"Tour (intero)", fr:"Visite (plein)", es:"Visita (normal)" }, prezzo:"€9" },
                { tipo:{ en:"Tour (reduced)", it:"Tour (ridotto)", fr:"Visite (réduit)", es:"Visita (reducido)" }, prezzo:"€7" },
                { tipo:{ en:"Opera tickets", it:"Biglietti opera", fr:"Billets opéra", es:"Entradas ópera" }, prezzo:"from €30" }
            ],
            note: { en:"Book opera tickets well in advance on the official website", it:"Prenotare i biglietti dell’opera con largo anticipo sul sito ufficiale", fr:"Réserver les billets d’opéra longtemps à l’avance sur le site officiel", es:"Reserve entradas de ópera con mucha antelación en el sitio oficial" }
        }
    },
    {
        id: "maradona", cat: "monument", coor: [40.8414159495332, 14.245237310587731],
        img: "https://dimages2.corriereobjects.it/files/image_1200_900/files/fp/uploads/2024/09/03/66d733d42b9b4.r_d.426-147-0.jpeg",
        nome: { en:"Maradona Mural", it:"Murale di Maradona", fr:"Mural de Maradona", es:"Mural de Maradona" },
        desc: {
            en: "The iconic mural of Diego Armando Maradona in the Quartieri Spagnoli, a pilgrimage site for football fans from around the world. The legend who won two Serie A titles with Napoli (1987, 1990) is worshipped here as a deity.",
            it: "L’iconico murale di Diego Armando Maradona nei Quartieri Spagnoli, meta di pellegrinaggio per i tifosi di tutto il mondo. La leggenda che vincò due scudetti con il Napoli (1987, 1990) è venerata qui come una divinità.",
            fr: "Le célèbre mural de Diego Armando Maradona dans les Quartieri Spagnoli, lieu de pèlerinage pour les fans de football du monde entier. La légende qui remporta deux titres de Serie A avec Naples (1987, 1990) y est vénérée comme un dieu.",
            es: "El icónico mural de Diego Armando Maradona en los Quartieri Spagnoli, lugar de peregrinación para aficionados al fútbol de todo el mundo. La leyenda que ganó dos ligas con el Nápoles (1987, 1990) es venerada aquí como una deidad."
        },
        distanza: { en:"~20 min walk", it:"~20 min a piedi", fr:"~20 min à pied", es:"~20 min a pie" },
        sempreAperto: true
    },
    {
        id: "fontanelle", cat: "museum", coor: [40.85878287417965, 14.238719368343455],
        img: "https://www.fondazioneconilsud.it/wp-content/uploads/2026/04/foto-cimitero-2-scaled.jpg",
        nome: { en:"Fontanelle Cemetery", it:"Cimitero delle Fontanelle", fr:"Cimetière des Fontanelle", es:"Cementerio de las Fontanelle" },
        desc: {
            en: "A hypogeum carved into the tuff of the Materdei hill, housing the bones of around 40,000 victims of plague and famine. A place of deep popular devotion, where Neapolitans traditionally ‘adopted’ skulls of the anonymous dead.",
            it: "Un ipogeo scavato nel tufo della collina di Materdei, che custodisce le ossa di circa 40.000 vittime di peste e carestia. Luogo di profonda devozione popolare, dove i napoletani adottavano tradizionalmente i teschi dei morti anonimi.",
            fr: "Un hypogée creusé dans le tuf de la colline de Materdei, abritant les ossements d’environ 40 000 victimes de la peste et de la famine. Lieu de profonde dévotion populaire, où les Napolitains adoptaient traditionnellement les crânes des morts anonymes.",
            es: "Un hipógeo excavado en la toba de la colina de Materdei, que alberga los huesos de unas 40.000 víctimas de la peste y el hambre. Lugar de profunda devoción popular, donde los napolitanos adoptaban tradicionalmente los cráneos de los muertos anónimos."
        },
        distanza: { en:"~18 min walk", it:"~18 min a piedi", fr:"~18 min à pied", es:"~18 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [{ giorni:{ en:"Every day", it:"Tutti i giorni", fr:"Tous les jours", es:"Todos los días" }, ore:"10:00 – 17:00" }],
            biglietti: [{ tipo:{ en:"Admission", it:"Ingresso", fr:"Entrée", es:"Entrada" }, prezzo:"Free" }],
            note: { en:"Last entry 30 min before closing", it:"Ultimo ingresso 30 min prima della chiusura", fr:"Dernière entrée 30 min avant la fermeture", es:"Última entrada 30 min antes del cierre" }
        }
    },
    {
        id: "jago", cat: "museum", coor: [40.856483211135995, 14.255901024165945],
        img: "https://artslife.com/wp-content/uploads/2023/05/Lo-Jago-Museum-a-Napoli-foto-Facebook-Jago-Museum.jpg",
        nome: { en:"Museo Jago", it:"Museo di Jago", fr:"Musée Jago", es:"Museo Jago" },
        desc: {
            en: "A free museum dedicated to Jacopo Cardillo, known as Jago, a contemporary sculptor who has redefined hyperrealistic marble carving. His works — including the famous ‘The First Baby’ — are displayed in the deconsecrated church of Sant’Aspreno.",
            it: "Un museo gratuito dedicato a Jacopo Cardillo, detto Jago, scultore contemporaneo che ha ridefinito la scultura iperrealista in marmo. Le sue opere — tra cui il celebre ‘The First Baby’ — sono esposte nell’ex chiesa di Sant’Aspreno.",
            fr: "Un musée gratuit dédié à Jacopo Cardillo, dit Jago, sculpteur contemporain qui a redéfini la sculpture hyperraéliste en marbre. Ses œuvres — dont le célèbre ‘The First Baby’ — sont exposées dans l’église désacralisée de Sant’Aspreno.",
            es: "Un museo gratuito dedicado a Jacopo Cardillo, conocido como Jago, escultor contemporáneo que ha redefinido la escultura hipperrealista en mármol. Sus obras — incluido el famoso ‘The First Baby’ — se exponen en la iglesia desacralizada de Sant’Aspreno."
        },
        distanza: { en:"~12 min walk", it:"~12 min a piedi", fr:"~12 min à pied", es:"~12 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Thu – Mon", it:"Gio – Lun", fr:"Jeu – Lun", es:"Jue – Lun" }, ore:"10:00 – 20:00" },
                { giorni:{ en:"Tue – Wed", it:"Mar – Mer", fr:"Mar – Mer", es:"Mar – Mié" }, ore:{ en:"Closed", it:"Chiuso", fr:"Fermé", es:"Cerrado" } }
            ],
            biglietti: [{ tipo:{ en:"Admission", it:"Ingresso", fr:"Entrée", es:"Entrada" }, prezzo:"Free" }],
            note: { en:"One of the very few free contemporary art spaces in Naples", it:"Uno dei rari spazi d’arte contemporanea gratuiti a Napoli", fr:"L’un des rares espaces d’art contemporain gratuits de Naples", es:"Uno de los pocos espacios de arte contemporáneo gratuitos de Nápoles" }
        }
    },
    {
        id: "acqua", cat: "museum", coor: [40.850464769811744, 14.25456832649659],
	img: "https://www.lapismuseum.com/wp-content/uploads/2022/04/P1270249-1240x930.jpg",
        nome: { en:"Museo dell’Acqua", it:"Museo dell’Acqua", fr:"Musée de l’Eau", es:"Museo del Agua" },
        desc: {
            en: "A hidden gem inside a 19th-century water treatment plant. The museum traces Naples’ ancient water system, from Greek cisterns to the modern aqueduct, through original machinery, tunnels and evocative underground spaces.",
            it: "Una gemma nascosta all’interno di un impianto idrico ottocentesco. Il museo ripercorre il sistema idrico antico di Napoli, dalle cisterne greche all’acquedotto moderno, attraverso macchinari originali, gallerie e suggestivi spazi sotterranei.",
            fr: "Un joyau caché au sein d’une station de traitement des eaux du XIXe siècle. Le musée retrace le système hydraulique antique de Naples, des citernes grecques à l’aqueduc moderne, à travers machines originales, tunnels et espaces souterrains.",
            es: "Una joya oculta dentro de una planta de tratamiento de agua del siglo XIX. El museo recorre el antiguo sistema hídrico de Nápoles, desde las cisternas griegas hasta el acueducto moderno, a través de maquinaria original, túneles y espacios subterráneos."
        },
        distanza: { en:"~15 min walk", it:"~15 min a piedi", fr:"~15 min à pied", es:"~15 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [{ giorni:{ en:"Sat – Sun", it:"Sab – Dom", fr:"Sam – Dim", es:"Sáb – Dom" }, ore:"10:00 – 13:00" }],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"€5" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"Réduit", es:"Reducido" }, prezzo:"€3" }
            ],
            note: { en:"Guided tours on request on weekdays — call ahead", it:"Visite guidate su prenotazione nei giorni feriali — chiamare prima", fr:"Visites guidées sur demande en semaine — appeler à l’avance", es:"Visitas guiadas bajo petición entre semana — llamar antes" }
        }
    },
    {
        id: "santachiara", cat: "monument", coor: [40.84730350255232, 14.252659630051257],
        img: "https://www.10cose.it/wp-content/uploads/2015/12/maioliche-chiostro-santa-chiara-napoli.jpg",
        nome: { en:"Santa Chiara Basilica & Cloister", it:"Basilica e Chiostro di Santa Chiara", fr:"Basilique et Cloître de Santa Chiara", es:"Basílica y Claustro de Santa Chiara" },
        desc: {
            en: "A jewel of Neapolitan Gothic architecture, built in the 14th century. The stunning cloister of the Clarisse nuns, decorated with colourful majolica tiles depicting scenes of everyday life, is one of the most charming corners of Naples.",
            it: "Un gioiello dell’architettura gotica napoletana, costruita nel XIV secolo. Il magnifico chiostro delle clarisse, decorato con vivaci mattonelle di maiolica raffiguranti scene di vita quotidiana, è uno degli angoli più incantevoli di Napoli.",
            fr: "Un joyau de l’architecture gothique napolitaine, construite au XIVe siècle. Le magnifique cloître des clarisses, décoré de carreaux de majolique colorés représentant des scènes de la vie quotidienne, est l’un des coins les plus charmants de Naples.",
            es: "Una joya de la arquitectura gótica napolitana, construida en el siglo XIV. El magnífico claustro de las clarisas, decorado con vistosos azulejos de mayólica que representan escenas de la vida cotidiana, es uno de los rincones más encantadores de Nápoles."
        },
        distanza: { en:"~10 min walk", it:"~10 min a piedi", fr:"~10 min à pied", es:"~10 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Mon – Sat", it:"Lun – Sab", fr:"Lun – Sam", es:"Lun – Sáb" }, ore:"9:30 – 17:30" },
                { giorni:{ en:"Sunday", it:"Domenica", fr:"Dimanche", es:"Domingo" }, ore:"10:00 – 14:30" }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"€6" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"Réduit", es:"Reducido" }, prezzo:"€4.50" }
            ],
            note: { en:"Museum and church included in the ticket", it:"Museo e chiesa inclusi nel biglietto", fr:"Musée et église inclus dans le billet", es:"Museo e iglesia incluidos en la entrada" }
        }
    },
    {
        id: "gesunuovo", cat: "monument", coor: [40.8476102070297, 14.251990700524747],
        img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Chiesa_del_Gesu_Nuovo.jpg",
        nome: { en:"Gesù Nuovo Church", it:"Chiesa del Gesù Nuovo", fr:"Église du Gesù Nuovo", es:"Iglesia del Gesú Nuevo" },
        desc: {
            en: "An extraordinary Baroque church whose facade is covered in diamond-shaped piperno stone — a unique sight in world architecture. Inside, magnificent frescoes and the chapel of San Giuseppe Moscati, a doctor canonised in 1987.",
            it: "Una straordinaria chiesa barocca la cui facciata è rivestita di piperno a punta di diamante — un unicum nell’architettura mondiale. All’interno, magnifici affreschi e la cappella di San Giuseppe Moscati, medico canonizzato nel 1987.",
            fr: "Une extraordinaire église baroque dont la façade est revêtue de piperno en pointe de diamant — un unicum dans l’architecture mondiale. À l’intérieur, de magnifiques fresques et la chapelle de San Giuseppe Moscati, médecin canonnisé en 1987.",
            es: "Una extraordinaria iglesia barroca cuya fachada está revestida de piperno en punta de diamante — un único en la arquitectura mundial. En su interior, magnos frescos y la capilla de San Giuseppe Moscati, médico canonizado en 1987."
        },
        distanza: { en:"~10 min walk", it:"~10 min a piedi", fr:"~10 min à pied", es:"~10 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Mon – Sat", it:"Lun – Sab", fr:"Lun – Sam", es:"Lun – Sáb" }, ore:"7:00 – 13:00 / 16:00 – 20:00" },
                { giorni:{ en:"Sunday", it:"Domenica", fr:"Dimanche", es:"Domingo" }, ore:"7:30 – 13:30 / 16:30 – 20:00" }
            ],
            biglietti: [{ tipo:{ en:"Admission", it:"Ingresso", fr:"Entrée", es:"Entrada" }, prezzo:"Free" }],
            note: { en:"Access limited during religious services", it:"Accesso limitato durante le funzioni religiose", fr:"Accès limité pendant les offices religieux", es:"Acceso limitado durante los oficios religiosos" }
        }
    },
    {
        id: "tunnelborbonico", cat: "museum", coor: [40.83295939410339, 14.243427386383743],
        img: "https://www.galleriaborbonica.com/images/bg.jpg",
        nome: { en:"Bourbon Tunnel", it:"Tunnel Borbonico", fr:"Tunnel Bourbon", es:"Túnel Borbónico" },
        desc: {
            en: "A secret escape route built in 1853 by King Ferdinand II to connect the Royal Palace to the barracks. Rediscovered in 1999, it reveals a time capsule: WWII air-raid shelters, vintage cars, Vespa scooters and ancient cisterns.",
            it: "Un percorso di fuga segreto fatto costruire nel 1853 da re Ferdinando II per collegare il Palazzo Reale alle caserme. Riscoperto nel 1999, custodisce una capsula del tempo: rifugi antiaerei della Seconda Guerra Mondiale, auto d’epoca, Vespa e cisterne antiche.",
            fr: "Une voie de fuite secrète construite en 1853 par le roi Ferdinand II pour relier le Palais Royal aux casernes. Redécouvert en 1999, il recycle une capsule temporelle : abris anti-aériens de la Seconde Guerre mondiale, voitures d’époque, Vespa et citernes antiques.",
            es: "Una ruta de escape secreta construida en 1853 por el rey Fernando II para conectar el Palacio Real con los cuarteles. Redescubierto en 1999, alberga una cápsula del tiempo: refugios antiaéreos de la Segunda Guerra Mundial, coches de época, Vespa y cisternas antiguas."
        },
        distanza: { en:"~17 min walk", it:"~17 min a piedi", fr:"~17 min à pied", es:"~17 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [{ giorni:{ en:"Every day", it:"Tutti i giorni", fr:"Tous les jours", es:"Todos los días" }, ore:"10:00 – 17:00" }],
            biglietti: [
                { tipo:{ en:"Standard tour", it:"Tour standard", fr:"Visite standard", es:"Visita estándar" }, prezzo:"€10" },
                { tipo:{ en:"Adventure tour", it:"Tour avventura", fr:"Visite aventure", es:"Visita aventura" }, prezzo:"€15" }
            ],
            note: { en:"Guided tours only — duration approx. 1h. Wear comfortable shoes", it:"Solo visite guidate — durata circa 1h. Indossare scarpe comode", fr:"Visites guidées uniquement — durée environ 1h. Porter des chaussures confortables", es:"Solo visitas guiadas — duración aprox. 1h. Usar calzado cómodo" }
        }
    },
    {
        id: "capodimonte", cat: "museum", coor: [40.86716898102535, 14.251104579435037],
        img: "https://campaniateatrofestival.it/wp-content/uploads/2020/06/capodimonte.jpeg",
        nome: { en:"Capodimonte Museum & Park", it:"Museo e Bosco di Capodimonte", fr:"Musée et Parc de Capodimonte", es:"Museo y Parque de Capodimonte" },
        desc: {
            en: "A Bourbon royal palace turned world-class art museum, housing masterpieces by Caravaggio, Titian, Raphael and El Greco. Surrounded by a vast 130-hectare park — the largest green lung in Naples — with panoramic views over the city.",
            it: "Una reggia borbonica trasformata in museo d’arte di livello mondiale, con capolavori di Caravaggio, Tiziano, Raffaello ed El Greco. Circondato da un vasto parco di 130 ettari — il più grande polmone verde di Napoli — con vista panoramica sulla città.",
            fr: "Un palais royal bourbon transformé en musée d’art de renommée mondiale, abritant des chefs-d’œuvre de Caravage, Titien, Raphaël et El Greco. Entouré d’un vaste parc de 130 hectares — le plus grand poumon vert de Naples — avec vue panoramique.",
            es: "Un palacio real borbónico convertido en museo de arte de clase mundial, con obras maestras de Caravaggio, Tiziano, Rafael y El Greco. Rodeado por un extenso parque de 130 hectáreas — el mayor pulmón verde de Nápoles — con vistas panorámicas."
        },
        distanza: { en:"~30 min by bus (C63)", it:"~30 min in autobus (C63)", fr:"~30 min en bus (C63)", es:"~30 min en autobus (C63)" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Thu – Tue", it:"Gio – Mar", fr:"Jeu – Mar", es:"Jue – Mar" }, ore:"9:00 – 19:30" },
                { giorni:{ en:"Wednesday", it:"Mercoledì", fr:"Mercredi", es:"Miércoles" }, ore:{ en:"Closed", it:"Chiuso", fr:"Fermé", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"€12" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"Réduit", es:"Reducido" }, prezzo:"€2" },
                { tipo:{ en:"Park only", it:"Solo parco", fr:"Parc seulement", es:"Solo parque" }, prezzo:"Free" }
            ],
            note: { en:"Free on the first Sunday of the month. Take bus C63 from P.za Cavour", it:"Gratuito la prima domenica del mese. Autobus C63 da P.za Cavour", fr:"Gratuit le premier dimanche du mois. Bus C63 depuis P. Cavour", es:"Gratis el primer domingo del mes. Autobus C63 desde P. Cavour" }
        }
    },
    {
        id: "madre", cat: "museum", coor: [40.85526768020886, 14.258543599027554],
        img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Museo_Madre%2C.jpg",
        nome: { en:"MADRE Museum", it:"Museo Madre", fr:"Musée MADRE", es:"Museo MADRE" },
        desc: {
            en: "The Museum of Contemporary Art Donnaregina (MADRE) is Naples’ leading contemporary art museum. Housed in a 19th-century palazzo, it features a permanent collection of international giants — Jeff Koons, Damien Hirst, Richard Serra — alongside rotating exhibitions.",
            it: "Il Museo d’Arte contemporanea Donna Regina (MADRE) è il principale museo d’arte contemporanea di Napoli. Ospitato in un palazzo ottocentesco, presenta una collezione permanente con grandi nomi internazionali — Jeff Koons, Damien Hirst, Richard Serra — e mostre temporanee.",
            fr: "Le Musée d’Art Contemporain Donnaregina (MADRE) est le principal musée d’art contemporain de Naples. Logis dans un palazzo du XIXe siècle, il présente une collection permanente avec des grands noms internationaux et des expositions temporaires.",
            es: "El Museo de Arte Contemporáneo Donnaregina (MADRE) es el principal museo de arte contemporáneo de Nápoles. Alojado en un palacio del siglo XIX, presenta una colección permanente con grandes nombres internacionales y exposiciones temporales."
        },
        distanza: { en:"~15 min walk", it:"~15 min a piedi", fr:"~15 min à pied", es:"~15 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Mon, Wed – Sat", it:"Lun, Mer – Sab", fr:"Lun, Mer – Sam", es:"Lun, Mié – Sáb" }, ore:"10:00 – 19:30" },
                { giorni:{ en:"Sunday", it:"Domenica", fr:"Dimanche", es:"Domingo" }, ore:"10:00 – 20:00" },
                { giorni:{ en:"Tuesday", it:"Martedì", fr:"Mardi", es:"Martes" }, ore:{ en:"Closed", it:"Chiuso", fr:"Fermé", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"€8" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"Réduit", es:"Reducido" }, prezzo:"€4" }
            ],
            note: { en:"Free on Monday afternoons", it:"Gratuito il lunedì pomeriggio", fr:"Gratuit le lundi après-midi", es:"Gratis los lunes por la tarde" }
        }
    },
    {
        id: "sanmartino", cat: "nature", coor: [40.844199867634934, 14.240761914556685],
        img: "https://www.napolitoday.it/~media/horizontal-hi/22804218395165/belvedere-san-martino.jpg",
        nome: { en:"Castel Sant’Elmo & Piazza San Martino", it:"Castel Sant’Elmo e P.za San Martino", fr:"Castel Sant’Elmo & Place San Martino", es:"Castel Sant’Elmo y Plaza San Martino" },
        desc: {
            en: "The hilltop piazza between the star fortress and the Certosa di San Martino monastery offers the most iconic panorama of Naples. The Certosa museum houses remarkable Baroque art, Christmas cribs and a historic ship collection.",
            it: "La piazza in cima alla collina tra la fortezza stellata e la Certosa di San Martino offre il panorama più iconico su Napoli. Il museo della Certosa ospita notevole arte barocca, presepi storici e una collezione di imbarcazioni d’epoca.",
            fr: "La place au sommet de la colline entre la forteresse étoilée et la Certosa di San Martino offre le panorama le plus icônique de Naples. Le musée de la Certosa abrite un art baroque remarquable, des crèches historiques et une collection de navires.",
            es: "La plaza en la cima de la colina entre la fortaleza estrellada y la Certosa di San Martino ofrece el panorama más icónico de Nápoles. El museo de la Certosa alberga notable arte barroco, belenes históricos y una colección de embarcaciones."
        },
        distanza: { en:"~20 min by funicular", it:"~20 min in funicolare", fr:"~20 min en funiculaire", es:"~20 min en funicular" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Certosa: Thu – Tue", it:"Certosa: Gio – Mar", fr:"Certosa: Jeu – Mar", es:"Certosa: Jue – Mar" }, ore:"8:30 – 19:30" },
                { giorni:{ en:"Certosa: Wednesday", it:"Certosa: Mercoledì", fr:"Certosa: Mercredi", es:"Certosa: Miércoles" }, ore:{ en:"Closed", it:"Chiuso", fr:"Fermé", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Certosa (full)", it:"Certosa (intero)", fr:"Certosa (plein)", es:"Certosa (normal)" }, prezzo:"€6" },
                { tipo:{ en:"Castel Sant’Elmo", it:"Castel Sant’Elmo", fr:"Castel Sant’Elmo", es:"Castel Sant’Elmo" }, prezzo:"€5" },
                { tipo:{ en:"Piazza (panorama)", it:"Piazza (panorama)", fr:"Place (panorama)", es:"Plaza (panorama)" }, prezzo:"Free" }
            ],
            note: { en:"Combined ticket Castel + Certosa: €8. Reach via Chiaia or Montesanto funicular", it:"Biglietto combinato Castel + Certosa: €8. Raggiungibile con funicolare di Chiaia o Montesanto", fr:"Billet combiné Castel + Certosa : €8. Accessible par le funiculaire de Chiaia ou Montesanto", es:"Entrada combinada Castel + Certosa: €8. Accesible en funicular de Chiaia o Montesanto" }
        }
    },
    {
        id: "spagnolo", cat: "monument", coor: [40.85686314801832, 14.254399327863053],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkzIHhTqd3b4tDhhtwkE5ODW642sufO9Nlw&s",
        nome: { en:"Palazzo dello Spagnolo", it:"Palazzo dello Spagnolo", fr:"Palazzo dello Spagnolo", es:"Palazzo dello Spagnolo" },
        desc: {
            en: "A Baroque palace built in 1738 by the architect Ferdinando Sanfelice, famous for its breathtaking ‘star staircase’ (scala a ’naca) — a double-ramp external stairway with dramatic arched wings. A masterpiece of Neapolitan civil architecture.",
            it: "Un palazzo barocco costruito nel 1738 dall’architetto Ferdinando Sanfelice, famoso per la sua mozzafiato ‘scala a ’naca’ — una doppia rampa esterna con spettacolari ali arcuate. Un capolavoro dell’architettura civile napoletana.",
            fr: "Un palais baroque construit en 1738 par l’architecte Ferdinando Sanfelice, célèbre pour son impressionnant ‘escalier à naca’ — une double rampe extérieure avec des ailes arquées spectaculaires. Un chef-d’œuvre de l’architecture civile napolitaine.",
            es: "Un palacio barroco construido en 1738 por el arquitecto Ferdinando Sanfelice, famoso por su impresionante ‘escalera a naca’ — una doble rampa exterior con espectaculares alas arqueadas. Una obra maestra de la arquitectura civil napolitana."
        },
        distanza: { en:"~15 min walk", it:"~15 min a piedi", fr:"~15 min à pied", es:"~15 min a pie" },
        sempreAperto: true
    },
    {
        id: "monteechia", cat: "nature", coor: [40.830966614123085, 14.248118799978041],
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/21/45/48/caption.jpg?w=900&h=500&s=1",
        nome: { en:"Monte Echia", it:"Monte Echia", fr:"Monte Echia", es:"Monte Echia" },
        desc: {
            en: "The oldest inhabited hill in Naples, where the Greek colony of Parthenope was founded in the 7th century BC. Today it offers one of the most spectacular and lesser-known panoramic terraces over the gulf, the Castel dell'Ovo and the Vesuvius.",
            it: "Il colle pi\u00F9 antico abitato di Napoli, dove nel VII secolo a.C. sorse la colonia greca di Partenope. Oggi offre una delle terrazze panoramiche pi\u00F9 spettacolari e meno conosciute sul golfo, su Castel dell\u2019Ovo e sul Vesuvio.",
            fr: "La colline la plus ancienne de Naples, o\u00F9 fut fond\u00E9e au VIIe si\u00E8cle av. J.-C. la colonie grecque de Parthenope. Elle offre aujourd\u2019hui l\u2019une des terrasses panoramiques les plus spectaculaires et m\u00E9connues sur le golfe, le Castel dell\u2019Ovo et le V\u00E9suve.",
            es: "La colina m\u00E1s antigua habitada de N\u00E1poles, donde en el siglo VII a.C. se fund\u00F3 la colonia griega de Partenope. Hoy ofrece una de las terrazas panor\u00E1micas m\u00E1s espectaculares y menos conocidas sobre el golfo, el Castel dell\u2019Ovo y el Vesubio."
        },
        distanza: { en:"~30 min walk", it:"~30 min a piedi", fr:"~30 min \u00E0 pied", es:"~30 min a pie" },
        sempreAperto: true
    },
    {
        id: "catacombegennaro", cat: "museum", coor: [40.86175, 14.24985],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Catacombe_di_San_Gennaro_-_panoramio.jpg/1280px-Catacombe_di_San_Gennaro_-_panoramio.jpg",
        nome: { en:"Catacombs of San Gennaro", it:"Catacombe di San Gennaro", fr:"Catacombes de San Gennaro", es:"Catacumbas de San Genaro" },
        desc: {
            en: "The largest and most important early Christian catacombs in Southern Italy, dating back to the 2nd century AD. Carved into the tuff of the Rione Sanit\u00E0 hill, they hold extraordinary frescoes, mosaics and tombs of bishops and martyrs. A guided tour lasting about 45 minutes reveals 2000 years of Neapolitan history underground.",
            it: "Le catacombe paleocristiane pi\u00F9 grandi e importanti del Sud Italia, risalenti al II secolo d.C. Scavate nel tufo della collina del Rione Sanit\u00E0, conservano straordinari affreschi, mosaici e tombe di vescovi e martiri. Una visita guidata di circa 45 minuti svela 2000 anni di storia napoletana sottoterra.",
            fr: "Les plus grandes et importantes catacombes pal\u00E9ochr\u00E9tiennes du sud de l\u2019Italie, datant du IIe si\u00E8cle apr. J.-C. Creus\u00E9es dans le tuf de la colline du Rione Sanit\u00E0, elles conservent d\u2019extraordinaires fresques, mosa\u00EFques et tombeaux d\u2019\u00E9v\u00EAques et de martyrs. Une visite guid\u00E9e d\u2019environ 45 min r\u00E9v\u00E8le 2000 ans d\u2019histoire napolitaine souterraine.",
            es: "Las catacumbas paleocristianas m\u00E1s grandes e importantes del sur de Italia, que datan del siglo II d.C. Excavadas en la toba de la colina del Rione Sanit\u00E0, conservan extraordinarios frescos, mosaicos y tumbas de obispos y m\u00E1rtires. Una visita guiada de unos 45 minutos revela 2000 a\u00F1os de historia napolitana bajo tierra."
        },
        distanza: { en:"~25 min walk or Metro L1 \u2192 Materdei + 10 min walk", it:"~25 min a piedi o Metro L1 \u2192 Materdei + 10 min", fr:"~25 min \u00E0 pied ou M\u00E9tro L1 \u2192 Materdei + 10 min", es:"~25 min a pie o Metro L1 \u2192 Materdei + 10 min" },
        sempreAperto: false,
        ticketInfo: {
            orari: [{ giorni:{ en:"Every day", it:"Tutti i giorni", fr:"Tous les jours", es:"Todos los d\u00EDas" }, ore:"10:00 \u2013 17:00" }],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC9" },
                { tipo:{ en:"Reduced (ages 6\u201312)", it:"Ridotto (6\u201312 anni)", fr:"R\u00E9duit (6\u201312 ans)", es:"Reducido (6\u201312 a\u00F1os)" }, prezzo:"\u20AC7" },
                { tipo:{ en:"Under 6", it:"Under 6", fr:"Moins de 6 ans", es:"Menores de 6" }, prezzo:"Free" }
            ],
            note:{ en:"Guided tours only \u2014 depart every hour. Via Capodimonte 13, Rione Sanit\u00E0.", it:"Solo visite guidate \u2014 partenza ogni ora. Via Capodimonte 13, Rione Sanit\u00E0.", fr:"Visites guid\u00E9es uniquement \u2014 d\u00E9part toutes les heures. Via Capodimonte 13, Rione Sanit\u00E0.", es:"Solo visitas guiadas \u2014 salen cada hora. Via Capodimonte 13, Rione Sanit\u00E0." }
        }
    },
    {
        id: "piomonte", cat: "museum", coor: [40.85098, 14.25786],
        imgForce: "https://www.repstatic.it/content/localirep/img/rep-napoli/2024/05/11/100629280-fce13049-072e-42df-a1ba-b01e505c5ec7.jpg",
        nome: { en:"Pio Monte della Misericordia", it:"Pio Monte della Misericordia", fr:"Pio Monte della Misericordia", es:"Pio Monte della Misericordia" },
        desc: {
            en: "A hidden gem of Naples: a small Baroque church that houses one of the most important paintings of the 17th century \u2014 Caravaggio's 'Seven Acts of Mercy' (1607), painted for this very chapel. The dramatic chiaroscuro and emotional intensity of this single canvas are breathtaking. The upper gallery also contains works by Luca Giordano and Jusepe de Ribera.",
            it: "Un gioiello nascosto di Napoli: una piccola chiesa barocca che custodisce uno dei dipinti pi\u00F9 importanti del Seicento \u2014 le 'Sette opere di Misericordia' di Caravaggio (1607), realizzate proprio per questa cappella. Il drammatico chiaroscuro e l'intensit\u00E0 emotiva di questa tela sono mozzafiato. La galleria superiore ospita anche opere di Luca Giordano e Jusepe de Ribera.",
            fr: "Un joyau cach\u00E9 de Naples : une petite \u00E9glise baroque qui abrite l'une des peintures les plus importantes du XVIIe si\u00E8cle \u2014 les 'Sept Actes de Mis\u00E9ricorde' du Caravage (1607), peintes pour cette chapelle m\u00EAme. Le dramatique clair-obscur et l'intensit\u00E9 \u00E9motionnelle de cette toile sont saisissants. La galerie sup\u00E9rieure conserve aussi des \u0153uvres de Luca Giordano et Jusepe de Ribera.",
            es: "Una joya oculta de N\u00E1poles: una peque\u00F1a iglesia barroca que alberga una de las pinturas m\u00E1s importantes del siglo XVII \u2014 las 'Siete Obras de Misericordia' de Caravaggio (1607), pintadas para esta misma capilla. El dram\u00E1tico claroscuro y la intensidad emocional de este lienzo son impresionantes. La galer\u00EDa superior tambi\u00E9n contiene obras de Luca Giordano y Jusepe de Ribera."
        },
        distanza: { en:"~10 min walk", it:"~10 min a piedi", fr:"~10 min \u00E0 pied", es:"~10 min a pie" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Mon \u2013 Sat", it:"Lun \u2013 Sab", fr:"Lun \u2013 Sam", es:"Lun \u2013 S\u00E1b" }, ore:"9:00 \u2013 14:30" },
                { giorni:{ en:"Sunday", it:"Domenica", fr:"Dimanche", es:"Domingo" }, ore:{ en:"Closed", it:"Chiuso", fr:"Ferm\u00E9", es:"Cerrado" } }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC7" },
                { tipo:{ en:"Reduced", it:"Ridotto", fr:"R\u00E9duit", es:"Reducido" }, prezzo:"\u20AC5" }
            ],
            note:{ en:"Via dei Tribunali 253 \u2014 in the heart of the historic centre, near the Duomo.", it:"Via dei Tribunali 253 \u2014 nel cuore del centro storico, vicino al Duomo.", fr:"Via dei Tribunali 253 \u2014 au c\u0153ur du centre historique, pr\u00E8s du D\u00F4me.", es:"Via dei Tribunali 253 \u2014 en el coraz\u00F3n del centro hist\u00F3rico, cerca del Duomo." }
        }
    },
    {
        id: "pompei", cat: "daytrip", coor: [40.74927, 14.48541], dirTo: [40.85314, 14.26879],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pompeii_-_Osteria_della_Via_di_Mercurio_-_Landscape.jpg/1280px-Pompeii_-_Osteria_della_Via_di_Mercurio_-_Landscape.jpg",
        nome: { en:"Pompeii", it:"Pompei", fr:"Pomp\u00E9i", es:"Pompeya" },
        desc: {
            en: "The most famous archaeological site in the world: a Roman city frozen in time by the eruption of Mount Vesuvius in 79 AD. Walking through its streets, bakeries, temples and villas \u2014 with plaster casts of victims still in place \u2014 is an unforgettable experience. Allow at least 3 hours. Reachable by Circumvesuviana train from Napoli Centrale.",
            it: "Il sito archeologico pi\u00F9 famoso al mondo: una citt\u00E0 romana fermata nel tempo dall'eruzione del Vesuvio nel 79 d.C. Passeggiare tra le sue strade, le panetterie, i templi e le ville \u2014 con i calchi delle vittime ancora al loro posto \u2014 \u00E8 un'esperienza indimenticabile. Prevedete almeno 3 ore. Raggiungibile con la Circumvesuviana da Napoli Centrale.",
            fr: "Le site arch\u00E9ologique le plus c\u00E9l\u00E8bre au monde : une ville romaine fig\u00E9e dans le temps par l'\u00E9ruption du V\u00E9suve en 79 ap. J.-C. Se promener dans ses rues, boulangeries, temples et villas \u2014 avec les moulages des victimes encore en place \u2014 est une exp\u00E9rience inoubliable. Pr\u00E9voyez au moins 3 heures. Accessible en train Circumv\u00E9suvien depuis la Gare Centrale.",
            es: "El sitio arqueol\u00F3gico m\u00E1s famoso del mundo: una ciudad romana congelada en el tiempo por la erupci\u00F3n del Vesubio en el a\u00F1o 79 d.C. Pasear por sus calles, panader\u00EDas, templos y villas \u2014 con los moldes de yeso de las v\u00EDctimas a\u00FAn en su lugar \u2014 es una experiencia inolvidable. Reserva al menos 3 horas. Accesible en tren Circumvesuviana desde la Estaci\u00F3n Central."
        },
        distanza: { en:"~40 min by Circumvesuviana train from Napoli Centrale", it:"~40 min con Circumvesuviana da Napoli Centrale", fr:"~40 min en train Circumv\u00E9suvien depuis la Gare Centrale", es:"~40 min en tren Circumvesuviana desde la Estaci\u00F3n Central" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Apr \u2013 Oct", it:"Apr \u2013 Ott", fr:"Avr \u2013 Oct", es:"Abr \u2013 Oct" }, ore:"9:00 \u2013 19:00" },
                { giorni:{ en:"Nov \u2013 Mar", it:"Nov \u2013 Mar", fr:"Nov \u2013 Mar", es:"Nov \u2013 Mar" }, ore:"9:00 \u2013 17:00" }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC16" },
                { tipo:{ en:"EU ages 18\u201325", it:"EU 18\u201325 anni", fr:"UE 18\u201325 ans", es:"UE 18\u201325 a\u00F1os" }, prezzo:"\u20AC2" },
                { tipo:{ en:"Under 18 / Over 65 EU", it:"Under 18 / Over 65 UE", fr:"Moins 18 / Plus 65 UE", es:"Menos 18 / M\u00E1s 65 UE" }, prezzo:"Free" }
            ],
            note:{ en:"Free on the first Sunday of the month. Train: Circumvesuviana to 'Pompei Scavi \u2013 Villa dei Misteri', \u20AC2.80 each way.", it:"Gratuito la prima domenica del mese. Treno: Circumvesuviana fino a 'Pompei Scavi \u2013 Villa dei Misteri', \u20AC2,80 a/r.", fr:"Gratuit le premier dimanche du mois. Train : Circumv\u00E9suvien jusqu'\u00E0 'Pompei Scavi \u2013 Villa dei Misteri', \u20AC2,80 l'aller.", es:"Gratis el primer domingo del mes. Tren: Circumvesuviana hasta 'Pompei Scavi \u2013 Villa dei Misteri', \u20AC2,80 ida." }
        }
    },
    {
        id: "ercolano", cat: "daytrip", coor: [40.80560, 14.34820], dirTo: [40.85314, 14.26879],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ercolano_-_panoramio_%2868%29.jpg/1280px-Ercolano_-_panoramio_%2868%29.jpg",
        nome: { en:"Herculaneum", it:"Ercolano", fr:"Herculanum", es:"Herculano" },
        desc: {
            en: "Often overlooked in favour of Pompeii, Herculaneum was a wealthier Roman city and is far better preserved \u2014 wooden furniture, food, and even papyrus scrolls survived. Much smaller and less crowded, it can be explored in 2 hours. The site sits right in the modern town of Ercolano, just 20 minutes by train from Naples.",
            it: "Spesso trascurata a favore di Pompei, Ercolano era una citt\u00E0 romana pi\u00F9 ricca ed \u00E8 molto meglio conservata \u2014 sono sopravvissuti mobili in legno, cibo e persino rotoli di papiro. Molto pi\u00F9 piccola e meno affollata, si esplora in 2 ore. Il sito si trova nel centro della moderna Ercolano, a soli 20 minuti di treno da Napoli.",
            fr: "Souvent oubli\u00E9e au profit de Pomp\u00E9i, Herculanum \u00E9tait une ville romaine plus ais\u00E9e et est bien mieux conserv\u00E9e \u2014 mobilier en bois, nourriture et m\u00EAme des rouleaux de papyrus ont surv\u00E9cu. Beaucoup plus petite et moins fr\u00E9quent\u00E9e, elle se visite en 2 heures. Le site se trouve au c\u0153ur de la ville moderne d'Ercolano, \u00E0 seulement 20 minutes en train de Naples.",
            es: "A menudo ignorada en favor de Pompeya, Herculano era una ciudad romana m\u00E1s rica y est\u00E1 mucho mejor conservada \u2014 sobrevivieron muebles de madera, comida e incluso rollos de papiro. Mucho m\u00E1s peque\u00F1a y menos concurrida, se puede explorar en 2 horas. El yacimiento est\u00E1 en el centro de la moderna Ercolano, a solo 20 minutos en tren desde N\u00E1poles."
        },
        distanza: { en:"~20 min by Circumvesuviana train from Napoli Centrale", it:"~20 min con Circumvesuviana da Napoli Centrale", fr:"~20 min en train Circumv\u00E9suvien depuis la Gare Centrale", es:"~20 min en tren Circumvesuviana desde la Estaci\u00F3n Central" },
        sempreAperto: false,
        ticketInfo: {
            orari: [
                { giorni:{ en:"Apr \u2013 Oct", it:"Apr \u2013 Ott", fr:"Avr \u2013 Oct", es:"Abr \u2013 Oct" }, ore:"9:00 \u2013 19:00" },
                { giorni:{ en:"Nov \u2013 Mar", it:"Nov \u2013 Mar", fr:"Nov \u2013 Mar", es:"Nov \u2013 Mar" }, ore:"9:00 \u2013 17:00" }
            ],
            biglietti: [
                { tipo:{ en:"Full price", it:"Intero", fr:"Plein tarif", es:"Precio normal" }, prezzo:"\u20AC13" },
                { tipo:{ en:"EU ages 18\u201325", it:"EU 18\u201325 anni", fr:"UE 18\u201325 ans", es:"UE 18\u201325 a\u00F1os" }, prezzo:"\u20AC2" },
                { tipo:{ en:"Under 18 / Over 65 EU", it:"Under 18 / Over 65 UE", fr:"Moins 18 / Plus 65 UE", es:"Menos 18 / M\u00E1s 65 UE" }, prezzo:"Free" }
            ],
            note:{ en:"Free on the first Sunday of the month. Train: Circumvesuviana to 'Ercolano Scavi', \u20AC2.50 each way.", it:"Gratuito la prima domenica del mese. Treno: Circumvesuviana fino a 'Ercolano Scavi', \u20AC2,50 a/r.", fr:"Gratuit le premier dimanche du mois. Train : Circumv\u00E9suvien jusqu'\u00E0 'Ercolano Scavi', \u20AC2,50 l'aller.", es:"Gratis el primer domingo del mes. Tren: Circumvesuviana hasta 'Ercolano Scavi', \u20AC2,50 ida." }
        }
    },
    {
        id: "capri", cat: "daytrip", coor: [40.55008, 14.22907], dirTo: [40.83820, 14.25479],
        imgForce: "https://viaggioin.it/wp-content/uploads/2023/05/Capri.png",
        nome: { en:"Capri", it:"Capri", fr:"Capri", es:"Capri" },
        desc: {
            en: "The jewel of the Gulf of Naples: a glamorous island of dramatic cliffs, turquoise waters, the legendary Blue Grotto, the Gardens of Augustus and the ruins of Emperor Tiberius's Villa Jovis. Take the funicular up to Capri town for boutiques and views, or a bus to Anacapri for wilder scenery. Best visited on weekdays to avoid summer crowds.",
            it: "Il gioiello del Golfo di Napoli: un'isola affascinante di falesie drammatiche, acque turchesi, la leggendaria Grotta Azzurra, i Giardini di Augusto e le rovine della Villa Jovis dell'Imperatore Tiberio. Prendete la funicolare fino al centro di Capri per boutique e panorami, o un bus per Anacapri per paesaggi pi\u00F9 selvaggi. Meglio visitarla nei giorni feriali per evitare la calca estiva.",
            fr: "Le joyau du golfe de Naples : une \u00EEle glamour aux falaises spectaculaires, aux eaux turquoise, \u00E0 la l\u00E9gendaire Grotte Bleue, aux Jardins d'Auguste et aux ruines de la Villa Jovis de l'Empereur Tib\u00E8re. Prenez le funiculaire jusqu'au centre de Capri pour les boutiques et les panoramas, ou un bus vers Anacapri pour des paysages plus sauvages. Mieux vaut la visiter en semaine pour \u00E9viter les foules estivales.",
            es: "La joya del Golfo de N\u00E1poles: una glamorosa isla de acantilados dram\u00E1ticos, aguas turquesas, la legendaria Gruta Azul, los Jardines de Augusto y las ruinas de la Villa Jovis del Emperador Tiberio. Toma el funicular hasta el centro de Capri para las boutiques y las vistas, o un autob\u00FAs a Anacapri para paisajes m\u00E1s salvajes. Mejor visitarla entre semana para evitar las aglomeraciones veraniegas."
        },
        distanza: { en:"~50 min by hydrofoil from Molo Beverello", it:"~50 min con aliscafo da Molo Beverello", fr:"~50 min en hydroglisseur depuis Molo Beverello", es:"~50 min en aliscafo desde Molo Beverello" },
        sempreAperto: true,
        ticketInfo: {
            orari: [{ giorni:{ en:"All year", it:"Tutto l'anno", fr:"Toute l'ann\u00E9e", es:"Todo el a\u00F1o" }, ore:{ en:"Several daily departures", it:"Diverse partenze giornaliere", fr:"Plusieurs d\u00E9parts quotidiens", es:"Varias salidas diarias" } }],
            biglietti: [
                { tipo:{ en:"Hydrofoil (aliscafo) one way", it:"Aliscafo andata", fr:"Hydroglisseur aller", es:"Aliscafo ida" }, prezzo:"~\u20AC22" },
                { tipo:{ en:"Ferry (traghetto) one way", it:"Traghetto andata", fr:"Ferry aller", es:"Ferry ida" }, prezzo:"~\u20AC15" }
            ],
            note:{ en:"Departs from Molo Beverello (already on the map). Book in advance in summer. Ferry is slower (~80 min) but cheaper.", it:"Partenze da Molo Beverello (gi\u00E0 in mappa). Prenotate in anticipo d'estate. Il traghetto \u00E8 pi\u00F9 lento (~80 min) ma pi\u00F9 economico.", fr:"D\u00E9part depuis Molo Beverello (d\u00E9j\u00E0 sur la carte). R\u00E9servez \u00E0 l'avance en \u00E9t\u00E9. Le ferry est plus lent (~80 min) mais moins cher.", es:"Sale desde Molo Beverello (ya en el mapa). Reserva con antelaci\u00F3n en verano. El ferry es m\u00E1s lento (~80 min) pero m\u00E1s barato." }
        }
    },
    {
        id: "ischia", cat: "daytrip", coor: [40.73680, 13.90056], dirTo: [40.83820, 14.25479],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ischia_panorama.jpg/1280px-Ischia_panorama.jpg",
        nome: { en:"Ischia", it:"Ischia", fr:"Ischia", es:"Ischia" },
        desc: {
            en: "The largest island in the Gulf of Naples, known for its volcanic thermal spas, sandy beaches and the towering Aragonese Castle rising from a rocky islet. Less touristy than Capri, Ischia is perfect for a relaxing day of hot springs (terme), sea and local cuisine. The island has several thermal parks open to the public.",
            it: "La pi\u00F9 grande isola del Golfo di Napoli, famosa per le terme vulcaniche, le spiagge sabbiose e l'imponente Castello Aragonese che si erge da uno scoglio. Meno turistica di Capri, Ischia \u00E8 perfetta per una giornata rilassante tra terme, mare e cucina locale. L'isola dispone di diversi parchi termali aperti al pubblico.",
            fr: "La plus grande \u00EEle du golfe de Naples, connue pour ses thermes volcaniques, ses plages de sable et l'imposant Ch\u00E2teau Aragonais dress\u00E9 sur un \u00EElot rocheux. Moins touristique que Capri, Ischia est parfaite pour une journ\u00E9e relaxante entre sources thermales, mer et cuisine locale. L'\u00EEle poss\u00E8de plusieurs parcs thermaux ouverts au public.",
            es: "La isla m\u00E1s grande del Golfo de N\u00E1poles, conocida por sus spas termales volc\u00E1nicos, playas de arena y el imponente Castillo Aragon\u00E9s que se alza desde un islote rocoso. Menos tur\u00EDstica que Capri, Ischia es perfecta para un d\u00EDa relajante de aguas termales, mar y cocina local. La isla cuenta con varios parques termales abiertos al p\u00FAblico."
        },
        distanza: { en:"~75 min by hydrofoil from Molo Beverello", it:"~75 min con aliscafo da Molo Beverello", fr:"~75 min en hydroglisseur depuis Molo Beverello", es:"~75 min en aliscafo desde Molo Beverello" },
        sempreAperto: true,
        ticketInfo: {
            orari: [{ giorni:{ en:"All year", it:"Tutto l'anno", fr:"Toute l'ann\u00E9e", es:"Todo el a\u00F1o" }, ore:{ en:"Several daily departures", it:"Diverse partenze giornaliere", fr:"Plusieurs d\u00E9parts quotidiens", es:"Varias salidas diarias" } }],
            biglietti: [
                { tipo:{ en:"Hydrofoil one way", it:"Aliscafo andata", fr:"Hydroglisseur aller", es:"Aliscafo ida" }, prezzo:"~\u20AC22" },
                { tipo:{ en:"Ferry one way", it:"Traghetto andata", fr:"Ferry aller", es:"Ferry ida" }, prezzo:"~\u20AC14" }
            ],
            note:{ en:"Departs from Molo Beverello. Also reachable from Pozzuoli (closer, cheaper). Thermal parks: Giardini Poseidon, Negombo, Castiglione.", it:"Partenze da Molo Beverello. Raggiungibile anche da Pozzuoli (pi\u00F9 vicino, pi\u00F9 economico). Parchi termali: Giardini Poseidon, Negombo, Castiglione.", fr:"D\u00E9part de Molo Beverello. Accessible aussi depuis Pozzuoli (plus proche, moins cher). Parcs thermaux : Giardini Poseidon, Negombo, Castiglione.", es:"Sale desde Molo Beverello. Tambi\u00E9n accesible desde Pozzuoli (m\u00E1s cercano, m\u00E1s barato). Parques termales: Giardini Poseidon, Negombo, Castiglione." }
        }
    },
    {
        id: "procida", cat: "daytrip", coor: [40.75817, 14.02820], dirTo: [40.83820, 14.25479],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Procida%2C_La_Corricella.jpg/1280px-Procida%2C_La_Corricella.jpg",
        nome: { en:"Procida", it:"Procida", fr:"Procida", es:"Procida" },
        desc: {
            en: "The smallest and most authentic island of the Gulf: a fishing village barely touched by mass tourism, with brightly coloured houses tumbling down to the sea at the iconic Marina Corricella. Italian Capital of Culture 2022. No cars in the old village. Procida is the antidote to crowded Capri \u2014 raw, beautiful and genuinely Neapolitan.",
            it: "La pi\u00F9 piccola e autentica isola del Golfo: un borgo di pescatori quasi intatto dal turismo di massa, con case variopinte che scendono al mare nella pittoresca Marina Corricella. Capitale Italiana della Cultura 2022. Niente auto nel borgo antico. Procida \u00E8 l'antidoto alla Capri affollata \u2014 autentica, bellissima e genuinamente napoletana.",
            fr: "La plus petite et la plus authentique \u00EEle du golfe : un village de p\u00EAcheurs \u00E0 peine touch\u00E9 par le tourisme de masse, avec ses maisons color\u00E9es qui d\u00E9gringolent jusqu'\u00E0 la mer \u00E0 la pittoresque Marina Corricella. Capitale italienne de la Culture 2022. Pas de voitures dans le vieux village. Procida est l'antidote \u00E0 une Capri bond\u00E9e \u2014 brute, belle et authentiquement napolitaine.",
            es: "La isla m\u00E1s peque\u00F1a y aut\u00E9ntica del Golfo: un pueblo pesquero apenas tocado por el turismo masivo, con casas de colores que descienden hasta el mar en la pintoresca Marina Corricella. Capital Italiana de la Cultura 2022. Sin coches en el casco antiguo. Procida es el ant\u00EDdoto a la abarrotada Capri \u2014 cruda, hermosa y genuinamente napolitana."
        },
        distanza: { en:"~35 min by hydrofoil from Molo Beverello", it:"~35 min con aliscafo da Molo Beverello", fr:"~35 min en hydroglisseur depuis Molo Beverello", es:"~35 min en aliscafo desde Molo Beverello" },
        sempreAperto: true,
        ticketInfo: {
            orari: [{ giorni:{ en:"All year", it:"Tutto l'anno", fr:"Toute l'ann\u00E9e", es:"Todo el a\u00F1o" }, ore:{ en:"Several daily departures", it:"Diverse partenze giornaliere", fr:"Plusieurs d\u00E9parts quotidiens", es:"Varias salidas diarias" } }],
            biglietti: [
                { tipo:{ en:"Hydrofoil one way", it:"Aliscafo andata", fr:"Hydroglisseur aller", es:"Aliscafo ida" }, prezzo:"~\u20AC15" },
                { tipo:{ en:"Ferry one way", it:"Traghetto andata", fr:"Ferry aller", es:"Ferry ida" }, prezzo:"~\u20AC12" }
            ],
            note:{ en:"Departs from Molo Beverello. The most affordable island getaway from Naples.", it:"Partenze da Molo Beverello. La gita alle isole pi\u00F9 economica da Napoli.", fr:"D\u00E9part de Molo Beverello. L'escapade insulaire la plus abordable au d\u00E9part de Naples.", es:"Sale desde Molo Beverello. La escapada isle\u00F1a m\u00E1s asequible desde N\u00E1poles." }
        }
    }
];

const WIKI_PAGES = {
    "Piazza del Plebiscito": "Piazza_del_Plebiscito",
    "Piazza del Plebiscito & Royal Palace": "Piazza_del_Plebiscito",
    "Piazza del Plebiscito e Palazzo Reale": "Piazza_del_Plebiscito",
    "Piazza del Plebiscito & Palais Royal": "Piazza_del_Plebiscito",
    "Piazza del Plebiscito y Palacio Real": "Piazza_del_Plebiscito",
    "Castel dell'Ovo": "Castel_dell'Ovo",
    "Maschio Angioino": "Castel_Nuovo",
    "Galleria Umberto I": "Galleria_Umberto_I",
    "Galerie Umberto I": "Galleria_Umberto_I",
    "Galer\u00EDa Umberto I": "Galleria_Umberto_I",
    "Museo Archeologico Nazionale": "National_Archaeological_Museum,_Naples",
    "Mus\u00E9e Arch\u00E9ologique National": "National_Archaeological_Museum,_Naples",
    "Museo Arqueol\u00F3gico Nacional": "National_Archaeological_Museum,_Naples",
    "Napoli Sotterranea": "Napoli_sotterranea",
    "Naples Souterraine": "Napoli_sotterranea",
    "N\u00E1poles Subterr\u00E1nea": "Napoli_sotterranea",
    "Naples Cathedral": "Naples_Cathedral",
    "Duomo di Napoli": "Naples_Cathedral",
    "Cath\u00E9drale de Naples": "Naples_Cathedral",
    "Catedral de N\u00E1poles": "Naples_Cathedral",
    "Castel Sant'Elmo": "Castel_Sant'Elmo",
    "Molo Beverello": "Port_of_Naples",
    "Embarcad\u00E8re Beverello": "Port_of_Naples",
    "Muelle Beverello": "Port_of_Naples",
    "Naples Central Station": "Naples_Central_Station",
    "Stazione Napoli Centrale": "Naples_Central_Station",
    "Gare Centrale de Naples": "Naples_Central_Station",
    "Estaci\u00F3n Central de N\u00E1poles": "Naples_Central_Station",
    "Lungomare Caracciolo": "Via_Francesco_Caracciolo,_Naples",
    "Promenade Caracciolo": "Via_Francesco_Caracciolo,_Naples",
    "Paseo Mar\u00EDtimo Caracciolo": "Via_Francesco_Caracciolo,_Naples",
    "Teatro San Carlo": "Teatro_di_San_Carlo",
    "Th\u00E9\u00E2tre San Carlo": "Teatro_di_San_Carlo",
    "Fontanelle Cemetery": "Cimitero_delle_Fontanelle",
    "Cimitero delle Fontanelle": "Cimitero_delle_Fontanelle",
    "Cimeti\u00E8re des Fontanelle": "Cimitero_delle_Fontanelle",
    "Cementerio de las Fontanelle": "Cimitero_delle_Fontanelle",
    "Santa Chiara Basilica & Cloister": "Basilica_of_Santa_Chiara,_Naples",
    "Basilica e Chiostro di Santa Chiara": "Basilica_of_Santa_Chiara,_Naples",
    "Bourbon Tunnel": "Bourbon_Tunnel",
    "Tunnel Borbonico": "Bourbon_Tunnel",
    "Tunnel Bourbon": "Bourbon_Tunnel",
    "Capodimonte Museum & Park": "National_Museum_of_Capodimonte",
    "Museo e Bosco di Capodimonte": "National_Museum_of_Capodimonte",
    "MADRE Museum": "Madre_(museum)",
    "Museo Madre": "Madre_(museum)",
    "Palazzo dello Spagnolo": "Palazzo_dello_Spagnolo",
    "Catacombs of San Gennaro": "Catacombs_of_San_Gennaro",
    "Catacombe di San Gennaro": "Catacombs_of_San_Gennaro",
    "Catacombes de San Gennaro": "Catacombs_of_San_Gennaro",
    "Catacumbas de San Genaro": "Catacombs_of_San_Gennaro",
    "Cappella Sansevero & Cristo Velato": "Cappella_Sansevero",
    "Cappella Sansevero e Cristo Velato": "Cappella_Sansevero",
    "Chapelle Sansevero & Christ Voilé": "Cappella_Sansevero",
    "Capilla Sansevero & Cristo Velado": "Cappella_Sansevero",
    "Pio Monte della Misericordia": "Pio_Monte_della_Misericordia",
    "Pompeii": "Pompeii",
    "Pompei": "Pompeii",
    "Pompéi": "Pompeii",
    "Pompeya": "Pompeii",
    "Herculaneum": "Herculaneum",
    "Ercolano": "Herculaneum",
    "Herculanum": "Herculaneum",
    "Herculano": "Herculaneum",
    "Capri": "Capri",
    "Ischia": "Ischia",
    "Procida": "Procida",
    // POIs senza wiki precedente
    "Museo Jago": "Jago_(sculptor)",
    "Museo di Jago": "Jago_(sculptor)",
    "Musée Jago": "Jago_(sculptor)",
    "San Gregorio Armeno": "San_Gregorio_Armeno",
    "Gesù Nuovo Church": "Gesù_Nuovo",
    "Chiesa del Gesù Nuovo": "Gesù_Nuovo",
    "Église du Gesù Nuovo": "Gesù_Nuovo",
    "Iglesia del Gesú Nuevo": "Gesú_Nuevo",
    "Castel Sant’Elmo & Piazza San Martino": "Certosa_di_San_Martino",
    "Castel Sant’Elmo e P.za San Martino": "Certosa_di_San_Martino",
    "Castel Sant’Elmo & Place San Martino": "Certosa_di_San_Martino",
    "Castel Sant’Elmo y Plaza San Martino": "Certosa_di_San_Martino",
    "Monte Echia": "Monte_Echia"
};

const CATEGORIE = {
    monument: { color:"#C9A84C", emoji:"\u{1F3DB}\uFE0F" },
    museum:   { color:"#7B6FA0", emoji:"\u{1F3A8}" },
    transport:{ color:"#4A7BC4", emoji:"\u{1F6A2}" },
    nature:   { color:"#5A9E6A", emoji:"\u{1F305}" },
    daytrip:  { color:"#E07B54", emoji:"\u26F5" }
};

// ── Soul Art Hotel – TRANSLATIONS ──────────────────────────────────────────
// MOBILE_TAB_LABELS · HOTEL_STRINGS · T

// ── MOBILE TAB LABEL TRANSLATIONS ────────────────────────────────────────────
const MOBILE_TAB_LABELS = {
    en: { map:"Map", places:"Places", transit:"Transport", hotel:"Hotel" },
    it: { map:"Mappa", places:"Luoghi", transit:"Trasporti", hotel:"Hotel" },
    fr: { map:"Carte", places:"Lieux", transit:"Transports", hotel:"H\u00F4tel" },
    es: { map:"Mapa", places:"Lugares", transit:"Transportes", hotel:"Hotel" }
};


const HOTEL_STRINGS = {
    en: {
        reception_title: "Reception",
        reception_desc: "Open 24 hours, 7 days a week",
        reception_badge: "24/7",
        door_title: "Front Door Code",
        door_sub: "Enter the code on the keypad to open the door",
        contacts_title: "Contacts",
        phone_label: "Phone",
        whatsapp_label: "WhatsApp",
        address_title: "Address",
        address_value: "Piazza Carit\u00E0 32, Naples",
        wifi_title: "Wi-Fi",
        wifi_desc: "Free Wi-Fi throughout the hotel. Ask at reception for the password.",
        checkin_title: "Check-in / Check-out",
        checkin_desc: "Check-in from 14:00 \u2022 Check-out by 11:00"
    },
    it: {
        reception_title: "Reception",
        reception_desc: "Aperta 24 ore su 24, 7 giorni su 7",
        reception_badge: "24/7",
        door_title: "Codice Portone",
        door_sub: "Inserisci il codice sul tastierino per aprire il portone",
        contacts_title: "Contatti",
        phone_label: "Telefono",
        whatsapp_label: "WhatsApp",
        address_title: "Indirizzo",
        address_value: "Piazza Carit\u00E0 32, Napoli",
        wifi_title: "Wi-Fi",
        wifi_desc: "Wi-Fi gratuito in tutto l\u2019hotel. Chiedere la password in reception.",
        checkin_title: "Check-in / Check-out",
        checkin_desc: "Check-in dalle 14:00 \u2022 Check-out entro le 11:00"
    },
    fr: {
        reception_title: "R\u00E9ception",
        reception_desc: "Ouverte 24h/24, 7j/7",
        reception_badge: "24/7",
        door_title: "Code de la Porte",
        door_sub: "Entrez le code sur le clavier pour ouvrir la porte",
        contacts_title: "Contacts",
        phone_label: "T\u00E9l\u00E9phone",
        whatsapp_label: "WhatsApp",
        address_title: "Adresse",
        address_value: "Piazza Carit\u00E0 32, Naples",
        wifi_title: "Wi-Fi",
        wifi_desc: "Wi-Fi gratuit dans tout l\u2019h\u00F4tel. Demandez le mot de passe \u00E0 la r\u00E9ception.",
        checkin_title: "Check-in / Check-out",
        checkin_desc: "Check-in \u00E0 partir de 14h00 \u2022 Check-out avant 11h00"
    },
    es: {
        reception_title: "Recepci\u00F3n",
        reception_desc: "Abierta las 24 horas, 7 d\u00EDas a la semana",
        reception_badge: "24/7",
        door_title: "C\u00F3digo del Port\u00F3n",
        door_sub: "Introduce el c\u00F3digo en el teclado para abrir la puerta",
        contacts_title: "Contactos",
        phone_label: "Tel\u00E9fono",
        whatsapp_label: "WhatsApp",
        address_title: "Direcci\u00F3n",
        address_value: "Piazza Carit\u00E0 32, N\u00E1poles",
        wifi_title: "Wi-Fi",
        wifi_desc: "Wi-Fi gratuito en todo el hotel. Pide la contrase\u00F1a en recepci\u00F3n.",
        checkin_title: "Check-in / Check-out",
        checkin_desc: "Check-in desde las 14:00 \u2022 Check-out antes de las 11:00"
    }
};

function renderHotelInfo(lang) {
    const s = HOTEL_STRINGS[lang] || HOTEL_STRINGS.en;
    const el = document.getElementById("panel-tab-hotel");
    el.innerHTML = `
        <div class="hotel-info-section">
            <div class="hotel-info-title">${s.reception_title}</div>
            <div class="hotel-info-card">
                <div class="hotel-info-row">
                    <div class="hotel-info-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="18" width="28" height="11" rx="2" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" stroke-width="1.5"/>
                          <rect x="5" y="20.5" width="22" height="6" rx="1" fill="#C9A84C" opacity="0.25"/>
                          <circle cx="16" cy="13" r="5" stroke="#C9A84C" stroke-width="1.5" fill="#C9A84C" opacity="0.1"/>
                          <path d="M11 18c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M9 29v-2M23 29v-2" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M8 23h3M21 23h3" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
                        </svg>
                    </div>
                    <div class="hotel-info-text">
                        <h4>${s.reception_title}</h4>
                        <p>${s.reception_desc}</p>
                    </div>
                </div>
            </div>
            <div class="hotel-info-card">
                <div class="hotel-info-row">
                    <div class="hotel-info-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="12" stroke="#C9A84C" stroke-width="1.5" fill="#C9A84C" opacity="0.08"/>
                          <path d="M16 9v7l4 2.5" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="hotel-info-text">
                        <h4>${s.checkin_title}</h4>
                        <p>${s.checkin_desc}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="hotel-info-section">
            <div class="hotel-info-title">${s.door_title}</div>
            <div class="hotel-code-box">
                <div class="hotel-code-label">${s.door_title}</div>
                <div class="hotel-code-value">17+ok</div>
                <div class="hotel-code-sub">${s.door_sub}</div>
            </div>
        </div>

        <div class="hotel-info-section">
            <div class="hotel-info-title">${s.contacts_title}</div>
            <a class="hotel-contact-btn" href="tel:+390811847088">
                <div class="hotel-contact-icon phone">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#1565C0"/>
                    </svg>
                </div>
                <div class="hotel-contact-text">
                    <span>${s.phone_label}</span>
                    <strong>+39 081-18470880</strong>
                </div>
                <span class="hotel-contact-arrow">&#x203A;</span>
            </a>
            <a class="hotel-contact-btn" href="https://wa.me/393939124682" target="_blank">
                <div class="hotel-contact-icon whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#2E7D32"/>
                      <path d="M11.99 2C6.476 2 2 6.477 2 11.99c0 1.79.468 3.47 1.28 4.934L2 22l5.233-1.237A9.953 9.953 0 0011.99 22C17.524 22 22 17.523 22 11.99 22 6.476 17.524 2 11.99 2zm0 18.18a8.177 8.177 0 01-4.17-1.143l-.3-.178-3.1.732.78-2.98-.195-.307A8.178 8.178 0 013.82 11.99c0-4.508 3.663-8.17 8.17-8.17 4.508 0 8.17 3.662 8.17 8.17 0 4.507-3.662 8.17-8.17 8.17z" fill="#2E7D32"/>
                    </svg>
                </div>
                <div class="hotel-contact-text">
                    <span>${s.whatsapp_label}</span>
                    <strong>+39 393-9124682</strong>
                </div>
                <span class="hotel-contact-arrow">&#x203A;</span>
            </a>
            <div class="hotel-info-card" style="margin-top:4px">
                <div class="hotel-info-row">
                    <div class="hotel-info-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#C9A84C"/>
                        </svg>
                    </div>
                    <div class="hotel-info-text">
                        <h4>${s.address_title}</h4>
                        <p>${s.address_value}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="hotel-info-section">
            <div class="hotel-info-title">${s.wifi_title}</div>
            <div class="hotel-info-card">
                <div class="hotel-info-row">
                    <div class="hotel-info-icon">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 9l2 2c5.52-5.52 14.48-5.52 20 0l2-2C18.93 2.93 5.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" fill="#C9A84C"/>
                        </svg>
                    </div>
                    <div class="hotel-info-text">
                        <h4>${s.wifi_title}</h4>
                        <p>${s.wifi_desc}</p>
                    </div>
                </div>
            </div>
        </div>`;
}

// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const T = {
    en: {
        subtitle: "Guest Guide",
        all: "All", monument: "Monuments", museum: "Museums",
        transport: "Transport", nature: "Viewpoints", daytrip: "Day Trips",
        catLabel: { monument:"Monument", museum:"Museum", transport:"Transport", nature:"Viewpoint", daytrip:"Day Trip" },
        fromHotel: "From the hotel",
        hours: "Hours", tickets: "Tickets",
        ticketTitle: "\u{1F550} Opening Hours & Tickets",
        directions: "Directions",
        youAreHere: "You are here \u2736",
        free: "Free",
        closed: "Closed"
    },
    it: {
        subtitle: "Guest Guide",
        all: "Tutti", monument: "Monumenti", museum: "Musei",
        transport: "Trasporti", nature: "Panoramici", daytrip: "Gite",
        catLabel: { monument:"Monumento", museum:"Museo", transport:"Trasporti", nature:"Punto Panoramico", daytrip:"Gita di un giorno" },
        fromHotel: "Dall'hotel",
        hours: "Orari", tickets: "Biglietti",
        ticketTitle: "\u{1F550} Orari & Biglietti",
        directions: "Indicazioni",
        youAreHere: "Siete qui \u2736",
        free: "Gratuito",
        closed: "Chiuso"
    },
    fr: {
        subtitle: "Guest Guide",
        all: "Tout", monument: "Monuments", museum: "Mus\u00E9es",
        transport: "Transports", nature: "Points de vue", daytrip: "Excursions",
        catLabel: { monument:"Monument", museum:"Mus\u00E9e", transport:"Transport", nature:"Point de vue", daytrip:"Excursion" },
        fromHotel: "De l'h\u00F4tel",
        hours: "Horaires", tickets: "Billets",
        ticketTitle: "\u{1F550} Horaires & Billets",
        directions: "Itin\u00E9raire",
        youAreHere: "Vous \u00EAtes ici \u2736",
        free: "Gratuit",
        closed: "Ferm\u00E9"
    },
    es: {
        subtitle: "Guest Guide",
        all: "Todo", monument: "Monumentos", museum: "Museos",
        transport: "Transportes", nature: "Miradores", daytrip: "Excursiones",
        catLabel: { monument:"Monumento", museum:"Museo", transport:"Transporte", nature:"Mirador", daytrip:"Excursión" },
        fromHotel: "Desde el hotel",
        hours: "Horario", tickets: "Entradas",
        ticketTitle: "\u{1F550} Horario & Entradas",
        directions: "C\u00F3mo llegar",
        youAreHere: "Est\u00E1is aqu\u00ED \u2736",
        free: "Gratis",
        closed: "Cerrado"
    }
};

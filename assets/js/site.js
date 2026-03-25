const SITE = {
  name: "Alix Nails & Hair",
  tagline: "Nail & Hair Spa en Condado Mall",
  description:
    "Alix Nails & Hair es un Nail & Hair Spa en Condado Mall con reservas por WhatsApp, cuidado de uñas, estilismo capilar y atención por cita.",
  phoneRaw: "+50762765890",
  phoneDisplay: "+507 6276-5890",
  whatsapp: "https://wa.me/50762765890",
  instagram:
    "https://www.instagram.com/alixnailsandhair?igsh=MWZuYjRzMTVmazh3Yw==",
  address: "Condado Mall, primer piso, local 50.",
  mapQuery: "Condado Mall, Primer Piso, Local 50",
  hoursNote: "Atención por cita y confirmación directa por WhatsApp.",
  hours: [
    "Lunes a sábado: horario sujeto a confirmación",
    "Domingo: consulta disponibilidad"
  ],
  navHome: [
    { href: "#top", label: "Inicio", section: "top" },
    { href: "#experience", label: "Experiencia", section: "experience" },
    { href: "#services", label: "Servicios", section: "services" },
    { href: "#testimonials", label: "Reseñas", section: "testimonials" },
    { href: "#gallery", label: "Galería", section: "gallery" },
    { href: "#faq", label: "FAQ", section: "faq" },
    { href: "#contact", label: "Contacto", section: "contact" }
  ],
  navPages: [
    { href: "index.html", label: "Inicio", page: "home" },
    { href: "about.html", label: "Nosotros", page: "about" },
    { href: "services.html", label: "Servicios", page: "services" },
    { href: "contact.html", label: "Contacto", page: "contact" }
  ],
  legalNav: [
    { href: "policy.html", label: "Política de privacidad", page: "policy" },
    { href: "terms.html", label: "Términos y condiciones", page: "terms" }
  ],
  serviceGroups: [
    {
      title: "Manos en calma",
      lead:
        "Una selección de manicure, maquillaje de uñas y acabados con enfoque en armonía visual, duración y detalle.",
      items: [
        "Manicure y pedicure",
        "Maquillaje de uñas",
        "Gel y refuerzo",
        "Nail art personalizado",
        "Mantenimiento y retoques"
      ]
    },
    {
      title: "Cabello con movimiento",
      lead:
        "Cortes, brushing, secados y peinados pensados para acompañar tu estilo con ligereza y presencia.",
      items: [
        "Hair styling",
        "Haircut",
        "Hair dressing",
        "Brushing y secados",
        "Tratamientos capilares"
      ]
    },
    {
      title: "Color y ocasión",
      lead:
        "Servicios para quienes buscan una cita más personalizada, un cambio visible o preparación para un momento especial.",
      items: [
        "Hair dyeing y coloración",
        "Retoque de raíz",
        "Valoración para cambios de look",
        "Peinados para eventos",
        "Maquillaje social sujeto a consulta"
      ]
    }
  ],
  values: [
    {
      title: "Ritmo sereno",
      text:
        "La experiencia se diseña para que cada cita se sienta clara, cómoda y con el tiempo necesario."
    },
    {
      title: "Detalle que permanece",
      text:
        "El resultado final importa tanto como la sensación de orden, limpieza y equilibrio en cada acabado."
    },
    {
      title: "Acompañamiento cercano",
      text:
        "Desde la primera consulta hasta la confirmación de tu cita, todo busca sentirse simple y bien atendido."
    }
  ],
  process: [
    {
      title: "Comparte tu idea",
      text:
        "Cuéntanos qué servicio te interesa y, si quieres, envía una referencia para orientar mejor la cita."
    },
    {
      title: "Confirmamos tu momento",
      text:
        "Revisamos horario, duración estimada y cualquier detalle importante antes de confirmar disponibilidad."
    },
    {
      title: "Disfruta la experiencia",
      text:
        "La cita se vive con foco en bienestar, atención cuidada y un resultado que se sienta tuyo."
    }
  ],
  faq: [
    {
      question: "¿Cómo puedo reservar una cita?",
      answer:
        "Puedes usar el formulario de reservas o escribir por WhatsApp. La confirmación final siempre se coordina directamente con el spa."
    },
    {
      question: "¿Puedo pedir orientación antes de reservar?",
      answer:
        "Sí. Si tienes dudas sobre uñas, color, peinados o mantenimiento, puedes escribirnos y te ayudamos a elegir el servicio adecuado."
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "Nos encuentras en Condado Mall, primer piso, local 50, con acceso directo al mapa desde el sitio."
    },
    {
      question: "¿Atienden solo con cita?",
      answer:
        "La atención se organiza por cita para cuidar mejor los tiempos y confirmar disponibilidad con antelación."
    }
  ],
  contactChannels: [
    {
      title: "WhatsApp",
      text:
        "La forma más directa para pedir disponibilidad, compartir referencias y coordinar tu visita.",
      href: "https://wa.me/50762765890",
      label: "Escribir por WhatsApp"
    },
    {
      title: "Llamada",
      text:
        "Si prefieres una conversación inmediata, también puedes comunicarte al número principal.",
      href: "tel:+50762765890",
      label: "Llamar al spa"
    },
    {
      title: "Instagram",
      text:
        "Explora referencias, acabados y la atmósfera visual del salón antes de tu cita.",
      href:
        "https://www.instagram.com/alixnailsandhair?igsh=MWZuYjRzMTVmazh3Yw==",
      label: "Ver Instagram"
    },
    {
      title: "Ubicación",
      text:
        "Visítanos en Condado Mall, primer piso, local 50, con guía directa desde Google Maps.",
      href: "",
      label: "Abrir mapa"
    }
  ]
};

window.SITE = SITE;

const selectOne = (selector, scope = document) => scope.querySelector(selector);
const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function mapUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE.mapQuery
  )}`;
}

function mapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.mapQuery
  )}&z=16&output=embed`;
}

function sharedActions(page) {
  if (page === "booking") {
    return {
      header: {
        href: SITE.whatsapp,
        label: "WhatsApp",
        external: true
      },
      footerPrimary: {
        href: SITE.whatsapp,
        label: "WhatsApp",
        external: true
      },
      footerSecondary: {
        href: "services.html",
        label: "Ver servicios",
        external: false
      }
    };
  }

  return {
    header: {
      href: "booking.html",
      label: "Reservar cita",
      external: false
    },
    footerPrimary: {
      href: "booking.html",
      label: "Reservar ahora",
      external: false
    },
    footerSecondary: {
      href: SITE.whatsapp,
      label: "WhatsApp",
      external: true
    }
  };
}

function createNavLink(item, page) {
  const isHome = page === "home";
  const isActive = isHome ? item.section === "top" : item.page === page;
  const sectionAttrs =
    isHome && item.section ? `data-section-link="${item.section}"` : "";
  const ariaCurrent = isActive ? ' aria-current="page"' : "";

  return `<a class="nav-link${isActive ? " is-active" : ""}" href="${item.href}" ${sectionAttrs}${ariaCurrent}>${item.label}</a>`;
}

function closeNav(toggle, nav) {
  if (!toggle || !nav) return;
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menú");
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

function openNav(toggle, nav) {
  if (!toggle || !nav) return;
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Cerrar menú");
  nav.classList.add("is-open");
  document.body.classList.add("nav-open");
}

function renderHeader() {
  const mount = selectOne("[data-site-header]");
  if (!mount) return;

  const page = document.body.dataset.page;
  const navItems = page === "home" ? SITE.navHome : SITE.navPages;
  const navLinks = navItems.map((item) => createNavLink(item, page)).join("");
  const actions = sharedActions(page);
  const headerTarget = actions.header.external
    ? `target="_blank" rel="noreferrer"`
    : "";

  mount.innerHTML = `
    <a class="skip-link" href="#main-content">Saltar al contenido</a>
    <header class="site-header">
      <div class="container nav-shell">
        <a class="brand" href="index.html" aria-label="Ir al inicio de ${SITE.name}">
          <img src="assets/img/alix-nails-hair.jpg" alt="Logo de ${SITE.name}" width="72" height="72" />
          <span class="brand-copy">
            <strong>${SITE.name}</strong>
            <small>${SITE.tagline}</small>
          </span>
        </a>
        <button
          class="nav-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded="false"
          aria-controls="site-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Navegación principal">
          ${navLinks}
          <a class="button button-small nav-cta" href="${actions.header.href}" ${headerTarget} aria-label="${actions.header.label} en ${SITE.name}">${actions.header.label}</a>
        </nav>
      </div>
    </header>
  `;

  const toggle = selectOne(".nav-toggle", mount);
  const nav = selectOne(".site-nav", mount);

  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeNav(toggle, nav);
    } else {
      openNav(toggle, nav);
    }
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeNav(toggle, nav));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav(toggle, nav);
  });
}

function renderFooter() {
  const mount = selectOne("[data-site-footer]");
  if (!mount) return;

  const page = document.body.dataset.page;
  const actions = sharedActions(page);
  const year = new Date().getFullYear();
  const pageLinks = SITE.navPages
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");
  const legalLinks = SITE.legalNav
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");
  const hours = SITE.hours.map((line) => `<li>${line}</li>`).join("");

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section class="footer-brand">
          <img src="assets/img/alix-nails-hair.jpg" alt="Logo de ${SITE.name}" width="88" height="88" />
          <div class="footer-copy">
            <h2>${SITE.name}</h2>
            <p>${SITE.description}</p>
          </div>
          <div class="button-row">
            <a class="button" href="${actions.footerPrimary.href}" ${actions.footerPrimary.external ? 'target="_blank" rel="noreferrer"' : ""}>${actions.footerPrimary.label}</a>
            <a class="button button-ghost" href="${actions.footerSecondary.href}" ${actions.footerSecondary.external ? 'target="_blank" rel="noreferrer"' : ""}>${actions.footerSecondary.label}</a>
          </div>
        </section>

        <section class="footer-section">
          <h3>Navegación</h3>
          <ul class="footer-links">${pageLinks}</ul>
          <div class="footer-legal">
            <h3>Legal</h3>
            <ul class="footer-links">${legalLinks}</ul>
          </div>
        </section>

        <section class="footer-section">
          <h3>Contacto</h3>
          <ul class="footer-links">
            <li><a href="tel:${SITE.phoneRaw}">${SITE.phoneDisplay}</a></li>
            <li><a href="${SITE.whatsapp}" target="_blank" rel="noreferrer">Escribir por WhatsApp</a></li>
            <li><a href="${SITE.instagram}" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="${mapUrl()}" target="_blank" rel="noreferrer">${SITE.address}</a></li>
          </ul>
          <div class="footer-hours">
            <h3>Horarios</h3>
            <p>${SITE.hoursNote}</p>
            <ul class="footer-links">${hours}</ul>
          </div>
        </section>

        <section class="footer-map">
          <div class="footer-map-heading">
            <h3>Condado Mall</h3>
            <a class="text-link" href="${mapUrl()}" target="_blank" rel="noreferrer">Abrir mapa</a>
          </div>
          <div class="footer-map-shell">
            <iframe
              title="Mapa de ${SITE.name}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="${mapEmbedUrl()}"
            ></iframe>
          </div>
        </section>
      </div>

      <div class="container footer-bottom">
        <small data-current-year>&copy; ${year} ${SITE.name}. Todos los derechos reservados.</small>
        <small>Nail & Hair Spa en Condado Mall con reservas por WhatsApp.</small>
      </div>
    </footer>

    <a
      class="floating-whatsapp"
      href="${SITE.whatsapp}"
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp con ${SITE.name}"
    >
      WhatsApp
    </a>

    <div class="mobile-cta" aria-label="Acciones rápidas de reserva">
      <a class="button" href="${actions.footerPrimary.href}" ${actions.footerPrimary.external ? 'target="_blank" rel="noreferrer"' : ""}>${actions.footerPrimary.label}</a>
      <a class="button button-secondary" href="${actions.footerSecondary.href}" ${actions.footerSecondary.external ? 'target="_blank" rel="noreferrer"' : ""}>${actions.footerSecondary.label}</a>
    </div>
  `;
}

function syncSharedContent() {
  selectAll("[data-business-name]").forEach((node) => {
    node.textContent = SITE.name;
  });

  selectAll("[data-address]").forEach((node) => {
    node.textContent = SITE.address;
  });

  selectAll("[data-phone]").forEach((node) => {
    node.textContent = SITE.phoneDisplay;
  });

  selectAll("[data-booking-note]").forEach((node) => {
    node.textContent = SITE.hoursNote;
  });

  selectAll("[data-whatsapp-link]").forEach((node) => {
    node.setAttribute("href", SITE.whatsapp);
  });

  selectAll("[data-instagram-link]").forEach((node) => {
    node.setAttribute("href", SITE.instagram);
  });

  selectAll("[data-phone-link]").forEach((node) => {
    node.setAttribute("href", `tel:${SITE.phoneRaw}`);
  });

  selectAll("[data-map-link]").forEach((node) => {
    node.setAttribute("href", mapUrl());
  });

  selectAll("[data-map-embed]").forEach((node) => {
    node.setAttribute("src", mapEmbedUrl());
  });
}

function populateServiceSelects() {
  const serviceOptions = SITE.serviceGroups
    .flatMap((group) => group.items)
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");

  selectAll("[data-service-select]").forEach((select) => {
    select.insertAdjacentHTML("beforeend", serviceOptions);
  });
}

function mountGrid(selector, items, template) {
  const mount = selectOne(selector);
  if (!mount) return;
  mount.innerHTML = items.map(template).join("");
}

function renderDynamicSections() {
  mountGrid("[data-service-groups]", SITE.serviceGroups, (group) => `
    <article class="service-detail" data-reveal>
      <span class="eyebrow">${group.title}</span>
      <p class="detail-lead">${group.lead}</p>
      <ul class="bullet-list">
        ${group.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <a class="text-link" href="booking.html">Reservar esta experiencia</a>
    </article>
  `);

  mountGrid("[data-about-values]", SITE.values, (item) => `
    <article class="editorial-point" data-reveal>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `);

  mountGrid("[data-process-steps]", SITE.process, (step) => `
    <article class="ritual-step" data-reveal>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </article>
  `);

  mountGrid("[data-contact-channels]", SITE.contactChannels, (channel) => `
    <article class="channel-card" data-reveal>
      <h3>${channel.title}</h3>
      <p>${channel.text}</p>
      <a class="text-link" href="${channel.href || mapUrl()}" target="_blank" rel="noreferrer">${channel.label}</a>
    </article>
  `);

  mountGrid("[data-faq-list]", SITE.faq, (item) => `
    <details class="faq-item" data-reveal>
      <summary>${item.question}</summary>
      <p>${item.answer}</p>
    </details>
  `);
}

function setupScrollState() {
  const header = selectOne(".site-header");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupReveal() {
  const elements = selectAll("[data-reveal]");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupSectionSpy() {
  if (document.body.dataset.page !== "home") return;

  const links = selectAll("[data-section-link]");
  const sections = links
    .map((link) => document.getElementById(link.dataset.sectionLink))
    .filter(Boolean);

  if (!sections.length) return;

  const updateActive = (sectionId) => {
    links.forEach((link) => {
      const isActive = link.dataset.sectionLink === sectionId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  updateActive("top");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target.id) {
        updateActive(visible.target.id);
      }
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.45, 0.7]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  syncSharedContent();
  populateServiceSelects();
  renderDynamicSections();
  setupScrollState();
  setupReveal();
  setupSectionSpy();
});

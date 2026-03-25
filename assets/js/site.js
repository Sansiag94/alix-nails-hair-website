const SITE = {
  name: "Alix Nails & Hair",
  tagline: "Nails, hair & styling en Condado Mall",
  description:
    "Nails salon y hair salon en Condado Mall con reservas por WhatsApp, diseño de uñas, color, cortes y peinados.",
  phoneRaw: "+50762765890",
  phoneDisplay: "+507 6276-5890",
  whatsapp: "https://wa.me/50762765890",
  instagram:
    "https://www.instagram.com/alixnailsandhair?igsh=MWZuYjRzMTVmazh3Yw==",
  address: "Condado Mall, primer piso, local 50.",
  mapQuery: "Condado Mall, Primer Piso, Local 50",
  hoursNote: "Atención por cita y confirmación por WhatsApp.",
  hours: [
    "Lunes a sábado: horario sujeto a confirmación",
    "Domingo: consultar disponibilidad"
  ],
  navHome: [
    { href: "#top", label: "Inicio", section: "top" },
    { href: "#about", label: "Nosotros", section: "about" },
    { href: "#services", label: "Servicios", section: "services" },
    { href: "#testimonials", label: "Reseñas", section: "testimonials" },
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
      title: "Uñas",
      lead:
        "Servicios para manos y pies con enfoque en limpieza, duración y diseño bien resuelto.",
      items: [
        "Maquillaje de uñas",
        "Nail art",
        "Manicure y pedicure",
        "Gel y refuerzo",
        "Mantenimiento"
      ]
    },
    {
      title: "Cabello",
      lead:
        "Opciones para diario, evento o refresh de imagen con acabado pulido y fácil de llevar.",
      items: [
        "Hair styling",
        "Haircut",
        "Hair dressing",
        "Secados y peinados",
        "Tratamientos capilares"
      ]
    },
    {
      title: "Color y ocasión",
      lead:
        "Ideal para quienes buscan una cita más personalizada o una preparación especial.",
      items: [
        "Hair dyeing y coloración",
        "Retoque de raíz",
        "Balayage sujeto a valoración",
        "Maquillaje social",
        "Peinados para eventos"
      ]
    }
  ],
  values: [
    {
      title: "Atención cercana",
      text:
        "Cada cita empieza entendiendo el resultado que quieres y el tiempo real que necesitas."
    },
    {
      title: "Acabado cuidado",
      text:
        "La prioridad está en un resultado limpio, favorecedor y consistente con tu estilo."
    },
    {
      title: "Proceso simple",
      text:
        "Reservar, confirmar y llegar al salón debe sentirse claro, rápido y cómodo."
    }
  ],
  process: [
    {
      title: "1. Cuéntanos tu idea",
      text:
        "Comparte el servicio que buscas y, si quieres, una referencia para orientar mejor la cita."
    },
    {
      title: "2. Confirmamos disponibilidad",
      text:
        "Revisamos horario, duración y detalles por WhatsApp antes de darte la confirmación."
    },
    {
      title: "3. Realizamos el servicio",
      text:
        "Trabajamos uñas o cabello con foco en detalle, comodidad y resultado final."
    }
  ],
  faq: [
    {
      question: "¿Cómo reservo una cita?",
      answer:
        "Puedes usar el formulario de reservas o escribir por WhatsApp. En ambos casos la coordinación se confirma directamente con el salón."
    },
    {
      question: "¿Puedo pedir cotización antes de reservar?",
      answer:
        "Sí. Puedes escribir por WhatsApp con una referencia de uñas o cabello y te orientamos según el servicio."
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "Estamos en Condado Mall, primer piso, local 50, con enlace directo al mapa dentro del sitio."
    },
    {
      question: "¿Atienden por orden de llegada?",
      answer:
        "La recomendación es reservar o confirmar por WhatsApp para evitar tiempos de espera."
    }
  ],
  contactChannels: [
    {
      title: "WhatsApp",
      text:
        "La vía más rápida para pedir disponibilidad, cotizar un servicio o enviar una referencia.",
      href: "https://wa.me/50762765890",
      label: "Escribir ahora"
    },
    {
      title: "Instagram",
      text:
        "Útil para ver inspiración, acabados y referencias visuales antes de tu cita.",
      href:
        "https://www.instagram.com/alixnailsandhair?igsh=MWZuYjRzMTVmazh3Yw==",
      label: "Ver perfil"
    },
    {
      title: "Llamada",
      text:
        "Si prefieres hablar directo con el salón, también puedes llamar al número principal.",
      href: "tel:+50762765890",
      label: "Llamar"
    },
    {
      title: "Ubicación",
      text:
        "Encuéntranos en Condado Mall, primer piso, local 50, con acceso directo al mapa.",
      href: "",
      label: "Abrir mapa"
    }
  ]
};

window.SITE = SITE;

const selectOne = (selector) => document.querySelector(selector);
const selectAll = (selector) => [...document.querySelectorAll(selector)];

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

function renderHeader() {
  const mount = selectOne("[data-site-header]");
  if (!mount) return;

  const page = document.body.dataset.page;
  const navItems = page === "home" ? SITE.navHome : SITE.navPages;
  const navLinks = navItems
    .map((item) => {
      const isActive =
        page === "home"
          ? item.section === "top"
            ? "is-active"
            : ""
          : item.page === page
            ? "is-active"
            : "";

      const sectionAttrs =
        page === "home" && item.section
          ? `data-section-link="${item.section}"`
          : "";

      return `<a class="nav-link ${isActive}" href="${item.href}" ${sectionAttrs}>${item.label}</a>`;
    })
    .join("");

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
        <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="site-nav">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Navegación principal">
          ${navLinks}
          <a class="button button-small" href="booking.html" aria-label="Reservar cita en Alix Nails & Hair">Reservar</a>
        </nav>
      </div>
    </header>
  `;

  const toggle = mount.querySelector(".nav-toggle");
  const nav = mount.querySelector(".site-nav");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav?.classList.toggle("is-open");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle?.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

function renderFooter() {
  const mount = selectOne("[data-site-footer]");
  if (!mount) return;

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
        <div class="footer-brand">
          <img src="assets/img/alix-nails-hair.jpg" alt="Logo de ${SITE.name}" width="86" height="86" />
          <h2>${SITE.name}</h2>
          <p>${SITE.description}</p>
          <div class="button-row">
            <a class="button" href="booking.html">Book now</a>
            <a class="button button-ghost" href="${SITE.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div>
          <h3>Explorar</h3>
          <ul class="footer-links">${pageLinks}</ul>
          <div class="footer-legal">
            <h3>Legal</h3>
            <ul class="footer-links">${legalLinks}</ul>
          </div>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul class="footer-links">
            <li><a href="tel:${SITE.phoneRaw}">${SITE.phoneDisplay}</a></li>
            <li><a href="${SITE.whatsapp}" target="_blank" rel="noreferrer">WhatsApp directo</a></li>
            <li><a href="${SITE.instagram}" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="${mapUrl()}" target="_blank" rel="noreferrer">${SITE.address}</a></li>
          </ul>
          <div class="footer-hours">
            <h3>Horarios</h3>
            <ul class="footer-links">${hours}</ul>
          </div>
        </div>
        <div class="footer-map">
          <h3>Ubicación</h3>
          <div class="footer-map-shell">
            <iframe
              title="Mapa de ${SITE.name}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="${mapEmbedUrl()}"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <small>&copy; ${year} ${SITE.name}. Todos los derechos reservados.</small>
        <small>Nails salon y hair salon en Condado Mall con reservas por WhatsApp.</small>
      </div>
    </footer>
    <a class="floating-whatsapp" href="${SITE.whatsapp}" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">WhatsApp</a>
    <div class="mobile-cta">
      <a class="button" href="booking.html">Book now</a>
      <a class="button button-secondary" href="${SITE.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
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
    <article class="content-block" data-reveal>
      <span class="eyebrow">${group.title}</span>
      <p class="detail-lead">${group.lead}</p>
      <ul class="bullet-list">
        ${group.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <a class="text-link" href="booking.html">Reservar este servicio</a>
    </article>
  `);

  mountGrid("[data-about-values]", SITE.values, (item) => `
    <article class="content-block" data-reveal>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `);

  mountGrid("[data-process-steps]", SITE.process, (step) => `
    <article class="content-block" data-reveal>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </article>
  `);

  mountGrid("[data-contact-channels]", SITE.contactChannels, (channel) => `
    <article class="content-block" data-reveal>
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
    { threshold: 0.15 }
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
      link.classList.toggle(
        "is-active",
        link.dataset.sectionLink === sectionId
      );
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
      rootMargin: "-35% 0px -50% 0px",
      threshold: [0.15, 0.35, 0.65]
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

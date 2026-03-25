const STORE = {
  contactDraft: "alix-contact-draft",
  bookingDraft: "alix-booking-draft",
  lastContact: "alix-last-contact",
  lastBooking: "alix-last-booking"
};

const formSelector = (selector) => document.querySelector(selector);

function readDraft(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

function writeDraft(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function saveDraft(form, key) {
  writeDraft(key, Object.fromEntries(new FormData(form).entries()));
}

function restoreDraft(form, key) {
  const data = readDraft(key);
  if (!data) return;

  Object.entries(data).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field && "value" in field) field.value = value;
  });
}

function status(form, text) {
  const node = form.querySelector("[data-form-status]");
  if (node) node.textContent = text;
}

function openWhatsApp(message) {
  const url = `${window.SITE.whatsapp}?text=${encodeURIComponent(message)}`;
  const popup = window.open(url, "_blank", "noopener");
  if (!popup) window.location.href = url;
}

function humanDate(value) {
  if (!value) return "Por definir";

  return new Intl.DateTimeFormat("es-PA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function renderSummary(selector, key, mode) {
  const mount = formSelector(selector);
  if (!mount) return;

  const data = readDraft(key);

  if (!data) {
    mount.innerHTML = `
      <div class="summary-card muted-card">
        <strong>Aún no hay una solicitud guardada</strong>
        <p>Cuando completes el formulario, aquí verás un resumen para retomar la conversación con facilidad.</p>
      </div>`;
    return;
  }

  mount.innerHTML =
    mode === "booking"
      ? `<div class="summary-card">
          <strong>Última solicitud preparada</strong>
          <p><span>Nombre:</span> ${data.name || "Sin nombre"}</p>
          <p><span>Servicio:</span> ${data.service || "Por definir"}</p>
          <p><span>Fecha:</span> ${humanDate(data.date)}</p>
          <p><span>Hora:</span> ${data.time || "Por definir"}</p>
          <p><span>Contacto:</span> ${data.phone || data.email || "No indicado"}</p>
        </div>`
      : `<div class="summary-card">
          <strong>Último mensaje preparado</strong>
          <p><span>Nombre:</span> ${data.name || "Sin nombre"}</p>
          <p><span>Servicio:</span> ${data.service_interest || "Consulta general"}</p>
          <p><span>Contacto:</span> ${data.phone || "No indicado"}</p>
          <p><span>Canal preferido:</span> ${data.contact_method || "WhatsApp"}</p>
        </div>`;
}

function setupDateMin() {
  const today = new Date().toISOString().split("T")[0];
  document
    .querySelectorAll('input[type="date"]')
    .forEach((input) => (input.min = today));
}

function setupContactForm() {
  const form = formSelector("[data-contact-form]");
  if (!form) return;

  restoreDraft(form, STORE.contactDraft);
  form.addEventListener("input", () => saveDraft(form, STORE.contactDraft));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    const message = [
      "Hola Alix Nails & Hair, me gustaría hacer una consulta desde la web.",
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      `Servicio de interés: ${data.service_interest || "Consulta general"}`,
      `Canal preferido: ${data.contact_method || "WhatsApp"}`,
      `Mensaje: ${data.message || "Sin detalles adicionales"}`
    ].join("\n");

    writeDraft(STORE.lastContact, data);
    localStorage.removeItem(STORE.contactDraft);
    form.reset();
    status(
      form,
      "Abrimos WhatsApp con tu mensaje listo para enviar. Si no se abre, puedes usar el botón de contacto directo."
    );
    renderSummary("[data-last-contact]", STORE.lastContact, "contact");
    openWhatsApp(message);
  });
}

function setupBookingForm() {
  const form = formSelector("[data-booking-form]");
  if (!form) return;

  restoreDraft(form, STORE.bookingDraft);
  form.addEventListener("input", () => saveDraft(form, STORE.bookingDraft));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    const message = [
      "Hola Alix Nails & Hair, me gustaría solicitar una cita desde la web.",
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      `Email: ${data.email || "No indicado"}`,
      `Servicio: ${data.service || "Por definir"}`,
      `Fecha preferida: ${humanDate(data.date)}`,
      `Hora preferida: ${data.time || "Por definir"}`,
      `Preferencia: ${data.preference || "Primera disponible"}`,
      `Notas: ${data.notes || "Sin notas adicionales"}`
    ].join("\n");

    writeDraft(STORE.lastBooking, data);
    localStorage.removeItem(STORE.bookingDraft);
    form.reset();
    status(
      form,
      "Tu solicitud quedó preparada y se abrirá en WhatsApp para seguir la coordinación directamente con el salón."
    );
    renderSummary("[data-last-booking]", STORE.lastBooking, "booking");
    openWhatsApp(message);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupDateMin();
  setupContactForm();
  setupBookingForm();
  renderSummary("[data-last-contact]", STORE.lastContact, "contact");
  renderSummary("[data-last-booking]", STORE.lastBooking, "booking");
});

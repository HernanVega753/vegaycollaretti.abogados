const practiceAreas = [
  {
    title: "Derecho Civil",
    text: "Asesoramiento integral en obligaciones, contratos, responsabilidad civil, derechos reales y conflictos entre particulares, con un enfoque preventivo y estratégico.",
  },
  {
    title: "Derecho Laboral",
    text: "Representación de trabajadores y empleadores en despidos, accidentes laborales, registración, indemnizaciones y conflictos derivados de la relación de trabajo.",
  },
  {
    title: "Derecho Comercial",
    text: "Asistencia jurídica para comerciantes, profesionales y empresas en contratos comerciales, reclamos, cobranzas y desarrollo de negocios.",
  },
  {
    title: "Daños y Perjuicios",
    text: "Reclamos por accidentes de tránsito, incumplimientos contractuales, responsabilidad profesional y cualquier hecho que genere un daño indemnizable.",
  },
  {
    title: "Contratos",
    text: "Redacción, revisión y negociación de contratos civiles y comerciales para brindar seguridad jurídica y prevenir futuros conflictos.",
  },
  {
    title: "Sucesiones",
    text: "Tramitación de sucesiones judiciales y extrajudiciales, declaratorias de herederos, particiones y asesoramiento integral a las familias.",
  },
  {
    title: "Mediación",
    text: "Promovemos soluciones consensuadas que permitan resolver conflictos de manera rápida, eficiente y preservando las relaciones entre las partes.",
  },
  {
    title: "Asesoramiento Empresarial",
    text: "Acompañamiento jurídico permanente para empresas y emprendedores mediante un asesoramiento preventivo orientado a la toma de decisiones.",
  },
];
const advantages = [
  {
    title: "Atención personalizada",
    text: "Cada cliente recibe un asesoramiento directo, cercano y adaptado a las particularidades de su caso.",
  },
  {
    title: "Compromiso profesional",
    text: "Asumimos cada asunto con responsabilidad, dedicación y un seguimiento constante.",
  },
  {
    title: "Comunicación clara",
    text: "Explicamos cada etapa del proceso con un lenguaje sencillo y transparente.",
  },
  {
    title: "Prevención de conflictos",
    text: "Buscamos anticipar riesgos mediante un asesoramiento jurídico preventivo.",
  },
  {
    title: "Estrategia jurídica",
    text: "Cada caso requiere una solución diferente. Diseñamos estrategias acordes a los objetivos de nuestros clientes.",
  },
  {
    title: "Ética y confianza",
    text: "Nuestra actuación profesional se basa en la confidencialidad, la honestidad y el respeto.",
  },
];
const posts = [
  ["img/blog-1.svg", "Junio 2026", "¿Qué hacer ante un despido sin causa?"],
  [
    "img/blog-2.svg",
    "Mayo 2026",
    "Cómo iniciar una sucesión: aspectos fundamentales",
  ],
  [
    "img/blog-3.svg",
    "Abril 2026",
    "Cinco errores legales que pueden afectar a un emprendimiento",
  ],
];
const testimonials = [
  [
    "Cada consulta recibe un análisis responsable, personalizado y orientado a encontrar la mejor solución jurídica para nuestros clientes.",
    "Atención personalizada",
  ],
  [
    "Creemos que la confianza se construye mediante una comunicación clara, honestidad profesional y un acompañamiento permanente.",
    "Compromiso con nuestros clientes",
  ],
  [
    "Nuestro objetivo es brindar asesoramiento jurídico de excelencia, priorizando siempre la ética, la transparencia y la seguridad jurídica.",
    "Nuestra filosofía de trabajo",
  ],
];
const icon =
  '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="M5 7h14"/><path d="M6 7l-3 6h6L6 7Z"/><path d="M18 7l-3 6h6l-3-6Z"/><path d="M8 21h8"/></svg>';
const qs = (s, p = document) => p.querySelector(s);
const qsa = (s, p = document) => [...p.querySelectorAll(s)];
function card(title, text) {
  return `<article class="practice-card reveal">${icon}<h3>${title}</h3><p>${text}</p></article>`;
}
qs(".practice-grid").innerHTML = practiceAreas
  .map((a) => card(a.title, a.text))
  .join("");
qs(".why-grid").innerHTML = advantages
  .map(
    (a) => `
    <article class="why-card reveal">
      ${icon}
      <h3>${a.title}</h3>
      <p>${a.text}</p>
    </article>`,
  )
  .join("");
qs(".blog-grid").innerHTML = posts
  .map(
    (p) =>
      `<article class="blog-card reveal"><img src="${p[0]}" alt="Imagen editorial sobre ${p[2]}"><div><time>${p[1]}</time><h3>${p[2]}</h3><p>Conozca aspectos prácticos y novedades jurídicas que pueden ayudarle a prevenir conflictos y tomar decisiones informadas.</p><a href="#contacto">Leer más</a></div></article>`,
  )
  .join("");
let current = 0;
function renderTestimonial() {
  const t = testimonials[current];
  qs("[data-slider]").innerHTML =
    `<article class="testimonial-card"><p class="stars">★★★★★</p><blockquote>“${t[0]}”</blockquote><strong>${t[1]}</strong></article>`;
  current = (current + 1) % testimonials.length;
}
renderTestimonial();
setInterval(renderTestimonial, 4500);
const header = qs("[data-header]"),
  toggle = qs("[data-nav-toggle]"),
  menu = qs("[data-nav-menu]");
function onScroll() {
  header.classList.toggle("scrolled", scrollY > 40);
  document.documentElement.style.setProperty("--scroll", scrollY);
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", open);
});
qsa(".nav-menu a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }),
);
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.16 },
);
qsa(".reveal,.reveal-left,.reveal-right").forEach((el) => observer.observe(el));
const counterObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target,
        end = +el.dataset.counter;
      let n = 0;
      const step = Math.max(1, Math.ceil(end / 70));
      const timer = setInterval(() => {
        n += step;
        el.textContent = n >= end ? end : n;
        if (n >= end) clearInterval(timer);
      }, 22);
      counterObserver.unobserve(el);
    }),
  { threshold: 0.8 },
);
qsa("[data-counter]").forEach((el) => counterObserver.observe(el));
qs("[data-year]").textContent = new Date().getFullYear();

// ============================
// EMAILJS CONTACT
// ============================
// Reemplace cada valor por el dato correspondiente del panel de EmailJS.
const EMAILJS_PUBLIC_KEY = "fZc2wGPp3r81WbZjQ"; // Public Key de EmailJS.
const EMAILJS_SERVICE_ID = "service_70uxtia"; // Service ID del servicio conectado.
const EMAILJS_TEMPLATE_ID = "REEMPLAZAR_TEMPLATE_ID_ESTUDIO"; // Template ID para recibir la consulta en el estudio.
const SITE_NAME = "Vega & Collaretti Estudio Jurídico";
const contactForm = qs("[data-contact-form]");
const submitButton = qs("[data-submit-button]", contactForm || document);
const defaultButtonText = submitButton?.textContent || "Enviar consulta";
let isEmailJSReady = false;

function initEmailJS() {
  if (!window.emailjs || isEmailJSReady) return isEmailJSReady;

  // EmailJS solo requiere la Public Key en el navegador. No agregue claves privadas aquí.
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });
  isEmailJSReady = true;
  return isEmailJSReady;
}

function getFormValue(name) {
  return contactForm?.elements[name]?.value.trim() || "";
}

function validateForm(formData) {
  const missingFields = [];
  if (!formData.nombre) missingFields.push("nombre");
  if (!formData.email) missingFields.push("email");
  if (!formData.consulta) missingFields.push("consulta");

  if (missingFields.length) {
    showMessage(
      `Por favor, complete los campos obligatorios: ${missingFields.join(", ")}.`,
      "error",
    );
    return false;
  }

  return true;
}

async function sendContactEmail(templateParams) {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
}


function showMessage(message, type = "success") {
  const note = qs("[data-form-note]", contactForm);
  if (!note) return;
  note.innerHTML = message.replace(/\n/g, "<br>");
  note.classList.remove("error", "success");
  note.classList.add(type);
}

function resetButton() {
  if (!submitButton) return;
  submitButton.disabled = false;
  submitButton.classList.remove("is-sending");
  submitButton.textContent = defaultButtonText;
}

function setSendingButton() {
  if (!submitButton) return;
  submitButton.disabled = true;
  submitButton.classList.add("is-sending");
  submitButton.textContent = "Enviando...";
}

function getCurrentDateTime() {
  const now = new Date();
  return {
    fecha: now.toLocaleDateString("es-AR"),
    hora: now.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

async function handleContactFormSubmit(event) {
  event.preventDefault();

  const formData = {
    nombre: getFormValue("nombre"),
    email: getFormValue("email"),
    telefono: getFormValue("telefono"),
    consulta: getFormValue("consulta"),
  };

  if (!validateForm(formData)) return;

  try {
    setSendingButton();

    if (!initEmailJS()) {
      throw new Error("EmailJS Browser SDK no está disponible.");
    }

    const dateTime = getCurrentDateTime();
    const templateParams = {
      ...formData,
      ...dateTime,
      sitio: SITE_NAME,
      // En EmailJS, configure el campo "Reply-To Email" con {{reply_to}}
      // para que al presionar "Responder" en Gmail el destinatario sea el cliente.
      reply_to: formData.email,
    };

    await sendContactEmail(templateParams);

    contactForm.reset();
    showMessage(
      "✓ Su consulta fue enviada correctamente.\n\nNos comunicaremos con usted a la mayor brevedad.",
      "success",
    );
  } catch (error) {
    console.error("No fue posible enviar la consulta.", error);
    showMessage(
      "No fue posible enviar la consulta.\nIntente nuevamente en unos minutos.",
      "error",
    );
  } finally {
    resetButton();
  }
}

if (contactForm) {
  initEmailJS();
  contactForm.addEventListener("submit", handleContactFormSubmit);
}

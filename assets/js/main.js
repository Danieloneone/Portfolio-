// =========================
// ANIMACIONES SUAVES AL SCROLL
// =========================

// IntersectionObserver para animar elementos al aparecer
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.2 });

// Elementos animados
const animatedElements = document.querySelectorAll(
'.hero-section, .hero-photo, .hero-buttons .btn-primary, .hero-buttons .btn-secondary, .skill-card, .project-card, .btn-primary, .btn-secondary'
);

animatedElements.forEach(el => observer.observe(el));


// =========================
// NAVBAR COMPACTO AL SCROLL (solo móviles/tablets)
// =========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
if (window.scrollY > 50 && window.innerWidth <= 768) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});


// =========================
// MENÚ DESPLEGABLE (HAMBURGER) - MOBILE
// =========================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
navToggle.addEventListener('click', () => {
navToggle.classList.toggle('active');
navMenu.classList.toggle('active');
});
}

const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
link.addEventListener('click', () => {
if (navMenu.classList.contains('active')) {
navMenu.classList.remove('active');
navToggle.classList.remove('active');
}
});
});


// =========================
// FORMULARIO: MENSAJE DE ENVÍO EXITOSO + RESET
// =========================

const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function (e) {
    form.addEventListener('submit', function(e) {
e.preventDefault();

const successMsg = document.createElement("p");
@@ -101,26 +101,26 @@
// Frame actual
let frame = 1;

// Total de frames de color (deben coincidir con tu CSS)
// Total de frames de color (coinciden con tu CSS)
const totalFrames = 5;

// Escucha el scroll
window.addEventListener("scroll", () => {
const scrollPos = window.scrollY;

    // Cada 250px cambia de frame (podemos ajustar este valor)
    const newFrame = Math.floor(scrollPos / 250) % totalFrames + 1;
    // Cada 300px cambia de frame (suave y agradable)
    const newFrame = Math.floor(scrollPos / 300) % totalFrames + 1;

if (newFrame !== frame) {
frame = newFrame;

sections.forEach(section => {
            // Eliminar frames viejos
            // Remover frames viejos
for (let i = 1; i <= totalFrames; i++) {
section.classList.remove(`section-frame-${i}`);
}

            // Agregar el frame actual
            // Agregar frame actual
section.classList.add(`section-frame-${frame}`);
});
}

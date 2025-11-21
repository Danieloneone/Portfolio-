// =========================
// ANIMACIONES SUAVES AL SCROLL
// =========================

// Creamos un IntersectionObserver para animaciones al aparecer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible'); // agregamos la clase visible
            observer.unobserve(entry.target); // dejamos de observar para que no se repita
        }
    });
}, {threshold: 0.2}); // 20% del elemento visible

// Seleccionamos todos los elementos que queremos animar
const animatedElements = document.querySelectorAll(
    '.hero-section, .hero-photo, .hero-buttons .btn-primary, .hero-buttons .btn-secondary, .skill-card, .project-card, .btn-primary, .btn-secondary'
);

// Observamos cada elemento
animatedElements.forEach(el => {
    observer.observe(el);
});


// =========================
// NAVBAR COMPACTO AL SCROLL (solo móviles/tablets)
// =========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50 && window.innerWidth <= 768){ // solo en pantallas <= 768px
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

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');  // Animación del botón
    navMenu.classList.toggle('active');    // Mostrar/ocultar menú
});

// Cerrar menú al hacer click en un link
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navMenu.classList.contains('active')){
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

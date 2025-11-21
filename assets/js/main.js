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
    if(window.scrollY > 50 && window.innerWidth <= 768){
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


// =========================
// FORMULARIO: MENSAJE DE ENVÍO EXITOSO
// =========================

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que recargue la página

    // Crear mensaje de éxito
    const successMsg = document.createElement("p");
    successMsg.textContent = "✔ ¡Tu mensaje fue enviado con éxito!";
    successMsg.style.color = "white";
    successMsg.style.background = "#28a745";
    successMsg.style.padding = "12px";
    successMsg.style.borderRadius = "8px";
    successMsg.style.marginTop = "10px";
    successMsg.style.textAlign = "center";
    successMsg.style.fontWeight = "600";

    // Agregar debajo del formulario
    form.appendChild(successMsg);

    // Reset al formulario
    form.reset();

    // Eliminar mensaje luego de 4 segundos
    setTimeout(() => {
        successMsg.remove();
    }, 4000);
});

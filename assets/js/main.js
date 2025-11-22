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
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const successMsg = document.createElement("p");
        successMsg.textContent = "✔ ¡Tu mensaje fue enviado con éxito!";
        successMsg.style.color = "white";
        successMsg.style.background = "#28a745";
        successMsg.style.padding = "12px";
        successMsg.style.borderRadius = "8px";
        successMsg.style.marginTop = "10px";
        successMsg.style.textAlign = "center";
        successMsg.style.fontWeight = "600";

        form.appendChild(successMsg);

        form.reset();

        setTimeout(() => {
            successMsg.remove();
        }, 4000);
    });
}



// ====================================================
// CAMBIO DE COLOR ANIMADO POR SCROLL (FRAMES DE COLOR)
// ====================================================

// Secciones que cambiarán de color
const sections = document.querySelectorAll("section");

// Frame actual
let frame = 1;

// Total de frames de color
const totalFrames = 5;

// Escucha el scroll
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    // Cambia cada 300px
    const newFrame = Math.floor(scrollPos / 300) % totalFrames + 1;

    if (newFrame !== frame) {
        frame = newFrame;

        sections.forEach(section => {
            // Remover frames anteriores
            for (let i = 1; i <= totalFrames; i++) {
                section.classList.remove(`section-frame-${i}`);
            }

            // Agregar el nuevo frame
            section.classList.add(`section-frame-${frame}`);

            // 🔥 Borde sutil para distinguir los frames
            section.style.transition = "background-color 0.7s ease, border 0.5s ease";
            section.style.border = "2px solid rgba(0,0,0,0.06)";
            section.style.borderRadius = "10px";
            section.style.padding = "20px";
            section.style.marginBottom = "20px";
        });
    }
});

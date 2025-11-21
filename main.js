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

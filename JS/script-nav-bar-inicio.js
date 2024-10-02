const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', (event) => {
    navMenu.classList.toggle('active');
    event.stopPropagation(); // Evita que el clic en el botón cierre el menú inmediatamente
});

// // Cierra el menú si se hace clic en cualquier parte del documento
// document.addEventListener('click', (event) => {
//     // Verifica si el clic fue fuera del navToggle y del navMenu
//     if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
//         navMenu.classList.remove('active');
//     }
// });
// Cierra el menú cuando se hace scroll
window.addEventListener('scroll', () => {
    navMenu.classList.remove('active');
});
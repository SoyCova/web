document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');
    const homeLink = document.getElementById('home-link');
    const searchToggle = document.getElementById('search-toggle');
    const searchBarContainer = document.getElementById('search-bar-container');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const categoriasSection = document.querySelector('.categorias');
    const categoriaSections = document.querySelectorAll('.categoria-section');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    // Mostrar/Ocultar el menú en dispositivos móviles
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Mostrar/Ocultar la barra de búsqueda con animación
    searchToggle.addEventListener('click', function(event) {
        event.preventDefault();
        searchBarContainer.classList.toggle('active');
        searchInput.focus(); // Enfocar automáticamente el input al abrir
    });

    // Manejo de clic en los enlaces del menú desplegable
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const categoria = this.getAttribute('href').substring(1); // Obtener la categoría del href (sin el #)

            // Ocultar todas las secciones de categorías
            categoriaSections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostrar la sección correspondiente
            const sectionToShow = document.getElementById(categoria);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
                sectionToShow.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Función para volver a la vista de categorías al hacer clic en "Inicio"
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir comportamiento por defecto
        categoriaSections.forEach(section => {
            section.style.display = 'none';
        });
        categoriasSection.style.display = 'block';
        categoriasSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección de categorías
    });
});

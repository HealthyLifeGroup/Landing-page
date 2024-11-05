// Barra de navegacion - Scroll Effect
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTopBtn.style.display = 'block';
        } else {
            navbar.classList.remove('scrolled');
            backToTopBtn.style.display = 'none';
        }
    });

});
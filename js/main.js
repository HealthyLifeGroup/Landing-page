// Navbar scroll effect
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

    // Smooth scroll para links de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Botón volver arriba
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener los valores del formulario
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());

            // Validaciones adicionales
            let isValid = true;
            const email = formValues.email;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                isValid = false;
                alert('Por favor, introduce un email válido');
                return;
            }

            if (formValues.mensaje.length < 10) {
                isValid = false;
                alert('El mensaje debe tener al menos 10 caracteres');
                return;
            }

            if (isValid) {
                // Aquí iría el código para enviar el formulario al servidor
                // Por ahora mostraremos un mensaje de exito para nuestra landing page
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                contactForm.reset();
            }
        });
    }

    // Animación para los elementos de contacto
    const contactInfos = document.querySelectorAll('.contact-info');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, {
        threshold: 0.5
    });

    contactInfos.forEach(info => {
        observer.observe(info);
    });

    // Prevenir spam en el formulario
    let submitCount = 0;
    const submitLimit = 3;
    const submitTimeout = 3600000; // 1 hora en milisegundos

    contactForm.addEventListener('submit', function (e) {
        submitCount++;

        if (submitCount > submitLimit) {
            e.preventDefault();
            alert('Has enviado demasiados mensajes. Por favor, espera una hora antes de enviar otro.');

            setTimeout(() => {
                submitCount = 0;
            }, submitTimeout);
        }
    });
});
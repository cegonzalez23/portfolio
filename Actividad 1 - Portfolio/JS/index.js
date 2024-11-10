document.addEventListener("DOMContentLoaded", function () {
    // Botón de "scroll to top"
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Muestra el botón al hacer scroll
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Vuelve al inicio de la página al hacer clic
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // validacion de formularo
    function validateForm() {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const formMessage = document.getElementById('formMessage');
        const successMessage = document.getElementById('successMessage');
    
        formMessage.textContent = ''; // Limpiar mensaje previo
        successMessage.style.display = 'none'; // Ocultar mensaje de éxito
    
        if (!nombre) {
            formMessage.textContent = 'Por favor, ingrese su nombre.';
            return false;
        }
    
        if (!email) {
            formMessage.textContent = 'Por favor, ingrese su correo electrónico.';
            return false;
        }
    
        if (!telefono || telefono.length !== 10 || isNaN(telefono)) {
            formMessage.textContent = 'El teléfono debe contener 10 dígitos numéricos.';
            return false;
        }
    
        if (!mensaje) {
            formMessage.textContent = 'Por favor, ingrese su mensaje.';
            return false;
        }
    
        // Si todo está bien, mostrar mensaje de éxito
        successMessage.textContent = '¡Mensaje enviado!';
        successMessage.style.display = 'block';
        formMessage.textContent = ''; // Limpiar mensaje de error
        return false; // Evitar el envío real del formulario para la demostración
    }
    
    document.getElementById('hamburger').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar el menú
    });
    
    
    
});


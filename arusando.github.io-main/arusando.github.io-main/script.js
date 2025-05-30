document.addEventListener('DOMContentLoaded', () => {
    console.log('INKSPIRE - Página cargada y lista');

    // Manejo del formulario de contacto
    const form = document.getElementById('formContacto');
    const respuesta = document.getElementById('respuesta');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Mostrar mensaje de enviado
            respuesta.innerHTML = `
                <p class="enviado">
                    ¡Mensaje enviado con éxito! 
                    <i class="fas fa-check-circle"></i>
                    <br>
                    Te responderemos en breve.
                </p>
            `;

            // Resetear formulario
            form.reset();


            setTimeout(() => {
                respuesta.innerHTML = '';
            }, 1000);
        });
    }

});

// Validación adicional para formularios
function validarFormulario(form) {
    let valido = true;

    // Validar campos requeridos
    form.querySelectorAll('[required]').forEach(campo => {
        if (!campo.value.trim()) {
            campo.style.borderColor = 'red';
            valido = false;
        } else {
            campo.style.borderColor = '';
        }
    });

    // Validación específica para email
    const email = form.querySelector('input[type="email"]');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = 'red';
        valido = false;
    }

    return valido;
}
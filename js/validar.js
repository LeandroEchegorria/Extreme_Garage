document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('firstname').value;
    if (nombre.length == 0) {
        alert('No has completado el nombre');
        return;
    }
    var apellido = document.getElementById('last_name').value;
    if (apellido.length == 0) {
        alert('No has completado el apellido');
        return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('No has completado el email');
        return;
    }
    var telefono = document.getElementById('phone').value;
    if (telefono.length == 0) {
        alert('No has completado el telefono');
        return;
    }

    var mensaje = document.getElementById('comment').value;
    if (mensaje.length == 0) {
        alert('No has completado el mensaje');
        return;
    }
    alert("Muchas gracias por enviar el formulario");
            
    this.submit();
}




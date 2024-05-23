const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");
const errorNombre = document.getElementById("errorNombre");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");

    formulario.addEventListener('submit', (event) => {
      event.preventDefault();

      const nombreValido = validarNombre(nombreInput.value);
      const asuntoValido = validarAsunto(asuntoInput.value);
      const mensajeValido = validarMensaje(mensajeInput.value);

      if (nombreValido && asuntoValido && mensajeValido) {
        alert('¡Formulario enviado correctamente!');
        formulario.reset();
      } else {
        mostrarErrores(nombreValido, errorNombre);
        mostrarErrores(asuntoValido, errorAsunto);
        mostrarErrores(mensajeValido, errorMensaje);
      }
    });

    function validarNombre(nombre) {
      const regex = /^[a-zA-ZáéíóúñÑü\s.,\-]+$/;
      return regex.test(nombre);
    }

    function validarAsunto(asunto) {
      const regex = /^[a-zA-ZáéíóúñÑü\s.,\-]+$/;
      return regex.test(asunto);
    }

    function validarMensaje(mensaje) {
      const regex = /^[a-zA-ZáéíóúñÑü\s.,\-]+$/;
      return regex.test(mensaje);
    }

    function mostrarErrores(valido, elementoError) {
      if (!valido) {
        elementoError.textContent = 'El campo contiene caracteres no válidos.';
        elementoError.style.color = 'red';
      } else {
        elementoError.textContent = '';
      }
    }
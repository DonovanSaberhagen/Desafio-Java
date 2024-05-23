const primerNumero = document.querySelector("#valor1");
const segundoNumero = document.querySelector("#valor2");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const resultadoElement = document.getElementById("resultado")


function sumar() {
    const valor1 = parseFloat(primerNumero.value);
    const valor2 = parseFloat(segundoNumero.value);
  
    if (isNaN(valor1) || isNaN(valor2)) {
      alert('Ingrese valores numéricos válidos');
      return;
    }
  
    const suma = valor1 + valor2;
    resultadoElement.textContent = suma;
  }
  
  function restar() {
    const valor1 = parseFloat(primerNumero.value);
    const valor2 = parseFloat(segundoNumero.value);
  
    if (isNaN(valor1) || isNaN(valor2)) {
      alert('Ingrese valores numéricos válidos');
      return;
    }
  
    const resta = valor1 - valor2;
    resultadoElement.textContent = resta;
  }
  
  btnSumar.addEventListener('click', sumar);
  btnRestar.addEventListener('click', restar);

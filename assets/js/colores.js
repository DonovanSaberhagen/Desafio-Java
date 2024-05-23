const paletaColores = document.getElementById("paletaColores");
const cuadroPrincipal = document.querySelector(".cuadroPrincipal");

        
        function crearColor(color) {
            const divColor = document.createElement('div');
            divColor.classList.add('color');
            divColor.style.backgroundColor = color;

            
            divColor.addEventListener('click', () => {
                cuadroPrincipal.style.backgroundColor = color;
            });

            paletaColores.appendChild(divColor);
        }

        
        crearColor('#e53e3e');
        crearColor('#dd6b20');
        crearColor('#faf089');
        crearColor('#48bb78');
        crearColor('#81e6d9');
        crearColor('#d53f8c');
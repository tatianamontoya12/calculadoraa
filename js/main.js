var modoOscuro = false;

// Función para cambiar la ruta del CSS y el texto del botón
function cambiarCSS() {
    // Obtenemos el elemento <link> que referencia al archivo CSS
    var cssLink = document.getElementById("css-link");

    // Si estamos en modo oscuro, cambiamos a modo claro
    if (modoOscuro) {
        cssLink.href = "css/style.css"; // Cambiar la ruta al CSS de modo claro
        document.getElementById("cambiar").textContent = "Modo Oscuro"; // Cambiar el texto del botón
        modoOscuro = false; // Actualizar el estado del modo
    } else {
        // Si no estamos en modo oscuro, cambiamos a modo oscuro
        cssLink.href = "css/style_dark.css"; // Cambiar la ruta al CSS de modo oscuro
        document.getElementById("cambiar").textContent = "Modo Claro"; // Cambiar el texto del botón
        modoOscuro = true; // Actualizar el estado del modo
    }
}

const pantalla = document.querySelector("#input");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "ac") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error !";
            }
            return;
        }

        if (boton.id === "multiplicar") {
            pantalla.textContent += "*";
            return;
        }

        if (boton.id === "porcentaje") {
            try {
                const expresion = pantalla.textContent;
                const porcentaje = parseFloat(expresion) / 100;
                pantalla.textContent = porcentaje;
            } catch {
                pantalla.textContent = "Syntax Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})




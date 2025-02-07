document.addEventListener("DOMContentLoaded", function () {
    console.log("El script ha cargado correctamente.");

    // Buscar elementos en el DOM
    const botonSi = document.getElementById("si");
    const botonNo = document.getElementById("no");
    const newContent = document.getElementById("newContent");
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const buttonsContainer = document.querySelector('.buttons-container');

    // Verificar si los elementos existen antes de usarlos
    if (!botonSi || !botonNo || !newContent || !title || !subtitle || !buttonsContainer) {
        console.error("Error: Uno o más elementos no existen en el DOM.");
        return; // Detiene la ejecución si hay un error
    }

    // Evento para el botón "Sí"
    botonSi.addEventListener("click", () => {
        console.log("Botón 'Sí' clickeado.");

        // Ocultar título y subtítulo
        title.style.display = "none";
        subtitle.style.display = "none";

        // Ocultar los botones inmediatamente antes de cambiar el fondo
        buttonsContainer.style.display = "none";

        // Cambiar el fondo de forma inmediata
        document.body.style.backgroundImage = "url(https://img.freepik.com/vector-gratis/fondo-cielo-nocturno-estrellas-brillantes_1048-19664.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";

        // Mostrar el nuevo contenido después de cambiar el fondo
        newContent.style.display = "block";
        newContent.style.opacity = 1; // Aseguramos que la opacidad se establezca correctamente

        // Animación de escritura del mensaje
        var messageElement = document.getElementById("message");
        let text = `Mi niña, aunque estemos lejos, te siento cerca en cada latido. ❤️
La distancia no puede apagar lo que siento por ti.
Cada día que pasa me siento más afortunado de tenerte en mi vida.
Aunque no pueda verte todo el tiempo, eres mi paz, mi felicidad.
Cada día espero con ansias el momento en que podamos estar juntos.
¡Gracias por ser mi San Valentín, aún desde lejos. Te Amo Mi Amor. ❤️`;

        messageElement.innerHTML = ""; // Borra el texto para escribirlo dinámicamente

        let index = 0;

        // Función para simular el efecto de escritura
        function typeWriter() {
            if (index < text.length) {
                messageElement.innerHTML += text[index] === "\n" ? "<br>" : text[index]; // Maneja saltos de línea
                index++;
                setTimeout(typeWriter, 50); // Velocidad de escritura
            }
        }

        typeWriter(); // Inicia la animación
    });

    // Asegúrate de que el botón tenga posición absoluta
    botonNo.style.position = "absolute";

    // Función para obtener los límites de la ventana y las dimensiones del botón
    function obtenerLimites() {
        return {
            anchoVentana: window.innerWidth,
            altoVentana: window.innerHeight,
            anchoBoton: botonNo.offsetWidth,
            altoBoton: botonNo.offsetHeight
        };
    }

// Función para obtener los límites de la ventana y las dimensiones de los botones
function obtenerLimites() {
    return {
        anchoVentana: window.innerWidth,
        altoVentana: window.innerHeight,
        anchoBotonNo: botonNo.offsetWidth,
        altoBotonNo: botonNo.offsetHeight,
        anchoBotonSi: botonSi.offsetWidth,
        altoBotonSi: botonSi.offsetHeight,
        posBotonSi: botonSi.getBoundingClientRect() // Obtiene la posición del botón "Sí"
    };
}

// Función para mover el botón "No" sin que se salga de la pantalla ni se sobreponga con el botón "Sí"
function moverBoton() {
    const {
        anchoVentana,
        altoVentana,
        anchoBotonNo,
        altoBotonNo,
        anchoBotonSi,
        altoBotonSi,
        posBotonSi
    } = obtenerLimites();

    const margen = 20; // Espacio para que el botón no quede pegado a los bordes

    let randomLeft, randomTop;
    let intentos = 0;

    do {
        // Calcular una nueva posición aleatoria dentro de los límites de la ventana
        randomLeft = Math.random() * (anchoVentana - anchoBotonNo - margen);
        randomTop = Math.random() * (altoVentana - altoBotonNo - margen);

        // Incrementar intentos para evitar bucles infinitos
        intentos++;
        if (intentos > 100) break; // Evita que el código se quede atrapado buscando una posición válida

    } while (
        // Verifica si la nueva posición se superpone con el botón "Sí"
        randomLeft < posBotonSi.right &&
        randomLeft + anchoBotonNo > posBotonSi.left &&
        randomTop < posBotonSi.bottom &&
        randomTop + altoBotonNo > posBotonSi.top
    );

    // Aplicar las nuevas posiciones
    botonNo.style.left = `${randomLeft}px`;
    botonNo.style.top = `${randomTop}px`;
}

// Mover el botón al pasar el cursor sobre él
botonNo.addEventListener("mouseenter", function () {
    moverBoton();
});

    console.log("Página cargada en el navegador");
});

// Ejemplo de cómo cambiar el fondo y ocultar el GIF
function cambiarFondo() {
    document.body.classList.add("nuevo-fondo");  // Cambiar fondo y ocultar el GIF
}

// Cambiar fondo y mostrar el segundo GIF
function cambiarFondo() {
    document.body.classList.add("nuevo-fondo");  // Cambiar fondo
    document.body.classList.remove("no-nuevo-fondo");  // Asegurarnos de quitar la clase anterior
    document.getElementById("gifContainer").style.display = "none"; // Ocultar el primer GIF
    document.getElementById("gifContainer2").style.display = "block"; // Mostrar el segundo GIF
}

// Cambiar a fondo inicial y ocultar el segundo GIF
function resetFondo() {
    document.body.classList.remove("nuevo-fondo"); // Restablecer al fondo original
    document.body.classList.add("no-nuevo-fondo");  // Añadir la clase que oculta el segundo GIF
    document.getElementById("gifContainer").style.display = "block";  // Mostrar el primer GIF
    document.getElementById("gifContainer2").style.display = "none";  // Ocultar el segundo GIF
}

// Llamar a esta función cuando sea necesario, por ejemplo, al hacer clic en un botón
document.getElementById("si").addEventListener("click", function() {
    cambiarFondo();
});

// Si deseas restablecer el fondo y los GIFs
document.getElementById("no").addEventListener("click", function() {
    resetFondo();
});

document.addEventListener("click", function () {
    const audio = document.getElementById("audio");
    audio.play().catch(error => {
        console.log("Error en la reproducción:", error);
    });
});
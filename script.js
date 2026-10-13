document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("toggle-tema");
    const body = document.body;

    // 1. Manejo del tema (Guardado + Sistema operativo)
    const temaGuardado = localStorage.getItem("tema");
    const prefiereOscuroSistema = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (temaGuardado === "oscuro" || (!temaGuardado && prefiereOscuroSistema)) {
        body.classList.add("dark-mode");
        if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
        if (toggleBtn) toggleBtn.textContent = "🌙";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            const esOscuro = body.classList.contains("dark-mode");

            if (esOscuro) {
                toggleBtn.textContent = "☀️";
                localStorage.setItem("tema", "oscuro");
            } else {
                toggleBtn.textContent = "🌙";
                localStorage.setItem("tema", "claro");
            }
        });
    }

    // 2. Validación del formulario de contacto
    const form = document.getElementById("form-contacto");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            const errorNombre = document.getElementById("error-nombre");
            const errorEmail = document.getElementById("error-email");
            const errorMensaje = document.getElementById("error-mensaje");

            if (errorNombre) errorNombre.textContent = "";
            if (errorEmail) errorEmail.textContent = "";
            if (errorMensaje) errorMensaje.textContent = "";

            let formularioValido = true;

            if (nombre === "") {
                if (errorNombre) errorNombre.textContent = "El nombre es obligatorio.";
                formularioValido = false;
            }

            if (email === "") {
                if (errorEmail) errorEmail.textContent = "El email es obligatorio.";
                formularioValido = false;
            } else if (!email.includes("@")) {
                if (errorEmail) errorEmail.textContent = "Ingresá un email válido.";
                formularioValido = false;
            }

            if (mensaje === "") {
                if (errorMensaje) errorMensaje.textContent = "El mensaje es obligatorio.";
                formularioValido = false;
            }

            if (formularioValido) {
                alert("¡Mensaje enviado correctamente!");
                form.reset();
            }
        });
    }

    // 3. Desplazamiento suave (Smooth Scroll)
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", (e) => {
            const destinoId = enlace.getAttribute("href");

            if (destinoId === "#") {
                return;
            }

            const destino = document.querySelector(destinoId);

            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Efecto Máquina de Escribir (Característica Creativa Bonus)
    const textElement = document.getElementById("maquina-escribir");
    const palabras = [
        "estudiante de desarrollo web",
        "entusiasta de JavaScript",
        "creador de interfaces modernas",
        "programador frontend junior"
    ];
    let palabraIndex = 0;
    let charIndex = 0;
    let estaBorrando = false;

    function efectoMaquina() {
        if (!textElement) return;
        
        const palabraActual = palabras[palabraIndex];
        
        if (estaBorrando) {
            textElement.textContent = palabraActual.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = palabraActual.substring(0, charIndex + 1);
            charIndex++;
        }

        let velocidad = estaBorrando ? 50 : 100;

        if (!estaBorrando && charIndex === palabraActual.length) {
            velocidad = 2000;
            estaBorrando = true;
        } else if (estaBorrando && charIndex === 0) {
            estaBorrando = false;
            palabraIndex = (palabraIndex + 1) % palabras.length;
            velocidad = 500;
        }

        setTimeout(efectoMaquina, velocidad);
    }

    if (textElement) {
        efectoMaquina();
    }

});
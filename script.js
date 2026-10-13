document.addEventListener("DOMContentLoaded", () => {


    const toggleBtn = document.getElementById("toggle-tema");
    const body = document.body;

   
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "oscuro") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }


   
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


 

    const form = document.getElementById("form-contacto");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const errorNombre = document.getElementById("error-nombre");
        const errorEmail = document.getElementById("error-email");
        const errorMensaje = document.getElementById("error-mensaje");

     
        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorMensaje.textContent = "";

        let formularioValido = true;


        
        if (nombre === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            formularioValido = false;
        }


       
        if (email === "") {

            errorEmail.textContent = "El email es obligatorio.";
            formularioValido = false;

        } else if (!email.includes("@")) {

            errorEmail.textContent = "Ingresá un email válido.";
            formularioValido = false;

        }


      
        if (mensaje === "") {

            errorMensaje.textContent = "El mensaje es obligatorio.";
            formularioValido = false;

        }


     
        if (formularioValido) {

            alert("¡Mensaje enviado correctamente!");

            form.reset();

        }

    });



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

});
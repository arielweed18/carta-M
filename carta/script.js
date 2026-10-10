document.addEventListener("DOMContentLoaded", function () {
    const abrirBtn = document.getElementById("abrirBtn");
    const portada = document.getElementById("portada");
    const sorpresa = document.getElementById("sorpresa");

    const siBtn = document.getElementById("siBtn");
    const noBtn = document.getElementById("noBtn");
    const respuesta = document.getElementById("respuesta");

    const musicaBtn = document.getElementById("musicaBtn");
    const musica = document.getElementById("musica");

    // Abrir la sorpresa
    abrirBtn.addEventListener("click", function () {
        portada.classList.add("oculta");
        sorpresa.classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        lanzarCorazones();
    });

    // Respuesta: Sí
    siBtn.addEventListener("click", function () {
        respuesta.textContent =
            "¡Me haces muy feliz, mi Micaela! ❤️🌻 " +
            "Gracias por darme esta oportunidad. " +
            "Quiero seguir creando recuerdos bonitos contigo.";

        lanzarCorazones();
    });

    // Respuesta: No
    noBtn.addEventListener("click", function () {
        respuesta.textContent =
            "Gracias por leer mi carta, Micaela. ❤️ " +
            "Respeto tu decisión y agradezco tu sinceridad.";

        lanzarCorazonesSuaves();
    });

    // Reproducir o pausar música
    musicaBtn.addEventListener("click", async function () {
        if (!musica.paused) {
            musica.pause();
            musicaBtn.textContent = "▶ Reproducir música 🎵";
            return;
        }

        try {
            musicaBtn.textContent = "Cargando música...";

            await musica.play();

            musicaBtn.textContent = "⏸ Pausar música";
        } catch (error) {
            console.error("Error al reproducir la música:", error);

            musicaBtn.textContent = "▶ Reproducir música 🎵";

            alert(
                "No se pudo reproducir la canción. " +
                "Prueba el reproductor de audio directamente."
            );
        }
    });

    // Animación de corazones
    function lanzarCorazones() {
        const simbolos = ["💜", "💗", "✨", "🌸", "❤️"];

        for (let i = 0; i < 24; i++) {
            crearParticula(simbolos);
        }
    }

    function lanzarCorazonesSuaves() {
        const simbolos = ["💜", "🌸", "✨"];

        for (let i = 0; i < 10; i++) {
            crearParticula(simbolos);
        }
    }

    function crearParticula(simbolos) {
        const particula = document.createElement("span");

        particula.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        Object.assign(particula.style, {
            position: "fixed",
            left: Math.random() * 100 + "vw",
            bottom: "-40px",
            fontSize: (18 + Math.random() * 20) + "px",
            zIndex: "1000",
            pointerEvents: "none",
            transition: "transform 4s linear, opacity 4s linear"
        });

        document.body.appendChild(particula);

        requestAnimationFrame(function () {
            particula.style.transform =
                "translateY(-" +
                (window.innerHeight + 100) +
                "px) rotate(25deg)";

            particula.style.opacity = "0";
        });

        setTimeout(function () {
            particula.remove();
        }, 4200);
    }
});
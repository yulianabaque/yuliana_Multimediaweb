const cards = document.querySelectorAll(".card");
const imagen = document.getElementById("imagen");
const musica = document.getElementById("musica");
const mensaje = document.getElementById("mensaje");

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const aleatorioBtn = document.getElementById("aleatorio");

musica.volume = 0.4;

const emociones = {
    feliz: {
        img: "img/feliz.png",
        music: "audio/feliz.mp3",
        texto: "Hay momentos en los que todo pesa menos.",
        color: "#FFD93D"
    },
    triste: {
        img: "img/triste.png",
        music: "audio/triste.mp3",
        texto: "Sentirse así también forma parte del camino.",
        color: "#2E4057"
    },
    calma: {
        img: "img/calma.png",
        music: "audio/calma.mp3",
        texto: "Respirar es suficiente, por ahora.",
        color: "#6BCB77"
    },
    energia: {
        img: "img/energia.png",
        music: "audio/energia.mp3",
        texto: "El cuerpo pide movimiento.",
        color: "#FF6B6B"
    },
    nostalgia: {
        img: "img/nostalgia.png",
        music: "audio/nostalgia.mp3",
        texto: "Recordar también es sentir.",
        color: "#C8A2C8"
    },
    ansiedad: {
        img: "img/ansiedad.png",
        music: "audio/ansiedad.mp3",
        texto: "No todo tiene que resolverse hoy.",
        color: "#845EC2"
    }
};

function fadeOutAudio(callback) {
    let fade = setInterval(() => {
        if (musica.volume > 0.05) {
            musica.volume -= 0.05;
        } else {
            clearInterval(fade);
            musica.pause();
            musica.volume = 0.4;
            callback();
        }
    }, 50);
}

function cambiarEmocion(emocion) {

    cards.forEach(c => c.classList.remove("activa"));
    document.querySelector(`[data-emocion="${emocion}"]`)?.classList.add("activa");

    imagen.style.opacity = 0;
    mensaje.style.opacity = 0;

    fadeOutAudio(() => {

        imagen.src = emociones[emocion].img;
        imagen.alt = "Imagen que representa la emoción de " + emocion;
        musica.src = emociones[emocion].music;
        mensaje.textContent = emociones[emocion].texto;

        document.body.style.background = emociones[emocion].color;

        musica.play();

        imagen.style.opacity = 1;
        mensaje.style.opacity = 1;
    });
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        cambiarEmocion(card.dataset.emocion);
    });
});

aleatorioBtn.addEventListener("click", () => {
    const keys = Object.keys(emociones);
    const random = keys[Math.floor(Math.random() * keys.length)];
    cambiarEmocion(random);
});

playBtn.addEventListener("click", () => {
    musica.play();
    playBtn.setAttribute("aria-pressed", "true");
    pauseBtn.setAttribute("aria-pressed", "false");
});

pauseBtn.addEventListener("click", () => {
    musica.pause();
    playBtn.setAttribute("aria-pressed", "false");
    pauseBtn.setAttribute("aria-pressed", "true");
});

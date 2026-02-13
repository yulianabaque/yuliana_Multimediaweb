const cards = document.querySelectorAll(".card");
const imagen = document.getElementById("imagen");
const musica = document.getElementById("musica");
const mensaje = document.getElementById("mensaje");

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const aleatorioBtn = document.getElementById("aleatorio");

const emociones = {
    feliz: {
        img: "img/feliz.jpg",
        music: "img/feliz.mp3",
        texto: "Hay momentos en los que todo pesa menos."
    },
    triste: {
        img: "img/triste.jpg",
        music: "img/triste.mp3",
        texto: "Sentirse así también forma parte del camino."
    },
    calma: {
        img: "img/calma.jpg",
        music: "img/calma.mp3",
        texto: "Respirar es suficiente, por ahora."
    },
    energia: {
        img: "img/energia.jpg",
        music: "img/energia.mp3",
        texto: "El cuerpo pide movimiento."
    },
    nostalgia: {
        img: "img/nostalgia.jpg",
        music: "img/nostalgia.mp3",
        texto: "Recordar también es sentir."
    },
    ansiedad: {
        img: "img/ansiedad.jpg",
        music: "img/ansiedad.mp3",
        texto: "No todo tiene que resolverse hoy."
    }
};

function cambiarEmocion(emocion) {
    imagen.style.opacity = 0;
    mensaje.style.opacity = 0;

    setTimeout(() => {
        imagen.src = emociones[emocion].img;
        musica.src = emociones[emocion].music;
        mensaje.textContent = emociones[emocion].texto;

        musica.play();
        imagen.style.opacity = 1;
        mensaje.style.opacity = 1;
    }, 300);
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

playBtn.addEventListener("click", () => musica.play());
pauseBtn.addEventListener("click", () => musica.pause());

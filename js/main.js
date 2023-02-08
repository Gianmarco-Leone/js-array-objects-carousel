// TRACCIA - CREARE UN CAROSELLO

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il ** ciclo infinito ** del carosello.Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails(sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo(3 secondi) l'immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start / stop e di inversione del meccanismo di autoplay.


// SVOLGIMENTO


/********************************
 *                              *
 *           ON LOAD            *
 *                              *
********************************/

// Array immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const sliderContainerEl = document.getElementById("slider_item");
const prevArrowEl = document.getElementById("arrow_prev");
const nextArrowEl = document.getElementById("arrow_next");
// let clock;
const buttonStartEl = document.getElementById("start");
const buttonStopEl = document.getElementById("stop");
const buttonRetroEl = document.getElementById("retro");

// Creo contatore carosello 
let activeImage = 0;

// Ciclo l'array
images.forEach((element, index) => {
    const currentImageIndex = index;
    console.log(currentImageIndex);

    const currentImage = element.image;
    console.log(currentImage);

    const currentTitle = element.title;
    console.log(currentTitle);

    const currentText = element.text;
    console.log(currentText);

    const sliderImage = `
    <div class="item ${(currentImageIndex == activeImage) ? "active" : ""}">
        <img src="./${currentImage}" alt="Carousel image">
        <div class="item-text text-white
        text-end">
            <h2>
                ${currentTitle}
            </h2>
            <p>
                ${currentText}
            </p>
        </div>
    </div>
    `;

    sliderContainerEl.innerHTML += sliderImage;

});

/********************************
 *                              *
 *           ON CLICK           *
 *                              *
 ********************************/

// Click tasto slide precedente
// prevArrowEl.addEventListener(
//     "click",
//     function () {
//         prevSlide();
//     }
// );

// Click tasto slide successiva
// nextArrowEl.addEventListener(
//     "click",
//     function () {
//         nextSlide();
//     }
// );

// Click tasto Start autoplay
// buttonStartEl.addEventListener(
//     "click",
//     function () {
//         autoplay(nextSlide);
//     }
// );

// Click tasto Retro autoplay
// buttonRetroEl.addEventListener(
//     "click",
//     function () {
//         autoplay(prevSlide);
//     }
// );

// Click tasto Stop autoplay
// buttonStopEl.addEventListener(
//     "click",
//     function () {
//         clearInterval(clock);
//     }
// );

/********************************
 *                              *
 *           FUNCTIONS          *
 *                              *
 ********************************/

/**
 * Funzione che recupera elementi di uno slider e gestendo le classi "item" e "active" crea uno scorrimento in avanti
 *
 */
// function nextSlide() {
//     const sliderImages = document.querySelectorAll(".item");

//     sliderImages[activeImage].classList.remove("active");

//     activeImage++;

//     if (activeImage >= sliderImages.length) {
//         activeImage = 0;
//     }

//     sliderImages[activeImage].classList.add("active");
// };

/**
 * Funzione che recupera elementi di uno slider e gestendo le classi "item" e "active" crea uno scorrimento all'indietro
 *
 */
// function prevSlide() {
//     const sliderImages = document.querySelectorAll(".item");

//     sliderImages[activeImage].classList.remove("active");

//     activeImage--;

//     if (activeImage < 0) {
//         activeImage = sliderImages.length - 1;
//     }

//     sliderImages[activeImage].classList.add("active");
// };

/**
 * Funzione che a seconda della funzione data come parametro genera uno scroll * automatico
 *
 * @param {function} scrollFunction funzione da dare come parametro per stabilire la direzione dello scroll automatico
 */
// function autoplay(scrollFunction) {
//     clock = setInterval(scrollFunction, 3000);
// };

// function switchToSlide(index) {
//     const activeSlide = document.querySelector(".item.active");
//     const allSlides = document.querySelectorAll(".item");
//     activeSlide.classList.remove("active");
//     allSlides[index].classList.add("active");
// };


/********************************
 *                              *
 *           CORREZIONE         *
 *                              *
 ********************************/

// RECUPERO ELEMENTI THUMBNAILS DALL'HTML
const thumbsEl = document.querySelectorAll(".thumbnails");

// CICLO GLI ELEMENTI E AGGIUNGO LA SELEZIONE DELL'IMMAGINE SULL'EVENTO CLICK
thumbsEl.forEach((thumbEl, index) => {
    thumbEl.addEventListener(
        "click",
        function () {
            const thisIndex = this.getAttribute("data-index");
            console.log(thisIndex);
            switchToSlide(thisIndex);
        }
    );
});

// CREO ARROW FUNCTION PER CLICK SULLA FRECCIA "IMMAGINE SUCCESSIVA"
const onNextClick = () => {
    activeImage++;

    if (activeImage >= images.length) {
        activeImage = 0;
    };

    console.log(activeImage);

    switchToSlide(activeImage);
};

// CREO ARROW FUNCTION PER CLICK SULLA FRECCIA "IMMAGINE PRECEDENTE"
const onPrevClick = () => {
    activeImage--;

    if (activeImage < 0) {
        activeImage = images.length - 1;
    };

    console.log(activeImage);

    switchToSlide(activeImage);
}

// EVENTO AL CLICK DELLA FRECCIA "IMMAGINE SUCCESSIVA"
nextArrowEl.addEventListener("click", onNextClick);

// EVENTO AL CLICK DELLA FRECCIA "IMMAGINE PRECEDENTE"
prevArrowEl.addEventListener("click", onPrevClick);

// FUNZIONE PER CAMBIARE SLIDE CHE UTILIZZO NELLE ARROW FUNCTION "NextClick" e "PrevClick"
function switchToSlide(index) {
    const activeSlide = document.querySelector(".item.active");
    activeSlide.classList.remove("active");
    const allSlides = document.querySelectorAll(".item");
    allSlides[index].classList.add("active");
};

// DICHIARO VARIABILE AUTOPLAY 
let autoplay;

// CREO EVENTO AL CLICK DEL BOTTONE "START AUTOPLAY"
buttonStartEl.addEventListener(
    "click",
    function () {
        autoplay = setInterval(() => { onNextClick(); }, 3000);
    }
);

// CREO EVENTO AL CLICK DEL BOTTONE "STOP" (azzero variabile autoplay)
buttonStopEl.addEventListener("click", () => {
    clearInterval(autoplay);
});

// CREO EVENTO AL CLICK DEL BOTTONE "RETROPLAY"
buttonRetroEl.addEventListener(
    "click",
    function () {
        autoplay = setInterval(() => { onPrevClick(); }, 3000);
    }
);
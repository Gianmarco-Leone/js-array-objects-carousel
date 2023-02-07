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

    let slideClass = "item";
    if (currentImageIndex == activeImage) {
        slideClass += " active";
    };

    const sliderImage = `
    <div class=${slideClass}>
        <img src="./${currentImage}" alt="Carousel image">
        <div class="item-text text-white
        text-end">
            <h1>
                ${currentTitle}
            </h1>
            <p>
                ${currentText}
            </p>
        </div>
    </div>
    `;

    sliderContainerEl.innerHTML += sliderImage;

});

autoplay();


/********************************
 *                              *
 *           ON CLICK           *
 *                              *
 ********************************/

// Click tasto slide precedente
prevArrowEl.addEventListener(
    "click",
    function () {
        // Recupero slide
        const sliderImages = document.querySelectorAll(".item");

        // Dalla slide con indice "activeImage" rimuovo la classe active
        sliderImages[activeImage].classList.remove("active");

        // Decremento activeImage
        activeImage--;

        // Se vado sotto il valore dell'indice minimo delle slide
        if (activeImage < 0) {
            // Riporto activeImage all'indice più alto
            activeImage = sliderImages.length - 1;
        }

        // A questo punto riaggiungo classe active
        sliderImages[activeImage].classList.add("active");
    }
);

// Click tasto slide successiva
nextArrowEl.addEventListener(
    "click",
    function () {
        const sliderImages = document.querySelectorAll(".item");

        sliderImages[activeImage].classList.remove("active");

        activeImage++;

        if (activeImage >= sliderImages.length) {
            activeImage = 0;
        }

        sliderImages[activeImage].classList.add("active");
    }
);



/********************************
 *                              *
 *           FUNCTION           *
 *                              *
 ********************************/

function nextSlide() {
    const sliderImages = document.querySelectorAll(".item");

    sliderImages[activeImage].classList.remove("active");

    activeImage++;

    if (activeImage >= sliderImages.length) {
        activeImage = 0;
    }

    sliderImages[activeImage].classList.add("active");
};



function autoplay() {
    let clock = setInterval(nextSlide, 3000);
}
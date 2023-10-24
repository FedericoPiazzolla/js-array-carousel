// dichiaro l'array delle immagini
const images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg", 
  "img/04.jpg", 
  "img/05.jpg"
];
console.log(images);

// Inserimento delle immagini all'interno della pagina
const itemsElem = document.querySelector(".items");

let imageString = "";

for (let i = 0; i < images.length; i++) {
  const curImages = images[i];

  imageString += `<div class="item">
    <img src="${curImages}" alt="">
    </div>`
  
}
console.log(imageString);

itemsElem.innerHTML += imageString;

// Mostro immagini su html
const slideElems = document.querySelectorAll(".item");
console.log(slideElems)

// Partenza del carosello
let currentSlideIndex = 0;
slideElems[currentSlideIndex].classList.add("active");

// cambio immagine con la freccia verso il basso
document.getElementsByClassName("next")[0].addEventListener("click", function() {

  if (currentSlideIndex < slideElems.length - 1) {
    slideElems[currentSlideIndex].classList.remove("active");
    currentSlideIndex++;
    slideElems[currentSlideIndex].classList.add("active");
  }
  
})
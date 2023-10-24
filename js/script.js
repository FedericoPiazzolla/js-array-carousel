// dichiaro l'array delle immagini
const images = [
  "img/01.png",
  "img/02.png",
  "img/03.png", 
  "img/04.png", 
  "img/05.png"
];
console.log(images);

// Inserimento delle immagini all'interno della pagina
const itemsElem = document.querySelector(".items");

let imageString = "";

for (let i = 0; i < images.length; i++) {
  const curImages = images[i];

  imageString += `<div class="item active">
    <img src="${curImages}" alt="">
    </div>`
  
}
console.log(imageString);
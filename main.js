const header = document.querySelector("header");
const h1 = document.querySelector('h1');
let image = true;
let title = true;

const changeImage = () => {
    image = !image;
    title = !title;
    header.style.backgroundImage = image ? "url(maroko.jpg)" : "url(zakynthos.jpg)" ;
    h1.textContent = title ? "Maroco" : "Zakynthos"

}

header.addEventListener("click", changeImage)
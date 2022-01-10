//Récupération  de l'URL de la page courante
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

fetch(`http://localhost:3000/api/products/${id}`)
  .then((res) => res.json())
  .then((res) => getData(res));

//recuperation des données
function getData(kanap) {
  // const altTxt = kanap.altTxt;
  // const colors = kanap.colors;
  // const description = kanap.description;
  // const imageUrl = kanap.imageUrl;
  // const name = kanap.name;
  // const price = kanap.price;
  const { altTxt, colors, description, imageUrl, name, price } = kanap;
  makeImage(imageUrl, altTxt);
  makeTitle(name);
  makePrice(price);
  makeDescription(description);
  makeColors(colors);
}

//affichage de l'image
function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  const parent = document.querySelector(".item__img");
  parent.appendChild(image);
}
//affichage du nom
function makeTitle(name) {
  const h1 = document.querySelector("#title");
  h1.innerHTML = name;
}
//affichage du prix
function makePrice(price) {
  const span = document.querySelector("#price");
  span.textContent = price;
}
//affichage de la description
function makeDescription(description) {
  const p = document.querySelector("#description");
  p.textContent = description;
}
//choix des couleurs
function makeColors(colors) {
  const select = document.querySelector("#colors");
  colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    select.appendChild(option);
  });
}

//Panier

const button = document.querySelector("#addToCart");
button.addEventListener("click", (e) => {
  const color = document.querySelector("#colors").value;
  const quantity = document.querySelector("#quantity").value;
  if (color == null || color === "" || quantity == null || quantity == 0) {
    alert("Veuillez saisir une couleur et une quantité");
  }
});

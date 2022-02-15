//----------Récupération de l'URL de la page courante----------
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
if (id != null) {
  let itemPrice = 0;
  let imgUrl, altText, articleName;
}

fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => response.json())
  .then((res) => handleData(res));

//----------Récupération des données----------
function handleData(kanap) {
  const { altTxt, colors, description, imageUrl, name, price } = kanap;
  //const altTxt = kanap.altTxt:
  //const colors = kanap.colors;
  //const description = kanap.description:
  //const imageUrl = kanap.imageUrl;
  //const name = kanap.name;
  //const price = kanap.price:
  itemPrice = price;
  imgUrl = imageUrl;
  altText = altTxt;
  articleName = name;
  makeImage(imageUrl, altTxt);
  makeTitle(name);
  makePrice(price);
  makeDescription(description);
  makeColors(colors);
}

//----------Affichage de l'image----------
function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  const parent = document.querySelector(".item__img");
  parent.appendChild(image);
}
//----------Affichage du nom----------
function makeTitle(name) {
  const h1 = document.querySelector("#title");
  h1.textContent = name;
}
//----------Affichage du prix----------
function makePrice(price) {
  const span = document.querySelector("#price");
  span.textContent = price;
}
//----------Affichage de la description--------
function makeDescription(description) {
  const p = document.querySelector("#description");
  p.textContent = description;
}
//----------Choix de la couleur----------
function makeColors(colors) {
  const select = document.querySelector("#colors");
  colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    select.appendChild(option);
  });
}

//----------Panier----------
const button = document.querySelector("#addToCart");
button.addEventListener("click", handleClick);

function handleClick() {
  const color = document.querySelector("#colors").value;
  const quantity = document.querySelector("#quantity").value;

  if (isOrderInvalid(color, quantity)) return;
  saveOrder(color, quantity);
  redirectToCart();
}

function saveOrder(color, quantity) {
  const key = `${id}-${color}`;
  const data = {
    id: id,
    color: color,
    quantity: Number(quantity),
    price: itemPrice,
    imageUrl: imgUrl,
    altTxt: altText,
    name: articleName,
  };
  localStorage.setItem(key, JSON.stringify(data));
}
function isOrderInvalid(color, quantity) {
  if (color == null || color === "" || quantity == null || quantity == 0) {
    alert("Veuillez saisir une couleur et une quantité");
    return true;
  }
}
function redirectToCart() {
  window.location.href = "cart.html";
}

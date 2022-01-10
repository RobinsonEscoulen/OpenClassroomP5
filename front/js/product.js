const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log({ id });

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
  // const _id = kanap._id;
  const { altTxt, colors, description, imageUrl, name, price, _id } = kanap;
  makeImage(imageUrl, altTxt);
}

//affichage de l'image
function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  const parent = document.querySelector(".item__img");
  if (parent != null) parent.appendChild(image);
}

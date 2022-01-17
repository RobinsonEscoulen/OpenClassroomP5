const cart = [];

collectItems();
cart.forEach((item) => displayItem(item));

function collectItems() {
  const numberItems = localStorage.length;
  for (let i = 0; i < numberItems; i++) {
    const item = localStorage.getItem(localStorage.key(i));
    const itemObject = JSON.parse(item);
    cart.push(itemObject);
  }
}

function displayItem(item) {
  const article = makeArticle(item);
  const divImage = makeDivImage(item);
  article.appendChild(divImage);

  const cardItemContent = makeCartContent(item);
  article.appendChild(cardItemContent);
  displayArticle(article);
  displayTotalQuantity();
  displayTotalPrice();
}

function displayTotalQuantity() {
  let total = 0;
  const totalQuantity = document.querySelector("#totalQuantity");

  cart.forEach((item) => {
    const totalItemQuantity = item.quantity;
    total += totalItemQuantity;
  });

  totalQuantity.textContent = total;
}

function displayTotalPrice() {
  let total = 0;
  const totalprice = document.querySelector("#totalPrice");

  cart.forEach((item) => {
    const totalUnitPrice = item.price * item.quantity;
    total += totalUnitPrice;
  });
  totalprice.textContent = total;
}

function makeCartContent(item) {
  const cardItemContent = document.createElement("div");
  cardItemContent.classList.add("cart__item__content");

  const description = makeDescription(item);
  const settings = makeSettings(item);

  cardItemContent.appendChild(description);
  cardItemContent.appendChild(settings);
  return cardItemContent;
}

function makeSettings(item) {
  const settings = document.createElement("div");
  settings.classList.add("cart__item__content__settings");

  addQuantity(settings, item);
  canDelete(settings);
  return settings;
}

function canDelete(settings) {
  const div = document.createElement("div");
  div.classList.add("cart__item__content__settings__delete");
  const p = document.createElement("p");
  p.textContent = "Supprimer";
  div.appendChild(p);
  settings.appendChild(div);
}

function addQuantity(settings, item) {
  const quantity = document.createElement("div");
  quantity.classList.add("cart__item__content__settings__quantity");
  const p = document.createElement("p");
  p.textContent = "Qté :";
  quantity.appendChild(p);
  const input = document.createElement("input");
  input.type = "number";
  input.classList.add("itemQuantity");
  input.name = "itemQuantity";
  input.min = "1";
  input.max = "100";
  input.value = item.quantity;
  input.addEventListener("input", () =>
    updatePriceQuantity(item.id, input.value, item)
  );
  quantity.appendChild(input);
  settings.appendChild(quantity);
}

function updatePriceQuantity(id, newValue, item) {
  const itemToUpdate = cart.find((item) => item.id === id);
  itemToUpdate.quantity = Number(newValue);
  displayTotalQuantity();
  displayTotalPrice();
  saveNewData(item);
}

function saveNewData(item) {
  const dataToSave = JSON.stringify(item);
  localStorage.setItem(item.id, dataToSave);
}

function makeDescription(item) {
  const description = document.createElement("div");
  description.classList.add("card__item__content__description");
  const h2 = document.createElement("h2");
  h2.textContent = item.name;
  const p = document.createElement("p");
  p.textContent = item.color;
  const p2 = document.createElement("p");
  p2.textContent = item.price + " €";

  description.appendChild(h2);
  description.appendChild(p);
  description.appendChild(p2);
  return description;
}

function displayArticle(article) {
  document.querySelector("#cart__items").appendChild(article);
}

function makeArticle(item) {
  const article = document.createElement("article");
  article.classList.add("card__item");
  article.dataset.id = item.id;
  article.dataset.color = item.color;
  return article;
}

function makeDivImage(item) {
  const div = document.createElement("div");
  div.classList.add("cart__item__img");
  const image = document.createElement("img");
  image.src = item.imageUrl;
  image.alt = item.altTxt;
  div.appendChild(image);
  return div;
}

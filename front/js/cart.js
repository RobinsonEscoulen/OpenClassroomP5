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
  const image = makeImage(item);
}

function makeArticle(item) {
  const article = document.createElement("article");
  article.classList.add("card__item");
  article.dataset.id = item.id;
  article.dataset.color = item.color;
  return article;
}

function makeImage(item) {
  const image = document.createElement("img");
  image.src = item.imageUrl;
  image.alt = item.altTxt;
  return image;
}

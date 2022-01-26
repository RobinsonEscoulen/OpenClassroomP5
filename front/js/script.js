fetch(`http://localhost:3000/api/products`)
  .then((res) => res.json())
  .then((data) => addProducts(data));

//ajout des kanaps
function addProducts(kanaps) {
  // const _id = kanaps[0]._id;
  // const imageUrl = kanaps[0].imageUrl;
  // const altTxt = kanaps[0].altTxt;
  // const name = kanaps[0].name;
  // const description = kanaps[0].description;

  // for (let i = 0; i < data.length; i++) {
  //   console.log("kanap numéro", i, data[i]);
  // }
  kanaps.forEach((kanap) => {
    const { _id, imageUrl, altTxt, name, description } = kanap;

    const anchor = makeAnchor(_id);
    const article = document.createElement("article");
    const image = makeImage(imageUrl, altTxt);
    const h3 = makeH3(name);
    const p = makeParagraph(description);

    appendElementsToArticle(article, [image, h3, p]);
    appendArticleToAnchor(anchor, article);
  });
}

function appendElementsToArticle(article, array) {
  array.forEach((item) => {
    article.appendChild(item);
  });
  // article.appendChild(image);
  // article.appendChild(h3);
  // article.appendChild(p);
}

function makeAnchor(id) {
  const anchor = document.createElement("a");
  anchor.href = "./product.html?id=" + id;
  return anchor;
}

function appendArticleToAnchor(anchor, article) {
  const items = document.querySelector("#items");

  items.appendChild(anchor);
  anchor.appendChild(article);
}

function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  return image;
}

function makeH3(name) {
  const h3 = document.createElement("h3");
  h3.textContent = name;
  h3.classList.add("productName");
  return h3;
}
function makeParagraph(description) {
  const p = document.createElement("p");
  p.textContent = description;
  p.classList.add("productDescription");
  return p;
}

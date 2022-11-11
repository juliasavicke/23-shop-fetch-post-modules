"use strict";
console.log("fn.js");

// 'https://dummyjson.com/products';
const BASE_URL = "https://dummyjson.com";
const BASE_URL_DEVELOPMENT = "db.json";

// bendrine fetch funkcija
function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("klaida getData", err));
}

// get products from local json
function getProducts() {
  return getData(`${BASE_URL_DEVELOPMENT}`).then((data) => data.products);
}
// get single product from url
function getSingleProduct(id) {
  return getData(`${BASE_URL}/products/${id}`).then((item) => item);
}
// get products categories in array
function getProdCategories() {
  return getData(`${BASE_URL}/products/categories`).then(
    (categoriesArr) => categoriesArr
  );
}
// get products from selected category
function getProductsInCategory(category) {
  return getData(`${BASE_URL}/products/category/${category}`).then(
    (products) => products
  );
}

function makeOneSingleItem(itemObj) {
  /* 
  <div class="shop-item card">
  </div>
  */
  const divEl = document.createElement("div");
  divEl.className = "shop-item card";
  divEl.innerHTML = `
    <img src="${itemObj.thumbnail}" alt="preke">
      <p class="price">${itemObj.price} eur</p>
      <p>Category: ${itemObj.category} (${itemObj.id})</p>
      <p>Description: ${itemObj.description}</p>
      <p><i>Stock: ${itemObj.stock}</i></p>
      <div class="control">
        <button>Add to cart</button>
        <a href="index.html">go back ></a>
      </div>
  `;
  return divEl;
}
// getSingleProduct(5);
// getProducts().then(products);

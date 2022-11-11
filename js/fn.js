"use strict";
console.log("fn.js");

// https://dummyjson.com/products
const BASE_URL = "https://dummyjson.com";

// bendrine fetch funkcija
function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("klaida getData", err));
}

// konkreti funkcija gauti produktus
function getProducts() {
  getData(`${BASE_URL}/products`).then((data) => data.products);
}

//getProducts().then(products);

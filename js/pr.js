"use strict";
console.log("pr.js");

// suzinoti koks dabartinio produkto id
const productEl = document.getElementById("item");
const titleEl = document.querySelector("h1");
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("prId");
console.log("productId ===", productId);

// parsiusti ta produkta
// sugeneruoti jo html arba supildyti html

getSingleProduct(productId).then((productObj) => {
  titleEl.textContent = productObj.title;
  productEl.innerHTML = "";
  const htmlProductEl = makeOneSingleItem(productObj);
  productEl.append(htmlProductEl);
});

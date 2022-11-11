"use strict";
console.log("post.js");

function sendPost(obj) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };
  return fetch("https://dummyjson.com/products/add", options)
    .then((resp) => resp.json())
    .then((ats) => {
      console.log("ats ===", ats);
      return ats;
    })
    .catch((err) => console.warn("klaida sendPost", err));
}

//sendPost();

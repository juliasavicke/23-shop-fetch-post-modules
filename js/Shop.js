class Shop {
  // html element targets
  el = {};
  items = [];

  constructor() {
    this.initTargets();
    this.getItems();
  }

  addNewProductToList(prod) {
    this.items.unshift(prod);
    this.renderList();
  }

  initTargets() {
    this.el.list = document.getElementById("products");
  }

  getItems() {
    getProducts().then((products) => {
      this.items = products;
      this.renderList();
      // console.log(JSON.stringify(products[0], null, 2));
    });
  }
  makeOneItem(itemObj) {
    const divEl = document.createElement("div");
    divEl.className = "shop-item card";
    divEl.innerHTML = `
        <img src="${itemObj.thumbnail}" alt="preke">
          <h3>${itemObj.title}</h3>
          <p class="price">${itemObj.price} eur</p>
          <p>Category: ${itemObj.category} (${itemObj.id})</p>
          <div class="control">
            <button>Add to cart</button>
            <a href="product.html?prId=${itemObj.id}">more info ></a>
          </div>
      `;
    return divEl;
  }

  renderList() {
    this.el.list.innerHTML = "";
    console.log("this.items ===", this.items);
    this.items
      .map((iObj) => this.makeOneItem(iObj))
      .forEach((htmlEl) => this.el.list.append(htmlEl));
  }
} //class end

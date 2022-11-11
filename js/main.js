"use strict";
console.log("main.js");

const app = new Shop();
console.log("app ===", app);

class MyForm {
  formEl = document.forms[0];
  filterEl = document.getElementById("filter-category");
  categoriesArr = [];
  constructor() {
    this.initListeners();
    this.makeAndAddCategoriesOptions(this.categoriesArr);
    this.filterEl.addEventListener("change", (event) => {
      // get products in selected category
      // event.target !!!
      getProductsInCategory(event.target.value).then((products) => {
        app.items = products.products;
        app.renderList();
      });
    });
  }

  initListeners() {
    this.formEl.addEventListener("submit", async (event) => {
      event.preventDefault();
      // surinkti visus inputus i javascriptini objekta
      //   this.el.title = this.formEl.elements.title.value.trim();
      //   this.el.price = this.formEl.elements.price.value.trim();
      //   this.el.category = this.formEl.elements.category.value.trim();
      //   this.el.thumbnail = this.formEl.elements.thumbnail.value.trim();
      // DESTRUKTURIZACIJA

      const { title, price, thumbnail, description, category } =
        this.formEl.elements;
      const newProductObj = {
        title: title.value.trim(),
        price: price.value.trim(),
        thumbnail: thumbnail.value.trim(),
        description: description.value.trim(),
        category: category.value.trim(),
      };
      //isspausdinti objekta

      console.log("newProductObj ===", newProductObj);
      // issiusti objekta

      const createdPostFromServer = await sendPost(newProductObj);
      if (!!createdPostFromServer) {
        this.formEl.parentElement.style.display = "none";
        app.addNewProductToList(createdPostFromServer);
      }
    });
  }

  async makeAndAddCategoriesOptions() {
    await getProdCategories().then((categories) => {
      this.categoriesArr = categories;
      this.categoriesArr.forEach((cat) => {
        // Add categories to form select options
        this.formEl.elements.category.innerHTML += `<option>${cat}</option>`;
        // Add categories to filter select options
        this.filterEl.innerHTML += `<option>${cat}</option>`;
      });
    });
  }
}

const form1 = new MyForm();
console.log("form1 ===", form1);

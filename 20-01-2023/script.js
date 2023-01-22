  import { qS, qSA, cE } from "./utils.js";
  import {createCardBoxes, SelectCategoriesCreator, filterByCategory } from "./elementGenerator.js"

  export {loadingButtonEl, categorySelectEl, listaProdotti}
  
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const img3 = document.querySelector("#img3");

  const leftBtnEl = qS(".left_btn");
  const centerBtnEl = qS(".center_btn");
  const rightBtnEl = qS(".right_btn");
  
  const hamburgerBtn = document.querySelector(".hamburger");
  const sideNavEl = document.querySelector(".side_nav");
  const loadingButtonEl = qS(".loadingBtn");
  const categorySelectEl = document.querySelector("#categorySelect");
  let listaProdotti;

leftBtnEl.addEventListener("click", (event) => {
    img1.classList.add("show");
    img2.classList.remove("show");
    img3.classList.remove("show");

    leftBtnEl.classList.add("active");
    centerBtnEl.classList.remove("active");
    rightBtnEl.classList.remove("active");
  });

centerBtnEl.addEventListener("click", () => {
    img1.classList.remove("show");
    img2.classList.add("show");
    img3.classList.remove("show");

    leftBtnEl.classList.remove("active");
    centerBtnEl.classList.add("active");
    rightBtnEl.classList.remove("active");
  });

rightBtnEl.addEventListener("click", () => {
    img1.classList.remove("show");
    img2.classList.remove("show");
    img3.classList.add("show");

    leftBtnEl.classList.remove("active");
    centerBtnEl.classList.remove("active");
    rightBtnEl.classList.add("active");
  });

hamburgerBtn.addEventListener("click", ( event) => {

  sideNavEl.classList.toggle("show");
  });

loadingButtonEl.addEventListener("click", () => {
    loadingButtonEl.style.cursor = "wait";
    loadingButtonEl.textContent = "Caricamento";
    fetch("https://api.escuelajs.co/api/v1/products/")
      .then((res) => res.json())
      .then(data => {
          createCardBoxes(data);
          listaProdotti = data;
          categorySelectEl.classList.remove("selectContainer")
       })
      .catch((error) => {
        loadingButtonEl.textContent = "Errore nel caricamento";
        loadingButtonEl.style.color = "red";
        console.log("MIO ERRORE: ", error);
      });
    });

categorySelectEl.addEventListener("change", e => {
  console.log(parseInt(categorySelectEl.value));
  filterByCategory(categorySelectEl.value);
});  

const metodoGetCat = () => {
   fetch("https://api.escuelajs.co/api/v1/categories/")
  .then(res => res.json())
  .then(data => SelectCategoriesCreator(data))
  .catch(e => console.log("Questo è il mio errore: ", e));
    };
metodoGetCat();
import { qS, qSA, cE } from "./utils.js";

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const leftBtnEl = qS(".left_btn");
const centerBtnEl = qS(".center_btn");
const rightBtnEl = qS(".right_btn");
const hamburgerBtn = document.querySelector(".hamburger");
const sideNavEl = document.querySelector(".side_nav");

const cart = [];

leftBtnEl.addEventListener("click", () => {
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

hamburgerBtn.addEventListener("click", () => {
  sideNavEl.classList.toggle("show");
});

const loadingButtonEl = qS(".loadingBtn");
loadingButtonEl.addEventListener("click", () => {
  loadingButtonEl.style.cursor = "wait";
  loadingButtonEl.textContent = "Caricamento";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => createCardBoxes(data))
    .catch((error) => {
      loadingButtonEl.textContent = "Errore nel caricamento";
      loadingButtonEl.style.color = "red";
      console.log("MIO ERRORE: ", error);
    });
});

  
const createCardBoxes = (data) => {
  data.forEach((item) => {
    loadingButtonEl.style.display = "none";
    const cardContainerEl = cE("div");
    cardContainerEl.className = "card";

    const productTitleEl = cE("h1");
    productTitleEl.className = "product_title";
    productTitleEl.textContent = item.title.slice(0, 10);

    const containerEl = cE("div");
    containerEl.className = "img-box";
    const productImgEl = cE("img");
    productImgEl.className = "imgCard";
    productImgEl.setAttribute("src", item.images);
    const productPriceEl = cE("p");
    productPriceEl.className = "product_price";
    productPriceEl.textContent = item.price + "£";

    const productDescriptionEl = cE("p");
    productDescriptionEl.className = "product_description";
    productDescriptionEl.textContent = item.description.slice(0, 30);

    const addBtn = document.createElement("button");
    addBtn.className ="addToCharBtn";
    addBtn.textContent = "Aggiungi al Carrello";

    addBtn.addEventListener("click", () => {
    alert("Il prodotto è stato aggiunto al cartello!");
    cart.push(item);
    cartCreation();
    console.log(cart);})

    containerEl.append(productImgEl, productPriceEl);
    cardContainerEl.append(productTitleEl, containerEl, productDescriptionEl, addBtn);
    cardSectionEl.appendChild(cardContainerEl);
  });
};

const cartCreation = () => {
  sideNavEl.innerHTML = "";
  cart.forEach(data=> {
    const cartEl = document.createElement("div");
    cartEl.className = "productCartInfo";
    const nameProductEl = cE("p");
    nameProductEl.className = "nameProduct"
    nameProductEl.textContent= data.title;
    const priceProductEl = cE("p");
    priceProductEl.textContent= data.price + "£";

    const cartBtnEl = document.createElement("div");
    const lessBtnEl = cE("button");
    lessBtnEl.className= "lessBtn"
    lessBtnEl.textContent= "-";
    const plusBtnEl = cE("button");
    plusBtnEl.className= "plusBtn"
    plusBtnEl.textContent= "+";
    cartBtnEl.className = "cartBtn"

    cartBtnEl.append(lessBtnEl, plusBtnEl);
    cartEl.append(nameProductEl,priceProductEl)
    sideNavEl.append(cartEl, cartBtnEl);
  });
};

const cardSectionEl = qS(".cardBox");

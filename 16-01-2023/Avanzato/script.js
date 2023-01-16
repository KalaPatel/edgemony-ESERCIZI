import { qS, qSA, cE } from "./utils.js";

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
    productTitleEl.textContent = item.title;

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
    productDescriptionEl.textContent = item.description;

    containerEl.append(productImgEl, productPriceEl);
    cardContainerEl.append(productTitleEl, containerEl, productDescriptionEl);
    cardSectionEl.appendChild(cardContainerEl);
  });
};

const cardSectionEl = qS(".cardBox");

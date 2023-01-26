import { cE, qS } from "./utils.js";
import myJson from "./mocks.json" assert { type: "json" };

const bodyEl = qS("body");
const sectionCard = cE("section");
sectionCard.className = "container";
// const searchBarEl = qS("#userSearch")

const cardCreator = (data) => {
  const userCardBoxEl = cE("div");
  userCardBoxEl.className = "card_Box";
  const userImg = cE("img");
  userImg.setAttribute("src", data.image);
  userImg.setAttribute("alt", data.name + " picture");

  const nutritionsInfoEl = cE("div");
  nutritionsInfoEl.className = "nutritions_Info";

  const infoEl = cE("div");
  infoEl.className = "infoBox";
  const fruitInfoEl = cE("div");

  const fruitNameEl = cE("h1");
  fruitNameEl.textContent = data.name;
  const familyFruitNameEl = cE("h2");
  familyFruitNameEl.textContent = data.family + " / " + data.order;
  familyFruitNameEl.className = "fruitName";
  familyFruitNameEl.className = "familyName";

  const carbohydratesEl = cE("p");
  carbohydratesEl.textContent = "Carboidrati: " + data.nutritions.carbohydrates;

  const carbohydratesGraphContainer = cE("div");
  carbohydratesGraphContainer.className = "graphBox";
  const carbohydratesGraph = cE("div");
  carbohydratesGraph.className = "carbGraph";
  carbohydratesGraph.style.width = `${data.nutritions.carbohydrates * 9}px`;

  const proteinEl = cE("p");
  proteinEl.textContent = "Proteine: " + data.nutritions.protein;
  const proteinGraphContainer = cE("div");
  proteinGraphContainer.className = "graphBox";
  const proteinGraph = cE("div");
  proteinGraph.className = "proteinGraph";

  proteinGraph.style.width = `${data.nutritions.protein * 9}px`;

  const sugarEl = cE("p");
  sugarEl.textContent = "Zucchero: " + data.nutritions.sugar;
  const sugarGraphContainer = cE("div");
  sugarGraphContainer.className = "graphBox";
  const sugarGraph = cE("div");
  sugarGraph.className = "sugarGraph";
  sugarGraph.style.width = `${data.nutritions.sugar * 9}px`;

  const fatEl = cE("p");
  fatEl.textContent = "Grassi: " + data.nutritions.fat;
  const fatGraphContainer = cE("div");
  fatGraphContainer.className = "graphBox";
  const fatGraph = cE("div");
  fatGraph.className = "fatGraph";
  fatGraph.style.width = `${data.nutritions.fat * 9}px`;

  fatGraphContainer.append(fatGraph);
  sugarGraphContainer.append(sugarGraph);
  proteinGraphContainer.append(proteinGraph);
  carbohydratesGraphContainer.append(carbohydratesGraph);
  fruitInfoEl.append(fruitNameEl, familyFruitNameEl);
  infoEl.append(fruitInfoEl);

  nutritionsInfoEl.append(
    infoEl,
    carbohydratesEl,
    carbohydratesGraphContainer,
    proteinEl,
    proteinGraphContainer,
    sugarEl,
    sugarGraphContainer,
    fatEl,
    fatGraphContainer
  );
  userCardBoxEl.append(userImg, nutritionsInfoEl);
  return userCardBoxEl;
};

myJson.forEach((data) => {
  sectionCard.append(cardCreator(data));
});

bodyEl.append(sectionCard);

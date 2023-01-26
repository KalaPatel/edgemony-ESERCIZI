import { cE, qS } from "./utils.js";
import myJson from "./mocks.json" assert { type: "json" };
console.log(myJson);
const bodyEl = qS("body");
const sectionCard = cE("section");
sectionCard.className = "container";
// const searchBarEl = qS("#userSearch")
const cardCreator = (data) => {
  const userCardBoxEl = cE("div");
  userCardBoxEl.className = "card_Box";
  userCardBoxEl.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  //   const userImg = cE("img");
  //   userImg.setAttribute(
  //     "src",
  //     "https://picsum.photos/200/300/?" + Math.floor(Math.random(1) * 30)
  //   );
  //   userImg.setAttribute("alt", "user profile picture");
  const bioInfoEl = cE("div");
  bioInfoEl.className = "bio_Info";

  const nameAgeBoxEl = cE("div");
  nameAgeBoxEl.className = "nameAgeInfo";
  const nameBoxEl = cE("div");
  const ageBoxEl = cE("div");
  ageBoxEl.className = "ageBoxEl";

  const userNameEl = cE("h1");
  userNameEl.textContent = data.name;
  const fullNameEl = cE("h2");
  fullNameEl.textContent = data.family + " / " + data.order;
  userNameEl.className = "userName";
  fullNameEl.className = "firstlastName";

  const ageEl = cE("p");
  ageEl.textContent = data.family;
  const birthDateEl = cE("p");
  birthDateEl.textContent = data.orders;

  const carbohydratesEl = cE("p");
  carbohydratesEl.textContent = "Carboidrati: " + data.nutritions.carbohydrates;
  const caloryEl = cE("p");
  caloryEl.textContent = "Calorie: " + data.nutritions.protein;

  const EmailEl = cE("p");
  EmailEl.textContent = "Zucchero: " + data.nutritions.sugar;
  const AdressEl = cE("p");
  AdressEl.textContent = "Grassi: " + data.nutritions.fat;

  nameBoxEl.append(userNameEl, fullNameEl);
  nameAgeBoxEl.append(nameBoxEl);
  bioInfoEl.append(nameAgeBoxEl, carbohydratesEl, caloryEl, EmailEl, AdressEl);
  userCardBoxEl.append(bioInfoEl);
  return userCardBoxEl;
};

myJson.forEach((data) => {
  sectionCard.append(cardCreator(data));
});

bodyEl.append(sectionCard);

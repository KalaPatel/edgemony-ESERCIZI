import {cE, qS, cardCreator} from "./utils.js";
import {GET} from "./fetch.js";
const bodyEl = qS("body");
const sectionCard = cE("section");
sectionCard.className ="container"
const searchBarEl = qS("#userSearch")

const deleteCard = () => {
    const cardEls = document.querySelectorAll(".card_Box");
    cardEls.forEach((users)=> users.remove());
}

GET("users").then(data=> data.users.map((users)=> {
    sectionCard.append(cardCreator (users))
}))

searchBarEl.addEventListener("input", e => {
    const searchValue = e.target.value;
    deleteCard();
    GET("users").then(data=> data.users.map((users)=> {
        if(users.firstName.includes(searchValue) || users.lastName.includes(searchValue) || users.username.includes(searchValue)) 
        sectionCard.append(cardCreator (users))
  }))
})

bodyEl.append(sectionCard);

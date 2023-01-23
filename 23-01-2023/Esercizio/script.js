import {cE, qS, cardCreator} from "./utils.js";
import {GET} from "./fetch.js";

const bodyEl = qS("body");
const sectionCard = cE("div");

GET("quotes/26").then(data => sectionCard.append(cardCreator(data)))


bodyEl.appendChild(sectionCard);

console.log("ciao")
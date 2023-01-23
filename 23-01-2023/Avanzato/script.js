import {cE, qS, cardCreator} from "./utils.js";
import {GET} from "./fetch.js";
const bodyEl = qS("body");
const sectionCard = cE("section");
sectionCard.className ="section_transparent"
const quoteBtnGen = cE("button");
quoteBtnGen.className = ("btn_quote")
quoteBtnGen.textContent = "Frase del giorno";

quoteBtnGen.addEventListener("click", ()=>GET("quotes/").then(data => {
    sectionCard.innerHTML = ""
    sectionCard.classList.remove("section_transparent")
    sectionCard.classList.add("section_show")
    sectionCard.append(cardCreator(data), quoteBtnGen)}))


bodyEl.append(sectionCard, quoteBtnGen);

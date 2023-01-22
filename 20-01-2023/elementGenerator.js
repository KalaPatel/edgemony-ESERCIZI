import { qS, qSA, cE } from "./utils.js";
import{loadingButtonEl, categorySelectEl, listaProdotti} from "./script.js"
export {createCardBoxes, SelectCategoriesCreator, filterByCategory }

const cartEls = document.querySelector(".cart__Elements");
const totalPriceContainer = qS(".totalPriceContainer")
const totalTextEl = qS(".totalText")
const totalPriceEl = qS(".totalPrice")
const cartItemQty = qS(".counter");
const cardSectionEl = qS(".cardBox");


cartEls.innerHTML = "Il tuo carrello è vuoto :(";
const cart = [];
const createCardBoxes = (data) => {
  loadingButtonEl.style.display = "none";
  
  cardSectionEl.innerHTML= "";
  
  data.forEach(item => {
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
    cartPopulator(item);
 });

  containerEl.append(productImgEl, productPriceEl);
  cardContainerEl.append(productTitleEl, containerEl, productDescriptionEl, addBtn);
  cardSectionEl.appendChild(cardContainerEl);
})
};

const cartCreation = () => {
  cartEls.innerHTML = "";
    
  const priceArr = cart.map(e => e.price * e.qty);
  let sum = 0;
  for (let i = 0; i < priceArr.length; i++) {
    sum += priceArr[i];
}
cartItemQty.textContent = cart.length;

    cart.forEach((data, index)=> {
      const cartEl = document.createElement("div");
      cartEl.className = "productCartInfo";
      const nameProductEl = cE("p");
      nameProductEl.className = "nameProduct"
      nameProductEl.textContent=  data.title;
      const priceProductEl = cE("p");
      priceProductEl.textContent= data.price * data.qty + "£";
      
      const cartBtnEl = document.createElement("div");
      const lessBtnEl = cE("button");
      lessBtnEl.className= "lessBtn"
      lessBtnEl.textContent= "-";
      const plusBtnEl = cE("button");
      const quantityEl = cE("p");
      quantityEl.textContent = data.qty;
      plusBtnEl.className= "plusBtn"
      plusBtnEl.textContent= "+";
      cartBtnEl.className = "cartBtn"

      const cartInfoBox = cE("div")
      cartInfoBox.className ="cartInfoBox";
      totalPriceContainer.style.borderTop = "1px solid gray" 
      totalTextEl.textContent="TOTALE"
      totalPriceEl.textContent = sum;

      plusBtnEl.addEventListener("click", () => {
        quantityEl.textContent++
        data.qty++        
        const priceArrPlusQty = cart.map(e => e.price * e.qty);
        let sumQty = 0;      
        for (let i = 0; i < priceArrPlusQty.length; i++) {
          sumQty += priceArrPlusQty[i];
      }
        priceProductEl.textContent= data.price * quantityEl.textContent + "£";
        totalPriceEl.textContent =  sumQty;
      })

      lessBtnEl.addEventListener("click", () =>{ 
      quantityEl.textContent--
      data.qty--  
      if (quantityEl.textContent < 1) {cartInfoBox.remove()
      cart.splice(index, 1)} 
     
      const priceArrPlusQty = cart.map(e => e.price * e.qty);
        let sumQty = 0;      
        for (let i = 0; i < priceArrPlusQty.length; i++) {
          sumQty += priceArrPlusQty[i];
      }
        priceProductEl.textContent= data.price * quantityEl.textContent + "£";
        totalPriceEl.textContent =  sumQty;
      })

      cartEl.append(nameProductEl,priceProductEl)
      cartBtnEl.append(lessBtnEl,quantityEl, plusBtnEl);
      cartInfoBox.append(cartEl, cartBtnEl)
      cartEls.append(cartInfoBox);
    });
} 

const cartPopulator = item => {
    const newObj = {
      id: item.id,
      title: item.title,
      price: item.price,
      qty: 1,
    };
  
    const search = cart.filter(element => {
      if (element.id === newObj.id){
        element.qty++;
        return element
      }
    })
  
    if (search.length === 0) {
      cart.push(newObj);
    }
    cartCreation();
  } 

 const SelectCategoriesCreator = arrayCat => {
  arrayCat.forEach(item => {
    const optionValue = document.createElement("option");
    optionValue.textContent = item.name;
    optionValue.setAttribute("value", item.id);
    categorySelectEl.appendChild(optionValue);
  });
};

const filterByCategory = idCat => {
  const filteredProducts = listaProdotti.filter(
    item => item.category.id ===  parseInt(idCat)
  );
  createCardBoxes(filteredProducts)
  console.log(filteredProducts)
};
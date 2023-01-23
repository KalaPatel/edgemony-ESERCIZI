import { qS, qSA, cE } from "./utils.js";

const postForm =qS("#formAddProducts");
const categoryForm = qS("#formAddCategory");
const inputSelectorContainer = qS("#put_postSelect");
const putInputContainer = qS(".selectContainer");
const deleteForm = qS("#formDeleteProduct");

deleteForm.addEventListener("submit", event => {
  event.preventDefault();
  formDeleteProd("products", event.target[0].value);
})

const formDeleteProd = (callType, idProduct) => {
  fetch("https://api.escuelajs.co/api/v1/" + callType + "/" + idProduct , {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data !== true) {
        alert(
          "ERRORE: Il tuo prodotto non è stato cancellato, controlla che le informazioni siano corrette!"
        );
      } else {
        alert("Il tuo prodotto è stato cancellato correttamente");
      }
    })
    .catch(e => console.log("ERRORE: ", e)); }

inputSelectorContainer.addEventListener("change", () => { 
//Rivedere con toggle  
  if(inputSelectorContainer.value === "PUT")  {
      putInputContainer.classList.remove("selectContainer")
     } else {
      putInputContainer.classList.add("selectContainer")
     }
} )


postForm.addEventListener("submit", event => {   
  const method = event.target[0].value;
  const idProduct = "/" + event.target[1].value;
  event.preventDefault();
    if (event.target[5].value < 1 && event.target[4].value < 1) {
      alert("I valori numerici non possono avere un valore minore o uguale allo zero, ricontrollare");
      return;
    }
    const formObj = {
         title: event.target[2].value,
            price: event.target[4].value,
            description: event.target[6].value,
            categoryId: event.target[5].value,
            images: [event.target[3].value],
          };
          console.log(formObj);
          if (method === "POST") {
            funzionePost(formObj, "products", method, "del prodotto", "Il tuo prodotto è stato aggiunto al nostro e-commerce!");
          } else {
            funzionePost(formObj, "products", method, "delle modiche", "Il tuo prodotto è stato modificato correttamente!", idProduct);
          }
});

categoryForm.addEventListener ("submit", event =>{
  event.preventDefault();
  console.log(event)
  const formObj = {
    name: event.target[0].value,
    image: event.target[1].value,
  }
  console.log(formObj);
  funzionePost(formObj, "categories", "POST", "della categoria", "La tua categoria è stata aggiunta al nostro e-commerce!" )
})

// (objBody, param, errorType, formSend) 
// (objBody, param, method, idProduct = "")
const funzionePost =(objBody, param, method, errorType, formSend, idProduct = "") => {
          fetch("https://api.escuelajs.co/api/v1/" + param + idProduct, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(objBody), // body data type must match "Content-Type" header
            // mode: "cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            // redirect: "follow", // manual, *follow, error
            // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          })
            .then(res => res.json())
            .then((data) => {console.log("RISPOSTA POST: ", data);
            if (data.statusCode >= 400 && data.statusCode < 500) {
              alert("Errore nel caricamento " + errorType +": controlla che le informazioni siano corrette!")
            }else {
        alert(formSend)
      }})
  .catch((e) => console.log("ERRORE: ", e));
        };

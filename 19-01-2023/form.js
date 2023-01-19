import { qS, qSA, cE } from "./utils.js";
const postForm =qS("#formAddProducts");
const inputTitle = qS("#title");
const inputPrice =qS("#price");
const inputCategory = qS("#category");
const inputDescription = qS("#description");
const inputImage = qS("#image");

const categoryForm = qS("#formAddCategory");
const categoryName = qS("#categoryName");
const categoryImage = qS("#categoryImage")


postForm.addEventListener("submit", event => {   
    event.preventDefault();
    if (inputCategory.value < 1 && inputPrice < 1) {
      alert("I valori numerici non possono avere un valore minore o uguale allo zero, ricontrollare");
      return;
    }
    const formObj = {
         title: inputTitle.value,
            price: inputPrice.value,
            description: inputDescription.value,
            categoryId: inputCategory.value,
            images: [inputImage.value],
          };

          funzionePost(formObj, "products", " prodotto", "Il tuo prodotto è stato aggiunto" );
        });

categoryForm.addEventListener ("submit", event =>{
  event.preventDefault();
  const formObj = {
    name: categoryName.value,
    image: categoryImage.value,
  }
  console.log(formObj);
  funzionePost(formObj, "categories", "la categoria", "La tua categoria è stata aggiunta" )
})
        
const funzionePost = (objBody, param, errorType, formSend) => {
          fetch("https://api.escuelajs.co/api/v1/" + param, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
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
              alert("Errore nel caricamento del" + errorType +": controlla che le informazioni siano corrette!")
            }else {
        alert(formSend + " al nostro e-commerce!")}})
                       .catch((e) => {console.log("ERRORE: ", e);
                    alert("Errore nel caricamento: controlla che le informazioni siano corrette!")});
        };
import { qS, qSA, cE } from "./utils.js";

const postForm =qS("#formAddProducts");
const inputTitle = qS("#title");
const inputPrice =qS("#price");
const inputCategory = qS("#category");
const inputDescription = qS("#description");
const inputImage = qS("#image");




postForm.addEventListener("submit", event => {   
    event.preventDefault();
    const formObj = {
         title: inputTitle.value,
            price: inputPrice.value,
            description: inputDescription.value,
            categoryId: inputCategory.value,
            images: [inputImage.value],
          };

          funzionePost(formObj);
        });
        
        const funzionePost = objBody => {
          fetch("https://api.escuelajs.co/api/v1/products", {
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
            .then((data) => {console.log("RISPOSTA POST: ", data)
        alert("Il tuo prodotto è stato aggiunto al nostro e-commerce!")})
                       .catch((e) => {console.log("ERRORE: ", e)
                    alert("Errore nel caricamento: controlla che le informazioni siano corrette!")});
        };
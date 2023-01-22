import { SelectCategoriesCreator } from "./elementGenerator.js";
export {formDeleteProd, funzionePost, metodoGetCat}

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
            `PRODOTTO NON CANCELLATO PER LE SEGUENTI RAGIONI: ` + data.name
          );
        } else {
          alert(`PRODOTTO CANCELLATO CORRETTAMENTE!`);
        }
      })
      .catch(e => console.log("ERRORE: ", e)); }

      
const funzionePost =(objBody, param, method, idProduct = "") => {
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
        // alert("Errore nel caricamento del" + errorType +": controlla che le informazioni siano corrette!")
      }else {
  // alert(formSend + " al nostro e-commerce!")
}})
    .catch((e) => {console.log("ERRORE: ", e);
    alert("Errore nel caricamento: controlla che le informazioni siano corrette!")});
  };

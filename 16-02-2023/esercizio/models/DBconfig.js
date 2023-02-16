//richiesta driver
const mongoose = require("mongoose");

mongoose.set("strictQuery", true); //impostazione richiesta che mi fa lavorare in strict mode: controllo di condizione stretta, controllo cche i dati aggiunti nel database corrispondano ad uno specifico schema

mongoose.connect(
  "mongodb+srv://KalaPatel:Cipolla.292@cluster0.wabncoo.mongodb.net/mongooseEx?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connesso.");
    } else {
      console.log(`Problemi con la connessione:  ${err}`);
    }
  }
);

//schema richiesto!! richiamo l'altro file presente in questa cartella.
require("./nota");

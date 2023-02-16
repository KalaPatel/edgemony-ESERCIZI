// Riprendo la mia dipendenza
const mongoose = require("mongoose");

// notaSchema -> nota si riferisce all'entita gestita se avessimo avuto uno schema riguardante delle scarpe avremmo usato scarpeSchema
var notaSchema = new mongoose.Schema({
  //campi che configureranno documento per documento. Conformazione che ogni collezione acquisirà nei suoi documenti
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  text: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// dichiaro modello notaModel in stringa e sulla base di questo nome lo schema mi andrà a creare ?? solitamente al plurale (notamodels), come secondo parametro portiamo lo schema.
// La collezione verrà chiamata notaModel, ma secondo frmattazione di Mongoose viene pluralizzata e scritta tutto in maiuscolo, senza camelCase
mongoose.model("notaModel", notaSchema);

// Se avessi altre collezioni mi creerei uno schema apposito in un altro file che andrà a gestire determinati propri alla specifica entità di cui tratta lo schema(scarpe, sciarpe, borse,eccc)

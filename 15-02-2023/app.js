const MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb+srv://KalaPatel:Coniglio.989@cluster0.wabncoo.mongodb.net/school?retryWrites=true";

// MongoClient.connect(url)
//   .then((db) => {
//     accountsDb = db;
//     collection = accountsDb.db("school");
//     console.log("Database connesso");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   dbase.createCollection("students", (err, db) => {
//     if (err) throw err;
//     console.log("Collezione students creata");
//     db.close();
//   });
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   dbase.createCollection("courses", (err, db) => {
//     if (err) throw err;
//     console.log("Collezione courses creata");
//     db.close();
//   });
// });

// !La collection students raccoglie, nome, cognome, matricola
// !(scegliete un codice numerico), corsi ai quali lo studente è iscritto, esami da sostenere.

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");

//   let myObj = {
//     nome: "Giulia",
//     congnome: "Aurelio",
//     matricola: 47850,
//     facoltà: "Infermieristica",
//     esami: ["chimica", "fisica", "biochimica"],
//   };

//   dbase.collection("students").insertOne(myObj, (err, res) => {
//     if (err) throw err;
//     console.log(`Numero di record inseriti: ${res.insertedCount}`);
//     db.close();
//   });
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");

//   let myObj = [
//     {
//       nome: "Mario",
//       cognome: "Lo Giudice",
//       matricola: 87354,
//       facoltà: "Filosofia",
//       esami: ["Logica", "Scienze Umane", "Storia"],
//     },
//     {
//       nome: "Marta",
//       cognome: "Bartolazzi",
//       matricola: 96426,
//       facoltà: "Comunicazione",
//       esami: ["semiotica", "storia", "glottologia"],
//     },
//     {
//       nome: "Giorgio",
//       cognome: "Bernardi",
//       matricola: 67405,
//       facoltà: "Lingue",
//       esami: ["Filologia", "linguistica", "Letteratura straniera"],
//     },
//     {
//       nome: "Paola",
//       congnome: "Vercelli",
//       matricola: 86231,
//       facoltà: "Ingegneria",
//       esami: ["matematica", "fisica", "informatica"],
//     },
//     {
//       nome: "Anna",
//       cognome: "Mondo",
//       matricola: 93405,
//       facoltà: "Psicologia",
//       esami: ["psicometria", "psicobiologia"],
//     },
//     {
//       nome: "Cesare",
//       cognome: "Zucchero",
//       matricola: 80427,
//       facoltà: "Economia",
//       esami: ["Bilancio", "Statistica", "matematica"],
//     },
//     {
//       nome: "Linda",
//       cognome: "Tonelli",
//       matricola: 83452,
//       facoltà: "Scienze Politiche",
//       esami: ["Diritto privato", "Geografia politica"],
//     },
//     {
//       nome: "Laura",
//       cognome: "Messina",
//       matricola: 89256,
//       facoltà: "Biologia",
//       esami: ["chimica", "fisica", "biochimica"],
//     },
//     {
//       nome: "Francesco",
//       cognome: "Lucano",
//       matricola: 99234,
//       facoltà: "Medicina",
//       esami: ["Anatomia", "farmacologia", "biochimica"],
//     },
//     {
//       nome: "Alessia",
//       cognome: "Pirro",
//       matricola: 42590,
//       facoltà: "Lettere",
//       esami: ["latino", "letteratura italiana", "filosofia"],
//     },
//     {
//       nome: "Claudio",
//       cognome: "Ancona",
//       matricola: 48750,
//       facoltà: "Giurisprudenza",
//       esami: ["diritto penale", "diritto romano", "latino"],
//     },
//   ];

//   dbase.collection("students").insertMany(myObj, (err, res) => {
//     if (err) throw err;
//     console.log(`Numero di record inseriti: ${res.insertedCount}`);
//     db.close();
//   });
// });

// ? Nella collection courses: nome del corso, materia, docenti.
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   let myObj = [
//     {
//       facoltà: "Lingue",
//       materia: "Filologia Romanza",
//       docente: "Riccardo Fogli",
//     },
//     {
//       facoltà: "Giurisprudenza",
//       materia: "Diritto romano",
//       docente: "Graziella Calà",
//     },
//     {
//       facoltà: "Medicina",
//       materia: "Fisiologia",
//       docente: "Salvatore Leonardi",
//     },
//     {
//       facoltà: "Economia",
//       materia: "Statistica",
//       docente: "Edoardo Salvati",
//     },
//     {
//       facoltà: "Lettere",
//       materia: "Letteratura Latina",
//       docente: "Samantha Fiorito",
//     },
//   ];

//   dbase.collection("courses").insertMany(myObj, (err, res) => {
//     if (err) throw err;
//     console.log(`Numero di record inseriti: ${res.insertedCount}`);
//     db.close();
//   });
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   let myObj = [
//     {
//       facoltà: "Architettura",
//       materia: "scienza delle costruzioni",
//       docente: "Calogero Ottomogli",
//     },
//     {
//       facoltà: "Scienze della Formazione",
//       materia: "Pedagogia",
//       docente: "Patrizia Certasi",
//     },
//     {
//       facoltà: "Scienze Motorie",
//       materia: "Fisiologia",
//       docente: "Gianluca Rovere",
//     },
//     {
//       facoltà: "Economia",
//       materia: "Economia Aziendale",
//       docente: "Fabiana Marini",
//     },
//     {
//       facoltà: "Sociologia",
//       materia: "Antropologia",
//       docente: "Filippo Greco",
//     },
//   ];

//   dbase.collection("courses").insertMany(myObj, (err, res) => {
//     if (err) throw err;
//     console.log(`Numero di record inseriti: ${res.insertedCount}`);
//     db.close();
//   });
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   dbase
//     .collection("courses")
//     .find({})
//     .toArray(function (err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   let query = { facoltà: "Ingegneria" };
//   dbase
//     .collection("students")
//     .find(query)
//     .toArray(function (err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbase = db.db("school");
//   let query = { facoltà: "Infermieristica" };
//   dbase.collection("students").deleteOne(query, function (err, obj) {
//     if (err) throw err;
//     console.log(`records cancellati`);
//     db.close();
//   });
// });

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let query = {
    docente: "Samantha Fiorito",
  };
  let newValue = { $set: { facoltà: "Biologia", materia: "Istologia" } };
  dbase.collection("courses").updateOne(query, newValue, function (err, res) {
    if (err) throw err;
    console.log(`record(s) aggiornati`);
    db.close();
  });
});

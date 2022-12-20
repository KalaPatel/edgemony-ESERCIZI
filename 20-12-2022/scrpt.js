// ESERCIZIO
// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi
// di tipo string a scelta, rispettando i seguenti punti:
// -utilizzare il ciclo for classico
// -sarà l'utente ad inserire queste stringhe (prompt)
// -alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

let arrayElPick = [];
for (let i = 1; i <= 10; i++) {
  arrayElPick.push(prompt("Inserisci il " + i + "° valore dell'array:"));
}
for (let x = 0; x < 10; x++) {
  console.log(x + 1 + ":" + arrayElPick[x]);
}
console.log(arrayElPick);

// AVANZATO
// Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (for in�e for of)

// for (let arrayElIndex in arrayElPick) {
//   console.log(arrayElIndex);
// }

// for (let arrayElIndex in arrayElPick) {
//   console.log(arrayElIndex + ":" + arrayElPick[0]);
// // }

// for (let arrayElement of arrayElPick) {
//   console.log(arrayElement);
// }

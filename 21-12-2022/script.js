// Esercizio 1
// Sulla base della lezione del giorno:
// -scrivere una prima funzione che presa una stringa come argomento, ritorni la stessa stringa + la parola bootcamp;

// ESEMPIO 1
// function stringEdit(string, wordToAdd) {
//   return console.log(string + wordToAdd);
// }

// stringEdit("Il 12 dicembre avrà inzio il ", "bootcamp");

// ESEMPIO 2
// function stringEdit(string, restOfString, wordToAdd = "bootcamp") {
//   return console.log(string + wordToAdd + restOfString);
// }

// stringEdit("Il 12 dicembre avrà inzio il ", " di Edgemony!");
// stringEdit("Avete fatto gli esercizi per il ", "?");

// Esercizio 2
// scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) e per metodi
// (es. possono anche essere semplici console.log di voi che eseguite un hobby)

// const chiaraNicoletti = {
//   firstName: "Chiara",
//   lastName: "Nicoletti",
//   age: 24,
//   hobby: ["leggere", "guardare serie Tv", "giocare ai videogiochi"],
//   freeTime: function () {
//     console.log(
//       "Questo perchè " +
//         this.firstName +
//         " passa gran parte del suo tempo libero a " +
//         this.hobby[1] +
//         " o a " +
//         this.hobby[2]
//     );
//   },
// };

// console.log(
//   chiaraNicoletti.firstName +
//     " " +
//     chiaraNicoletti.lastName +
//     " ha imparato a " +
//     chiaraNicoletti.hobby[0] +
//     " all'età di " +
//     chiaraNicoletti.age +
//     " anni."
// );

// chiaraNicoletti.freeTime();

// AVANZATO
// Scrivere una funzione calculator che preso come argomento una operazione e due numeri, ritorni alla fine il numero
// risultato dall'operazione scelta.

// function calculator(num1, num2) {
//   return num1 + num2;
// }

// console.log(calculator(9, 3));
// console.log(calculator(30, 13));
// console.log(calculator(1, 44));
// console.log(calculator(10, 79));
// console.log(calculator(53, 6));

// // Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia dentro un array ([num1, num2]).
// CON ARRAY
// let arrayNumber = {
//   a: [9, 3],
//   b: [30, 13],
//   c: [1, 44],
//   d: [10, 79],
//   e: [53, 6],
// };

// console.log(calculator(arrayNumber.a[0], arrayNumber.a[1]));
// console.log(calculator(arrayNumber.b[0], arrayNumber.b[1]));
// console.log(calculator(arrayNumber.c[0], arrayNumber.c[1]));
// console.log(calculator(arrayNumber.d[0], arrayNumber.d[1]));
// console.log(calculator(arrayNumber.e[0], arrayNumber.e[1]));

// CON OGGETTI
// let ObjectNumber = {
//   num1: [9, 30, 1, 10, 53],
//   num2: [3, 13, 44, 79, 6],
// };

// console.log(calculator(ObjectNumber.num1[0], ObjectNumber.num2[0]));
// console.log(calculator(ObjectNumber.num1[1], ObjectNumber.num2[1]));
// console.log(calculator(ObjectNumber.num1[2], ObjectNumber.num2[2]));
// console.log(calculator(ObjectNumber.num1[3], ObjectNumber.num2[3]));
// console.log(calculator(ObjectNumber.num1[4], ObjectNumber.num2[4]));

// // CON ARRAY DI OGGETTI
// let ArrayObjectNumber = [
//   { num1: 9, num2: 3 },
//   { num1: 30, num2: 13 },
//   { num1: 1, num2: 44 },
//   { num1: 10, num2: 79 },
//   { num1: 53, num2: 6 },
// ];

// console.log(calculator(ArrayObjectNumber[0].num1, ArrayObjectNumber[0].num2));
// console.log(calculator(ArrayObjectNumber[1].num1, ArrayObjectNumber[1].num2));
// console.log(calculator(ArrayObjectNumber[2].num1, ArrayObjectNumber[2].num2));
// console.log(calculator(ArrayObjectNumber[3].num1, ArrayObjectNumber[3].num2));
// console.log(calculator(ArrayObjectNumber[4].num1, ArrayObjectNumber[4].num2));

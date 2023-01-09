// Esercizio 1

// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando
// solo arrow functions.

// > nb. ogni singola operazione sara una arrow function
// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data
// la possibilita di scegliere quale operazione effettuare.
// Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli
// all'utente o meno.

const sum = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

// console.log(sum(5, 5));
// console.log(subtraction(10, 5));
// console.log(multiplication(5, 5));
// // console.log(division(10, 5));

let firstNumberPick = prompt("Inserire un primo numero:");
let secondNumberPick = prompt("Inserire un secondo numero:");

// const calc = (
//   intFirstNumberPick = parseInt(firstNumberPick),
//   intSecondNumberPick = parseInt(secondNumberPick),
//   mathOperator = prompt("Digitare l'operazione che si vuole effettuare")
// ) => {
//   if (
//     mathOperator == "addizione" ||
//     mathOperator == "Addizione" ||
//     mathOperator == "+"
//   ) {
//     return intFirstNumberPick + intSecondNumberPick;
//   } else if (
//     mathOperator == "sottrazione" ||
//     mathOperator == "Sottrazione" ||
//     mathOperator == "-"
//   ) {
//     return intFirstNumberPick - intSecondNumberPick;
//   } else if (
//     mathOperator == "moltiplicazione" ||
//     mathOperator == "Moltiplicazione" ||
//     mathOperator == "*"
//   ) {
//     return intFirstNumberPick * intSecondNumberPick;
//   } else if (
//     mathOperator == "divisione" ||
//     mathOperator == "Divisione" ||
//     mathOperator == "/"
//   ) {
//     return intFirstNumberPick / intSecondNumberPick;
//   }
// };

// console.log(calc());

// ## Avanzato

// Provare a completare l'esercizio sopra applicando qualche callback.
// Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di
// una callback

const calculator = (num1, num2, operator) => operator(num1, num2);

// console.log(calculator(5, 5, sum));
// console.log(calculator(3, 5, multiplication));
// console.log(calculator(80, 5, division));
// console.log(calculator(80, 20, subtraction));

// const calculatorTypeTwo = (
//   intFirstNumberPick,
//   intSecondNumberPick,
//   Mathoperator
// ) => Mathoperator(intFirstNumberPick, intSecondNumberPick);

// console.log(
//   calculatorTypeTwo(parseInt(firstNumberPick), parseInt(secondNumberPick), sum)
// );

// console.log(
//   calculatorTypeTwo(
//     parseInt(firstNumberPick),
//     parseInt(secondNumberPick),
//     subtraction
//   )
// );

// console.log(
//   calculatorTypeTwo(
//     parseInt(firstNumberPick),
//     parseInt(secondNumberPick),
//     multiplication
//   )
// );

// console.log(
//   calculatorTypeTwo(
//     parseInt(firstNumberPick),
//     parseInt(secondNumberPick),
//     division
//   )
// );

const calculatorTypeThree = (
  intFirstNumberPick,
  intSecondNumberPick,
  mathOperatorSum,
  mathOperatorSub,
  mathOperatorMult,
  mathOperatorDiv
) =>
  "La somma di " +
  intFirstNumberPick +
  " + " +
  intSecondNumberPick +
  " è: " +
  mathOperatorSum(intFirstNumberPick, intSecondNumberPick) +
  ". La sottrazione di " +
  intFirstNumberPick +
  " + " +
  intSecondNumberPick +
  " è: " +
  mathOperatorSub(intFirstNumberPick, intSecondNumberPick) +
  ". La moltiplicazione di " +
  intFirstNumberPick +
  " + " +
  intSecondNumberPick +
  " è: " +
  mathOperatorMult(intFirstNumberPick, intSecondNumberPick) +
  ". La divisione di " +
  intFirstNumberPick +
  " + " +
  intSecondNumberPick +
  " è: " +
  mathOperatorDiv(intFirstNumberPick, intSecondNumberPick);

console.log(
  calculatorTypeThree(
    parseInt(firstNumberPick),
    parseInt(secondNumberPick),
    sum,
    subtraction,
    multiplication,
    division
  )
);

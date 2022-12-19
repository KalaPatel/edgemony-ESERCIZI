let firstNumberPick = prompt("Inserire un primo numero:");

let secondNumberPick = prompt("Inserire un secondo numero:");

let mathOperator = prompt("Digitare l'operazione che si vuole effettuare");

let intFirstNumberPic = parseInt(firstNumberPick);

let intSecondNumberPic = parseInt(secondNumberPick);

if (
  mathOperator == "addizione" ||
  mathOperator == "Addizione" ||
  mathOperator == "+"
) {
  console.log(
    "La somma di " +
      firstNumberPick +
      " + " +
      secondNumberPick +
      " è: " +
      (intFirstNumberPic + intSecondNumberPic)
  );
} else if (
  mathOperator == "sottrazione" ||
  mathOperator == "Sottrazione" ||
  mathOperator == "-"
) {
  console.log(
    "La sottrazione di " +
      firstNumberPick +
      " - " +
      secondNumberPick +
      " è: " +
      (intFirstNumberPic - intSecondNumberPic)
  );
} else if (
  mathOperator == "moltiplicazione" ||
  mathOperator == "Moltiplicazione" ||
  mathOperator == "*"
) {
  console.log(
    "Il prodotto di " +
      firstNumberPick +
      " * " +
      secondNumberPick +
      " è: " +
      intFirstNumberPic * intSecondNumberPic
  );
} else if (
  mathOperator == "divisione" ||
  mathOperator == "Divisione" ||
  mathOperator == "/"
) {
  console.log(
    "Il quoziente di " +
      firstNumberPick +
      " / " +
      secondNumberPick +
      " è: " +
      intFirstNumberPic / intSecondNumberPic
  );
} else {
  console.log(
    "Operazione " +
      mathOperator +
      " non disponinile. Ricaricare la pagina e digitare una delle seguenti operazioni: addizione (+), sottrazione(-), moltiplicazione(*) o divisione(/)."
  );
}

switch (mathOperator) {
  case "addizione":
    console.log(intFirstNumberPic + intSecondNumberPic);
    break;
  case "Addizione":
    console.log(intFirstNumberPic + intSecondNumberPic);
    break;
  case "+":
    console.log(intFirstNumberPic + intSecondNumberPic);
    break;
  case "sottrazione":
    console.log(intFirstNumberPic - intSecondNumberPic);
    break;
  case "Sottrazione":
    console.log(intFirstNumberPic - intSecondNumberPic);
    break;
  case "-":
    console.log(intFirstNumberPic - intSecondNumberPic);
    break;
  case "moltiplicazione":
    console.log(intFirstNumberPic * intSecondNumberPic);
    break;
  case "Moltiplicazione":
    console.log(intFirstNumberPic * intSecondNumberPic);
    break;
  case "*":
    console.log(intFirstNumberPic * intSecondNumberPic);
    break;
  case "divisione":
    console.log(intFirstNumberPic / intSecondNumberPic);
    break;
  case "Divisione":
    console.log(intFirstNumberPic / intSecondNumberPic);
    break;
  case "/":
    console.log(intFirstNumberPic / intSecondNumberPic);
    break;
  default:
    console.log(
      "Operazione " +
        mathOperator +
        " non disponinile. Ricaricare la pagina e una delle seguenti operazioni: addizione (+), sottrazione(-), moltiplicazione(*) o divisione(/)."
    );
}
mathOperator == "addizione"
  ? console.log(intFirstNumberPic + intSecondNumberPic)
  : console.log("Sono programmato solamente per svolgere addizioni");

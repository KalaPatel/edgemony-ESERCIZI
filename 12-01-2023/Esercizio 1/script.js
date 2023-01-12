// Eseguire sull'array riportato sotto:
// un metodo forEach che stampi in console.log i soli ID di ogni singolo elemento
// un metodo map che memorizzi in una variabile tutti gli userId di ogni singolo elemento e quindi richiamarli con un console.log a parte
// un metodo filter che stampi in console.log i soli ID di ogni singolo elemento i cui valori siano maggiori o uguali a 4

import { todos } from "./mocks.js";

// forEach
todos.forEach((toDoId) => console.log(toDoId.id));

// map()
const toDoUserIdArr = todos.map((toDo) => toDo.userId);
console.log(toDoUserIdArr);

// filter()
const toDoIdRange = todos.filter((toDoId) => toDoId.id >= 4);
// console.log(toDoIdRange);
toDoIdRange.forEach((idRange) => console.log(idRange.id));

"use strict";

// Exercicio 2
let regex2 = /\b([0-9A-F]{2}:?){6}\b/i;
let macProba = "01:32:54:67:89:AB";
console.log(regex2.test(macProba));

//Exercicio 3
let regex3 = /#([A-Z0-9]{3}){1,2}/i;
let color = "#010";
console.log(regex3.test(color));

//Exercicio 4
let regex4 = /[-.]?\d+[-.]?\d+/;
let numeros = "-1.2 4 0 -123.5.";
console.log(numeros.match(regex4));

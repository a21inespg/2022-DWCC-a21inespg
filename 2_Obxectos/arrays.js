"use strict";

//Exercicio 1

let froitas = ["peras", "mazas", "kiwis", "platanos", "mandarinas"];
froitas.splice(1, 1);
console.log(froitas);
froitas.splice(3, 0, "laranxas", "sandia");
console.log(froitas);
froitas.splice(1, 1, "kiwis", "nesperas");
console.log(froitas);

// Exercicio 2

let arrayNums = [4, 5, 2, 6];
console.log(arrayNums);
console.log(arrayNums.sort((a, b) => a - b));

// Exercicio 3

let diasSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

const isS = (value) => value[value.length - 1] == "s";
console.log(diasSemana.some(isS));
console.log(diasSemana.every(isS));

// Exercicio 4

let parrafo = " hola que tal chamome ines poses gonzalez";
function texto(parrafo) {
  let cadDevolta = "";
  for (let i = 0; i < parrafo.length - 1; i++) {
    let letra = "";

    for (let j = 0; j < parrafo[i].length; j++) {
      if (j == 0) {
        letra = parrafo[i].charAt(0).toUpperCase();
        cadDevolta += letra;
      } else {
        letra = parrafo[i].charAt(j).toLowerCase();
        cadDevolta += letra;
      }
    }
    cadDevolta += " ";
  }
  return cadDevolta;
}
console.log(texto(parrafo.split(" ")));

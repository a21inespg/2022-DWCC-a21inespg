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
// function texto(parrafo) {
//   let cadDevolta = "";
//   for (let i = 0; i < parrafo.length - 1; i++) {
//     let letra = "";

//     for (let j = 0; j < parrafo[i].length; j++) {
//       if (j == 0) {
//         letra = parrafo[i].charAt(0).toUpperCase();
//         cadDevolta += letra;
//       } else {
//         letra = parrafo[i].charAt(j).toLowerCase();
//         cadDevolta += letra;
//       }
//     }
//     cadDevolta += " ";
//   }
//   return cadDevolta;
// }

function texto1(parrafo) {
  let cadDevolta = "";
  let letter,
    resto = "";
  let arr = parrafo.split(" ");
  for (let val of arr) {
    letter = val.charAt(0).toUpperCase();
    resto = val.slice(1).toLowerCase();
    cadDevolta += letter + resto + " ";
  }

  return cadDevolta;
}
console.log(texto1(parrafo));

const obj = ["a", "b", "c", "d"];

for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}
// Exercicicios 2 arrays
// Exercicios filter, find, findIndex...
console.log(diasSemana.filter((dia) => dia[0] == "m"));
console.log(diasSemana.find((dia) => dia[0] == "m"));
console.log(diasSemana.findIndex((dia) => dia[0] == "m"));
console.log(
  diasSemana.map((dia) => dia[0].toUpperCase() + dia.substring(1, dia.length))
);


// Este non o entendo moi ben
let numeros = [4, 562, 933, -5, 88];
console.log(
  "O vvalor máis alto é: " +
    numeros.reduce((previousValue, currentValue) =>
      previousValue > currentValue ? previousValue : currentValue
    )
);

// Deconstrucion de arrays
// Exercicio 1
const players = [
  [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
  ],
  [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],
];

let [players1, players2] = [players[0], players[1]];
let [gk, fieldPlayers] = [players1.splice(0, 1), players1];
let allplayers = [...players1, ...players2];
console.log(allplayers);
let players1Final = [...players1, "thiago", "coutinho"];
console.log(players1Final);

// Exercicio 2
let palabras = ["fIRst_name", "last_NAME"];
let palabraCC = "";
for (const palabra of palabras) {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] == "_") {
      let primera = palabra.substring(0, i).toLowerCase();
      let letraMayus = palabra[i + 1].toUpperCase();
      let segunda = palabra.substring(i + 2, palabra.length).toLowerCase();
      palabraCC = primera + letraMayus + segunda;
    }
  }
  console.log(`A palabra ${palabra} en Camel Case é ${palabraCC}`);
}

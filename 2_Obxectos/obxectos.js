"use strict";
// Exercicio 1
const television = {
  marca: "",
  categoria: "televisores",
  unidades: 4,
  prezo: 354.99,
  importe() {
    return this.prezo * this.unidades;
  },
};

console.log(television.importe());
console.log(television.unidades);

// Exercicio 2
const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// team1 = game.odds.team1;
let { team1, x: draw, team2 } = game.odds;

console.log(team1);
console.log(team2);
console.log(draw);

// Exercicio 3
// ela fixoo cun for of con game.scored entries que devolve indice e xogador
const game1 = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};
let contador = 0;
game1.scored.forEach((player) => console.log(`Gol ${++contador}: ${player}`));

let scorers = {}; // asi escribese un obxecto vacío
let cont = 0;
for (const player of game1.scored) {
  //scorers[xogador] ? scorers[xogador]++ : (scorers[xogador]=1) é o mesmo pero máis simple
  if (scorers[player] === undefined) {
    scorers[player] = 1;
  } else {
    scorers[player] += 1;
  }
}
console.log(scorers);

// Exercicio 4
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// a)
const inventorsXVI = inventors.filter(
  (inventor) => inventor.year > 1500 && inventor.year <= 1600
);
// for (const inventor of inventors) {
//   if (inventor.year >= 1500 && inventor.year <= 1600) {
//     inventorsXVI.push(inventor);
//   }
// }
console.log("Inventores séculoXVI: ");
console.log(inventorsXVI);

//b)
let inventorsCompleteName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
// inventors.forEach((inventor) =>
//   inventorsCompleteName.push(`${inventor.first} ${inventor.last}`)
// );
console.log("Nomes completos: ");
console.log(inventorsCompleteName);

inventorsCompleteName.sort((a, b) =>
  a[a.indexOf(" ") + 1] < b[b.indexOf(" ") + 1] ? -1 : 1
);
console.log("Ordenado polo apelido 1: ");
console.log(inventorsCompleteName);
console.log("Ordeno por apelido 2: ");
inventors.sort((a, b) => (a.last < b.last ? -1 : 1));
console.log(inventors);

inventors.sort((a, b) => (a.year < b.year ? -1 : 1));
console.log(inventors);

// Suma anos vividos
let suma = 0;
inventors.forEach((inventor) => (suma += inventor.passed - inventor.year));
console.log(`A suma de anos que viviron é: ${suma}`);

inventors.sort((a, b) => (a.passed - a.year > b.passed - b.year ? -1 : 1));
console.log(inventors);

// Exercicio 5
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

let mediosTransporte = new Object();

for (const dato of data) {
  mediosTransporte[dato]
    ? mediosTransporte[dato]++
    : (mediosTransporte[dato] = 1);
}
console.log(mediosTransporte);

"use strict";
// Exercicio 1
const television = {
  marca: "",
  categoria: "televisores",
  unidades: 4,
  prezo: 354.99,
  importe: function () {
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

let team1, draw, team2;
team1 = game.odds.team1;
draw = game.odds.x;
team2 = game.odds.team2;

console.log(team1);
console.log(team2);

// Exercicio 3
const game1 = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};
let contador = 1;
game1.scored.forEach((player) => console.log(`Gol ${contador++}: ${player}`));

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

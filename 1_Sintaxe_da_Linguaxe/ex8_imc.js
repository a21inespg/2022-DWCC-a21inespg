"use strict";

let pesoP1 = parseInt(prompt("Peso persoa 1 (kg)"));
let alturaP1 = parseFloat(prompt("Altura persoa 1  (en cm)"));
console.log(typeof pesoP1 + " é o tipo de dato");
let pesoP2 = parseInt(prompt("Peso persoa 2 (kg)"));
let alturaP2 = parseFloat(prompt("Altura persoa 2 (en cm)"));

console.log("alt2 " + alturaP2);
if (Number.isInteger(alturaP1) && Number.isInteger(alturaP2)) {
  let imcP1 = pesoP1 / (alturaP1 / 100) ** 2;
  let imcP2 = pesoP2 / (alturaP2 / 100) ** 2;
  if (imcP1 > imcP2) {
    console.log(
      "O imc de Persoa 1 (" +
        imcP1.toFixed(2) +
        ") é maior que o imc de Persoa 2 (" +
        imcP2.toFixed(2) +
        ") "
    );
  } else if (imcP2 > imcP1) {
    console.log(
      "O imc de Persoa 2 (" +
        imcP1.toFixed(2) +
        ") é maior que o imc de Persoa 1(" +
        imcP2.toFixed(2) +
        ") "
    );
  } else {
    console.log("Os imc son iguales (" + imcP1.toFixed(2) + ")");
  }
} else {
  console.log(
    "Unha das alturas foi introducida con deciamles. Introdúcea en centímetros."
  );
}

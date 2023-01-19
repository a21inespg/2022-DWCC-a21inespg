"use strict";

function formateoHora(numMinutos) {
  let hora = numMinutos / 60;
  let mins = numMinutos % 60;
  return hora + " horas e " + mins + " minutos";
}

console.log(formateoHora(120));

function areaCirculo(r) {
  return r * Math.PI ** 2;
}

function perimetroCirculo(r) {
  return r * Math.PI * 2;
}

console.log(
  "A área do círculo é " +
    Math.round(areaCirculo(2) * 100) / 100 +
    " e o perímetro é " +
    Math.round(perimetroCirculo(2) * 100) / 100
);

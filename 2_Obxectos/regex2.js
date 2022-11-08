"use strict";

// Exercicio 2
let regex2 = /\b([0-9A-F]{2}:){5}([0-9A-F]{2})$\b/i;
let macProba = "01:32:54:67:89:AB";
console.log(regex2.test(macProba));

//Exercicio 3
let regex3 = /#([A-Z0-9]{3}){1,2}\b/i;
let color = "#010775";
console.log(regex3.test(color));

//Exercicio 4
let regex4 = /([-.+]?\d+[.]?\d*)/g;
let numeros = "-1.2 4 0 -123.5";
console.log(numeros.match(regex4));

//Exercicio 5

function contrasinalValido(contrasinal) {
  let contador = 0;
  if (/([^\s]){8,}/.test(contrasinal)) {
    contador++;
    if (/[A-Z]+/.test(contrasinal)) {
      contador++;
    }
    if (/[a-z]+/.test(contrasinal)) {
      contador++;
    }
    if (/[0-9]+/.test(contrasinal)) {
      contador++;
    }
    if (/[¡!$?%&#@/()=¿?*[;,:._<>-]+/.test(contrasinal)) {
      contador++;
    }
    console.log("ConTADOR " + contador);
    if (contador >= 4) {
      return "Contrasinal correcto";
    } else {
      return "Falta algún requerimento";
    }
  } else {
    return "Número de caracteres inferior a 8 ou ten espacios";
  }
}

console.log(contrasinalValido("sfsdfFFF0d$sgg/"));

// Exercicio 6
function eliminarEtiquetas(texto) {
  return texto.replace(/(<.*?>)/g, "");
}

console.log(eliminarEtiquetas("<h1>sdjfhsdkjfhsdkfs <p>dsjdsjdn</p></h1>"));

// Exercicio 7
function asteriscosInsultos(texto) {
  let insultos = [
    "testán",
    "langrán",
    "fervellasverzas",
    "baldreu",
    "lacazán",
    "pillabán",
  ];
  let palabras = texto.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    for (let insulto of insultos) {
      if (palabras[i] == insulto) {
        palabras[i] =
          insulto.substring(0, 1) +
          insulto.substring(1, insulto.length).replace(/./g, "*");
      }
    }
  }
  return palabras.join(" ");
}

console.log(
  asteriscosInsultos("hola que tal pedazo de langrán y fervellasverzas")
);

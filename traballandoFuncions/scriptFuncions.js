// // ***EXERCICIO 1 - CUBO***

// let num = prompt("Introduce un número");
// let cubo = (n) => n ** 3;

// let numCubo = cubo(num);

// console.log("O número " + num + " ao cubo é " + numCubo);

// // ***EXERCICIO 2 - ARRAY ELEMENTOS IMPARES***

// function numsImpares(array) {
//   let arraySaida = [];
//   for (let i = 0; i < arrayEntrada.length; i++) {
//     if (arrayEntrada[i] % 2 != 0) {
//       arraySaida.push(arrayEntrada[i]);
//     }
//   }
//   return arraySaida;
// }
// let arrayEntrada = [10, 2, 3, 4, 7, 11];

// let arrayDevolto = numsImpares(arrayEntrada);

// console.log("Array devolto:");
// for (let numero of arrayDevolto) {
//   console.log(numero);
// }

// // EXERCICIO 3 - SUMA PARÁMETROS

// function suma(...nums) {
//   let totalSuma = 0;
//   for (const num of nums) {
//     totalSuma += num;
//   }
//   return totalSuma;
// }

// console.log(suma(1, 2, 3));
// console.log(suma(1, 2, 3, 4));

// // EXERCICIO 4 - MEDIA

// function media(...nums) {
//   let suma = (contador = 0);

//   for (const num of nums) {
//     suma += num;
//     contador += 1;
//   }

//   return (suma / contador).toFixed(2);
// }

// console.log(media(1, 2, 3));
// console.log(media(15, 15));

// // EXERCICIO 5 - DNI

// function letraDni(dni) {
//   if (dni.length != 9) {
//     console.log("Introduciches mal o dni. Lonxitude inc.");
//   } else if (isNaN(dni.substr(0, 8))) {
//     console.log("Introduciches letras onde tiñas que por numeros.");
//   } else if (!isNaN(dni.substr(8, 8))) {
//     console.log("Introduciches numero onde tiñas que por letras");
//   } else {
//     let numero = dni.substr(0, 8) % 23;

//     letra = "TRWAGMYFPDXBNJZSQVHLCKET";
//     letra = letra.substring(numero, numero + 1);

//     letr = dni.substr(8, 8);
//     if (letra == letr.toUpperCase()) {
//       console.log("DNI CORRECTO");
//     } else {
//       console.log("DNI INCORRECTO");
//     }
//   }
// }

// letraDni("53614755F");

// EXERCICIO 6 - ARRAY BIDIMENSIONAL

function buscaminas(entrada) {
  let arraySaida = [];

  for (let i = 0; i < entrada.length; i++) {
    arraySaida[i] = [];
    let contador = 0;
    console.log("");
    for (let j = 0; j < entrada[i].length; j++) {
      if (entrada[i][j] == 0) {
        arraySaida[i][j] = 0;
        if (i == 0 && j == 0) {
          console.log("é un 0");

          if (entrada[i + 1][j] == -1) {
            contador = contador + 1;
          }
          if (entrada[i][j + 1] == -1) {
            contador = contador + 1;
          }
          if (entrada[i + 1][j + 1] == -1) {
            contador = contador + 1;
          }
          if (entrada[i + 1][j] == -1) {
            contador = contador + 1;
          }

          arraySaida[i][j] = contador;
        }

        if (i == 0 && j < entrada[i].length && j > 0) {
          contador = 0;
          if (entrada[i + 1][j] == -1) {
            contador = contador + 1;
          }
          if (entrada[i][j + 1] == -1) {
            contador = contador + 1;
          }
          if (entrada[i + 1][j + 1] == -1) {
            contador = contador + 1;
          }

          if (entrada[i + 1][j - 1] == -1) {
            contador = contador + 1;
          }

          if (entrada[i][j - 1] == -1) {
            contador = contador + 1;
          }
          console.log("i: " + i);
          console.log("j: " + j);
          console.log("contador: " + contador);
          arraySaida[i][j] = contador;
        }

        if (i == entrada.length && j == 0) {
          if (entrada[i - 1][j] == -1) {
            contador = contador + 1;
          }
          if (entrada[i][j + 1] == -1) {
            contador = contador + 1;
          }
          if (entrada[i - 1][j + 1] == -1) {
            contador = contador + 1;
          }
        }
      } else {
        arraySaida[i][j] = -1;
      }
    }
  }
  return arraySaida;
}

arrayEntrada = [
  [0, 0, -1, 0],
  [0, -1, -1, 0],
];

arraySaida = buscaminas(arrayEntrada);
console.log("empezamos a percorrer a resposta");
console.log(arraySaida);
// for (let i = 0; i < arraySaida.length; i++) {
//   console.log("");
//   for (let j = 0; j < arraySaida[i].length; j++) {
//     console.log("numero");
//     console.log(arraySaida[i][j]);
//   }
// }

// // ***EXERCICIO 1 - CUBO***

// let num = prompt("Introduce un número");
// let cubo = (n) => n ** 3;

// let numCubo = cubo(num);

// console.log("O número " + num + " ao cubo é " + numCubo);

// // ***EXERCICIO 2 - ARRAY ELEMENTOS IMPARES***

// function numsImpares(arrayEntrada) {
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

// // EXERCICIO 6 - ARRAY BIDIMENSIONAL

// function buscaminas(entrada) {
//   let arraySaida = [];

//   for (let i = 0; i < entrada.length; i++) {
//     arraySaida[i] = [];
//     let contador = 0;
//     console.log("");
//     for (let j = 0; j < entrada[i].length; j++) {
//       if (entrada[i][j] == 0) {
//         arraySaida[i][j] = 0;
//         if (i == 0 && j == 0) {
//           console.log("é un 0");

//           if (entrada[i + 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i + 1][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i + 1][j] == -1) {
//             contador = contador + 1;
//           }

//           arraySaida[i][j] = contador;
//         }

//         if (i == 0 && j < entrada[i].length - 1 && j > 0) {
//           contador = 0;
//           if (entrada[i + 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i + 1][j + 1] == -1) {
//             contador = contador + 1;
//           }

//           if (entrada[i + 1][j - 1] == -1) {
//             contador = contador + 1;
//           }

//           if (entrada[i][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           console.log("i: " + i);
//           console.log("j: " + j);
//           console.log("contador: " + contador);
//           arraySaida[i][j] = contador;
//         }

//         if (i == entrada.length - 1 && j == 0) {
//           contador = 0;
//           if (entrada[i - 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           arraySaida[i][j] = contador;
//         }

//         if (i < entrada.length - 1 && i > 0 && j == 0) {
//           contador = 0;
//           if (entrada[i - 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j + 1] == -1) {
//             contador = contador + 1;
//           }

//           if (entrada[i + 1][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i + 1][j] == -1) {
//             contador = contador + 1;
//           }
//           arraySaida[i][j] = contador;
//         }

//         if (i == 0 && j == entrada[i].length - 1) {
//           contador = 0;
//           if (entrada[i + 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j - 1] == -1) {
//             contador = contador + 1;
//           }

//           if (entrada[i + 1][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           arraySaida[i][j] = contador;
//         }

//         if (i < entrada.length - 1 && i > 0 && j == entrada[i].length - 1) {
//           contador = 0;
//           if (entrada[i - 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j - 1] == -1) {
//             contador = contador + 1;
//           }

//           if (entrada[i + 1][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i + 1][j] == -1) {
//             contador = contador + 1;
//           }
//           arraySaida[i][j] = contador;
//         }

//         if (i == entrada.length - 1 && j == entrada[i].length - 1) {
//           contador = 0;
//           if (entrada[i - 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j - 1] == -1) {
//             contador = contador + 1;
//           }

//           arraySaida[i][j] = contador;
//         }

//         if (i == entrada.length - 1 && j < entrada[i].length - 1 && j > 0) {
//           contador = 0;
//           if (entrada[i - 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j + 1] == -1) {
//             contador = contador + 1;
//           }

//           arraySaida[i][j] = contador;
//         }

//         if (
//           i < entrada.length - 1 &&
//           i > 0 &&
//           j < entrada[i].length - 1 &&
//           j > 0
//         ) {
//           contador = 0;
//           if (entrada[i - 1][j] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i - 1][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j - 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i][j + 1] == -1) {
//             contador = contador + 1;
//           }
//           if (entrada[i + 1][j + 1] == -1) {
//             contador = contador + 1;
//           }

//           if (entrada[i + 1][j] == -1) {
//             contador = contador + 1;
//           }

//           if (entrada[i + 1][j - 1] == -1) {
//             contador = contador + 1;
//           }

//           arraySaida[i][j] = contador;
//         }
//       } else {
//         arraySaida[i][j] = -1;
//       }
//     }
//   }
//   return arraySaida;
// }

// arrayEntrada = [
//   [0, 0, -1, 0],
//   [0, 0, -1, 0],
//   [0, -1, -1, 0],
// ];
// console.log(arrayEntrada);
// arraySaida = buscaminas(arrayEntrada);
// console.log("empezamos a percorrer a resposta");
// console.log(arraySaida);
// // for (let i = 0; i < arraySaida.length; i++) {
// //   console.log("");
// //   for (let j = 0; j < arraySaida[i].length; j++) {
// //     console.log("numero");
// //     console.log(arraySaida[i][j]);
// //   }
// // }

// EXERCICIO 7
function axendarReunion(horaInicioReunion, duracionMinutos) {
  const inicioXornada = "07:30";
  const finalXornada = "17:45";

  // Extraio hora e min do inicio da xornada
  const splitInicioXor = inicioXornada.split(":");
  const horaInicioXor = parseInt(splitInicioXor[0]);
  const minInicioXor = parseInt(splitInicioXor[1]);

  // Extraio hora e min do final da xornada
  const splitFinXor = finalXornada.split(":");
  const horaFinXor = parseInt(splitFinXor[0]);
  const minFinXor = parseInt(splitFinXor[1]);

  // Extraio hora e min do inicio da reunión
  const splitReunion = horaInicioReunion.split(":");
  const horaIniReunion = parseInt(splitReunion[0]);
  const minIniReunion = parseInt(splitReunion[1]);

  // Calculo a hora de fin da reunión:
  let hora = 0;
  let minutos = duracionMinutos;
  if (duracionMinutos >= 60) {
    hora = parseInt(duracionMinutos / 60);
    minutos = parseInt(duracionMinutos % 60);
  }

  let horafinReunion = parseInt(horaIniReunion) + hora;
  let minFinReunion = parseInt(minIniReunion) + minutos;

  if (minFinReunion >= 60) {
    horafinReunion = horafinReunion + parseInt(minFinReunion / 60);
    minFinReunion = minFinReunion % 60;
  }
  // console.log("Hora comzo reunion: " + horaIniReunion);
  // console.log("Min comezo reunion: " + minIniReunion);
  // console.log("A reunión terminas ás " + horafinReunion + ":" + minFinReunion);
  // Comprobacións:

  if (horaIniReunion == horaInicioXor) {
    if (minIniReunion >= minInicioXor) {
      // console.log("A hora de comezo non se sae do horario");
      return comprbarFin(horafinReunion, horaFinXor, minFinReunion, minFinXor);
    } else {
      // console.log("A hora e igual, pero polos minutos mal");
      return false;
    }
  } else if (horaIniReunion == horaFinXor) {
    if (minIniReunion <= minFinXor) {
      // console.log("A hora de comezo non se sae do horario");
      return comprbarFin(horafinReunion, horaFinXor, minFinReunion, minFinXor);
    } else {
      // console.log("A hora e igual, pero polos minutos mal");
      return false;
    }
  } else if (horaIniReunion > horaInicioXor && horaIniReunion < horaFinXor) {
    // console.log("A hora de comezo non se sae do horario");
    return comprbarFin(horafinReunion, horaFinXor, minFinReunion, minFinXor);
  } else {
    // console.log("Error na hora");
    return false;
  }
}

function comprbarFin(horafinReunion, horaFinXor, minFinReunion, minFinXor) {
  if (horafinReunion <= horaFinXor) {
    if (minFinReunion <= minFinXor) {
      // console.log("A hora de fin tampouco se sae do horario");
      return true;
    } else {
      // console.log("Error min fin");
      return false;
    }
  } else {
    // console.log("Error hora fin");
    return false;
  }
}

let resultado = axendarReunion("07:55", 40);

if (resultado == true) {
  console.log("Hora correcta");
} else {
  console.log("Hora incorrecta");
}

console.assert(
  axendarReunion("7:00", 15) == false,
  'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(
  axendarReunion("7:29", 30) == false,
  'Fallo comprobando axendarReunión("7:30", 30) == false'
);
console.assert(
  axendarReunion("11:30", 60) == true,
  'Fallo comprobando axendarReunión("11:30", 60) == true'
);

console.assert(
  axendarReunion("17:00", 45) == true,
  'Fallo comprobando axendarReunión("17:00", 45) == true'
);

console.assert(
  axendarReunion("17:30", 30) == false,
  'Fallo comprobando axendarReunión("17:30", 30) == false'
);

let i = prompt("");

// Exercicio 1

// podia ter usado split, reverse e join e facelo todo nunha linea
function reverseString(stringEntrada) {
  let stringSaida = "";

  for (let i = stringEntrada.length - 1; i >= 0; i--) {
    stringSaida = stringSaida + stringEntrada[i];
  }
  return stringSaida;
}

console.log("O string hola ao reves é : " + reverseString("hola"));

// Exercicio 2
function removeCharacters(cad, arr) {
  for (let i = 0; i < arr.length; i++) {
    cad = cad.replaceAll(arr[i], "");
  }
  return cad;
}

console.log(
  'A cadena "hola que tal estas " sen "a" nin "e" é: ' +
    removeCharacters("hola que tal estas", ["a", "e", "h", "t"])
);

// Exercicio 3

function caracterMaisRepetido(palabra) {
  letras = [];
  let i = 0;
  palabraOrixinal = palabra;
  while (palabra.length != 0) {
    letras += palabra[i];

    palabra = palabra.replaceAll(palabra[i], "");
  }

  letraFinal = "";
  contadorFinal = 0;

  for (let i = 0; i < letras.length; i++) {
    let contador = 0;
    let letra = letras[i];

    for (let j = 0; j < palabraOrixinal.length; j++) {
      if (letra == palabraOrixinal[j]) {
        contador += 1;
      }
    }

    if (contador > contadorFinal) {
      contadorFinal = contador;
      letraFinal = letras[i];
    }
  }

  return `A letra máis repetida é "${letraFinal}" e as suas ocorrencias son ${contadorFinal}`;
}

console.log(caracterMaisRepetido("innnnesss"));

// Exercicio 4
// Teria que facerse co pad start
function enmascarar(cadNums) {
  if (isNaN(cadNums)) {
    console.log("Numero NON introducido");
  } else {
    console.log("Numero introducido");
    for (let i = 0; i < cadNums.length - 4; i++) {
      cadNums = cadNums.replace(cadNums[i], "*");
    }
  }
  return cadNums;
}
console.log(enmascarar("11111555555"));

// Exercicio 5
// Para alinear á dereita utilizar o pad start
const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio09433847 22;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

linea = flightsInfo.replaceAll("+", ") \n");
espacios = linea.replaceAll("_", " ");

array = espacios.split(";");

for (let i = 1; i < array.length; i = i + 3) {
  array[i] = " " + array[i].slice(0, 3).toUpperCase() + "";
  array[i + 1] = " " + (array[i + 1].substring(0, 3).toUpperCase() + " (");
}

let stringFinal = "";
for (let i = 0; i < array.length; i++) {
  stringFinal = stringFinal.concat(array[i]);
}

// Solución da profe:
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flightsInfo.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.replaceAll("_", " ")} ${getCode(from)} ${getCode(to)}(${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

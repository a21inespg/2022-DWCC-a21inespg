// Exercicio 1
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
  let cadSaida = "";

  for (let i = 0; i < arr.length; i++) {
    let patron = arr[i];
    console.log(patron);
    if (i == 0) {
      cadSaida = cad.replaceAll(patron, "");
    }
    cadSaida = cadSaida.replaceAll(patron, "");
  }

  return cadSaida;
}

console.log(
  'A cadena "hola que tal estas " sen "a" nin "e" é: ' +
    removeCharacters("hola que tal estas", ["a", "e", "h", "t"])
);

// Exercicio 3


function caracterMaisRepetido(palabra) {
    let contendor = [];

  for (let i = 0; i < palabra.length; i++) {
    if (contenedor.includes(palabra[i]))
  }
}

// Exercicio 4 
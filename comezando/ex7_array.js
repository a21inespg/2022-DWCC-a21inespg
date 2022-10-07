const num = prompt("Introduce un número.");
let arrayNums = [];
let suma = 0;
let suma2 = 0;
for (let i = 0; i <= num; i++) {
  arrayNums.push(i);
  suma = suma + i;
}

console.log("Variable contador");
for (let i = 0; i < arrayNums.length; i++) {
  console.log(arrayNums[i]);
}

console.log("Bulce for-in");
for (let numero in arrayNums) {
  console.log(numero);
}

console.log("Bucle for-of");
for (let numero of arrayNums) {
  console.log(numero);
}

console.log("A suma de todos os números dende o 0 ao " + num + " é " + suma);

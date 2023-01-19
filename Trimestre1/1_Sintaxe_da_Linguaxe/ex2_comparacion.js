let num1 = prompt("Introduce o primeiro número");
let num2 = prompt("Introduce o segundo número");
let num3 = prompt("Introduce o terceiro número");

let numGrande;

if (num1 == num2 && num1 == num3) {
  console.log("Son iguales");
} else if (num1 >= num2) {
  numGrande = num1;
  if (numGrande < num3) {
    numGrande = num3;
    console.log(
      "Os numeros introducidos foron: " + num1 + "," + num2 + " e " + num3
    );
    console.log("O número máis grande é: " + numGrande);
  }
} else {
  numGrande = num2;
  if (numGrande < num3) {
    numGrande = num3;
    console.log(
      "Os numeros introducidos foron: " + num1 + "," + num2 + " e " + num3
    );
    console.log("O número máis grande é: " + numGrande);
  }
}

const num = parseFloat(prompt("Introduce un número"));
let factorial = 1;
if (!Number.isInteger(num) || num < 0) {
  console.log("Introduciches un número non válido");
} else {
  if (num == 0) {
    factorial = 1;
  } else {
    for (let i = 1; i <= 5; i++) {
      factorial = factorial * i;
    }
  }
  console.log("O factorial de " + num + " é " + factorial);
}

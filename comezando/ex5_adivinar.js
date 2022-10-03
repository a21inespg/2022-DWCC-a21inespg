const randNum = Math.floor(Math.random() * 100);
let numUsuario = prompt(
  "Xenerouse un número do 0 ao 100. Introduce o que creas que é."
);

while (numUsuario != randNum) {
  console.log("Non adivinaches");
  if (numUsuario > randNum) {
    console.log("O número introducido é maior que o que tes que adiviñar,");
  } else {
    console.log("O número introducido é menor que o que tes que adiviñar,");
  }

  numUsuario = prompt(" Introduce outro.");
}

if (numUsuario == randNum) {
  console.log("Noraboa! O número era " + randNum);
}

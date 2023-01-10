let form2 = document.getElementById("js");
console.log(form2);
let reg = /^\d{3}(-\d{2}-|\d{2})\d{3}$/;
form2.addEventListener("input", (event) => {
  let escrito = event.target.value;
  let input = event.target;

  if (reg.test(escrito)) {
    input.style.backgroundColor = "lightseagreen";
  } else {
    input.style.backgroundColor = "lightcoral";
  }
});

let form3 = document.getElementById("api");
console.log(form3);

let input3 = form3.querySelector("input");
console.log(input3);
input3.validationMessage = "todo mal";

form3.addEventListener("input", (event) => {
  let input = event.target;
  if (input.validity.patternMismatch) {
    console.log("Inocrrecto");
  } else {
    console.log("Correcto");
  }
});

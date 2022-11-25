let boton = document.body.firstElementChild;

boton.addEventListener("mouseout", function () {
  console.log("O rato entrou e saíu do botón");
});

let texto = document.getElementById("texto");
boton.addEventListener("click", function () {
  texto.classList.add("hidden");
});

let caixa = document.body.getElementsByTagName("input")[1];

caixa.addEventListener("focus", function () {
  texto.classList.remove("hidden");
  caixa.addEventListener("keypress", function (value) {
    texto.append(value.key);
  });
});

let texto = document.getElementById("texto");
console.log(texto);
let menu = document.getElementById("esconder");
console.log(menu);
menu.classList.add("hidden");
texto.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

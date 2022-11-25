let boton = document.getElementById("button");
// let texto = document.getElementById("texto");
// let ul = document.getElementById("lista");
// boton.addEventListener("click", function () {
//   let li = document.createElement("li");
//   li.innerHTML = texto.value;
//   ul.append(li);
// });

boton.addEventListener("click", () => console.log("1"));
boton.removeEventListener("click", () => console.log("3"));
boton.onclick = () => console.log(2);

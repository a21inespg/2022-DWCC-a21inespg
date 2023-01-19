//  Exercicio 1: a)
console.log("hola");
console.log(document.body.getElementsByTagName("li"));
let lis = document.body.getElementsByTagName("li");
let ol = document.body.getElementsByTagName("ol")[0];
// Exercicio 2
for (let li of lis) {
  li.remove();
}

console.log(document.body);
// Exercicio 3
let taboa = document.getElementById("taboa");
taboa.remove();

// Queda texto porque é o remove borra todos os seus elementos fillos e o seu contido, pero "texto" non é un elemento.

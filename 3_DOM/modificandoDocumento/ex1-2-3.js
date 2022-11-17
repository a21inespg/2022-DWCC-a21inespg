//  Exercicio 1: a)

console.log(document.body.getElementsByTagName("li"));
let lis=document.body.getElementsByTagName("li");

// Exercicio 2
for (let li of lis) {
    console.log(li);
    li.remove();
}

// Exercicio 3
let taboa = document.getElementById("taboa");
taboa.remove();

// Queda texto porque é o remove borra todos os seus elementos fillos e o seu contido, pero "texto" non é un elemento.
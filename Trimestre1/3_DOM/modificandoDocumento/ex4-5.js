
// Exercicio 4
let ul=document.body.firstElementChild;

for (let i =0;i<4;i++) {
    ul.append(document.createElement("li"));
}

// Exercicio 5
let ul2=document.body.getElementsByTagName("ul")[1];
li=ul2.firstElementChild;
console.log(li);

let creationLi1=document.createElement("li");
creationLi1.append("2");

let creationLi2=document.createElement("li");
creationLi2.append("3");
li.append(creationLi1);
li.append(creationLi2)


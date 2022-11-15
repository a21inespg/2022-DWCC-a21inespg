//● O elemento con id “input2”.
console.log(document.getElementById("input2"));

// ● A colección de parágrafos
console.log(document.getElementsByTagName("p"));

// ● Todos os parágrafos dentro do div con id “lipsum”.
console.log(document.getElementById("lipsum").getElementsByTagName("p"));

// ● O formulario
console.log(document.getElementsByTagName("form"));

//● Todos os inputs
console.log(document.getElementsByTagName("input"));

//● Só os inputs con nome “sexo”.
console.log(document.getElementsByName("sexo"));

// ● Os items da lista con clase “important”.
let lis = document.getElementsByTagName("ul")[0];
console.log(lis.getElementsByClassName("important"));

console.log(documet.querySelectorAll("ul .important"));
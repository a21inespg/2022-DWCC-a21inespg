let tamanho=document.body.getElementsByTagName("form")[0].getElementsByTagName("label").length;
console.log(document.body.getElementsByTagName("form")[0].getElementsByTagName("label")[tamanho-1].innerHTML);

console.log(document.body.getElementsByTagName("form")[0].getElementsByTagName("label")[tamanho-2].textContent);

console.log(document.body.getElementsByTagName("form")[0].getElementsByTagName("label")[tamanho-1].getElementsByTagName("input")[0].value);
// ● O valor do sexo que estea seleccionado.
let inputs=document.body.getElementsByTagName("form")[0].getElementsByTagName("label")[tamanho-1].getElementsByTagName("input");
for (let input of inputs) {
    if (input.hasAttribute("checked")) {
        console.log("O seguinte input ten checkked: ");
        console.log(input);
    }
}

// ● O texto de cada un dos elementos <li>
let arr=document.body.getElementsByTagName("li");

for (let item of arr) {
    console.log(item.textContent);
}

// ● Indica cantos elementos <li> hai.
let numLi=document.body.getElementsByTagName("li").length;
console.log("O body ten "+numLi+" elementos li");

// ● Indica o valor do atributo data-widget-name
let div=document.body.getElementsByTagName("div")[1];
console.log(div);
console.log(div.getAttribute("data-widget-name"));

// ● O número de ligazóns da páxina.
let numLigazons = document.body.getElementsByTagName("a").length;
console.log("A páxina ten " + numLigazons + " ligazóns");

//● A dirección da penúltima ligazón.
console.log(
  document.body.getElementsByTagName("a")[numLigazons - 2].getAttribute("href")
);

//● O número de ligazóns que apuntan a http://proba
let coleccionLigazóns = document.body.getElementsByTagName("a");
let contador = 0;
for (let link of coleccionLigazóns) {
  if (link.href == "http://proba/") {
    contador++;
  }
}
console.log("O número de ligazóns que apuntan a http:://proba/ é " + contador);

//● O número de ligazóns do terceiro parágrafo.
let num =
  document.body.firstElementChild.nextElementSibling.nextElementSibling.getElementsByTagName(
    "a"
  ).length;
console.log("O número de ligazóns no terceiro p é: " + num);

// ● Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa.
for (let link1 of coleccionLigazóns) {
  if (link1.href == "http://proba/") {
    link1.style.color = "red";
  }
}

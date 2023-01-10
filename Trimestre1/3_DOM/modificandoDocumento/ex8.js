function ordenarPorNome(elemento) {
  console.log(elemento);
  let filas = elemento.getElementsByTagName("tr");
  let contador = 0;
  let anterior = "";
  let anteriorNome = "";
  let anteriorFila = filas[0];
  let nome = "";

  for (let i = 1; i < filas.length; i++) {
    if (contador != 0) {
      nome = filas[i].firstElementChild.innerHTML;
    }
    console.log("O nome " + nome + ". A i " + i);
    contador++;
    anteriorNome = nome;
    anteriorFila = filas[i];

    for (let j = i; j < filas.length; j++) {
      nome = filas[j].firstElementChild.innerHTML;
      if (anteriorNome > nome) {
        filas[j].after(anteriorFila);
      }
    }
  }
}

ordenarPorNome(document.getElementById("taboaOrdenar"));

if ("" < "arbol") {
  console.log("abedul va primeiro");
} else {
  console.log("arbol bai primeiro");
}

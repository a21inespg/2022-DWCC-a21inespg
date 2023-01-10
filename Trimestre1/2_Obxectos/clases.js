"use strict";
// Exercicio 1
class Produto {
  constructor(marca, categoria, unidades, prezo) {
    this.marca = marca;
    this.categoria = categoria;
    this.unidades = unidades;
    this.prezo = prezo;
  }

  importe() {
    return this.unidades * this.prezo;
  }

  getInfo() {
    return `${this.categoria} ${this.marca}: ${this.unidades}x${
      this.prezo
    }=${this.importe()}`;
  }
}

let produto1 = new Produto("Zara", "Camiseta", 5, 5);
console.log(produto1.getInfo());
console.log(" Importe: " + produto1.importe() + "euros");

let produto2 = new Produto("Levis", "Pantalón", 15, 10);
console.log(produto2.getInfo());
console.log(" Importe: " + produto2.importe() + "euros");

let produto3 = new Produto("Mango", "Chaqueta", 2, 25);
console.log(produto3.getInfo());
console.log(" Importe: " + produto3.importe() + "euros");

// Exercicio 2
class Televisor extends Produto {
  constructor(marca, categoria, unidades, prezo, tamaño) {
    super(marca, categoria, unidades, prezo);
    this.tamaño = tamaño;
  }

  getInfo() {
    return `${super.getInfo()}. O tamaño é ${this.tamaño} pulgadas. `;
  }
}

let tv = new Televisor("Samsung", "Televisor", 5, 5, 50);
console.log(tv.getInfo());

// Exercicio 3
let produto4 = new Produto("Parfois", "Bolso", 7, 7);
let produto5 = new Produto("Bershka", "Abrigo", 8, 5);

let arrProdutos = [produto1, produto2, produto3, produto4, produto5];

function prodsSortByCategory(arrProdutos) {
  arrProdutos.sort((a, b) => (a.categoria > b.categoria ? 1 : -1));
}

prodsSortByCategory(arrProdutos);

console.log("O array ordenado por categoría: ");
console.log(arrProdutos);

function prodsSortByPrice(arrProdutos) {
  arrProdutos.sort((a, b) => (a.prezo > b.prezo ? 1 : -1));
}

prodsSortByPrice(arrProdutos);
console.log("O array ordenado por prezo: ");
console.log(arrProdutos);

function prodsTotalPrice(arrProdutos) {
  return arrProdutos.reduce((total, produto) => {
    total + produto.importe();
  }, 0);
}

console.log("O precio total é: "); // non me vai
console.log(prodsTotalPrice(arrProdutos));

function prodsWithLowUnits(produtos, uds) {
  return produtos.filter((produto) => produto.unidades < uds);
}

console.log(prodsWithLowUnits(arrProdutos, 7));

function prodsList(produtos) {
  let stringRetorno = "Lista produtos: ";
  produtos.forEach((produto) => {
    stringRetorno += "\n- " + produto.getInfo();
  });

  return stringRetorno;
}

console.log(prodsList(arrProdutos));

"use strict";
// Exercicio 1
class Produto {
  constructor(marca, categoria, unidades, prezo) {
    this.values = [marca, categoria, unidades, prezo];
  }

  importe() {
    return this.values[3] * this.values[2];
  }

  getInfo() {
    return `${this.values[1]} ${this.values[0]}: ${this.values[2]}x${
      this.values[3]
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
    this.values = [tamaño];
  }

  getInfo() {
    return `${super.getInfo()}. O tamaño é ${this.values[0]} pulgadas. `;
  }
}

let tv = new Televisor("Samsung", "Televisor", 5, 5, 50);
console.log(tv.getInfo());

// Exercicio 3
let produto4 = new Produto("Parfois", "Bolso", 7, 7);
let produto5 = new Produto("Bershka", "Abrigo", 8, 5);

let arrProdutos = [produto1, produto2, produto3, produto4, produto5];

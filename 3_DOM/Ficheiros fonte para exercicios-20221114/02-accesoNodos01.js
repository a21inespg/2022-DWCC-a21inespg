// ● A táboa con id="age-table".
console.log(document.getElementById("age-table"));

// ● Todos os elementos label dentro da táboa (debería haber 3).
console.log(document.getElementById("age-table").getElementsByTagName("label"));

// ● O primeiro td da táboa.
console.log(
  document.getElementById("age-table").firstElementChild.firstElementChild
    .firstElementChild
);

// ● O form con name="search".
console.log(document.getElementsByName("search")[0]);

// ● O primeiro input do formulario anterior formulario.
console.log(
  document.getElementsByName("search")[0].getElementsByTagName("input")[0]
);

//● O último input do formulario anterior formulario.
let lonxitude = document
  .getElementsByName("search")[0]
  .getElementsByTagName("input").length;
console.log(
  document.getElementsByName("search")[0].getElementsByTagName("input")[
    lonxitude - 1
  ]
);

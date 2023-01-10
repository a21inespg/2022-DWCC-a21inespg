// Exercicio 1 dates
const data = new Date("July 25, 2000 ");
const day = data.getDay();

switch (day) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Luns");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Mércores");
    break;
  case 4:
    console.log("Xoves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
}

// Solución proposta pola profe: facer un array cos nomes dos días é coller a posicion do oarray que devolvva a funcion get day

// Exercicio 2 dates
const data2 = new Date("July 25, 2022 ");
// const data2 = new Date("2022, 6, 25");
const day2 = data2.getDay();

switch (day2) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Luns");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Mércores");
    break;
  case 4:
    console.log("Xoves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
}

// Exercicio 3

const data3 = new Date("October 13, 2022 ");
const value = data3.valueOf() - data.valueOf();
const segs = value / 1000;
const mins = segs / 60;
const hours = mins / 60;
const days = hours / 24;

console.log("days: " + days);

//  Exercicio 4

function calculoDiasMes(mes, ano) {
  return new Date(ano, mes, 0).getDate();
}
console.log(calculoDiasMes(12, 2020));

// // Exercicio 5 - este esta mal

function eFinSemana(data) {
  console.log("dia " + data.getDay());
  if (data.getDay() == 0 || data.getDay() == 6) {
    return "Finde";
  } else {
    return "non finde";
  }
}

console.log(eFinSemana(new Date(2022, 9, 15)));

// console.log(eFinSemana(new Date(2022, 10, 14)));

// // Exercicio 6
function diasTranscurridos(data) {
  fechaInicio = new Date(2022, 1, 1).valueOf(); // getTime() fai o mesmo
  fechaActual = data.valueOf();
  dif = fechaActual - fechaInicio;

  return dif / (1000 * 60 * 60 * 24);
}

// console.log(diasTranscurridos(new Date(2022, 1, 5)));

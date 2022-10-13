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

// Exercicio 2 dates
const data2 = new Date("July 25, 2022 ");
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

// const data3 = new Date("October 13, 2022 ");
// const value = data3.valueOf() - data.valueOf();
// const segs = value / 1000;
// const mins = segs / 60;
// const hours = mins / 60;
// const days = hours / 24;

// console.log("days: " + days);

//  Exercicio 4

fecha = new Date("October 1, 2022 ");

function calculoDiasMes(mes, ano) {
  fecha.setMonth(mes - 1);
  fecha.setFullYear(ano);
  let secondsMonth = fecha.valueOf();
  fecha.setMonth(mes);
  let finalSeconds = fecha.valueOf() - secondsMonth;
  const segs = finalSeconds / 1000;
  const mins = segs / 60;
  const hours = mins / 60;
  const days = hours / 24;
  console.log(`The month has ${Math.round(days)}`);
}

calculoDiasMes(4, 2020);

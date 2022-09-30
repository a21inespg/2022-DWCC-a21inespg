let dia = prompt("Introduce un día da semana");
dia = dia.toLowerCase();
dia = dia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

switch (dia) {
  case "domingo":
  case "sabado":
    console.log("Non é laborable");
    break;
  default:
    console.log("É laborable");
}

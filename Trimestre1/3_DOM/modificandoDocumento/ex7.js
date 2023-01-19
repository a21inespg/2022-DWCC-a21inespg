function crearCalendario(elemento, ano, mes) {
  console.log(elemento);
  let contador = 1;
  let contadorComezo = 1;
  let data = new Date(`${ano}-${mes}-01`);
  let diaEmpezaMes = data.getDay();
  let diasMes = new Date(ano, mes, 0).getDate();

  while (contador <= diasMes) {
    let fila = document.createElement("tr");
    for (let i = 0; i < 7 && contador <= diasMes; i++) {
      let td = document.createElement("td");
      if (contadorComezo < diaEmpezaMes) {
        td.append("");
      } else {
        td.append(contador);
        contador++;
      }
      contadorComezo++;
      fila.append(td);
    }
    elemento.append(fila);
  }
}

crearCalendario(document.getElementById("taboa"), 2020, 9);


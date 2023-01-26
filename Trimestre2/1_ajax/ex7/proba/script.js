// // con http request
const newProduct = {
  name: "nome",
  descrip: "descricion",
};
// const peticion = new XMLHttpRequest();
// peticion.open("POST", "http://localhost:3000/produtos");
// // Sempre ten que estar esta liña se se envían datos
// peticion.setRequestHeader("Content-type", "application/json");
// // Hai que convertir o obxecto a unha cadena de texto JSON para envialo
// peticion.send(JSON.stringify(newProduct));

// con async await
// async function procesarProduto() {
//   try {
//     let response = await fetch("http://localhost:3000/produtos", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(newProduct),
//     });
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     return error;
//   }
// }
// procesarProduto();

async function procesarProduto() {
  try {
    newProduct.name = "Modificado";
    let response = await fetch("http://localhost:3000/produtos/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newProduct),
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    return error;
  }
}
procesarProduto();

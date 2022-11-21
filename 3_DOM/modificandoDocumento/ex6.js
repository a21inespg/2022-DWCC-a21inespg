let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
  COche: {
    casa: {},
    abedul: {},
    liquidambar: {
      sequoia: {},
      oak: {},
    },
  },
  camion: {
    roda: {},
    ventana: {},
  },
};

// este está mal
function createTree(data) {
  let array = Object.entries(data);

  let ol = document.createElement("ul");

  for (const [nome, tipo] of array) {
    let li = document.createElement("li");
    li.append(nome);
    ol.append(li);
    array2 = Object.entries(tipo);

    let ol2 = document.createElement("ul");
    for (const [key, value] of array2) {
      console.log("key: " + key + " value: " + value);
      let li2 = document.createElement("li");
      li2.append(key);
      ol2.append(li2);
      array3 = Object.keys(value);

      if (array3.length != 0) {
        let ol3 = document.createElement("ul");
        for (let key2 of array3) {
          console.log(key2);
          let li3 = document.createElement("li");
          li3.append(key2);
          ol3.append(li3);
        }
        li2.append(ol3);
      }
    }
    li.append(ol2);
  }
  document.body.append(ol);
}

// este está ben
function crearLista(data) {
  let array = Object.entries(data);
  let ol = document.createElement("ul");

  for ([chave, valor] of array) {
    let li = document.createElement("li");
    li.append(chave);
    ol.append(li);
    if (Object.entries(valor) != null) {
      li.append(crearLista(valor));
    }
  }

  return ol;
}

document.body.append(crearLista(data));

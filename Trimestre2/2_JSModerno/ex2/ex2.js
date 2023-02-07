let lat, lng;
let marker;
let map;
let arrayObxectos;
let marcadores = [];
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === "QuotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
}

function onMapClick(e) {
  lat = e.latlng.lat;
  lng = e.latlng.lng;
  formulario.style.display = "block";
  input.focus();

  marker = L.marker([lat, lng]);
}

function crearCarta(descricion, lat, lng) {
  let carta = document.createElement("div");
  carta.setAttribute("class", "card mb-2 shadow " + descricion);
  carta.innerHTML =
    "<div class='card-body'> <div class='row'><h5 class='card-title col-9 col-md-11'></h5>     <button type='button' class='btn-close col-1' aria-label='Close'></button> </div> <p class='card-text' ></p> <a href='#' class='btn btn-primary'>Centrar<a></div>";

  carta
    .getElementsByTagName("a")[0]
    .classList.add(descricion.replaceAll(" ", "_"));
  carta
    .getElementsByTagName("button")[0]
    .classList.add(descricion.replaceAll(" ", "_"));
  let titulo = carta.getElementsByClassName("card-title")[0];
  titulo.innerHTML = descricion;

  let texto = carta.getElementsByClassName("card-text")[0];
  texto.innerHTML =
    "Latitude: " +
    lat.toString().substring(0, 5) +
    " <br> Lonxitude: " +
    lng.toString().substring(0, 5);

  formulario.after(carta);
}

let input = document.getElementById("descricion");
let formulario = document.getElementById("formulario");
formulario.style.display = "none";

formulario.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    map.addLayer(marker);
    marcadores.push(marker);
    e.preventDefault();
    let descricion = input.value;
    crearCarta(descricion, lat, lng);
    input.value = "";
    formulario.style.display = "none";

    //--------------------------------//
    let puntos = JSON.parse(localStorage.getItem("puntos"));
    if (puntos == undefined) {
      arrayObxectos = [];
    } else {
      arrayObxectos = puntos;
    }
    let objeto = {
      nome: descricion,
      latitude: lat,
      lonxitude: lng,
    };

    arrayObxectos.push(objeto);

    localStorage.setItem("puntos", JSON.stringify(arrayObxectos));
  }
});

document.body.addEventListener("click", (e) => {
  let bot = e.target;
  if (bot.tagName == "A") {
    let puntos = JSON.parse(localStorage.getItem("puntos"));
    for (punto of puntos) {
      if (bot.classList.contains(punto.nome.replaceAll(" ", "_"))) {
        map.setView([punto.latitude, punto.lonxitude], 8);
        var popup = L.popup()
          .setLatLng([punto.latitude, punto.lonxitude])
          .setContent("Sitio: " + punto.nome)
          .openOn(map);
      }
    }
  }

  if (bot.tagName == "BUTTON") {
    if (bot.classList.contains("btn-close")) {
      

      for (obx of arrayObxectos) {
        if (bot.classList.contains(obx.nome.replaceAll(" ", "_"))) {
          let index = arrayObxectos.indexOf(obx);
          if (index > -1) {
            arrayObxectos.splice(index, 1);
            let marc = marcadores.splice(index, 1);
            console.log(marc);
            map.removeLayer(marc[0]);
            
          }

          // card mb-2 shadow
          let carta = document.body.getElementsByClassName(
            "card " + obx.nome
          )[0];
          carta.remove();
        }
      }

      localStorage.setItem("puntos", JSON.stringify(arrayObxectos));
    }
  }
});

 async function crearMapa() {
  if ("geolocation" in navigator) {
    
    navigator.geolocation.getCurrentPosition(
      function (posicion) {
        const { latitude, longitude } = posicion.coords;
         map = L.map("map").setView([latitude, longitude], 8);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        map.on("click", onMapClick);
        console.log(map);
        iniciar();
      },
      function (error) {
        console.log(`ERROR(${error.code}): ${error.message}`);
      }
    );
  } else {
   }
   return 1;
}

crearMapa();

function iniciar() {
  let puntos = JSON.parse(localStorage.getItem("puntos"));
if (puntos != null) {
  puntos = JSON.parse(localStorage.getItem("puntos"));
  arrayObxectos=puntos;
  for (punto of puntos) {
    crearCarta(punto.nome, punto.latitude, punto.lonxitude);
    let marcador= L.marker([punto.latitude, punto.lonxitude]);
    map.addLayer(marcador);
    marcadores.push(marcador);

  }
}

}

// localStorage.removeItem("puntos");

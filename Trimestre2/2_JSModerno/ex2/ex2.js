const map = L.map("map").setView([42.87876, -8.547238], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(
    function (posicion) {
    // desestruturación de obxectos
    const { latitude, longitude } = posicion.coords;
    },
    function (error) {
    console.log(`ERROR(${error.code}): ${error.message}`);
    }
    );
    } else {
    /* geolocation IS NOT available */
    }

    let lat, lng;

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
     lat=e.latlng.lat;
     lng=e.latlng.lng;
    formulario.style.display="block";
    input.focus();
    
    
        var marker = L.marker([lat, lng]).addTo(map);
        marker
        ;

        var popup = L.popup()
.setLatLng([lat, lng])
.setContent("I am a standalone popup.")
.openOn(map);
    }




      
let input=document.getElementById("descricion");
let formulario=document.getElementById("formulario");
formulario.style.display="none";

formulario.addEventListener("keypress", (e)=> {
    if (e.key=="Enter") {
        console.log('enter');
        e.preventDefault();
        let descricion=input.value;
    let carta=document.createElement("div");
    carta.setAttribute("class", "card mb-2 mt-2 "+descricion);
    carta.innerHTML="<div class='card-body'> <h5 class='card-title'></h5> <p class='card-text'></p> <a href='#' class='btn btn-primary'>Centrar<a></div>";

    let titulo=carta.getElementsByClassName("card-title")[0];
    titulo.innerHTML=descricion;

    let texto=carta.getElementsByClassName("card-text")[0];
    texto.innerHTML="Latitude: "+lat.toString().substring(0,6)+ " <br> Lonxitude: "+lng.toString().substring(0,6);

    input.value="";
    formulario.after(carta);
    
    formulario.style.display="none";
    }

    

});
console.log(formulario);

map.on('click', onMapClick);






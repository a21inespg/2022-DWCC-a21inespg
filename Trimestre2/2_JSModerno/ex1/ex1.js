if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      console.log(posicion);
      // desestruturación de obxectos
      const { latitude, longitude } = posicion.coords;
      //   console.log(`latitude: ${latitude}, lonxitude: ${longitude}`);
      const map = L.map("map").setView([latitude, longitude], 15);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      var popup = L.popup();
      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
        let lat = e.latlng.lat;
        let long = e.latlng.lng;
        var marker = L.marker([lat, long]).addTo(map);
      }
      map.on("click", onMapClick);
    },
    function (error) {
      console.log(`ERROR(${error.code}): ${error.message}`);
    }
  );
} else {
  /* geolocation IS NOT available */
}

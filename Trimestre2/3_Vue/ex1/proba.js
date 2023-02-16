const { createApp } = Vue;
createApp({
  data() {
    return {
      titulo: "<h1>Probando vue</h1>",
      numero: 8,
      array: ["coche", "tren", "avion"],
      dinamico: "atributo dinamico",
    };
  },
 
}).mount("#app");

console.log(document.body);

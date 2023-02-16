const { createApp } = Vue;

createApp({
  data() {
    return {
      nome: "Inés",
      ano: 2023,
      imaxe: "img/foto.png",
      count: 0,
    };
  },
  methods: {
    incrementar() {
      this.count++;
    },
  },
}).mount("#app");

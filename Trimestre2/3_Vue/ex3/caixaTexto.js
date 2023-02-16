const app = Vue.createApp({
  data() {
    return {
      texto: "",
    };
  },
  methods: {
    escrito(evento) {
      this.texto = evento.target.value;
    },
  },
}).mount("#app");

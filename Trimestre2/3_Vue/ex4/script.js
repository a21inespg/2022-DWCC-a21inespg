const aplicacion = Vue.createApp({
  data() {
    return {
      textoEnter: "",
    };
  },
  methods: {
    say(parametro) {
      console.log(parametro);
    },

    recollerTexto(evento) {
      console.log("recollo");
      this.textoEnter = this.textoEnter + evento.target.value;
      evento.target.value = "";
    },
  },
}).mount("#app");

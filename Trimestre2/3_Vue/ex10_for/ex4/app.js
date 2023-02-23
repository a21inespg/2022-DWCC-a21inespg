const app = Vue.createApp({
  data() {
    return {
      monstroVida: 100,
      humanoVida: 100,
      especialDeshabilitado: 0,
    };
  },

  methods: {
    ataque() {
      this.monstroVida = this.monstroVida - this.numAleatorio(5, 12);

      this.humanoVida = this.humanoVida - this.numAleatorio(8, 15);
    },
    ataqueEspecial() {
      this.monstroVida = this.monstroVida - this.numAleatorio(10, 25);

      this.humanoVida = this.humanoVida - this.numAleatorio(8, 15);
    },
    numAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    curacion() {
      this.humanoVida = this.humanoVida + this.numAleatorio(8, 20);
      this.humanoVida = this.humanoVida - this.numAleatorio(8, 15);
      if (this.humanoVida > 100) {
        this.humanoVida = 100;
      }
    },
  },
}).mount("#game");

function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monstroVida: 100,
      humanoVida: 100,
      especialDeshabilitado: 0,
      isDisabled: false,
      resultado: false,
      lost: false,
      win: false,
      empate: false,
      controls: true,
    };
  },

  methods: {
    checkLimits(life) {
      if (life > 100) {
        return 100;
      } else if (life < 0) {
        return 0;
      } else {
        return life;
      }
    },

    ataque() {
      this.especialDeshabilitado++;

      let ataqueMonstro = numAleatorio(5, 12);
      this.monstroVida = this.monstroVida - ataqueMonstro;

      let ataqueHumano = numAleatorio(8, 15);
      this.humanoVida = this.humanoVida - ataqueHumano;

      this.monstroVida = this.checkLimits(this.monstroVida);
      this.humanoVida = this.checkLimits(this.humanoVida);

      this.engadirRexistro(
        "Monstro",
        " ataque normal con ",
        ataqueMonstro,
        "log--damage"
      );
      this.engadirRexistro(
        "Vostede",
        " ataque normal con ",
        ataqueHumano,
        "log--damage"
      );
    },
    ataqueEspecial() {
      this.isDisabled = true;
      this.especialDeshabilitado = 0;

      let ataqueMonstro = numAleatorio(10, 25);
      this.monstroVida = this.monstroVida - ataqueMonstro;

      let ataqueHumano = numAleatorio(8, 15);
      this.humanoVida = this.humanoVida - ataqueHumano;

      this.monstroVida = this.checkLimits(this.monstroVida);
      this.humanoVida = this.checkLimits(this.humanoVida);

      this.engadirRexistro(
        "Monstro",
        " ataque especial con",
        ataqueMonstro,
        "log--damage"
      );
      this.engadirRexistro(
        "Vostede",
        " ataque especial con ",
        ataqueHumano,
        "log--damage"
      );
    },

    curacion() {
      this.especialDeshabilitado++;
      let curacion = numAleatorio(8, 20) - numAleatorio(8, 15);
      this.humanoVida = this.humanoVida + curacion;

      this.humanoVida = this.checkLimits(this.humanoVida);
      this.engadirRexistro("Vostede", " cúrase con ", curacion, "log--heal");
    },

    novoXogo() {
      document.querySelector("#lista").innerHTML = "";
      this.humanoVida = 100;
      this.monstroVida = 100;
      this.controls = true;
      this.resultado = false;
      this.isDisabled = false;

      this.lost = false;
      this.win = false;
      this.empate = false;
    },
    rendido() {
      this.lost = true;
      this.finalPartida();
    },
    finalPartida() {
      this.controls = false;
      this.resultado = true;
    },

    engadirRexistro(xogador, tipo, numero, efecto) {
      let lista = document.querySelector("#lista");
      console.log(xogador);
      console.log(lista);
      let cor = "";
      xogador == "Monstro" ? (cor = "log--monster") : (cor = "log--player");
      let li = document.createElement("li");

      li.innerHTML =
        "<span class=" +
        cor +
        ">" +
        xogador +
        "</span>" +
        tipo +
        "   <span class=" +
        efecto +
        ">" +
        numero +
        "</span>";

      lista.prepend(li);
    },
  },

  watch: {
    especialDeshabilitado() {
      if (this.especialDeshabilitado == 3) {
        this.isDisabled = false;
        console.log(this.especialDeshabilitado);
      }
    },

    humanoVida() {
      if (this.humanoVida == 0) {
        if (this.monstroVida == 0) {
          this.empate = true;
        } else {
          this.lost = true;
        }
        this.finalPartida();
      }
    },
    monstroVida() {
      if (this.monstroVida == 0) {
        if (this.humanoVida == 0) {
          this.empate = true;
        } else {
          this.win = true;
        }
        this.finalPartida();
      }
    },
  },
}).mount("#game");

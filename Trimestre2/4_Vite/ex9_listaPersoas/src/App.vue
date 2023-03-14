<script>
import Listaxe from "./components/Listaxe.vue";
import Form from "./components/Form.vue";

export default {
  data() {
    return {
      persoas: [
        { id: 1, apelido: "Lovelace", nome: "Ada" },
        { id: 2, apelido: "Pérez", nome: "María" },
        { id: 3, apelido: "González", nome: "Jose" },
      ],
      id: 3,
      nomeParaForm: "",
      apelidoParaForm: "",
    };
  },
  components: {
    Listaxe,
    Form,
  },
  methods: {
    filtrarPersoas(letras) {
      console.log("wmirto");
      if (letras != "") {
        let regex = new RegExp("^" + letras + "", "i");
        console.log(regex);
        console.log(regex.test("gonzalez"));
        let persoasFiltradas = [];
        persoasFiltradas = this.persoas.filter((persoa) =>
          regex.test(persoa.apelido)
        );
        console.log(persoasFiltradas);
      }
    },

    mostrarSeleccion(idEnviado) {
      console.log("mostro seleccion");
      let persoaAtopada =
        this.persoas[this.persoas.findIndex((p) => p.id == idEnviado)];
      console.log(persoaAtopada);

      this.apelidoParaForm = persoaAtopada.apelido;
      console.log(this.apelidoParaForm);
      this.nomeParaForm = persoaAtopada.nome;
    },

    engadirNova(nomeN, apelidoN) {
      this.id = this.id + 1;
      this.persoas.push({ id: this.id, apelido: apelidoN, nome: nomeN });
      console.log(this.persoas);
    },
  },
};
</script>

<template>
  <Listaxe
    @seleccionando="mostrarSeleccion"
    @filtrando="filtrarPersoas"
    :lista="persoas"
  ></Listaxe>
  <Form
    :nome-prop="nomeParaForm"
    :apelido-prop="apelidoParaForm"
    @engadir-persoa="engadirNova"
  ></Form>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

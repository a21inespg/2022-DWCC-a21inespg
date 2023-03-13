<script>
import Listaxe from "./components/Listaxe.vue";
import Form from "./components/Form.vue";

export default {
  data() {
    return {
      persoas: [
        { apelido: "Lovelace", nome: "Ada" },
        { apelido: "Pérez", nome: "María" },
        { apelido: "González", nome: "Jose" },
      ],
    };
  },
  components: {
    Listaxe,
    Form,
  },
  methods: {
    filtrarPersoas(letras) {
      let regex = new RegExp("^" + letras + "", "i");
      console.log(regex);
      console.log(regex.test("lovelace"));
      let persoasFiltradas = [];
      persoasFiltradas = this.persoas.filter((persoa) =>
        regex.test(persoa.apelido)
      );

      console.log(this.persoas);
    },
  },
};
</script>

<template>
  <Listaxe @filtrando="filtrarPersoas" :lista="persoas"></Listaxe>
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

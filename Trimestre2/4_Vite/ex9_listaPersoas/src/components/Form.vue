<script>
export default {
  data() {
    return {
      nome: this.nomeProp,
      apelido: this.apelidoProp,
    };
  },

  props: {
    nomeProp: String,
    apelidoProp: String,
  },
  methods: {
    novaPersoa(e) {
      e.preventDefault();
      this.$emit("engadirPersoa", this.nome, this.apelido);
    },
  },
  updated() {
    console.log("updated");
    console.log(this.nomeProp);
    console.log(this.nome);
  },

  emits: ["engadirPersoa"],
};
</script>

<template>
  <br />

  <form action="">
    <label for="nome">Nome: </label>
    <br />
    <input required type="text" v-model="nome" />
    <br />
    <label for="apelido">Apelido: </label>
    <br />
    <input required type="text" v-model="apelido" />
    <br />
    <br />
    <button>Actualizar</button>
    <button @click="novaPersoa">Engadir</button>
    <button>Borrar</button>
  </form>
</template>

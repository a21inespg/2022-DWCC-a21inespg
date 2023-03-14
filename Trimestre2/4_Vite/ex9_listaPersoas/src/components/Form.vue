<script>
export default {
  data() {
    return {
      nome: "",
      apelido: "",
      id: null,
    };
  },
  // computed: {
  //   nome() {
  //     return this.nomeProp;
  //   },
  //   apelido() {
  //     return this.apelidoProp;
  //   },
  //   id() {
  //     return this.idProp;
  //   },
  // },

  props: {
    nomeProp: String,
    apelidoProp: String,
    idProp: Number,
  },
  methods: {
    novaPersoa(e) {
      e.preventDefault();
      this.$emit("engadirPersoa", this.nome, this.apelido);
    },
    eliminarPersoa(e) {
      e.preventDefault();
      this.$emit("eliminarPersoa", this.id);
    },
  },
  updated() {
    this.nome = this.nomeProp;
    this.apelido = this.apelidoProp;
    this.id = this.idProp;
  },

  emits: ["engadirPersoa", "eliminarPersoa"],
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
    <button @click="eliminarPersoa">Borrar</button>
  </form>
</template>

<script>
export default {
  emits: ["cambioInfo"],
  data() {
    return {
      name: "",
      year: "",
    };
  },
  props: {
    nome: String,
    ano: Number,
  },

  methods: {
    cambio() {
      this.$emit("cambioInfo", this.name, parseInt(this.year));
    },
  },
};
</script>

<template>
  <form>
    <fieldset>
      <legend>Introduce os teus datos</legend>
      <label for="nom">Nome: </label> <br />
      <input :value="nome" id="nom" @input="cambio" /> <br />
      <label for="ano">Ano de nacemento: </label> <br />
      <input :value="ano" id="ano" @input="cambio" /> <br />
    </fieldset>
  </form>
</template>

<style scoped>
form {
  text-align: center;
}

fieldset {
  border: 1px solid black;
  padding: 1.5em;
  border-radius: 10px;
}
input {
  border: 1px solid black;

  border-radius: 7px;
  height: 1.8em;
}

button {
  border: 1px solid black;
  margin-top: 0.7em;
  border-radius: 10px;
}
</style>

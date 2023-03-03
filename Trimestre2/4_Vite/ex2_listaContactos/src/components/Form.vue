<script>
export default {
  emits: ["novoUsuario"],

  data() {
    return {
      nome: "",
      telf: "",
      correo: "",
    };
  },

  methods: {
    submit(e) {
      e.preventDefault();
      this.$emit("novoUsuario", this.nome, this.telf, this.correo);
    },
  },
};
</script>
<template>
  <form>
    <fieldset>
      <legend>Introduce os teus datos</legend>
      <label for="name">Nome: </label> <br />
      <input v-model="nome" id="name" /> <br />
      <label for="telf">Teléfono: </label> <br />
      <input v-model="telf" id="telf" /> <br />
      <label for="mail">Correo electrónico: </label> <br />
      <input v-model="correo" id="mail" /> <br />
      <button @click="submit($event)">Enviar</button>
    </fieldset>
  </form>
</template>

<style>
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

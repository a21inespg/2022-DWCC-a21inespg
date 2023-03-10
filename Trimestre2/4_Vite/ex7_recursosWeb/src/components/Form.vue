<script>
export default {
  data() {
    return {
      titulo: "",
      descricion: "",
      link: "",
    };
  },
  emits: ["novoRexistro"],
  methods: {
    enviarNovoRexistro(e) {
      e.preventDefault();
      this.$emit("novoRexistro", this.titulo, this.descricion, this.link);
    },
  },
};
</script>

<template>
  <form>
    <fieldset>
      <legend>Introduce os datos dun novo periódico</legend>

      <div>
        <label for="titulo">Título: </label> <br />
        <input required type="text" id="titulo" v-model="titulo" /> <br />
        <label for="descricion"> Descrición: </label> <br />
        <input required type="text" id="descricion" v-model="descricion" />
        <br />
        <label for="Link"> Link: </label> <br />
        <input required type="text" id="Link" v-model="link" /> <br />
        <br />
        <button @click="enviarNovoRexistro($event)">Engadir</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
fieldset {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1em;
  padding: 2em;
  width: 30%;
}

input {
  margin-bottom: 1em;
  padding: 0.3em;
}
</style>

<script>
import Botons from "./components/Botons.vue";

export default {
  data() {
    return {
      selected: "",
    };
  },

  methods: {
    mostrar() {
      console.log("Valor seleccionado: " + this.selected);
    },
    cambiarSelected(value) {
      this.selected = value;
    },
  },
  components: {
    Botons,
  },
};
</script>

<template>
  <form>
    <!-- <Botons @update:modelValue="cambiarSelected"></Botons> -->
    <Botons v-model="selected"></Botons>
    <button @click.prevent="mostrar">Enviar</button>
  </form>
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

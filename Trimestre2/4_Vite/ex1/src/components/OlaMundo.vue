<script>
import { transform } from "@vue/compiler-core";

export default {
  data() {
    return {
      isMayus: false,
      texto: "Ola mundo",
    };
  },
  methods: {
    engadirExclam() {
      this.texto = this.texto + "!";
    },
  },
};
</script>
<template>
  <h1 :class="{ mayus: isMayus }">{{ texto }}</h1>
  <button @click="isMayus = !isMayus">Cambiar a maiúsculas</button>
  <button @click="engadirExclam">Engadir exclamación</button>
</template>
<style>
.mayus {
  text-transform: uppercase;
}
</style>

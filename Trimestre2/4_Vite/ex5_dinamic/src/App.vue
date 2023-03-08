<script>
import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador.vue'
import CaixaTexto from './components/CaixaTexto.vue'


export default {


  components: {
    Contador, CaixaTexto
  }
}
</script>

<template>
  <Contador></Contador>
  <CaixaTexto></CaixaTexto>
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

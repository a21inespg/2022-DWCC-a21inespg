<script>
export default {
  props: {
    nome: String,
    ano: Number,
  },
};
</script>

<template>
  <div>
    <ul>
      <li>Nome: {{ nome }}</li>
      <li>Ano de nacemento: {{ ano }}</li>
    </ul>
  </div>
</template>

<style scoped>
div {
  border: 1px solid black;
  border-radius: 10px;
}
</style>

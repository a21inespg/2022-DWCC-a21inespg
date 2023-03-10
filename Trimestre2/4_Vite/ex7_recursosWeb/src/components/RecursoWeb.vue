<script>
export default {
  methods: {
    funcionProba() {
      
    }

  },
};
</script>

<template>
  <div class="contido">
    <div>
      <h3><slot name="titulo">Titulo default</slot></h3>

      <p><slot name="descricion">Descricion default</slot></p>
      <slot name="link">Link default</slot> <br />
      <br />

      <button @click="funcionProba">Eliminar</button>
    </div>
  </div>
</template>

<style scoped>
.contido {
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1em;
  padding: 2em;
  width: 30%;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(197, 166, 171);
}
</style>

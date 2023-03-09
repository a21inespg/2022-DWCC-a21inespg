<script></script>

<template>
  <div class="contido">
    <h3><slot name="titulo">Titulo default</slot></h3>

    <p><slot name="descricion">Descricion default</slot></p>
    <a href=""><slot name="link">Link default</slot></a>
  </div>
</template>

<style scoped>
.contido {
  border: 1px solid black;
  border-radius: 5px;
  margin: 1em;

  width: 40%;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(197, 166, 171);
}
</style>

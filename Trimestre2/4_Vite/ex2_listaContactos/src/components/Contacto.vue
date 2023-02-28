<script>
export default {
  data() {
    return {
      nome: "Inés Poses",
      telf: 605666666,
      email: "a21inespg@iessanclmente.net",
      boton: "Mostrar detalles",
      mostrar: false,
    };
  },

  watch: {
    mostrar() {
      this.mostrar == true
        ? (this.boton = "Ocultar detalles")
        : (this.boton = "Mostrar detalles");
    },
  },
};
</script>

<template>
  <div
    style="
      border: 1px solid black;
      border-radius: 20px;
      padding: 1.5em;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19); ;
    "
  >
    <h2>{{ nome }}</h2>
    <button @click="mostrar = !mostrar">{{ boton }}</button>
    <div v-show="mostrar">
      <ul>
        <li>Telefono: {{ telf }}</li>
        <li>Correo: {{ email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boton: "Mostrar detalles",
      mostrar: false,
    };
  },

  emits: ["cambiarF", "eliminar"],
  props: {
    id: Number,
    nome: String,
    telf: Number,
    email: String,
    favorito: Boolean,
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
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    "
  >
    <h2>
      {{ nome }}
      <span v-show="favorito">(Favorito)</span>
    </h2>
    <button @click="$emit('eliminar', id)">Borrar</button>
    <br />
    <button @click="mostrar = !mostrar">{{ boton }}</button>
    <button @click="$emit('cambiarF', id)">Cambiar favorito</button>
    <br />

    <div v-show="mostrar">
      <ul>
        <li>Telefono: {{ telf }}</li>
        <li>Correo: {{ email }}</li>
      </ul>
    </div>
  </div>
</template>

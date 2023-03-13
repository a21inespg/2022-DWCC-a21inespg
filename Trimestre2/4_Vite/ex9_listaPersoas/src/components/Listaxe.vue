<script>
export default {
  data() {
    return {
      buscador: "",
    };
  },
  props: {
    lista: Array,
  },

  emits: ["filtrando"],
};
</script>

<template>
  <div style="width: 10rem">
    <input
      @input="$emit('filtrando', buscador)"
      type="text"
      placeholder="Filtrar por
    apelidos"
      v-model="buscador"
    />
    <br />
    <br />
    <select name="persoas" id="" size="3" style="width: 100%">
      <option v-for="item in lista" :value="item.apelido">
        {{ item.apelido }}, {{ item.nome }}
      </option>
    </select>
  </div>
</template>

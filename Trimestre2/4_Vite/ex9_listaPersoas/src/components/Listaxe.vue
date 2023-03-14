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

  emits: ["filtrando", "seleccionando"],
};
</script>

<template>
  <div style="width: 10rem; margin: auto">
    <input
      @input="$emit('filtrando', buscador)"
      type="text"
      placeholder="Filtrar por
    apelidos"
      v-model="buscador"
    />
    <br />
    <br />
    <select name="persoas" id="" size="4" style="width: 100%">
      <option
        v-for="item in lista"
        @click="$emit('seleccionando', item.id)"
        :value="item.id"
      >
        {{ item.apelido }}, {{ item.nome }}
      </option>
    </select>
  </div>
</template>

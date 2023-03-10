<script>
import RecursoWeb from "./RecursoWeb.vue";

export default {
  props: ["arrayRecursos"],
  emits: ["novoRexistro"],

  components: {
    RecursoWeb,
  },
};
</script>

<template>
  <div v-for="recurso in arrayRecursos">
    <RecursoWeb>
      <template v-slot:titulo>
        {{ recurso.titulo }}
      </template>
      <template v-slot:descricion> {{ recurso.descricion }}</template>
      <template v-slot:link>
        <a :href="recurso.href">{{ recurso.href }}</a>
      </template>
    </RecursoWeb>
  </div>
</template>

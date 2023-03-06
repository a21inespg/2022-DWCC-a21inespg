<script>
import DatosPersoa from "./components/datosPersoa.vue";
import Form2 from "./components/Form2.vue";

export default {
  data() {
    return {
      nome: "Inés",
      ano: 2002,
    };
  },
  methods: {
    cambioD(novoNome, novoAno) {
      this.nome = novoNome;
      this.ano = novoAno;
      console.log("oivo un cambio");
    },
  },
  components: { DatosPersoa, Form2 },
};
</script>

<template>
  <DatosPersoa :nome="nome" :ano="ano"></DatosPersoa>
  <br />
  <Form2 @cambio-info="cambioD" :nome="nome" :ano="ano"></Form2>
</template>

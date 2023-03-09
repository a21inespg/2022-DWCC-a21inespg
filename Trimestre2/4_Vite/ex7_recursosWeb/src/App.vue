<script>
import RecursoWeb from "./components/RecursoWeb.vue";
import Form from "./components/Form.vue";

export default {
  data() {
    return {
      recursosWeb: [
        {
          titulo: "El País",
          descricion: "Periódico de tirada nacional",
          href: "elpais.com",
        },
        {
          titulo: "Faro de Vigo",
          descricion: "Periódico galego",
          href: "farodevigo.es",
        },
      ],

      currentTab: "RecursoWeb",
    };
  },

  methods: {
    cambiarTab(e) {
      e.preventDefault();
      if (e.target.id == "periodicos") {
        this.currentTab = "RecursoWeb";
      } else if (e.target.id == "form") {
        this.currentTab = "Form";
      }
    },
  },

  components: {
    RecursoWeb,
    Form,
  },
};
</script>

<template>
  <div class="title">
    <h1>Lista de periódicos</h1>
  </div>

  <div class="pestanas">
    <div @click="cambiarTab($event)" class="tab">
      <a id="periodicos" href=""> Listado de periódicos</a>
    </div>
    <div @click="cambiarTab($event)" class="tab">
      <a id="form" href=""> Formulario</a>
    </div>
  </div>

  <div class="contido">
    <component :is="currentTab">
      <template v-slot:titulo> </template>
      <template v-slot:descricion> </template>
      <template v-slot:link> </template>
    </component>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  background-color: rgb(219, 166, 175);
  border-radius: 5px;
}

.pestanas {
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1em;

  box-shadow: 0 4px 8px 0 rgb(236, 204, 209), 0 6px 20px 0 rgb(236, 204, 209);
}

.tab {
  border: 1px solid black;
  border-radius: 5px;
  padding: 1em;
  margin: 0.5em;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(197, 166, 171);
}


</style>

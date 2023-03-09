<script>
import HelloWorld from "./components/HelloWorld.vue";
import Contador from "./components/Contador.vue";
import CaixaTexto from "./components/CaixaTexto.vue";

export default {
  data() {
    return {
      currentTab: "Contador",
    };
  },
  components: {
    Contador,
    CaixaTexto,
  },

  methods: {
    cambiarTab(e) {
      if (e.target.id == "cont") {
        this.currentTab = "Contador";
      } else if (e.target.id == "text") {
        this.currentTab = "CaixaTexto";
      }
    },
  },
};
</script>

<template>
  <div class="tabs">
    <div class="tab-container">
      <div @click="cambiarTab($event)" class="tab">
        <a id="cont" href="#">Contador</a>
      </div>
      <div @click="cambiarTab($event)" class="tab">
        <a id="text" href="#">Textarea</a>
      </div>
    </div>

    <!-- <Contador></Contador> -->
  </div>

  <KeepAlive>
    <component :is="currentTab"></component>
  </KeepAlive>

  <!-- <CaixaTexto></CaixaTexto> -->
</template>

<style scoped>
/* funcionamiento básico del sistema de pestañas */
.tab-content {
  display: none;
}

.tab:target .tab-content,
.tab:last-of-type .tab-content {
  display: block;
}

.tab:target ~ .tab:last-of-type .tab-content {
  display: none;
}

.tab-container {
  display: flex;
}

.tab {
  margin: 4px;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 0.6em;
}
</style>

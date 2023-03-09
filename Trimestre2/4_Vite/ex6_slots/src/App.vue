<script>
import Modal from "./components/Modal.vue";

export default {
  data() {
    return {
      mostrarModal: false,
    };
  },
  components: {
    Modal,
  },
};
</script>

<template>
  <button @click="mostrarModal = true">Mostrar modal</button>
  <Modal @ocultar-modal="mostrarModal = false" v-show="mostrarModal">
    <template v-slot:header> header dende pai</template>
    <template v-slot:body> body dende pai</template>
  </Modal>
</template>

<style scoped></style>

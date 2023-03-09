<script>
export default {
  emtis: ["ocultarModal"],
};
</script>

<template>
  <div class="modal-mask">
    <div class="modal-container">
      <slot name="header"> Default header</slot>
      <br />
      <slot name="body"> Default body</slot>
      <br />

      <slot name="footer"> Default footer</slot>
      <br />

      <button @click="$emit('ocultarModal')" type="submit">Ok</button>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>

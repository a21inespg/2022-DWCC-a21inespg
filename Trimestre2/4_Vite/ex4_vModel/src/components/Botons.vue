<script>
export default {
  data() {
    return {
      isBaixo: false,
      isMedio: false,
      isAlto: false,
    };
  },
  methods: {
    clickBtn(valor) {
      this.$emit("update:modelValue", valor);
    },
  },
  props: ["modelValue"],
  emits: ["update:modelValue"], //   emits: ["update:modelValue"],

  watch: {
    modelValue() {
      if (this.modelValue == "baixo") {
        this.isBaixo = true;
        this.isMedio = false;
        this.isAlto = false;
      } else if (this.modelValue == "medio") {
        this.isBaixo = false;
        this.isMedio = true;
        this.isAlto = false;
      } else {
        this.isBaixo = false;
        this.isMedio = false;
        this.isAlto = true;
      }
    },
  },
};
</script>
<template>
  <ul>
    <li>
      <button
        :class="{ active: isBaixo }"
        @click="clickBtn('baixo')"
        type="button"
        value="baixo"
      >
        Baixo
      </button>
    </li>
    <li>
      <button
        :class="{ active: isMedio }"
        @click="clickBtn('medio')"
        type="button"
        value="medio"
      >
        MedioS
      </button>
    </li>
    <li>
      <button
        :class="{ active: isAlto }"
        @click="clickBtn('alto')"
        type="button"
        value="alto"
      >
        Alto
      </button>
    </li>
  </ul>
</template>

<style scoped>
.active {
  background-color: red;
}
</style>

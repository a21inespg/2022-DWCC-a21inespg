<script>
import { transform } from "@vue/compiler-core";

export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <br />
  <br />
  <button @click="count++">Contador: {{ count }}</button>
</template>

<style></style>

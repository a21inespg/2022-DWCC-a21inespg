<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
<template>
  <ul>
    <li>
      <button
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="button"
      >
        Baixo
      </button>
    </li>
    <li>
      <button
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="button"
      >
        Medio
      </button>
    </li>
    <li>
      <button
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="button"
      >
        Alto
      </button>
    </li>
  </ul>
</template>

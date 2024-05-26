<template>
  <input
    type="date"
    id="date"
    :value="props.value"
    v-on:input="handleInput"
  />
  <label for="date"></label>
  <!-- @input="$emit('update:modelValue', $event.target?.value)" -->
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped></style>

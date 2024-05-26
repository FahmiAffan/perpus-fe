<template>
  <input
    type="number"
    id="number"
    class="input p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
    :value="props.value"
    v-on:input="handleInput"
  />
  <!-- @input="$emit('update:modelValue', $event.target?.value)" -->
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
  },
});

const emit = defineEmits(['update:modelValue']);
const handleInput = (event) => {
    emit('update:modelValue', event.target.value)
};
</script>

<style scoped>
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.input:focus {
  outline: none !important;
  border: 1px solid #bfbfbf;
}
</style>

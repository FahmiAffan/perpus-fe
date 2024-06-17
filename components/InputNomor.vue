<template>
  <label :for="props.name" class="text-[14px] font-semibold">{{ label }}</label>
  <Field
    type="number"
    :id="props.name"
    :name="props.name"
    class="input p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
    v-model="model"
  />
  <ErrorMessage :name="props.name" />
  <!-- @input="$emit('update:modelValue', $event.target?.value)" -->
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
    default: 0,
  },
  name: String,
  label: String,
});

const model = defineModel();
const components = defineComponent(model);
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

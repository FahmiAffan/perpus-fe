<template>
  <label :for="props.name" class="text-[14px] mb-1 font-semibold">{{
    label
  }}</label>
  <Field
    type="number"
    :id="props.name"
    :name="props.name"
    class="input p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
    v-model="model"
    :placeholder="props.placeholder"
  />
  <ErrorMessage :name="props.name" v-slot="{ message }">
    <p class="text-red-600">{{ message }}</p>
  </ErrorMessage>
  <!-- @input="$emit('update:modelValue', $event.target?.value)" -->
</template>

<script setup>
const props = defineProps({
  value: Number,
  name: String,
  label: String,
  placeholder: String,
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

<template>
  <label :for="name" class="text-[14px] font-semibold">{{ label }}</label>
  <Field
    type="text"
    :name="name"
    v-model="model"
    :id="name"
    class="input p-2 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
  />
  <ErrorMessage :name="name" class="text-red" />
</template>

<script setup>
const props = defineProps({
  name: String,
  label: String,
});
const model = defineModel();
const components = defineComponent(model);
</script>

<style scoped>
.input:focus {
  outline: none !important;
  border: 1px solid #bfbfbf;
}
</style>

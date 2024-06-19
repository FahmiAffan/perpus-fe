<template>
  <label :for="name" class="text-[14px] mb-1 font-semibold">{{ label }}</label>
  <Field
    type="text"
    :name="name"
    v-model="model"
    :id="name"
    class="input p-2 pl-3 w-full border-[1px] h-[39px] rounded-lg text-[#64748b] border-[#bfbfbf]"
    :placeholder="props.placeholder"
  />
  <ErrorMessage :name="name" v-slot="{ message }">
    <p class="text-red-600">
      {{ message }}
    </p>
  </ErrorMessage>
</template>

<script setup>
const props = defineProps({
  name: String,
  label: String,
  placeholder: String,
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

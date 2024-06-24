<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      :name="props.name"
      :id="props.name"
      v-model="model"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    ></input>

    <label :for="props.name" class="text-[#000000] text-[12px] pl-2"
      >Remember Me</label
    >
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  label: String,
});

const model = defineModel();
const components = defineNuxtComponent(model);
</script>

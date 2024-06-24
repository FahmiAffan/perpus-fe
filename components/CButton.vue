<template>
  <button class="bg-[#6BB7BE] rounded-lg text-white p-2">
    <slot></slot>
  </button>
</template>

<script setup>
const model = defineModel();
const component = defineNuxtComponent();  
</script>

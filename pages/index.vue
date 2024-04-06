<template>
  <!-- <div class="h-screen bg-[#7E30E1] flex flex-row container mx-auto">
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
  </div> -->
  <div></div>
</template>

<script setup>
let self = useNuxtApp();

onMounted(() => {
  self.$toast.add("Hii");
});

let submitBtn = () => {};
</script>

<style>
</style>
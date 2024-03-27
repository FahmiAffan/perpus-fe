<template>
  <!-- <div class="h-screen bg-[#7E30E1] flex flex-row container mx-auto">
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
  </div> -->
  <div>
    <Button class="text-white dark:text-white" @click="submitBtn">
      Click Me!
    </Button>
  </div>
</template>

<script setup>

let self = useNuxtApp();

let submitBtn = () => {
  console.log("clicked");
};
</script>

<style>
</style>
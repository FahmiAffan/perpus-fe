<template>
  <!-- <div class="h-screen bg-[#7E30E1] flex flex-row container mx-auto">
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
    <div class="columns-6 h-5 border-4 border-[red] w-full"></div>
  </div> -->
  <div>
    <!-- <Toast /> -->
    <Button @click="toast">Hii</Button>
    <h1>hi</h1>
  </div>
</template>

<script setup>
let self = useNuxtApp();

function toast() {
  self.$toast.add({
    severity: "info",
    summary: "Info",
    detail: "Message Content",
    life: 3000,
  });
}

onMounted(() => {});

let submitBtn = () => {};
</script>

<style></style>

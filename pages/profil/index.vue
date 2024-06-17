<template>
  <div class="container mx-auto">
    <NavBar></NavBar>
    <div class="flex mt-[55px]">
      {{ data }}
      <SidebarProfil class="grow-0"> </SidebarProfil>
      <DetailProfil class="grow-1 ml-6"> </DetailProfil>
    </div>
  </div>
</template>

<script setup>
const data = getData("buku");

onMounted(() => {
  data;
});
</script>

<style>
body {
  background-color: #f3f3f3;
}
</style>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-max px-4 py-10 pb-[18px] bg-[#FFFFFF] rounded-lg w-[323px]"
  >
    <div class="flex flex-col items-center justify-center">
      <Icon name="mdi:account-circle" size="80px" class="text-[#64748B]">
      </Icon>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-[24px] font-bold">Fahmi Affan</h1>
        <h1 class="text-[16px]">3212312421124</h1>
      </div>
    </div>
    <div class="my-[44px]">
      <NuxtLink v-for="i in items" :to="i.link">
        <div class="flex items-center py-2">
          <Icon :name="i.icon" size="36px" class="text-[#64748B]"> </Icon>
          <h1 class="pl-[12px] text-[16px] font-bold text-[#64748B]">
           {{ i.title }}
          </h1>
        </div>
      </NuxtLink>
    </div>
    <Button class="h-[32px] font-bold flex justify-center w-full"
      >Sign Out</Button
    >
  </div>
</template>

<script setup>
let items = reactive([
  {
    link: "/profil/pesanan",
    title: "Pesanan Saya",
    icon: "mdi:book",
  },
  {
    link: "/profil",
    title: "Profil Saya",
    icon: "mdi:account-circle",
  },
]);
</script>

<style></style>

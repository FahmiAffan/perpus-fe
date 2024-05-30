<template>
  <div
    class="flex flex-col w-[288px] pt-[72px] p-8 h-screen bg-white"
    style="border-right: 2px solid #e5eaef"
  >
    <div class="grow-0">
      <h1 class="text-[16px] font-bold">SMPN 1 PUJON</h1>
      <div class="pt-9">
        <h1 class="text-[14px] font-bold">HOME</h1>
        <div class="grid gap-8 pt-6">
          <NuxtLink v-for="i in item" :key="i" :to="i.link" class="flex">
            <Icon :name="i.icon" size="24px" class="text-[#64748B]"></Icon>
            <h1 class="text-[16px] text-[#64748B] pl-4">{{ i.title }}</h1>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-end h-full grow-1">
      <Button class="h-[36px] flex justify-center" @click="SignOut()"
        >Sign Out</Button
      >
    </div>
  </div>
</template>

<script setup>
const self = useNuxtApp();
async function SignOut() {
  self.$axios.post("/logout").finally(() => {
    self.$locally.removeItem("token");
    self.$router.push({ path: "/login" });
  });
}

const item = ref([
  {
    icon: "ri:dashboard-line",
    title: "Dahsboard",
    link: "/petugas/",
  },
  {
    icon: "ri:book-line",
    title: "Buku",
    link: "/petugas/buku",
  },
  {
    icon: "mdi:account-outline",
    title: "Pengguna",
    link: "/petugas/pengguna",
  },
  {
    icon: "icon-park-outline:afferent-two",
    title: "Peminjaman",
    link: "/petugas/peminjaman",
  },
  {
    icon: "uil:setting",
    title: "Profil",
    link: "/petugas/profil",
  },
]);
</script>

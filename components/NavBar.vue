<template>
  <div class="container mx-auto">
    <div class="flex items-center py-5">
      <h1 class="text-[24px] font-bold">SMPN 1 PUJON</h1>
      <div class="flex flex-auto justify-center">
        <div class="grid grid-cols-4 gap-16">
          <NuxtLink to="/">
            <p class="text-[18px]">HOME</p>
          </NuxtLink>
          <NuxtLink to="/about">
            <p class="text-[18px]">ABOUT</p>
          </NuxtLink>
          <NuxtLink to="/book">
            <p class="text-[18px]">BOOK</p>
          </NuxtLink>
        </div>
      </div>
      <Button
        class="h-[41px]"
        @click="$router.push({ path: '/login' })"
        v-if="token == null"
        >Login</Button
      >
      <div
        v-if="token != null"
        class="flex flex-col justify-center items-center"
      >
        <Icon
          name="mdi:account-circle"
          size="36px"
          class="text-[#64748B] fixed"
          @mouseover="dialog = true"
        >
        </Icon>

        <div
          class="rounded-lg drop-shadow bg-white absolute top-5 z-10"
          v-if="dialog"
          @mouseleave="dialog = false"
        >
          <div class="flex pt-5 px-5">
            <Icon
              name="mdi:account-circle"
              size="46px"
              class="text-[#64748B]"
            ></Icon>
            <div class="flex flex-col pl-3">
              <h1 class="font-bold text-[14px]">Fahmi Affan</h1>
              <h1 class="font-bold text-[14px] text-[#64748B]">770762164612</h1>
            </div>
          </div>
          <NuxtLink to="/profil">
            <div
              class="px-7 py-4 mt-2 flex align-center hover:bg-gray-100"
              style="
                border-top: 1px solid #d9d6d6;
                border-bottom: 1px solid #d9d6d6;
              "
            >
              <Icon name="f7:person"></Icon>
              <h1 class="pl-4 font-medium text-[14px]">Profile</h1>
            </div>
          </NuxtLink>
          <div class="flex align-center px-7 pb-4 pt-4 hover:bg-gray-100" @click="LogOut()">
            <Icon name="mdi:power"></Icon>
            <h1 class="pl-4 font-medium text-[14px]">Sign Out</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let dialog = ref(false);

const { $locally, $axios } = useNuxtApp();
let token = $locally.getItem("token");

function LogOut() {
  $axios.post("/logout").then(() => {
    $locally.removeItem("token")
  });
}
</script>

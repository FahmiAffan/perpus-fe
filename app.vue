<template>
  <div>
    <Toast />
    <NuxtLayout>
      <nuxt-page>
        <router-view />
      </nuxt-page>
    </NuxtLayout>
  </div>
</template>

<script setup>

</script>

<style>
/* @import url("~/assets/css/main.css"); */

.p-inputtext {
  color: #64748b;
  border-color: #bfbfbf;
}

/* .p-button {
  background-color: #6bb7be;
  border-color: #6bb7be;
}
.p-button:hover {
  background-color: #63c9be;
  border-color: #71dab3;
} */
</style>

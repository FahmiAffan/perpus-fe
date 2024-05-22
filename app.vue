<template>
  <div>
    <Toast />
    <nuxt-page>
      <router-view />
    </nuxt-page>
  </div>
</template>

<script setup></script>

<style>
/* @import url("~/assets/css/main.css"); */

.p-inputtext {
  color: #64748b;
  border-color: #bfbfbf;
}

.p-button {
  background-color: #6bb7be;
  border-color: #6bb7be;
}
.p-button:hover {
  background-color: #63C9BE;
  border-color: #71DAB3;
}
</style>

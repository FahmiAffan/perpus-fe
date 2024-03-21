<template>
  <div>
    <form @submit.prevent="login">
      <!-- <InputOtp integerOnly v-model="value" :length="6"></InputOtp> -->
      <div class="card">
        <Button label="Submit" class="walawe" type="submit"></Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);

async function login() {
  console.log("Logged In");
}
</script>

<style>
.walawe{
  color: var(--primary-500);
}
</style>
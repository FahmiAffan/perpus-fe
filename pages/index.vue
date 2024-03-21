<template>
  <div>
    <form @submit.prevent="Submit()" class="flex flex-col">
      <InputText type="text" variant="filled" v-model="form.email" />
      <InputText type="text" variant="filled" v-model="form.password" />
      <Button type="submit" label="Halo" severity="warning">
        <h1>Haloo</h1>
        <Icon name="mdi:eye" class="ml-6" />
      </Button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const otp = "";
const apiUrl = "";
const config = useRuntimeConfig();
const self = useNuxtApp();
let data;
let form = reactive({
  email: "",
  password: "",
});

async function Submit() {
  self.$axios.post('/login',{
    email: form.email,
    password: form.password
  }).then((res)=>{
    console.log(res.data)
  }).catch((err) => {
    console.log(err.response.data)
  })
}
onMounted(() => {
  // console.log(self.$toast('lohe'));
  self.$toast("kohee");
  self.$axios.get("user").then((res) => {
    console.log(res);
    data = res.data;
  });
});
</script>

<style>
</style>
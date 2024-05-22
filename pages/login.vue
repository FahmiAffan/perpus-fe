<template>
  <div class="flex h-[100vh] justify-center items-center Inter">
    <!-- <Toast /> -->
    <Card class="w-[414px]">
      <template #content>
        <h1 class="text-[24px] text-[#000000] font-bold">Login</h1>
        <form @submit.prevent="Submit()" class="flex flex-col">
          <label for="email" class="text-[#000000] font-semibold text-[12px]"
            >NIK</label
          >
          <InputText
            variant="filled"
            type="number"
            class="mb-[14px]"
            v-model="form.nik"
            placeholder="123456789"
            id="email"
          />
          <label for="password" class="text-[#000000] font-semibold text-[12px]"
            >Password</label
          >
          <InputText
            type="password"
            variant="filled"
            v-model="form.password"
            class="h-[51px]"
            placeholder="***********"
            id="password"
          />
          <!-- .dark:hover:bg-primary-300:hover -->
          <div class="mb-[32px] flex justify-between pt-[19px]">
            <div class="flex items-center">
              <Checkbox
                id="checkbox"
                v-model="form.checked"
                outlined
                :binary="true"
              />
              <label for="checkbox" class="text-[#000000] text-[12px] pl-2"
                >Remember Me</label
              >
            </div>
          </div>

          <Button type="submit">
            <center>
              <h1 class="font-bold">Log In</h1>
            </center>
          </Button>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
// GBORUI
const config = useRuntimeConfig();
const self = useNuxtApp();
const router = useRouter();

let form = reactive({
  nik: "",
  password: "",
  checked: "",
});

async function test() {
  console.log("llawe");
}

async function Submit() {
  self.$axios
    .post("/login", {
      nik: form.nik,
      password: form.password,
    })
    .then((res) => {
      if (res.data.user.role == "petugas") {
        localStorage.setItem("token", res.data.accessToken);
        router.push({ path: "/petugas" });
      }
      if (res.data.user.role == "siswa") {
        localStorage.setItem("token", res.data.accessToken);
        router.push({ path: "/petugas" });
      }
      // if (checked == false) {
      //   localStorage.setItem("token", res.data.accessToken);
      // } else {
      //   localStorage.setItem("token", res.data.refreshToken);
      // }
    })
    .catch((err) => {
      self.$toast.add({
        severity: "error",
        summary: err.response.status,
        detail: err.response.data.msg,
        life: 3000,
      });
    });
}
</script>

<style>
.inter {
  font-family: "Inter", sans-serif;
}
.walawe {
  color: var(--primary-500);
}
.futura {
  font-family: "Futura Std", sans-serif;
}
</style>

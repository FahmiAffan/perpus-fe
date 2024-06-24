<template>
  <div class="flex h-[100vh] justify-center items-center Inter">
    <!-- <Toast /> -->
    <Card class="w-[414px] rounded-xl">
      <template #content>
        <h1 class="text-[24px] text-[#000000] font-bold">Login</h1>
        <form @submit.prevent="Submit()" class="flex flex-col">
          <label for="nik" class="text-[#000000] font-semibold text-[12px]"
            >NIK</label
          >
          <!-- <InputText
            variant="filled"
            type="number"
            class="mb-[14px]"
            v-model="form.nik"
            placeholder="123456789"
            id="email"
          /> -->
          <InputNumber
            v-model="form.nik"
            class="mb-[14px]"
            variant="filled"
            :useGrouping="false"
            inputId="withoutgrouping"
            id="nik"
            min="0"
            placeholder="123456789"
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
            <CCheckBox name="checkbox" v-model="form.checked"></CCheckBox>
          </div>

          <Button type="submit" class="flex justify-center">
            <h1 class="font-bold">Log In</h1>
          </Button>
        </form>
        {{ form }}
      </template>
    </Card>
  </div>
</template>

<script setup>
// GBORUI
const config = useRuntimeConfig();
const self = useNuxtApp();
const router = useRouter();
const data = state();

let form = reactive({
  nik: null,
  password: "",
  checked: false,
});

async function test() {
  console.log("llawe");
}

async function Submit() {
  // self.$axios
  //   .post("/login", {
  //     nik: form.nik,
  //     password: form.password,
  //   })
  postData("/login", {
    nik: form.nik,
    password: form.password,
  })
    .then((res) => {
      data.user = res.data;
      data.isLoggedin = true;
      if (form.checked == true) {
        self.$locally.setItem("token", res.data.refreshToken);
      } else {
        self.$locally.setItem("token", res.data.accessToken);
      }

      if (res.data.user.role == "petugas") {
        router.push({ path: "/petugas" });
      }
      if (res.data.user.role == "siswa") {
        router.push({ path: "/petugas" });
      }
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
body {
  background-color: #f3f3f3;
}
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

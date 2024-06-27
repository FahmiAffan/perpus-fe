<template>
  <div class="flex flex-col w-full bg-white p-6 rounded-lg">
    <div>
      <h1 class="text-[20px] font-bold">Detail Profil</h1>
      <h1 class="text-[14px] text-[#64748B]">
        Anda memiliki kontrol penuh untuk mengelola pengaturan akun Anda.
      </h1>
    </div>

    <Divider></Divider>

    <div class="flex items-center">
      <div class="flex items-center justify-center grow-0">
        <Icon
          name="mdi:account-circle"
          size="80px"
          class="text-[#64748B]"
        ></Icon>
        <div>
          <h1 class="text-[16px] font-semibold">Foto Profil Anda</h1>
          <h1 class="text-[14px] text-[#64748B]">
            PNG atau JPG, lebar dan tinggi tidak lebih besar dari 800px.
          </h1>
        </div>
      </div>

      <div class="flex justify-end grow">
        <Button
          class="h-[36px] mr-[4px]"
          outlined
          @click="profile()"
          style="
            background-color: white;
            border: 2px solid #6bb7be;
            color: #6bb7be;
          "
          >Ubah</Button
        >
        <Button
          class="h-[36px]"
          outlined
          style="background-color: white; border: 2px solid red"
          severity="danger"
          >hapus</Button
        >
      </div>
    </div>

    <Divider></Divider>

    <div>
      <div>
        <h1 class="text-[16px] font-semibold">Detail Personal</h1>
        <h1 class="text-[14px] text-[#64748B]">Edit informasi akun anda</h1>
      </div>

      <Form ref="formRef" @submit="submit" :validation-schema="schema">
        <div class="grid gap-2 gap-y-4 grid-cols-2 mt-4">
          <div class="flex flex-col">
            <label for="name" class="font-bold text-[14px]">Nama</label>
            <InputString
              id="name"
              name="username"
              class="h-[38px] color-[#64748B]"
              placeholder="Masukkan Nama"
              v-model="form.username"
            ></InputString>
          </div>
          <div class="flex flex-col">
            <label for="nik" class="font-bold text-[14px]">NIK</label>
            <InputNomor
              inputId="nik"
              name="nik"
              :useGrouping="false"
              class="h-[38px] color-[#64748B]"
              placeholder="Masukkan NIK"
              v-model="form.nik"
            ></InputNomor>
          </div>
          <div class="flex flex-col">
            <label for="telp" class="font-bold text-[14px]"
              >Nomor Telepon</label
            >
            <InputString
              inputId="telp"
              name="telp"
              :useGrouping="false"
              class="h-[38px] color-[#64748B]"
              placeholder="Masukkan Nomor Telepon"
              v-model="form.telp"
            ></InputString>
          </div>
        </div>

        <Button class="mt-9 h-9" type="submit">Perbarui Profil</Button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import * as zod from "zod";

const form = reactive({
  username: "",
  nik: 0,
  telp: 0,
});

const formRef = ref();

const schema = toTypedSchema(
  zod.object({
    username: zod
      .string({ message: "Harus Berupa Huruf" })
      .min(1, { message: "Harus Diisi" }),
    nik: zod
      .string({ message: "Harus Berupa angka" })
      .min(1, { message: "Harus Diisi" }),
    telp: zod
      .string({ message: "Harus Berupa angka" })
      .min(1, { message: "Harus Diisi" }),
  })
);

// let valueWathcer = computed(() => {
//   const obj = ref({
//     nama: nama,
//     nik: telp,
//     telp: telp,
//   });
//   return obj;
// });

watch(state(), (newValue, oldValue) => {
  form.username = newValue.user.username;
  form.nik = newValue.user.nik;
  form.telp = newValue.user.telp;
});

const submit = (value) => {
  updateData(`/users/`, state().user.id_user, value);
};

let file = ref(null);

const profile = () => {
  openFile().then((res) => {
    convertImageToBase64(res).then((res2) => {
      updateData("/users/", state().user.id_user, {
        image: res2,
      });
      console.log(res);
    });
  });
};
</script>

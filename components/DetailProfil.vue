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

      <div class="grid gap-2 gap-y-4 grid-cols-2 mt-4">
        <div class="flex flex-col">
          <label for="name" class="font-bold text-[14px]">Nama</label>
          <InputText
            id="name"
            class="h-[38px] color-[#64748B]"
            placeholder="Masukkan Nama"
            v-model="nama"
          ></InputText>
        </div>
        <div class="flex flex-col">
          <label for="nik" class="font-bold text-[14px]">NIK</label>
          <InputNumber
            inputId="nik"
            :useGrouping="false"
            class="h-[38px] color-[#64748B]"
            placeholder="Masukkan NIK"
            v-model="nik"
          ></InputNumber>
        </div>
        <div class="flex flex-col">
          <label for="telp" class="font-bold text-[14px]">Nomor Telepon</label>
          <InputNumber
            inputId="telp"
            :useGrouping="false"
            class="h-[38px] color-[#64748B]"
            placeholder="Masukkan Nomor Telepon"
            v-model="telp"
          ></InputNumber>
        </div>
      </div>

      <Button class="mt-9 h-9">Perbarui Profil</Button>
    </div>
  </div>
</template>

<script setup>
let nama = ref("");
let nik,
  telp = ref(null);
</script>

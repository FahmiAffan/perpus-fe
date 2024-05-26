<template>
  <div>
    <div class="flex">
      <div class="grow-0">
        <InputText placeholder="Search" class="h-[39px]"></InputText>
      </div>
      <div class="grow text-right">
        <Button
          class="w-[219px] h-[39px] flex justify-center"
          @click="dialog = !dialog"
          >Tambah Pengguna</Button
        >
      </div>
    </div>
    <DialogForm
      :dialog="dialog"
      @update:dialog="openDialog"
      header="Tambah Pengguna"
    >
      <template v-slot:body>
        <div class="flex flex-col">
          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama"
              >Nama Pengguna</label
            >
            <InputText class="h-[39px]" id="nama"></InputText>
          </div>

          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama"
              >Nama Pengguna</label
            >
            <InputDate v-model="date" :value="date"></InputDate>
          </div>
        </div>
      </template>
    </DialogForm>
  </div>
</template>

<script setup>
let dialog = ref(false);

const date = ref();

function openDialog(val) {
  console.log(val, dialog);
  dialog.value = val;
}

definePageMeta({
  layout: "petugas",
});
</script>

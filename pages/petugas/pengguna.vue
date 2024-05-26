<template>
  <div class="w-full">
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
    <Table :header="header" :data="data" :color="color">
      <template v-slot:body>
        <tr v-for="i in data" :key="i" class="bg-white-500 hover:bg-[#F7F9FA]">
          <td class="border-y px-4 py-">{{ i.nama }}</td>
          <td class="border-y px-4 py-2">{{ i }}</td>
          <td class="border-y px-4 py-2">{{ i }}</td>
          <td>
            <Button rounded icon style="background-color: white; border: white">
              <Icon name="mdi:dots-vertical" class="text-black"></Icon>
            </Button>
          </td>
        </tr>
      </template>
    </Table>

    <DialogForm
      :dialog="dialog"
      @update:dialog="openDialog"
      header="Tambah Pengguna"
    >
      <template v-slot:body>
        <div class="flex flex-col">
          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nik">Nik</label>
            <InputNumber v-model="form.nik"></InputNumber>
          </div>

          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama"
              >Nama Pengguna</label
            >
            <InputText
              class="h-[39px]"
              id="nama"
              v-model="form.username"
            ></InputText>
          </div>

          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="password"
              >Kata Sandi</label
            >
            <Password
              v-model="form.password"
              :feedback="false"
              inputClass="w-full"
              toggleMask
              class="w-full h-[39px]"
              id="password"
            ></Password>
          </div>

          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="telp"
              >Nomor Telpon</label
            >
            <InputNomor v-model="form.telp" :value="form.telp"></InputNomor>
          </div>
          <!-- <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="telp"
              >Foto Profil</label
            >
            <InputFile label="Upload Foto"></InputFile>
          </div> -->
        </div>
      </template>
    </DialogForm>

    <!-- <TreeTable
      :value="nodes"
      :filters="filters"
      :paginator="true"
      :rows="5"
      :rowsPerPageOptions="[5, 10]"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
    >
      <Column field="no" header="No" headerStyle="width: 10rem"> </Column>
      <Column field="nama" header="Nama"> </Column>
      <Column field="nik" header="NIK"></Column>
      <Column field="telp" header="Telp"></Column>
      <Column field="role" header="Role"></Column>
      <Column field="image" header="Image"></Column>
      <Column field="id" header="aksi">
        <template #body="{ data }">
          <div class="flex flex-wrap gap-2">
            <Button
              style="background-color: white; border: 0px; color: black"
              @click="DialogButton(data)"
            >
              <Icon name="mdi:dots-vertical"></Icon>
            </Button>
          </div>
        </template>
      </Column>
    </TreeTable> -->
  </div>
</template>

<script setup>
const self = useNuxtApp();

const color = "#F7F9FA";

let dialog = ref(false);

const header = ["No", "Nama", "NIK", "Telp", "Aksi"];

// const form = ref({
//   username: String,
//   nik: Number,
//   password: String,
//   telp: String,
// });

const form = ref({
  username: "",
  nik: 0,
  password: "",
  telp: "",
});

const data = reactive([
  {
    // nama : {
    //   type: String,
    //   value: 'John Dow',
    // }
    nama: "John Doe",
  },
]);

function openDialog(val) {
  console.log(val, dialog);
  dialog.value = val;
}

definePageMeta({
  layout: "petugas",
});
</script>

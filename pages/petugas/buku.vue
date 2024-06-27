<template>
  <div class="w-full">
    <div class="flex">
      <button
        @click="dialogKey[0].openDialog"
        class="bg-[#6BB7BE] rounded-lg text-white p-2"
      >
        Tambah Buku
      </button>
      <!-- <CButton @click="dialogKey[0].openDialog">Edit Buku</CButton> -->
       {{ buku }}
    </div>
    <div v-if="dataFetched">
      <Table :header="header" :color="color">
        <template v-slot:body>
          <tr
            v-for="(i, index) in buku"
            :key="i"
            class="bg-white-500 hover:bg-[#F7F9FA]"
          >
            <td class="border-y px-4 py-4">{{ (index += 1) }}</td>
            <td class="border-y px-4 py-4">{{ i.judul_buku }}</td>
            <td class="border-y px-4 py-4">{{ i.penerbit }}</td>
            <td class="border-y px-4 py-4">
              <div>
                <Icon
                  name="mdi:trash"
                  class="text-black rounded-full p-1 bg-white hover:bg-gray-200"
                  size="30"
                  @click="deleteData(i.id_buku)"
                ></Icon>
              </div>
              <div>
                <Icon
                  name="heroicons-solid:pencil-alt"
                  class="text-black rounded-full p-1 bg-white hover:bg-gray-200"
                  size="30"
                  @click="dialogKey[1].openDialog(i)"
                ></Icon>
              </div>
            </td>
          </tr>
        </template>
      </Table>
    </div>
    <div v-else>loading..</div>
    <!-- 
    <MenuBar :menu="menu" @update:menu="openMenu" :items="item"></MenuBar>
    {{ menu }}-->

    <!-- <DialogForm
      :dialog="dialog"
      @update:dialog="openDialog"
      header="Tambah Buku"
      @submit:form="submit"
      @refresh-data="getData"
      :schema="schema"
      :form="formRef"
      :formData="formData"
      api="buku"
      tipe="edit"
    > -->
    <DialogForm
      v-for="i in dialogKey"
      :key="i"
      :dialog="i.dialog"
      @update:dialog="i.openDialog()"
      :header="i.header"
      @refresh-data="getData"
      :schema="schema"
      :form="i.formRef"
      :formData="formData"
      api="buku"
      :tipe="i.tipe"
      :containImage="true"
    >
      <template v-slot:body>
        <div class="flex flex-col">
          <div class="flex flex-col py-2">
            <div class="flex flex-col py-2">
              <InputString
                name="judul_buku"
                label="Judul Buku"
                v-model="form.judul_buku"
                placeholder="Masukkan Judul Buku"
              ></InputString>
            </div>
            <div class="flex flex-col py-2">
              <InputString
                name="deskripsi"
                label="Deskripsi"
                v-model="form.deskripsi"
                placeholder="Masukkan Deskripsi Buku"
              ></InputString>
            </div>
            <div class="flex flex-col py-2">
              <InputString
                name="penerbit"
                label="penerbit"
                v-model="form.penerbit"
                placeholder="Masukkan Penerbit Buku"
              ></InputString>
            </div>
            <div class="flex flex-col py-2">
              <InputNomor
                name="qty"
                label="Quantity Buku"
                v-model="form.qty"
                placeholder="Masukkan Quantitas Buku"
              ></InputNomor>
            </div>
            <div class="flex flex-col py-2">
              <InputFile
                name="image"
                placeholder="Upload Cover Buku Disini"
                label="Cover"
                v-model="form.image"
              />
            </div>
            <div class="flex flex-col py-2">
              <CDropDown
                v-model="form.tipe"
                name="tipe"
                placeholder="Pilih Tipe
              Buku"
                label="Tipe Buku"
                optionLabel="tipe"
                :opsi="tipe_buku"
                type="single"
              />
            </div>
          </div>
        </div>
      </template>
    </DialogForm>
  </div>
</template>

<script setup>
import * as zod from "zod";

let self = useNuxtApp();

const header = ["No", "Nama", "Penerbit", "Aksi"];

const color = "#F7F9FA";

// const tipe_buku = reactive([
//   {
//     id: 1,
//     tipe: "book",
//   },
//   {
//     id: 2,
//     tipe: "ebook",
//   },
// ]);
const tipe_buku = reactive(["book", "ebook"]);

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const schema = {
  judul_buku: zod.string().min(1, { message: "Harus Diisi" }),
  penerbit: zod.string().min(1, { message: "Harus Diisi" }),
  deskripsi: zod.string().min(1, { message: "Harus Diisi" }),
  tipe: zod.string().min(1, { message: "Harus Diisi" }),
  qty: zod
    .number({ message: "Harus berupa angka" })
    .min(0, { message: "Jumlah tidak boleh kurang dari 0" }),
  image: zod.any().refine((file) => file?.size <= MAX_FILE_SIZE, {
    message: `File size should be less than ${MAX_FILE_SIZE / 1024 / 1024} MB`,
  }),
};

let form = ref({
  judul_buku: "",
  penerbit: "",
  deskripsi: "",
  tipe: "book",
  qty: 0,
  image: null,
});

const item = [
  {
    iconName: "mdi:eye-outline",
    label: "hola",
    function: () => {
      console.log("haloo");
    },
  },
  {
    iconName: "",
    label: "hola",
    function: () => {
      console.log("haloo");
    },
  },
];

var dialogKey = ref([
  {
    dialog: false,
    tipe: "tambah",
    api: "buku",
    header: "Tambah Buku",
    openDialog: function (value) {
      console.log(value);
      console.log(this.api);
      Object.keys(form).forEach((key, index) => {
        form[key] = null;
      });
      this.dialog = !this.dialog;
    },
    formRef: "tambah",
  },
  {
    dialog: false,
    tipe: "edit",
    api: "buku",
    header: "Edit Buku",
    openDialog: function (value) {
      if (value == undefined || this.dialog == true) {
        return (this.dialog = false);
      }
      if (value != undefined || this.dialog == false) {
        this.dialog = !this.dialog;
        form = value;
        state().selectedData = value;
      }
    },
    formRef: "edit",
  },
]);

let buku = ref(null);
let dataFetched = ref(true);

async function getData() {
  try {
    const response = await self.$axios.get("/buku");
    buku.value = response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    dataFetched = true;
  }
}

async function deleteData(id) {
  try {
    const response = await self.$axios.delete("/buku/" + id);
    console.log(response);
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    getData();
  }
}

let bukus = ref();

onMounted(async () => {
  await getData();

  await nextTick();
});

watch(dataFetched, async (newBuku, oldBuku) => {
  console.log("dataFetched is now" + newBuku);
});

definePageMeta({
  layout: "petugas",
});
</script>

<style scoped>
label {
  color: black;
}
</style>

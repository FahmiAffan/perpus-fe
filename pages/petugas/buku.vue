<template>
  <div class="w-full">
    <div class="flex">
      <div class="grow text-right">
        <Button
          class="w-[219px] h-[39px] flex justify-center"
          @click="dialog = !dialog"
          >Tambah Buku</Button
        >
      </div>
    </div>

    <div v-if="dataFetched">
      <Table :header="header" :data="data" :color="color">
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
            </td>
          </tr>
        </template>
      </Table>
    </div>
    <div v-else>loading..</div>
    <!-- 
    <MenuBar :menu="menu" @update:menu="openMenu" :items="item"></MenuBar>
    {{ menu }}-->

    <DialogForm
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
    >
      <template v-slot:body>
        <Button @click="form.date = null">Clear Tgl</Button>
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
              <InputDate
                v-model="form.date"
                placeholder="Pilih Tanggal Pinjam"
                label="Tanggal Pinjam"
                disabled="true"
                name="date"
              />
            </div>
            <div class="flex flex-col py-2">
              <InputDate
                v-model="form.date2"
                placeholder="Pilih Tanggal Pengembalian"
                label="Tanggal Pengembalian"
                name="date2"
              />
            </div>
            <div class="flex flex-col py-2">
              <InputFile
                v-model="form.image"
                name="image"
                placeholder="Pilih Tanggal Pengembalian"
                label="Tanggal Pengembalian"
              />
            </div>
            <div class="flex flex-col py-2">
              <InputFile
                v-model="form.image2"
                name="image2"
                placeholder="Pilih Tanggal Pengembalian"
                label="Tanggal Pengembalian"
              />
            </div>
            <div class="flex flex-col py-2">
              <CDropDown
                v-model="form.tipe"
                name="tipe"
                placeholder="Pilih Tipe
              Buku"
                label="tipe"
                optionLabel="tipe"
                :opsi="tipe_buku"
              />
            </div>
          </div>
        </div>
        {{ form }}
      </template>
    </DialogForm>
  </div>
</template>

<script setup>
import * as zod from "zod";

let self = useNuxtApp();
let dialog = ref(false);
let menu = ref(false);

const header = ["No", "Nama", "Penerbit", "Aksi"];

const color = "#F7F9FA";

const tipe_buku = reactive([
  {
    tipe: "book",
  },
  {
    tipe: "ebook",
  },
]);

const schema = {
  judul_buku: zod.string().min(1, { message: "Harus Diisi" }),
  penerbit: zod.string().min(1, { message: "Harus Diisi" }),
  deskripsi: zod.string().min(1, { message: "Harus Diisi" }),
  tipe: zod.string().min(1, { message: "Harus Diisi" }),
  qty: zod
    .number({ message: "Harus berupa angka" })
    .min(0, { message: "Jumlah tidak boleh kurang dari 0" }),
  tipe: zod.string().refine((val) => {}),
  tipe: zod.string().min(1, { message: "Harus Diisi" }),
};

const form = reactive({
  judul_buku: "",
  penerbit: "",
  deskripsi: "",
  tipe: "book",
  qty: 0,
  date: null,
  date2: null,
  image: null,
  image2: null,
});

const formBody = [
  {
    label: "",
    name: "",
    value: "",
  },
];

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

function openDialog(val) {
  dialog.value = val;
}

function openDialog2(val) {
  dialog.value = val;
}

function submit() {
  self.$axios
    .post("/buku", {
      judul_buku: form.judul_buku,
      penerbit: form.penerbit,
      deskripsi: form.deskripsi,
      tipe: form.tipe.tipe,
    })
    .finally(() => {
      getData();
      openDialog();
    });
}

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

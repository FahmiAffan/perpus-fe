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
      :schema="schema"
      :form="formRef"
      api="buku"
    >
      <template v-slot:body>
        <div class="flex flex-col">
          <div class="flex flex-col py-2">
            <div class="flex flex-col py-2">
              <InputString
                name="judul_buku"
                label="Judul Buku"
                v-model="form.judul_buku"
              ></InputString>
            </div>
            <div class="flex flex-col py-2">
              <InputString
                name="deskripsi"
                label="Deskripsi"
                v-model="form.deskripsi"
              ></InputString>
            </div>
            <div class="flex flex-col py-2">
              <InputString
                name="penerbit"
                label="penerbit"
                v-model="form.penerbit"
              ></InputString>
            </div>
            <div class="flex flex-col py-2">
              <InputNomor
                name="qty"
                label="Quantity Buku"
                v-model="form.qty"
              ></InputNomor>
            </div>
            <!-- <div class="flex flex-col py-2">
              <label class="text-[14px] font-semibold" for="nama"
                >Penerbit</label
              >
              <InputText
                class="h-[39px]"
                id="nama"
                v-model="form.penerbit"
                placeholder="Isi Penerbit Buku"
              ></InputText>
            </div>

            <div class="flex flex-col py-2">
              <label class="text-[14px] font-semibold" for="nama"
                >Deskripsi</label
              >
              <InputText
                class="h-[39px]"
                id="nama"
                v-model="form.deskripsi"
                placeholder="Dekripsi"
              ></InputText>
            </div> -->

            <!-- <div class="flex flex-col py-2">
              <label class="text-[14px] font-semibold" for="nama">Tipe</label>
              <Dropdown
                v-model="form.tipe"
                :options="tipe_buku"
                optionLabel="tipe"
                placeholder="Pilih Tipe Buku"
                class="w-full md:w-14rem h-[39px] flex items-center border-[#bfbfbf] drop-shadow-none"
              />
            </div> -->
            
            <div class="flex flex-col py-2">
              <InputString
                v-model="form.tipe"
                :options="tipe_buku"
                name="tipe"
                label="Tipe Buku"
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
let dialog = ref(false);
let menu = ref(false);

const header = ["No", "Nama", "Penerbit", "Aksi"];

const data = reactive([
  {
    nama: "John Doe",
  },
]);

const color = "#F7F9FA";

const tipe_buku = reactive([
  {
    id: 1,
    tipe: "book",
  },
  {
    id: 2,
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
    .min(1, { message: "Harus Diisi" }),
};

const form = reactive({
  judul_buku: "",
  penerbit: "",
  deskripsi: "",
  tipe: "book",
  qty: 1,
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

function openDialog(val) {
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

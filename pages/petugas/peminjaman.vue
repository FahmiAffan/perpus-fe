<template>
  <div class="w-full">
    <div class="flex">
      <div class="grow text-right">
        <Button
          class="w-[219px] h-[39px] flex justify-center"
          @click="dialog = !dialog"
          >Tambah Peminjaman</Button
        >
      </div>
    </div>

    <Table :header="header" :data="data" :color="color">
      <template v-slot:body>
        <tr
          v-for="(i, index) in data"
          :key="i"
          class="bg-white-500 hover:bg-[#F7F9FA]"
        >
          <td class="border-y px-4 py-4">{{ (index += 1) }}</td>
          <td class="border-y px-4 py-4">{{ i.nama_siswa }}</td>
          <td class="border-y px-4 py-4">{{ i.nik }}</td>
          <td class="border-y px-4 py-4">{{ i.buku.judul_buku }}</td>
          <td class="border-y px-4 py-4">{{ i.tgl_pinjam }}</td>
          <td class="border-y px-4 py-4">{{ i.tgl_pengembalian }}</td>
          <td class="border-y px-4 py-4">{{ i.status_peminjaman }}</td>
          <td class="border-y px-4 py-4">
            <Icon
              name="mdi:dots-vertical"
              class="text-black rounded-full p-1 bg-white hover:bg-gray-200"
              size="30"
            ></Icon>
          </td>
        </tr>
      </template>
    </Table>

    <DialogForm
      :dialog="dialog"
      @update:dialog="openDialog"
      header="Tambah Peminjaman"
      @submit:form="submit"
    >
      <template v-slot:body>
        <div class="flex flex-col">
          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama">Buku</label>
            <Dropdown
              v-model="form.id_buku"
              :options="buku"
              optionLabel="judul_buku"
              placeholder="Pilih Buku"
              class="w-full md:w-14rem h-[39px] flex items-center border-[#bfbfbf] drop-shadow-none"
            />
            <!-- <InputText class="h-[39px]" id="nama" v-model="form.buku"></InputText> -->
          </div>

          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama"
              >Nama Siswa</label
            >
            <InputText
              class="h-[39px]"
              id="nama"
              v-model="form.nama_siswa"
            ></InputText>
          </div>

          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama">Nik</label>
            <InputNomor
              v-model="form.nik"
              :value="form.nik"
              class="h-[39px]"
              id="nama"
            ></InputNomor>
          </div>

          <!-- Date -->
          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama"
              >Tanggal Pinjam</label
            >
            <!-- {{ form.date }} -->
            <InputDate
              @click="dialogDate = !dialogDate"
              label="Tanggal Pengembalian"
            >
            </InputDate>
            <p v-if="form.tgl_pinjam != ''">
              Tgl pinjam :
              {{
                new Date(form.tgl_pinjam).getFullYear() +
                "-" +
                (new Date(form.tgl_pinjam).getMonth() + 1) +
                "-" +
                new Date(form.tgl_pinjam).getDate()
              }}
            </p>
            <Calendar
              v-if="dialogDate"
              v-model="form.tgl_pinjam"
              inline
              dateFormat="dd/mm/yy"
              showWeek
            >
              <template #footer>
                <div class="flex justify-end">
                  <Button size="small" @click="dialogDate = !dialogDate"
                    >Selesai</Button
                  >
                </div>
              </template>
            </Calendar>
          </div>

          <div class="flex flex-col py-2">
            <label class="text-[14px] font-semibold" for="nama"
              >Tanggal Pengembalian</label
            >
            <!-- {{ form.tgl_pengemblaian }} -->
            <InputDate
              @click="dialogDate2 = !dialogDate2"
              label="Tanggal Pengembalian"
            >
            </InputDate>
            <p v-if="form.tgl_pengembalian != ''">
              Tgl pinjam :
              {{
                new Date(form.tgl_pengembalian).getFullYear() +
                "-" +
                (new Date(form.tgl_pengembalian).getMonth() + 1) +
                "-" +
                new Date(form.tgl_pengembalian).getDate()
              }}
            </p>
            <Calendar
              v-if="dialogDate2"
              v-model="form.tgl_pengembalian"
              inline
              dateFormat="dd/mm/yy"
              showWeek
            >
              <template #footer>
                <div class="flex justify-end">
                  <Button size="small" @click="dialogDate2 = !dialogDate2"
                    >Selesai</Button
                  >
                </div>
              </template>
            </Calendar>
          </div>
        </div>
      </template>
    </DialogForm>
  </div>
</template>

<script setup>
let self = useNuxtApp();
let dialog = ref(false);

const form = reactive({
  tgl_pinjam: "",
  tgl_pengembalian: "",
  nik: "",
  nama_siswa: "",
  id_buku: "",
});

const color = "#F7F9FA";

const data = ref(null);

const date = ref();
const date2 = ref();

const dialogDate = ref(false);
const dialogDate2 = ref(false);

const dataFetched = ref(false);

const buku = ref(null);

const header = ref(["No", "Nama Siswa" , "NIK" , "Judul Buku", "Tgl Pinjam" , "Tgl Pengembalian", "Status Peminjaman", "Aksi"]);

function openDialog(val) {
  console.log(val, dialog);
  dialog.value = val;
}

async function getBuku() {
  try {
    const response = await self.$axios.get("/buku");
    buku.value = response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
  }
}

async function getData() {
  try {
    const response = await self.$axios.get("/peminjaman");
    data.value = response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    dataFetched = true;
  }
}

function submit() {
  self.$axios
    .post("/peminjaman", {
      tgl_pinjam: form.tgl_pinjam,
      tgl_pengembalian: form.tgl_pengembalian,
      nik: form.nik,
      nama_siswa: form.nama_siswa,
      id_buku: form?.id_buku?.id_buku,
      status_peminjaman: "booked",
    })
    .finally(() => {
      getData();
    });

  // "tgl_pinjam": "2024-05-18",
  // "tgl_pengembalian": "2024-05-18",
  // "status_peminjaman": "booked",
  // // "id_siswa": 1,
  // "nik": "442131214",
  // "nama_siswa": "fahmi affan",
  // "id_buku": 1
}

onMounted(async () => {
  await getBuku();

  await getData();

  await nextTick();
});

definePageMeta({
  layout: "petugas",
});
</script>

<style>
label {
  color: black;
}

.p-dropdown-item {
  color: black;
}
.p-datepicker {
  color: black;
}
.p-calendar {
  color: black;
}
.p-datepicker-inline {
  color: black;
}
</style>

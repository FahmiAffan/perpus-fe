<template>
  <div>
    <!-- <InputDate></InputDate> -->

    <Form @submit="onSubmitt" :validation-schema="schema" ref="forms">
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
      <button>submit</button>
    </Form>
  </div>
</template>

<script setup>
import * as zod from "zod";

const forms = ref(null);

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const tipe_buku = reactive(["book", "ebook"]);

const schema = toTypedSchema(
  zod.object({
    judul_buku: zod.string().min(1, { message: "Harus Diisi" }),
    penerbit: zod.string().min(1, { message: "Harus Diisi" }),
    deskripsi: zod.string().min(1, { message: "Harus Diisi" }),
    tipe: zod.string().min(1, { message: "Harus Diisi" }),
    qty: zod
      .number({ message: "Harus berupa angka" })
      .min(0, { message: "Jumlah tidak boleh kurang dari 0" }),
    image: zod.any().refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: `File size should be less than ${
        MAX_FILE_SIZE / 1024 / 1024
      } MB`,
    }),
  })
);

const form = ref({
  judul_buku: "Lorem Ipsum",
  penerbit: "Lorem Ipsum",
  deskripsi: "Lorem Ipsum",
  tipe: "book",
  qty: 12,
  image: null,
});

const onSubmitt = async (value) => {
  // alert(JSON.stringify(value));

  let formData = new FormData();
  Object.keys(value).forEach(async (key, index) => {
    if (value["image"]) {
      const promise = new Promise((resolve, reject) => {
        const files = value["image"];
        const reader = new FileReader();
        reader.onload = (events) => {
          // const file = events.target.result.split(",")[1];
          resolve(events.target.result);
        };
        reader.readAsDataURL(files);
      });

      await promise.then(async (res) => {
        value["image"] = await res;
      });
    }
  });

  console.log(value);

  setTimeout(() => {
    postData("/buku", value).then((res) => {
      console.log(res);
    });
  }, 1000);
};
</script>

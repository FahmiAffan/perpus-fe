<template>
  <div>
    <NavBar></NavBar>
    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-16">
        <div
          class="w-[301px] border-[#DBE6EA] border-[2px] rounded-xl flex flex-col grid-cols-subgrid"
          v-for="i in data"
          :key="i"
        >
          <Image :src="i.image" alt="Image" width="345" image-class="image" />
          <div class="flex flex-col p-5">
            <h1 class="text-[#000000] text-[24px] font-bold">
              {{ i.judul_buku }}
            </h1>
            <h1 class="text-[#000000] text-[12px] text-[#9CB3BB] font-bold">
              By: {{ i.penerbit }}
            </h1>
            <Button class="h-[34px] mt-[13px] flex justify-center"
              >Pinjam</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";

let self = useNuxtApp();

let data = [
  {
    id_buku: 1,
    judul_buku: "Harry Potter",
    penerbit: "J.K Rowling",
    deskripsi: "dump",
    tipe: "book",
    slug: null,
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg",
    created_at: "2024-05-19T14:51:36.000000Z",
    updated_at: "2024-05-19T14:51:36.000000Z",
  },
  {
    id_buku: 1,
    judul_buku: "mola",
    penerbit: "radhimas",
    deskripsi: "dump",
    tipe: "book",
    slug: null,
    image:
      "http://localhost:8082/storage/book/B19nWjJi1EDzlJ6ZvZWYia6WzJpVxmnSoFsSZh9z.png",
    created_at: "2024-05-19T14:51:36.000000Z",
    updated_at: "2024-05-19T14:51:36.000000Z",
  },
  {
    id_buku: 1,
    judul_buku: "mola",
    penerbit: "radhimas",
    deskripsi: "dump",
    tipe: "book",
    slug: null,
    image:
      "http://localhost:8082/storage/book/B19nWjJi1EDzlJ6ZvZWYia6WzJpVxmnSoFsSZh9z.png",
    created_at: "2024-05-19T14:51:36.000000Z",
    updated_at: "2024-05-19T14:51:36.000000Z",
  },
  {
    id_buku: 1,
    judul_buku: "mola",
    penerbit: "radhimas",
    deskripsi: "dump",
    tipe: "book",
    slug: null,
    image:
      "http://localhost:8082/storage/book/B19nWjJi1EDzlJ6ZvZWYia6WzJpVxmnSoFsSZh9z.png",
    created_at: "2024-05-19T14:51:36.000000Z",
    updated_at: "2024-05-19T14:51:36.000000Z",
  },
  {
    id_buku: 1,
    judul_buku: "mola",
    penerbit: "radhimas",
    deskripsi: "dump",
    tipe: "book",
    slug: null,
    image:
      "http://localhost:8082/storage/book/B19nWjJi1EDzlJ6ZvZWYia6WzJpVxmnSoFsSZh9z.png",
    created_at: "2024-05-19T14:51:36.000000Z",
    updated_at: "2024-05-19T14:51:36.000000Z",
  },
];

onMounted(async () => {
  self.$axios.get("/buku").then((res) => {
    res.data;
  });
});
</script>

<style>
.p-inputtext {
  color: black;
}
.image {
  object-fit: cover;
  height: 201px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

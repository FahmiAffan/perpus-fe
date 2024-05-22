<template>
  <div class="flex justify-center">
    <div class="w-[201px] border-[#DBE6EA] border-[2px] rounded-xl flex flex-col">
      <Image
        src="https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg"
        alt="Image"
        width="345"
        image-class="image"
      />
      <h1 class="text-[#000000]">Harry Potter</h1>
      <h1 class="text-[#000000]">By: J.K Rowling</h1>
      <Button class="h-[34px]">Pinjam</Button>
    </div>
  </div>
</template>

<script setup>
let self = useNuxtApp();

let data = [
  {
    id_buku: 1,
    judul_buku: "mola",
    penerbit: "radhimas",
    deskripsi: "dump",
    tipe: "book",
    slug: null,
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=jpg",
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
  height: 151px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

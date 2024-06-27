## Persiapan

Install dependencies

```bash
# npm
npm install
```

Lalu Jalankan mode Developing

```bash
# npm
npm run dev

```

## State
> State management menggunakan Pinia rubahan dari VUEX yang merupakan default state management dari nuxt

## Api
Menggunakan Axios untuk fetch api rubahan dari fungsi fetch bawaan Vue. Axios telah di setting untuk menampilkan toast secara otomatis apabila terdapat response berupa error. ada beberapa method untuk memanggil fungsi dari axios tersebut.

__$axios()__
fungsi tersebut adalah sebuah nilai kembali dari plugin axios yang dapat diakses secara global oleh nuxt.

__getData(url)__
menjalankan fungsi HTTP GET untuk mengambil data dari parameter url

parameter
_url: String_

__postData( url , value )__
menjalankan fungsi HTTP POST untuk mengambil data dari parameter url dan mengirimkan sebuah request body dalam bentuk JSON.

parameter
_url: String_
_value: Object_

__updateData( url , id , value )__
menjalankan fungsi HTTP POST untuk mengambil data dari parameter url dan mengirimkan sebuah request body dalam bentuk JSON.

parameter
_url: String_

id
_url: String_

value
_url: Object_

## Toast
> Menggunakan Komponen yang disediakan oleh primevue


## Validasi


## Custom Component
Sebuah komponen sederhana untuk menunjang kebutuhan website anda agar lebih interaktif dan menarik. Custom Component Input dapat tervalidasi dan sudah terintegrasi ke komponen validasi lainnya

> Untuk Component bawaan dari Primevue anda bisa lihat dokumentasinya [*Disini*](https://primevue.org/)
## Custom Logic Function

__openFile()__
digunakan ketika sebuah komponen memerlukan action berupa membuka tab file dari user

__convertImageToBase64(file)__
sebuah fungsi untuk mengkonversikan data pada object file ke base64  
parameters:
file : File


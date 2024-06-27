import { useStore } from "~/stores/store";

export function state() {
  return useStore();
}

export async function convertImageToBase64(file) {
  const promise = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (events) => {
      resolve(events.target.result);
      reject(URL.revokeObjectURL(events.target.result));
    };
    reader.readAsDataURL(file);
  });
  return promise;
}

export function openFile() {
  const myPromise = new Promise((resolve, reject) => {
    const inputGambar = document.createElement("input");
    inputGambar.accept = ".png , .jpg , .jpeg";
    inputGambar.type = "file";
    inputGambar.click();

    inputGambar.addEventListener("change", function (event) {
      const selectedFile = event.target.files[0];
      if (selectedFile.size > 5242880) {
        useNuxtApp().$toast.add({
          detail: "Gambar Harus Kurang Dari 5 MB",
          severity: "error",
          closable: true,
          life: 1500
        });
        reject(URL.revokeObjectURL(selectedFile));
      }
      if (selectedFile.size < 5242880) {
        resolve(selectedFile);
      }
    });
  });
  return myPromise;
}

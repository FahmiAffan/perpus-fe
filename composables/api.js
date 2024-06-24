export async function getData(url) {
  return await useNuxtApp()
    .$axios.get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    })
    .finally((res) => {
      return res;
    });
}

export async function postData(url, req) {
  return useNuxtApp()
    .$axios.post(url, req)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    })
    .finally((res) => {
      return res;
    });
}

export async function updateData(url, id, req) {
  return useNuxtApp()
    .$axios.put(url + id, req)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    })
    .finally((res) => {
      return res;
    });
}

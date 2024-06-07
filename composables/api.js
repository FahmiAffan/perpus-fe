export function getData(url) {
  useNuxtApp()
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

export function postData(url, req) {
  useNuxtApp()
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

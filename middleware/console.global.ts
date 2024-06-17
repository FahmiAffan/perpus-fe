export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name == "index" || to.name == "buku") return;

  // if (Object.keys(state().user).length == 0) {
  // if (state().user == undefined) {
  getData("/user")
    .then((res) => {
      state().user = res.data;
      if (!res) {
        useNuxtApp().$router.push({ path: "/login" });
      }
      if (to.name == "login" && res) {
        useNuxtApp().$toast.add({
          severity: "warn",
          summary: "Peringatan",
          detail: "Anda Sudah Login",
          life: 3000,
        });
        useNuxtApp().$router.push({ path: "/" });
      }
    })
    .catch((err) => {
      useNuxtApp().$router.push({ path: "/login" });
    });
  // }
});

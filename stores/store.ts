import { defineStore } from "pinia";

export const useStore = defineStore("Store", {
  state: () => ({
    characters: [{}],
    user: "",
  }),
  // getters: {

  // },

  actions: {
    addCharacter(data: object) {
      this.characters.push(data);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}

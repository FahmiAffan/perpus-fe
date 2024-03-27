import { defineStore } from "pinia";

export const useStore = defineStore('character', {
    state: () => ({
        characters: [{
            name: '',
            line: ''
        }]
    }),
    getters: {

    },
    actions: {
        addCharacter(name: string, line: string) {
            this.characters.push({
                name,
                line,
            })
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
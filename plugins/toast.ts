import Toast, { POSITION, useToast } from "vue-toastification";

export default defineNuxtPlugin(() => {
    // let toastConfig = {
    //     POSITION: POSITION.TOP_RIGHT
    //     useToast: useToast.
    //  }

    return {
        provide: {
            toast: useToast()
        }
    }
})
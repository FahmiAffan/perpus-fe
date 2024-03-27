import Toast, { POSITION, useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin(() => {
    // useNuxtApp().vueApp.use(Toast, {
    //     position: POSITION.TOP_LEFT
    // });

    useNuxtApp().vueApp.use(Toast);
    
    return {
        provide: {
            toast: useToast()
        }
    }

})
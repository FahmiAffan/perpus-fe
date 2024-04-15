// import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

export default defineNuxtPlugin(() => {
    useNuxtApp().vueApp.use(ToastService);
    return {
        provide: {
            toast: useToast()
        }
    }
})
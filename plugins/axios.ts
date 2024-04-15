import axios from "axios"
import Toast from 'primevue/toast';


export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    let axiosConfig = axios.create({
        baseURL: config.public.API_BASE_URL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        withXSRFToken: true,
    });
    axiosConfig.interceptors.request.use(function (response) {
        let token = useCookie('token');
        if (token) {
            response.headers['Authorization'] = `Bearer ${token}`
        }
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosConfig.interceptors.response.use(function (response) {
        if (response) {
            useNuxtApp().$toast.add({ severity: "success", summary: 'Success', detail: response.data.msg, life: 3000 })
            console.log(response)
        }
        return response;
    }, function (error) {
        if (error) {

        }
        // return error
        return Promise.reject(error);
    });

    return {
        provide: {
            axios: axiosConfig
        }
    }
})
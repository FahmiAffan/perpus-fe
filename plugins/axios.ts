import axios from "axios"

export default defineNuxtPlugin(nuxtApp => {
    let app = useNuxtApp()
    const config = useRuntimeConfig();
    let axiosConfig = axios.create({
        baseURL: config.public.API_BASE_URL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
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
            app.$toast.success(response.data.message)
        }
        return response;
    }, function (error) {
        if (error) {
            app.$toast.error(error.response.data.message);
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
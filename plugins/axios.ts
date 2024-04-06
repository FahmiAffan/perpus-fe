import axios from "axios"


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
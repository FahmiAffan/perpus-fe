// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', 'nuxt-primevue'],
  // buildModules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css', 'primevue/resources/themes/aura-light-green/theme.css'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://127.0.0.1:8080/api/',
      API_KEY: process.env.NODE_ENV == 'prod' ? 'AAA' : 'BBB',
      API_BASE_URL: process.env.API_BASE_URL,
    }
  },
  primevue: {
    /* Options */
    // usePrimeVue: true,
    options: {
      unstyled: false,
    },
    importPT: { from: path.resolve(__dirname, './presets/lara/') }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/axios.ts'],
  // $env: {
  //   baseURL: process.env.BASE_URL || 'http://127.0.0.1:8080/api/',
  // }
})
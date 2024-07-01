// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'default' }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  image: { dir: 'assets/img' },
  modules: ["@nuxt/image"]
})
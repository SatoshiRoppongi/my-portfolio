// import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
  },
  content: {

  },
  // css: ['@/assets/css/main.css'],
  // vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // }
})

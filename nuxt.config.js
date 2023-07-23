// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@vueuse/motion/nuxt'],
  plugins: ['~/plugins/fontawesome.client.js']
});

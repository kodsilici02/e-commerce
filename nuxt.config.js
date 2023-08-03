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
  build: {
    transpile: ['gsap']
  },
  css: ['@/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css', '@/assets/css/transitions.css'],
  modules: ['@vueuse/motion/nuxt', '@pinia/nuxt'],
  imports: {
    dirs: ['stores']
  },
  plugins: ['~/plugins/fontawesome.client.js', '@/plugins/chartjs.client.js']
});

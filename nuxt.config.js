// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  routeRules: {
    '/settings': { redirect: '/settings/orders' }
  },
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
  modules: ['@vueuse/motion/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode'],
  imports: {
    dirs: ['stores']
  },
  plugins: ['~/plugins/fontawesome.client.js', '@/plugins/chartjs.client.js', '@/plugins/convertName.js']
});

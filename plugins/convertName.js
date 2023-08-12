export default defineNuxtPlugin(nuxtApp => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide('convertName', name => {
    return name.toLowerCase().replace(/ /g, '-');
  });
});

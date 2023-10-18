import { phones } from '@/assets/deneme';
export default defineNuxtPlugin(nuxtApp => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide('getProduct', id => {
    return phones.find(phone => phone.id === id);
  });
});

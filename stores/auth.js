import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      adresses: ['']
    };
  },
  actions: {}
});

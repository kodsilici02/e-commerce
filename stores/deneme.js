import { defineStore } from 'pinia';

export const useDeneme = defineStore({
  id: 'deneme',
  state: () => {
    return {
      deneme: 1
    };
  },
  actions: {}
});

import { defineStore } from 'pinia';

export const useOrderImage = defineStore({
  id: 'orders',
  state: () => {
    return {
      hero_image: ''
    };
  }
});

import { defineStore } from 'pinia';

export const useFilterStore = defineStore({
  id: 'filters',
  state: () => ({
    filters: {
      price: {
        min: 65,
        max: 3000
      },
      brands: {
        include: null,
        brands: []
      }
      // Add other filter properties as needed
    }
  }),
  actions: {
    updateFilters(newFilters) {
      this.filters = newFilters;
    }
  }
});

import { defineStore } from 'pinia';

export const useFilterOptions = defineStore({
  id: 'filterOptions',
  state: () => ({
    options: [
      {
        name: 'phones',
        filters: [
          { name: 'Price Range', type: 'price', currentMin: 65, currentMax: 3000, min: 65, max: 3000, rangeSlider: true },
          { name: 'Memory Range', type: 'memory', currentMin: 2, currentMax: 128, min: 2, max: 128, rangeSlider: true },
          {
            name: 'Brands',
            type: 'brand',
            categoryOpen: false,
            subCategory: [
              { name: 'Iphone', value: 'Iphone' },
              { name: 'Samsung', value: 'Samsung' },
              { name: 'Xiaomi', value: 'Xiaomi' }
            ],
            selectedCategories: [],
            include: null
          },
          {
            name: 'Fast Charge',
            type: 'fast_charge',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            selectedCategories: [],
            include: null
          }
        ]
      }
    ]
  }),
  getters: {
    getFilters() {
      let filters = this.options.find(item => item.name == 'phones').filters;
      return filters;
    }
  },
  actions: {
    updateFilters(newFilters, type) {
      this.options.find(item => item.name == type).filters = newFilters;
    }
  }
});

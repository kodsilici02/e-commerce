import { defineStore } from 'pinia';

export const useFilterOptions = defineStore({
  id: 'filterOptions',
  state: () => ({
    options: [
      {
        name: 'phones',
        filters: [
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
          { name: 'Price ', type: 'price', currentMin: 65, currentMax: 3000, min: 65, max: 3000, rangeSlider: true, unit: '$' },

          { name: 'Ram ', type: 'ram', currentMin: 2, currentMax: 128, min: 2, max: 128, rangeSlider: true, unit: 'gb' },
          { name: 'Memory ', type: 'memory', currentMin: 1, currentMax: 1024, min: 1, max: 1024, rangeSlider: true, unit: 'gb' },
          { name: 'Battery', type: 'battery', currentMin: 500, currentMax: 15000, min: 500, max: 15000, rangeSlider: true, unit: 'mAh' },

          {
            name: 'Colors',
            type: 'color',
            categoryOpen: false,
            subCategory: [
              { name: 'Red', value: 'red' },
              { name: 'Black', value: 'black' },
              { name: 'White', value: 'white' }
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
      },
      {
        name: 'laptops',
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
      },
      {
        name: 'computers',
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
      },
      {
        name: 'tablets',
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

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
            filter_text: '',
            include: null
          },
          { name: 'Price ', type: 'price', currentMin: 65, currentMax: 3000, min: 65, max: 3000, rangeSlider: true, unit: '$' },
          { name: 'Ram ', type: 'ram', currentMin: 2, currentMax: 128, min: 2, max: 128, step: 1, rangeSlider: true, unit: 'gb' },
          { name: 'Memory ', type: 'memory', currentMin: 1, currentMax: 1024, min: 1, max: 1024, step: 1, rangeSlider: true, unit: 'gb' },
          {
            name: 'Release Date ',
            type: 'release_date',
            currentMin: 2009,
            currentMax: 2023,
            min: 2009,
            max: 2023,
            step: 1,
            rangeSlider: true,
            unit: 'year'
          },
          {
            name: 'Battery',
            type: 'battery',
            currentMin: 500,
            currentMax: 15000,
            min: 500,
            max: 15000,
            step: 1,
            rangeSlider: true,
            unit: 'mAh'
          },
          {
            name: 'Screen Size',
            type: 'screen_size',
            currentMin: 2.3,
            currentMax: 10,
            min: 2.3,
            max: 10,
            step: 0.1,
            rangeSlider: true,
            unit: 'inch'
          },
          {
            name: 'Screen Technology',
            type: 'screen_technology',
            categoryOpen: false,
            subCategory: [
              { name: 'Super LCD 5 ', value: 'Super LCD 5 ' },
              { name: 'Dynamic AMOLED ', value: 'Dynamic AMOLED ' },
              { name: 'Super AMOLED ', value: 'Super AMOLED ' },
              { name: 'AMOLED ', value: 'AMOLED ' },
              { name: 'OLED ', value: 'OLED ' },
              { name: 'P-OLED ', value: 'P-OLED ' },
              { name: 'IPS LCD ', value: 'IPS LCD ' },
              { name: 'PLS ', value: 'PLS ' },
              { name: 'Super LCD ', value: 'Super LCD ' },
              { name: 'Super LCD 2 ', value: 'Super LCD 2 ' },
              { name: 'Super LCD 3 ', value: 'Super LCD 3 ' },
              { name: 'Super LCD 6 ', value: 'Super LCD 6 ' },
              { name: 'TFT LCD ', value: 'TFT LCD ' }
            ],
            selectedCategories: [],
            filter_text: '',

            include: null
          },
          {
            name: 'Camera Resolution',
            type: 'camera_resolution',
            currentMin: 2,
            currentMax: 200,
            min: 2,
            max: 200,
            rangeSlider: true,
            unit: 'mp'
          },
          {
            name: 'Front Camera Resolution',
            type: 'fron_camera_resolution',
            currentMin: 2,
            currentMax: 64,
            min: 2,
            max: 64,
            rangeSlider: true,
            unit: 'mp'
          },
          {
            name: 'Cellular Connection',
            type: 'cellular_connection',
            categoryOpen: false,
            subCategory: [
              { name: '3G', value: 3 },
              { name: '4G', value: 4 },
              { name: '4.5G', value: 4.5 },
              { name: '5G', value: 5 }
            ],
            selectedCategories: [],
            filter_text: '',
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
            filter_text: '',
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

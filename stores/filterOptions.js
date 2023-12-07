import { defineStore } from 'pinia';

export const useFilterOptions = defineStore({
  id: 'filterOptions',
  state: () => ({
    options: [
      {
        name: 'phones',
        filters: [
          {
            name: 'Score',
            type: 'score',
            categoryOpen: false,
            currentMin: 0,
            currentMax: 5,
            min: 0,
            max: 5,
            step: 0.1,
            rangeSlider: true,
            unit: 'point'
          },
          {
            name: 'Brands',
            type: 'brand',
            categoryOpen: false,
            subCategory: [
              { name: 'Iphone', value: 'Iphone' },
              { name: 'Samsung', value: 'Samsung' },
              { name: 'Xiaomi', value: 'Xiaomi' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Price ',
            type: 'price',
            categoryOpen: false,
            currentMin: 65,
            currentMax: 3000,
            min: 65,
            max: 3000,
            rangeSlider: true,
            unit: '$'
          },
          {
            name: 'Ram ',
            type: 'ram',
            categoryOpen: false,
            currentMin: 2,
            currentMax: 128,
            min: 2,
            max: 128,
            step: 1,
            rangeSlider: true,
            unit: 'gb'
          },
          {
            name: 'Memory ',
            type: 'memory',
            categoryOpen: false,
            currentMin: 1,
            currentMax: 1024,
            min: 1,
            max: 1024,
            step: 1,
            rangeSlider: true,
            unit: 'gb'
          },
          {
            name: 'Release Date ',
            type: 'release_date',
            categoryOpen: false,
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
            categoryOpen: false,
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
            categoryOpen: false,
            currentMin: 2.3,
            currentMax: 10,
            min: 2.3,
            max: 10,
            step: 0.1,
            rangeSlider: true,
            unit: 'inch'
          },
          {
            name: 'Screen Refresh Rate ',
            type: 'screen_refresh_rate',
            categoryOpen: false,
            currentMin: 60,
            currentMax: 144,
            min: 60,
            max: 144,
            step: 1,
            rangeSlider: true,
            unit: 'hz'
          },
          {
            name: 'Screen Technology',
            type: 'screen_technology',
            categoryOpen: false,
            subCategory: [
              { name: 'Super LCD 5', value: 'Super LCD 5' },
              { name: 'Dynamic AMOLED', value: 'Dynamic AMOLED' },
              { name: 'Super AMOLED', value: 'Super AMOLED' },
              { name: 'AMOLED', value: 'AMOLED' },
              { name: 'OLED', value: 'OLED' },
              { name: 'P-OLED', value: 'P-OLED' },
              { name: 'IPS LCD', value: 'IPS LCD ' },
              { name: 'PLS', value: 'PLS' },
              { name: 'Super LCD ', value: 'Super LCD' },
              { name: 'Super LCD 2 ', value: 'Super LCD 2' },
              { name: 'Super LCD 3 ', value: 'Super LCD 3' },
              { name: 'Super LCD 6 ', value: 'Super LCD 6' },
              { name: 'TFT LCD ', value: 'TFT LCD' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',

            include: null
          },
          {
            name: 'Pixel Density ',
            type: 'pixel_density',
            categoryOpen: false,
            currentMin: 200,
            currentMax: 600,
            min: 200,
            max: 600,
            step: 1,
            rangeSlider: true,
            unit: 'PPI'
          },
          {
            name: 'Camera Resolution',
            type: 'camera_resolution',
            categoryOpen: false,
            currentMin: 2,
            currentMax: 200,
            min: 2,
            max: 200,
            rangeSlider: true,
            unit: 'mp'
          },
          {
            name: 'Front Camera Resolution',
            type: 'front_camera_resolution',
            categoryOpen: false,
            currentMin: 2,
            currentMax: 64,
            min: 2,
            max: 64,
            rangeSlider: true,
            unit: 'mp'
          },
          {
            name: 'Video Resolution',
            type: 'video_resolution',
            categoryOpen: false,
            subCategory: [
              { name: '480p', value: '480p' },
              { name: '720p(HD)', value: '720p(HD)' },
              { name: '1080p(Full HD)', value: '1080p(Full HD)' },
              { name: '1440p(Quad HD)', value: '1440p(Quad HD)' },
              { name: '2160p(Ultra HD)4K', value: '2160p(Ultra HD)4K' },
              { name: '3384p(Ultra HD)6K', value: '3384p(Ultra HD)6K' },
              { name: '4320p(Ultra HD)8K', value: '4320p(Ultra HD)8K' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Video FPS Value ',
            type: 'video_fps_value',
            categoryOpen: false,
            currentMin: 10,
            currentMax: 60,
            min: 10,
            max: 60,
            step: 1,
            rangeSlider: true,
            unit: ''
          },
          {
            name: 'CPU Brand',
            type: 'cpu_brand',
            categoryOpen: false,
            subCategory: [
              { name: 'Qualcomm', value: 'qualcomm' },
              { name: 'MediaTek', value: 'mediatek' },
              { name: 'Xiaomi', value: 'xiaomi' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'CPU Cores ',
            type: 'cpu_cores',
            categoryOpen: false,
            currentMin: 1,
            currentMax: 12,
            min: 1,
            max: 12,
            step: 1,
            rangeSlider: true,
            unit: ''
          },
          {
            name: 'CPU Frequency',
            type: 'cpu_frequency',
            categoryOpen: false,
            currentMin: 1,
            currentMax: 4,
            min: 1,
            max: 4,
            step: 0.1,
            rangeSlider: true,
            unit: 'GHz'
          },
          {
            name: 'Transistor Size ',
            type: 'transistor_size',
            categoryOpen: false,
            currentMin: 4,
            currentMax: 28,
            min: 4,
            max: 28,
            step: 1,
            rangeSlider: true,
            unit: 'nm'
          },
          {
            name: 'USB Type',
            type: 'usb_type',
            categoryOpen: false,
            subCategory: [
              { name: 'Micro-USB', value: 'micro_usb' },
              { name: 'USB Type-C', value: 'type_c' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Headphone Jack',
            type: 'headphone_jack',
            categoryOpen: false,
            subCategory: [
              { name: '3.5mm', value: '3.5mm' },
              { name: 'USB Type-C', value: 'type_c' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
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
            multi_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Color',
            type: 'color',
            categoryOpen: false,
            subCategory: [
              { name: 'Black', value: 'black' },
              { name: 'White', value: 'White' },
              { name: 'Red', value: 'red' },
              { name: 'Yellow', value: 'yellow' },
              { name: 'Silver', value: 'silver' },
              { name: 'Gray', value: 'gray' },
              { name: 'Green', value: 'green' },
              { name: 'Purple', value: 'purple' },
              { name: 'Pink', value: 'pink' }
            ],
            multi_choice: true,
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
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Wireless Charge',
            type: 'wireless_charge',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'NFC',
            type: 'nfc',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Fingerprint Scanner',
            type: 'fingerprint_scanner',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Dual SIM',
            type: 'dual_sim',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Face Recognition',
            type: 'face_recognition',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          }
        ]
      },
      {
        name: 'laptops',
        filters: [
          {
            name: 'Score',
            type: 'score',
            categoryOpen: false,
            currentMin: 0,
            currentMax: 5,
            min: 0,
            max: 5,
            step: 0.1,
            rangeSlider: true,
            unit: 'point'
          },
          {
            name: 'Brands',
            type: 'brand',
            categoryOpen: false,
            subCategory: [
              { name: 'Asus', value: 'Asus' },
              { name: 'Lenovo', value: 'Lenovo' },
              { name: 'Casper', value: 'Casper' },
              { name: 'HP', value: 'HP' },
              { name: 'Dell', value: 'Dell' },
              { name: 'Monster', value: 'Monster' },
              { name: 'MSI', value: 'Lenovo' },
              { name: 'Apple', value: 'Apple' },
              { name: 'Acer', value: 'Acer' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Price ',
            type: 'price',
            categoryOpen: false,
            currentMin: 65,
            currentMax: 5000,
            min: 65,
            max: 5000,
            rangeSlider: true,
            unit: '$'
          },
          {
            name: 'Ram ',
            type: 'ram',
            categoryOpen: false,
            currentMin: 2,
            currentMax: 128,
            min: 2,
            max: 128,
            step: 1,
            rangeSlider: true,
            unit: 'gb'
          },
          {
            name: 'Memory ',
            type: 'memory',
            categoryOpen: false,
            currentMin: 2,
            currentMax: 2048,
            min: 2,
            max: 2048,
            step: 1,
            rangeSlider: true,
            unit: 'gb'
          },
          {
            name: 'Release Date ',
            type: 'release_date',
            categoryOpen: false,
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
            categoryOpen: false,
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
            categoryOpen: false,
            currentMin: 2.3,
            currentMax: 10,
            min: 2.3,
            max: 10,
            step: 0.1,
            rangeSlider: true,
            unit: 'inch'
          },
          {
            name: 'Screen Refresh Rate ',
            type: 'screen_refresh_rate',
            categoryOpen: false,
            currentMin: 60,
            currentMax: 144,
            min: 60,
            max: 144,
            step: 1,
            rangeSlider: true,
            unit: 'hz'
          },
          {
            name: 'Screen Technology',
            type: 'screen_technology',
            categoryOpen: false,
            subCategory: [
              { name: 'Super LCD 5', value: 'Super LCD 5' },
              { name: 'Dynamic AMOLED', value: 'Dynamic AMOLED' },
              { name: 'Super AMOLED', value: 'Super AMOLED' },
              { name: 'AMOLED', value: 'AMOLED' },
              { name: 'OLED', value: 'OLED' },
              { name: 'P-OLED', value: 'P-OLED' },
              { name: 'IPS LCD', value: 'IPS LCD ' },
              { name: 'PLS', value: 'PLS' },
              { name: 'Super LCD ', value: 'Super LCD' },
              { name: 'Super LCD 2 ', value: 'Super LCD 2' },
              { name: 'Super LCD 3 ', value: 'Super LCD 3' },
              { name: 'Super LCD 6 ', value: 'Super LCD 6' },
              { name: 'TFT LCD ', value: 'TFT LCD' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',

            include: null
          },
          {
            name: 'Pixel Density ',
            type: 'pixel_density',
            categoryOpen: false,
            currentMin: 200,
            currentMax: 600,
            min: 200,
            max: 600,
            step: 1,
            rangeSlider: true,
            unit: 'PPI'
          },
          {
            name: 'Camera Resolution',
            type: 'camera_resolution',
            categoryOpen: false,
            currentMin: 2,
            currentMax: 200,
            min: 2,
            max: 200,
            rangeSlider: true,
            unit: 'mp'
          },
          {
            name: 'Front Camera Resolution',
            type: 'front_camera_resolution',
            categoryOpen: false,
            currentMin: 2,
            currentMax: 64,
            min: 2,
            max: 64,
            rangeSlider: true,
            unit: 'mp'
          },
          {
            name: 'Video Resolution',
            type: 'video_resolution',
            categoryOpen: false,
            subCategory: [
              { name: '480p', value: '480p' },
              { name: '720p(HD)', value: '720p(HD)' },
              { name: '1080p(Full HD)', value: '1080p(Full HD)' },
              { name: '1440p(Quad HD)', value: '1440p(Quad HD)' },
              { name: '2160p(Ultra HD)4K', value: '2160p(Ultra HD)4K' },
              { name: '3384p(Ultra HD)6K', value: '3384p(Ultra HD)6K' },
              { name: '4320p(Ultra HD)8K', value: '4320p(Ultra HD)8K' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Video FPS Value ',
            type: 'video_fps_value',
            categoryOpen: false,
            currentMin: 10,
            currentMax: 60,
            min: 10,
            max: 60,
            step: 1,
            rangeSlider: true,
            unit: ''
          },
          {
            name: 'CPU Brand',
            type: 'cpu_brand',
            categoryOpen: false,
            subCategory: [
              { name: 'Qualcomm', value: 'qualcomm' },
              { name: 'MediaTek', value: 'mediatek' },
              { name: 'Xiaomi', value: 'xiaomi' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'CPU Cores ',
            type: 'cpu_cores',
            categoryOpen: false,
            currentMin: 1,
            currentMax: 12,
            min: 1,
            max: 12,
            step: 1,
            rangeSlider: true,
            unit: ''
          },
          {
            name: 'CPU Frequency',
            type: 'cpu_frequency',
            categoryOpen: false,
            currentMin: 1,
            currentMax: 4,
            min: 1,
            max: 4,
            step: 0.1,
            rangeSlider: true,
            unit: 'GHz'
          },
          {
            name: 'Transistor Size ',
            type: 'transistor_size',
            categoryOpen: false,
            currentMin: 4,
            currentMax: 28,
            min: 4,
            max: 28,
            step: 1,
            rangeSlider: true,
            unit: 'nm'
          },
          {
            name: 'USB Type',
            type: 'usb_type',
            categoryOpen: false,
            subCategory: [
              { name: 'Micro-USB', value: 'micro_usb' },
              { name: 'USB Type-C', value: 'type_c' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Headphone Jack',
            type: 'headphone_jack',
            categoryOpen: false,
            subCategory: [
              { name: '3.5mm', value: '3.5mm' },
              { name: 'USB Type-C', value: 'type_c' }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
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
            multi_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Color',
            type: 'color',
            categoryOpen: false,
            subCategory: [
              { name: 'Black', value: 'black' },
              { name: 'White', value: 'White' },
              { name: 'Red', value: 'red' },
              { name: 'Yellow', value: 'yellow' },
              { name: 'Silver', value: 'silver' },
              { name: 'Gray', value: 'gray' },
              { name: 'Green', value: 'green' },
              { name: 'Purple', value: 'purple' },
              { name: 'Pink', value: 'pink' }
            ],
            multi_choice: true,
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
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Wireless Charge',
            type: 'wireless_charge',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'NFC',
            type: 'nfc',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Fingerprint Scanner',
            type: 'fingerprint_scanner',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Dual SIM',
            type: 'dual_sim',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
            include: null
          },
          {
            name: 'Face Recognition',
            type: 'face_recognition',
            categoryOpen: false,
            subCategory: [
              { name: 'Yes', value: true },
              { name: 'No', value: false }
            ],
            single_choice: true,
            selectedCategories: [],
            filter_text: '',
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
    },
    resetFilters(type) {
      let options = this.options.find(item => item.name == type);
      options.filters.forEach(filter => {
        if (filter.rangeSlider) {
          filter.currentMin = filter.min;
          filter.currentMax = filter.max;
        }
        if (filter.selectedCategories) {
          filter.selectedCategories = [];
        }
      });
    }
  }
});

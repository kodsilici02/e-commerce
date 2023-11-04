import { defineStore } from 'pinia';

export const useAddressesStore = defineStore({
  id: 'adresses',
  state: () => {
    return {
      addresses: [
        {
          title: 'Ev',
          name: 'Şafak 1',
          surname: 'Dinç',
          address: 'adem yavuz mah. 2323 sk. Bla Bla',
          province: 'Kocaeli',
          county: 'Gebze',
          district: 'Adem Yavuz Mahallesi',
          phone: '0500 500 50 00',
          default: true
        },
        {
          title: 'Ev',
          name: 'Şafak 2',
          address: 'adem yavuz mah. 2323 sk. Bla Bla',
          province: 'Kocaeli',
          county: 'Gebze',
          district: 'Adem Yavuz Mahallesi',
          phone: '0500 500 50 00',
          default: false
        }
      ]
    };
  },
  actions: {}
});

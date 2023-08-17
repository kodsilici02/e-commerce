import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'products',
  state: () => {
    return {
      hero_image: '',
      items: [
        { name: 'Iphone 14 Pro', url_name: 'iphone-14-pro', brand: 'Iphone', price: 999, memory: 128, img: '../../assets/deneme.png' },
        {
          name: 'Samsung Galaxy S22',
          url_name: 'samsung-galaxy-s22',
          brand: 'Samsung',
          price: 600,
          memory: 64,
          img: 'https://cdn.vatanbilgisayar.com/images/Lp/samsung-s22/images/gallery-base-pink-gold/front.png'
        },
        {
          name: 'Xiaomi 13 Pro',
          url_name: 'xiaomi-13-pro',
          brand: 'Xiaomi',
          price: 1500,
          memory: 512,
          img: 'https://resim.epey.com/839868/m_xiaomi-13-pro-2.png'
        }
      ]
    };
  },
  getters: {
    getImageByName: state => name => {
      const matchedItem = state.items.find(item => item.url_name == name);
      return matchedItem ? matchedItem.img : null;
    }
  }
});

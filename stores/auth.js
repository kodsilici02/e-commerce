import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      adresses: [''],
      profilePhoto:
        'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/loloblanca-090effda76c20a8df1edad0b13e5cf43.jpg'
    };
  },
  actions: {}
});

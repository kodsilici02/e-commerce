import { defineStore } from 'pinia';

export const useCompareStore = defineStore({
  id: 'compare',
  state: () => {
    return {
      items: []
    };
  },
  actions: {
    addItem(item) {
      if (!this.items.includes(item.id)) {
        this.items.push(item.id);
      }
    },
    removeItem(value) {
      this.items = this.items.filter(item => item != value);
    }
  }
});

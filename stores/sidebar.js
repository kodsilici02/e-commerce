import { defineStore } from 'pinia';

export const useFilterSidebarStore = defineStore({
  id: 'filterSidebar',
  state: () => {
    return {
      filterSidebarOpen: false,
      orderSidebarOpen: false
    };
  },
  actions: {
    toggleSidebar() {
      this.filterSidebarOpen = !this.filterSidebarOpen;
    },
    toggleOrderSidebar() {
      this.orderSidebarOpen = !this.orderSidebarOpen;
    }
  }
});

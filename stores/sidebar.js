import { defineStore } from 'pinia';

export const useSidebarStore = defineStore({
  id: 'filterSidebar',
  state: () => {
    return {
      SideBarOpen: false,
      orderSidebarOpen: false
    };
  },
  actions: {
    toggleSidebar() {
      this.SideBarOpen = !this.SideBarOpen;
    },
    toggleOrderSidebar() {
      this.orderSidebarOpen = !this.orderSidebarOpen;
    }
  }
});

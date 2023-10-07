import { defineStore } from 'pinia';

export const useSidebarStore = defineStore({
  id: 'Sidebar',
  state: () => {
    return {
      SideBarOpen: false,
      orderSidebarOpen: false,
      isWindowSmall: false
    };
  },
  actions: {
    toggleSidebar() {
      this.SideBarOpen = !this.SideBarOpen;
    },
    sideBarTrue() {
      this.SideBarOpen = true;
    },
    sideBarFalse() {
      this.SideBarOpen = false;
    },
    WindowSmall() {
      this.isWindowSmall = true;
    },
    WindowNotSmall() {
      this.isWindowSmall = false;
    },
    toggleOrderSidebar() {
      this.orderSidebarOpen = !this.orderSidebarOpen;
    }
  }
});

import { defineStore } from 'pinia';

export const useSidebarStore = defineStore({
  id: 'Sidebar',
  state: () => {
    return {
      MainSideBarOpen: false,
      SideBarOpen: false,
      orderSidebarOpen: false,
      filterSideBarOpen: false,
      isWindowSmall: false
    };
  },
  actions: {
    toggleMainSidebar() {
      this.MainSideBarOpen = !this.MainSideBarOpen;
    },
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
    },
    toggleFilterSidebar() {
      this.filterSideBarOpen = !this.filterSideBarOpen;
    }
  }
});

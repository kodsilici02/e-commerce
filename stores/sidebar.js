import { defineStore } from 'pinia';

export const useFilterSidebarStore = defineStore({
  id: 'filterSidebar',
  state: () => {
    return {
      filterSidebarOpen: false
    };
  },
  actions: {
    toggleSidebar() {
      this.filterSidebarOpen = !this.filterSidebarOpen;
    }
  }
});

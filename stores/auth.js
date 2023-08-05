import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
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

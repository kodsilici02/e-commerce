<template>
  <div class="fixed top-0 left-0 w-full h-full z-[1000]" style="background-color: rgba(0, 0, 0, 0.4)" @click="toggleFilter()"></div>
</template>

<script setup>
import { useFilterSidebarStore } from '@/stores/sidebar.js';
const store = useFilterSidebarStore();

function toggleFilter() {
  store.toggleSidebar();
}
</script>

<style scoped></style>

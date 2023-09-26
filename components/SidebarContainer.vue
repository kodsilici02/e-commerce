<template>
  <Transition name="sidebar_space">
    <SideBarSpace @handleClick="toggleFilter" v-if="isSidebarOpen && isWindowSmall"></SideBarSpace>
  </Transition>
  <Transition name="slide-right">
    <div
      v-if="isSidebarOpen && isWindowSmall"
      ref="sidebar"
      class="w-72 md:w-52 fixed top-0 left-0 z-[1000] md:sticky md:top-28 overflow-y-auto filter-box-shadow filter-height background-color transition-transform duration-200"
      style="color: var(--text-color)">
      <slot></slot>
    </div>
  </Transition>
  <Transition name="slide-right">
    <div
      v-if="!isWindowSmall"
      ref="sidebar"
      class="w-72 md:w-52 fixed top-0 left-0 z-[989] md:sticky md:top-28 overflow-y-auto filter-box-shadow filter-height background-color transition-transform duration-200"
      style="color: var(--text-color)">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useSidebarStore } from '@/stores/sidebar.js';

const sidebar = ref();

const store = useSidebarStore();
const { SideBarOpen } = useSidebarStore();

function toggleFilter() {
  store.toggleSidebar();
}

const isSidebarOpen = ref(SideBarOpen);
watch(
  () => store.SideBarOpen,
  newState => {
    isSidebarOpen.value = newState;
  }
);

const isWindowSmall = ref(store.isWindowSmall);
watch(
  () => store.isWindowSmall,
  newState => {
    isWindowSmall.value = newState;
  }
);

//filter options
</script>

<style scoped>
.view-transition {
  view-transition-name: sidebar-transition;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.15s ease-in-out;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
}
.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}

.background-color {
  background-color: transparent;
}
@media only screen and (max-width: 768px) {
  .background-color {
    background-color: var(--background);
  }
}
.sidebar_space-enter-from,
.sidebar_space-leave-to {
  opacity: 0;
}
.sidebar_space-enter-to,
.sidebar_space-leave-from {
  opacity: 1;
}
.sidebar_space-enter-active,
.sidebar_space-leave-active {
  transition: all 0.2s ease-in-out;
}
.filter-background {
  background: linear-gradient(0deg, rgb(29, 32, 63) 0%, rgb(29, 32, 63) 100%);
}
.filter-box-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) -3px -3px 6px 1px inset;
}
.filter-height {
  height: calc(100vh - 7rem);
}
@media only screen and (max-width: 768px) {
  .filter-height {
    height: 100%;
  }
}
</style>

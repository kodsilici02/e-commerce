<template>
  <Transition name="fade">
    <SideBarSpace @handleClick="store.toggleSidebar" v-if="store.SideBarOpen && store.isWindowSmall"></SideBarSpace>
  </Transition>
  <div
    ref="sidebar"
    class="w-72 md:w-52 h-full fixed md:hidden top-0 left-0 z-[1000] md:sticky md:top-28 pointer-events-none"
    style="color: var(--text-color)">
    <Transition name="slide-right">
      <div
        v-if="store.SideBarOpen && store.isWindowSmall"
        class="w-fit h-full overflow-y-auto pointer-events-auto filter-box-shadow filter-height background-color transition-transform duration-200">
        <slot></slot>
      </div>
    </Transition>
  </div>
  <Transition name="slide-right">
    <div
      v-if="!store.isWindowSmall"
      class="w-72 md:w-64 z-[989] h-full sticky top-28 overflow-y-auto filter-box-shadow filter-height background-color transition-transform duration-200"
      style="color: var(--text-color)">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useSidebarStore } from '@/stores/sidebar.js';
import { storeToRefs } from 'pinia';

const store = useSidebarStore();

//filter options
</script>

<style scoped>
.view-transition {
  view-transition-name: sidebar-transition;
}

.background-color {
  background-color: transparent;
}
@media only screen and (max-width: 768px) {
  .background-color {
    background-color: var(--background);
  }
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

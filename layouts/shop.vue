<template>
  <div class="w-full h-auto" style="color: var(--text-white)">
    <!--SideBar-->
    <Transition name="slide-right">
      <SideBar v-show="store.SideBarOpen"></SideBar>
    </Transition>
    <Transition name="component_space">
      <SideBarSpace v-if="store.SideBarOpen" @handleClick="store.toggleSidebar"></SideBarSpace>
    </Transition>
    <TopBar></TopBar>

    <div class="w-full px-3 flex flex-wrap" style="min-height: calc(100vh - 112px)">
      <div class="w-full flex-1 px-1" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5) inset">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useSidebarStore } from '@/stores/sidebar.js';
const route = useRoute();

const store = useSidebarStore();
</script>

<style scoped></style>

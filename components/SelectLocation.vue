<template>
  <div class="h-full w-fit flex flex-wrap items-center justify-center p-2" :style="{ 'max-width': calculateWidth() + 'px' }">
    <div
      @click="select(index)"
      v-for="(info, index) in addresses"
      :key="info.address"
      style="color: var(--text-white); aspect-ratio: 5/7"
      class="basis-1/2 flex p-2 transition-transform duration-200 hover:scale-[1.02] relative cursor-pointer">
      <div
        class="h-full w-full text-xs sm:text-sm rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative overflow-hidden">
        <div class="h-full w-full flex flex-col p-3 gap-2">
          <div class="w-full text-2xl text-center">{{ info.title }}</div>
          <div class="w-full tetx-lg font-[600]">{{ info.name }}</div>
          <div class="w-full">{{ info.address }}</div>
          <div class="w-full">{{ info.province }}</div>
          <div class="w-full">{{ info.county }}</div>
          <div class="w-full">{{ info.district }}</div>
          <div class="w-full">{{ info.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAddressesStore } from '@/stores/addresses';
import { storeToRefs } from 'pinia';

function calculateWidth() {
  if (window.innerWidth <= 768) {
    return 350;
  }
  if (window.innerWidth <= 1024) {
    return 500;
  }
  if (window.innerWidth <= 1280) {
    return 750;
  }
  if (window.innerWidth <= 1536) {
    return 1000;
  }
}

const emits = defineEmits(['select']);

const store = storeToRefs(useAddressesStore());
const addresses = ref(store.addresses.value);

function select(index) {
  emits('select', index);
}
</script>

<style scoped>
.item-background {
  background-color: var(--primary);
}
</style>

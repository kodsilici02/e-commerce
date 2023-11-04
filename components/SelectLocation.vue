<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-4 p-3">
    <div class="w-full h-full flex flex-wrap justify-center">
      <div
        @click="select(index)"
        v-for="(info, index) in addresses"
        :key="info.address"
        style="color: var(--text-white)"
        class="h-[350px] w-full lg:basis-1/3 2xl:basis-1/4 flex p-2 transition-transform duration-200 hover:scale-[1.02] overflow-hidden relative cursor-pointer">
        <div
          class="h-full w-full rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative overflow-hidden">
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
  </div>
</template>

<script setup>
import { useAddressesStore } from '@/stores/addresses';
import { storeToRefs } from 'pinia';

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

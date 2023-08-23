<template>
  <div class="w-full h-52 flex flex-wrap gap-2 justify-center" style="color: var(--text-color)">
    <img :src="image_url" class="object-center object-contain image" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/products.js';
const route = useRoute();

const products = useProductStore();
const image_url = products.getImageByName(route.params.order);
</script>

<style scoped>
.image {
  view-transition-name: view-image;
  contain: paint;
}
</style>

<template>
  <div class="w-full h-auto flex flex-wrap p-5" style="color: var(--text-color)">
    <div class="w-full gap-3 flex flex-col">
      <SkeletonLoader class="w-52 h-52 rounded-xl"></SkeletonLoader>
      <div v-for="item in items" class="w-52 h-52 overflow-hidden"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const items = ref(['https://assets.getmobil.com/uploads/41726/getmobil-samsung-s225g-phantomgreen-00webp.png']);
</script>

<style scoped></style>

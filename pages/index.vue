<template>
  <div class="w-full h-auto flex flex-wrap p-5" style="color: var(--text-color)"></div>

  <div class="w-64 h-64">
    <SkeletonImg
      class="w-full h-full rounded-lg overflow-hidden"
      :hero="deneme ? 'hero' : ''"
      src="https://assets.getmobil.com/uploads/41726/getmobil-samsung-s225g-phantomgreen-00webp.png"></SkeletonImg>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const items = ref(5);
const deneme = ref(true);

const open = ref(true);
</script>

<style scoped></style>

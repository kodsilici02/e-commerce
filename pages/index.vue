<template>
  <div class="w-full h-auto flex flex-wrap p-5" style="color: var(--text-color)"></div>
  <NuxtLink style="color: black" to="/deneme">deneme</NuxtLink>

  <div class="w-32 h-32 flex">
    <SkeletonImg
      class="flex-1 h-full rounded-lg overflow-hidden"
      hero="deneme"
      src="https://assets.getmobil.com/uploads/41726/getmobil-samsung-s225g-phantomgreen-00webp.png"></SkeletonImg>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const items = ref(5);
const deneme = ref(true);

const open = ref(true);
</script>

<style>
.deneme {
  view-transition-name: deneme;
}
</style>

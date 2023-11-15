<template>
  <div class="w-full h-full flex justify-center">
    <div class="w-64 h-64">
      <SkeletonImg
        class="flex-1 h-full rounded-lg overflow-hidden"
        hero="deneme"
        src="https://assets.getmobil.com/uploads/41726/getmobil-samsung-s225g-phantomgreen-00webp.png"></SkeletonImg>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.image {
  view-transition-name: deneme;
}
</style>

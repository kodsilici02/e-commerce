<template>
  <div class="w-full h-auto flex flex-wrap p-5" style="color: var(--text-color)"></div>
</template>

<script setup>
import { onMounted } from 'vue';

const items = ref(['https://assets.getmobil.com/uploads/41726/getmobil-samsung-s225g-phantomgreen-00webp.png']);

function deneme() {
  console.log(event.target);
}
</script>

<style scoped></style>

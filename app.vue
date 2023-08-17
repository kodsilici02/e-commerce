<template>
  <div>
    <div class="fixed w-full h-full z-[-1]" style="background-color: var(--background)"></div>
    <NuxtLayout name="shop">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
import '@/assets/css/fonts.css';
import '@/assets/css/input.css';
import '@/assets/css/view-transition.css';
import { useSidebarStore } from '@/stores/sidebar.js';
import { onMounted } from 'vue';

onMounted(() => {
  document.startViewTransition();
});

const store = useSidebarStore();

function calculateWindowSize() {
  if (window.innerWidth <= 768) {
    store.WindowSmall();
  } else {
    store.WindowNotSmall();
  }
}
onMounted(() => {
  calculateWindowSize();
  window.addEventListener('resize', () => {
    calculateWindowSize();
  });
});
</script>
<style>
.font_1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.font-fester {
  font-family: 'Fester Bold', sans-serif;
}
.font-yolk {
  font-family: 'TPF Yolk Bold', sans-serif;
}
.font-code-next {
  font-family: 'Code Next Book', sans-serif;
}
</style>

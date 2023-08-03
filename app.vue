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

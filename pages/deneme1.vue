<template>
  <div class="w-full flex flex-wrap">
    <div class="w-52 h-10 bg-red-400 box"></div>
    <div class="flex-1 bg-green-500"></div>
    <div class="w-full h-[52]">
      <img
        class="basis-1/4 h-full object-contain object-center image"
        src="https://cdn.discordapp.com/attachments/1122596168870936686/1141662584966230086/imgbin-computer-cases-housings-laptop-gaming-computer-desktop-computers-lenovo-laptop-q7tZ6atcsVF6T51fWFfMPNeHw-removebg-preview.png" />
    </div>
    <div class="w-full">
      <NuxtLink to="/deneme2" style="color: var(--text-color)">deneme2</NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.box {
  view-transition-name: red-box;
}
.image {
  view-transition-name: image;
  contain: paint;
}
</style>

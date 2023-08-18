<template>
  <div class="w-full flex flex-wrap">
    <div class="w-full h-10 bg-red-400 box"></div>
    <div class="w-full h-[52] flex">
      <div class="flex-1"></div>
      <div class="w-[300px] h-full">
        <img
          class="w-full h-full object-contain object-center image"
          src="https://cdn.discordapp.com/attachments/1122596168870936686/1141662584966230086/imgbin-computer-cases-housings-laptop-gaming-computer-desktop-computers-lenovo-laptop-q7tZ6atcsVF6T51fWFfMPNeHw-removebg-preview.png" />
      </div>
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

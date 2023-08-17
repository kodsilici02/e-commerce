<template>
  <div class="w-full flex flex-wrap">
    <div class="w-full h-10 bg-red-400 box"></div>
    <div class="w-full h-[52]">
      <div class="w-[300px] h-full">
        <img
          class="w-full h-full object-contain object-center image"
          src="https://cdn.discordapp.com/attachments/1122596168870936686/1141662584655847424/509-5092096_offering-high-quality-mobile-repair-service-main-image-removebg-preview.png" />
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

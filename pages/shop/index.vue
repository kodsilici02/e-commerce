<template>
  <div class="w-full flex flex-wrap gap-2 p-2 sm:px-10" style="color: var(--text-white)">
    <div class="w-full justify-center flex flex-wrap">
      <Card
        v-for="item in items"
        :key="item.name"
        :background_color="'var(--primary)'"
        class="h-[200px] md:h-[250px] lg:h-[400px] basis-1/3 lg:basis-1/4 flex p-3">
        <template v-slot:layer>
          <NuxtLink
            :to="'/shop/' + useNuxtApp().$convertName(item.name)"
            class="w-full h-full flex flex-col gap-4 justify-center items-center pointer-events-none text-sm sm:text-base">
            <button
              class="w-28 sm:w-36 h-10 purchase-button transition-all duration-500 flex justify-center items-center pointer-events-auto"
              style="border-radius: 35px">
              Inspect
            </button>
          </NuxtLink>
        </template>
        <template v-slot:main>
          <NuxtLink
            :to="'/shop/' + useNuxtApp().$convertName(item.name)"
            class="h-full w-full rounded-lg flex flex-col transition-[background-color] duration-500 relative">
            <div class="absolute top-1 right-4"></div>
            <div class="text-lg md:text-2xl h-14 w-full flex justify-center items-center font-code-next px-2 mt-4">{{ item.name }}</div>
            <div
              class="flex-1 p-2"
              :style="{ 'background-image': `url(${item.img})` }"
              style="background-size: contain; background-repeat: no-repeat; background-position: center"></div>
          </NuxtLink>
        </template>
      </Card>
    </div>
    <div class="w-full h-auto flex flex-wrap">
      <div class="basis-1/2">
        <Carousel></Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
  {
    name: 'Phones',
    img: 'https://cdn.discordapp.com/attachments/1122596168870936686/1141662584655847424/509-5092096_offering-high-quality-mobile-repair-service-main-image-removebg-preview.png'
  },
  {
    name: 'Laptops',
    img: 'https://cdn.discordapp.com/attachments/1122596168870936686/1141662585322741840/20a32b67-2f14-4f9c-8af6-3c4c8ec6b5dc-removebg-preview.png'
  },
  {
    name: 'Computers',
    img: 'https://media.discordapp.net/attachments/1122596168870936686/1141662584966230086/imgbin-computer-cases-housings-laptop-gaming-computer-desktop-computers-lenovo-laptop-q7tZ6atcsVF6T51fWFfMPNeHw-removebg-preview.png'
  },
  {
    name: 'Tablets',
    img: 'https://www.o2.co.uk/documents/456036/456101/android-tablets-foreground-270121.png/982e99a1-ee83-1c52-3fb7-b83d9ae071c7?t=1615795505763'
  }
]);
</script>

<style scoped></style>

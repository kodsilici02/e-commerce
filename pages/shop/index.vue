<template>
  <div class="w-full flex flex-wrap gap-2 p-2 sm:px-10" style="color: var(--text-white)">
    <div class="w-full justify-center flex flex-wrap">
      <div
        v-for="item in items"
        :key="item.name"
        class="h-[200px] md:h-[250px] lg:h-[400px] basis-1/3 lg:basis-1/4 flex p-3 transition-transform duration-500 cursor-pointer hover:scale-[1.02]">
        <NuxtLink
          :to="'/shop/' + useNuxtApp().$convertName(item.name)"
          class="h-full w-full rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative">
          <div class="absolute top-0 left-0 w-full h-full purchase-layer rounded-lg transition-[background-color] duration-500 z-[2]">
            <div class="w-full h-full flex justify-center items-center">
              <div
                class="w-36 h-10 bg-slate-400 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg"
                style="border-radius: 35px">
                Inspect
              </div>
            </div>
          </div>
          <div class="absolute top-1 right-4"></div>
          <div class="text-lg md:text-2xl h-14 w-full flex justify-center items-center font-code-next px-2 mt-4">{{ item.name }}</div>
          <div
            class="flex-1 p-2"
            :style="{ 'background-image': `url(${item.img})` }"
            style="background-size: contain; background-repeat: no-repeat; background-position: center"></div>
        </NuxtLink>
      </div>
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

<style scoped>
.item-background {
  background-color: var(--primary);
  box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.7);
  transition: box-shadow 200ms linear;
}
.item-background:hover {
  box-shadow: 0px 10px 18px 2px rgba(0, 0, 0, 0.8);
}
.purchase-layer {
  background-color: #6a6ccf00;
}
.item-background:hover .purchase-layer {
  background-color: #6a6ccfa0;
}

.purchase-button {
  opacity: 0;
  background-color: #3bc1e2;
}
.purchase-button:hover {
  background-color: #64d2ed;
}
.purchase-button:active {
  transition: background-color 0s ease;
  background-color: #648bed;
}
.item-background:hover .purchase-button {
  opacity: 1;
}
</style>

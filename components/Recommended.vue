<template>
  <div class="w-full relative" style="color: var(--text-white)">
    <div
      class="w-full flex overflow-x-auto p-3"
      ref="scrollContainer"
      @wheel.prevent
      @wheel="handleMouseWheel"
      style="scroll-behavior: smooth">
      <Card
        v-for="item in items"
        :key="items"
        class="flex-box rounded-lg relative cursor-pointer flex-shrink-0 p-3"
        background_color="var(--secondary)">
        <template v-slot:layer>
          <div class="w-full h-full flex flex-col gap-4 justify-center items-center pointer-events-none text-sm sm:text-base">
            <NuxtLink
              :to="'/shop/phones'"
              class="w-28 sm:w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center pointer-events-auto"
              style="border-radius: 35px">
              Inspect
            </NuxtLink>
          </div>
        </template>
        <template v-slot:main>
          <NuxtLink :to="'/shop/phones'" class="w-full h-full flex flex-col">
            <div class="flex-1 w-full flex justify-center items-center overflow-hidden">
              <SkeletonImg
                src="https://www.pngmart.com/files/13/Apple-Airpods-PNG-Image.png"
                class="flex-1 flex justify-center h-full rounded-lg overflow-hidden"
                :img-class="'w-full h-full object-cover object-center'"></SkeletonImg>
            </div>
          </NuxtLink>
        </template>
      </Card>
    </div>
    <div
      class="h-full w-14 absolute top-0 right-0 z-10"
      style="background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--background) 100%)"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const items = ['1', '2', '3', '4', '5', '6', '7'];

function calculateWidth() {
  if (window.innerWidth <= 768) {
    return 350;
  }
  if (window.innerWidth <= 1024) {
    return 500;
  }
  if (window.innerWidth <= 1280) {
    return 750;
  }
  if (window.innerWidth <= 1536) {
    return 1000;
  }
  if (window.innerWidth > 1536) {
    return 1250;
  }
}

const scrollContainer = ref(null);

function handleMouseWheel(event) {
  const container = scrollContainer.value;
  container.scrollLeft += 3 * event.deltaY;
}
</script>

<style scoped>
.flex-box {
  flex-basis: 100px;
  height: 100px;
}
@media only screen and (min-width: 768px) {
  .flex-box {
    flex-basis: 200px;
    height: 200px;
  }
}
@media only screen and (min-width: 1024px) {
  .flex-box {
    flex-basis: 300px;
    height: 250px;
  }
}

.item-background {
  background-color: var(--secondary);
  box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.7);
  transition: box-shadow 200ms linear, transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}
.item-background:hover {
  transform: scale(1.02);
}

.purchase-layer {
  background-color: #6a6ccf00;
}
.item-background:hover .purchase-layer {
  background-color: rgba(68, 112, 218, 0.5); /* Adjust the alpha value as needed */
}
</style>

<template>
  <div class="w-full" style="color: var(--text-white)">
    <div
      class="w-full flex gap-5 overflow-x-auto p-5"
      ref="scrollContainer"
      @wheel.prevent
      @wheel="handleMouseWheel"
      style="scroll-behavior: smooth">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex-box rounded-xl relative item-background cursor-pointer"
        style="background-color: var(--secondary)">
        <NuxtLink to="/shop/phones">
          <div
            class="z-[2] absolute top-0 left-0 w-full h-full purchase-background transition-all duration-500 rounded-xl pointer-events-none"></div>
          <div class="absolute top-0 left-0 w-full h-full purchase-layer transition-all duration-500 z-[2] rounded-xl">
            <div class="w-full h-full flex justify-center items-center">
              <div
                class="w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg"
                style="border-radius: 35px">
                Inspect
              </div>
            </div>
          </div>
        </NuxtLink>
        <img
          class="w-full h-full object-cover object-center"
          src="https://www.pngmart.com/files/13/Apple-Airpods-PNG-Image.png"
          loading="lazy" />
      </div>
    </div>
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
  flex: 0 0 100px;
  height: 100px;
}
@media only screen and (min-width: 768px) {
  .flex-box {
    flex: 0 0 200px;
    height: 200px;
  }
}
@media only screen and (min-width: 1024px) {
  .flex-box {
    flex: 0 0 250px;
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

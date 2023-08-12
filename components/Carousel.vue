<template>
  <div class="w-full h-[400px] flex flex-wrap relative p-2 overflow-hidden" style="color: var(--text-color)">
    <Transition :name="transition" mode="out-in">
      <img :key="activeImage" class="object-center object-contain w-full h-full" :src="images[activeImage]" />
    </Transition>
    <div class="absolute top-0 left-0 w-full h-full flex justify-between items-center">
      <div
        class="w-10 h-10 rounded-full button-background flex justify-center items-center cursor-pointer transition-colors duration-200"
        @click="previous()">
        <ClientOnly><font-awesome :icon="['fas', 'chevron-left']"></font-awesome></ClientOnly>
      </div>
      <div class="bg-green-500 flex-1"></div>
      <div
        class="w-10 h-10 rounded-full button-background flex justify-center items-center cursor-pointer transition-colors duration-200"
        @click="next()">
        <ClientOnly><font-awesome :icon="['fas', 'chevron-right']"></font-awesome></ClientOnly>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-10 flex p-2 items-center justify-center gap-2">
      <div
        v-for="(item, index) in images"
        @click="switchItem(index)"
        class="w-5 h-5 rounded-full indicators cursor-pointer transition-colors duration-200"
        :style="{ background: activeImage === index ? 'var(--primary)' : '' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
const images = [
  'https://www.vhv.rs/dpng/d/330-3303605_led-gaming-mouse-krom-nxkromkane-rgb-black-hd.png',
  'https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png',
  'https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png',
  'https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png'
];
const activeImage = ref(0);

const transition = ref('right');

function previous() {
  transition.value = 'left';
  if (activeImage.value == 0) {
    activeImage.value = images.length - 1;
  } else {
    activeImage.value = activeImage.value - 1;
  }
}
function next() {
  transition.value = 'right';

  if (activeImage.value == images.length - 1) {
    activeImage.value = 0;
  } else {
    activeImage.value = activeImage.value + 1;
  }
}

function switchItem(index) {
  if (activeImage.value < index) {
    transition.value = 'right';
  } else {
    transition.value = 'left';
  }
  activeImage.value = index;
}

const interval = ref(setInterval(next, 6000));

watch(activeImage, () => {
  clearInterval(interval.value);
  interval.value = setInterval(next, 6000);
});
</script>

<style scoped>
.left-enter-active,
.left-leave-active {
  transition: all 0.4s ease-in-out;
}
.left-enter-from {
  transform: translateX(-100%);
}
.left-enter-to {
  transform: translateX(0);
}
.left-leave-from {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(100%);
}

.right-enter-active,
.right-leave-active {
  transition: all 0.4s ease-in-out;
}
.right-enter-from {
  transform: translateX(100%);
}
.right-enter-to {
  transform: translateX(0);
}
.right-leave-from {
  transform: translateX(0);
}
.right-leave-to {
  transform: translateX(-100%);
}

.button-background {
  background-color: rgba(100, 100, 100, 0.3);
}
.button-background:hover {
  background-color: rgba(82, 81, 81, 0.6);
}

.indicators {
  background-color: rgb(163, 163, 163);
}
.indicators:hover {
  background-color: rgb(191, 191, 191);
}
</style>

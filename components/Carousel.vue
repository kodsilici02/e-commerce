<template>
  <div
    class="w-full h-[200px] lg:h-[300px] flex flex-wrap relative p-2 overflow-hidden items-center justify-center"
    style="color: var(--text-color)">
    <Transition :name="transition" mode="out-in">
      <img :key="activeImage" class="object-center object-contain w-[85%] h-[85%]" :src="images[activeImage].link" />
    </Transition>
    <div class="absolute top-0 left-0 w-full h-full flex justify-between items-center">
      <div
        class="h-6 w-6 p-3 sm:p-4 lg:p-5 rounded-full button-background flex justify-center items-center cursor-pointer transition-colors duration-200"
        @click="previous()">
        <ClientOnly><font-awesome :icon="['fas', 'chevron-left']"></font-awesome></ClientOnly>
      </div>
      <NuxtLink
        :to="'/shop/' + useNuxtApp().$convertName(images[activeImage].name)"
        class="h-full w-full rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative">
        <div class="absolute top-0 left-0 w-full h-full purchase-layer rounded-lg transition-[background-color] duration-500">
          <div class="w-full h-full flex justify-center items-center">
            <div
              class="w-36 h-10 bg-slate-400 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg"
              style="border-radius: 35px"
              @click="deneme(index)">
              Inspect
            </div>
          </div>
        </div>
      </NuxtLink>
      <div
        class="h-6 w-6 p-3 sm:p-4 lg:p-5 rounded-full button-background flex justify-center items-center cursor-pointer transition-colors duration-200"
        @click="next()">
        <ClientOnly><font-awesome :icon="['fas', 'chevron-right']"></font-awesome></ClientOnly>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-10 flex p-2 items-center justify-center gap-2">
      <div
        v-for="(item, index) in images"
        @click="switchItem(index)"
        class="w-3 h-3 rounded-full indicators cursor-pointer transition-colors duration-200"
        :style="{ background: activeImage === index ? 'var(--primary)' : '' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
const images = [
  {
    name: 'Anan',
    link: 'https://www.vhv.rs/dpng/d/330-3303605_led-gaming-mouse-krom-nxkromkane-rgb-black-hd.png'
  },
  {
    name: 'Anan',
    link: 'https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png'
  },
  {
    name: 'Anan',
    link: 'https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png'
  }
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
.purchase-layer {
  background-color: #6a6ccf00;
}
.item-background:hover .purchase-layer {
  background-color: #ffffffb4;
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

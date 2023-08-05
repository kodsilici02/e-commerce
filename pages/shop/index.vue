<template>
  <div class="w-full flex">
    <ShoppingFilter></ShoppingFilter>
    <div class="flex-1 flex flex-wrap items-start justify-start bg-green-300] mt-1 p-1" style="color: var(--text-white)">
      <div
        v-for="(item, index) in items"
        ref="box"
        class="h-[300px] md:h-[400px] basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex p-2 transition-transform duration-500 cursor-pointer hover:scale-[1.02] overflow-hidden">
        <div class="h-full w-full rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative">
          <div class="absolute top-0 left-0 w-full h-full purchase-layer rounded-lg transition-[background-color] duration-500 z-[2]">
            <div class="w-full h-full flex justify-center items-center">
              <NuxtLink to="/shop/name">
                <div
                  class="w-36 h-10 bg-slate-400 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg"
                  style="border-radius: 35px"
                  @click="deneme(index)">
                  Purchase Now
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="absolute top-1 right-4">
            <div class="flex gap-1 items-center md:text-lg">
              <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>999
            </div>
          </div>
          <div class="text-lg md:text-2xl h-14 w-full flex justify-center items-center font-code-next px-2 mt-4">Iphone 14 Pro</div>
          <div
            class="flex-1 p-2"
            style="
              background-image: url('../../assets/deneme.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
            "></div>
          <div
            class="h-12 w-full font-code-next text-xs md:text-base font-bold flex flex-wrap px-2 justify-center items-center gap-2 sm:gap-x-3 mb-2">
            <div class="flex gap-1 items-center">
              <ClientOnly><font-awesome :icon="['fas', 'battery-full']" /></ClientOnly>3200mAh
            </div>
            <div class="flex gap-1 items-center">
              <ClientOnly><font-awesome :icon="['fas', 'memory']" /></ClientOnly>128gb
            </div>
            <div class="flex gap-1 items-center">
              <ScreenSizeIcon :height="20" :width="20" :color="'aliceblue'"></ScreenSizeIcon>
              6.7 Inc
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
const router = useRouter();
let timeline;
const items = ref(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
const box = ref();

let animationPromiseResolve;
const animationPromise = new Promise(resolve => {
  animationPromiseResolve = resolve;
});
function leaveAnimation(index) {
  timeline = gsap.timeline({
    onComplete: () => {
      animationPromiseResolve();
    }
  });
  const photoElement = box.value[index];
  const top = photoElement.getBoundingClientRect().top;
  const left = photoElement.getBoundingClientRect().left;
  console.log(top, left);
  timeline.fromTo(photoElement, { position: 'fixed', top: top, left: left }, { position: 'fixed', top: 360, left: 205, duration: 1 });
}
function deneme(index) {
  leaveAnimation(index);
}

// router.beforeEach((to, from, next) => {
//   animationPromise.then(() => {
//     next();
//   });
// });
</script>

<style scoped>
.item-background {
  background-color: var(--primary);
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

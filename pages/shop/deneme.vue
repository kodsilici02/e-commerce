<template>
  <div class="w-full overflow-x-hidden">
    <div class="w-full h-20 bg-blue-500" ref="blueBox" id="deneme"></div>
    <div class="w-full h-[70vh] flex">
      <div class="w-52 h-full bg-purple-500" ref="purpleBox"></div>
      <div class="flex-1 bg-green-400 flex justify-center items-center" ref="greenBox">
        <!-- Use NuxtLink with the click event to trigger the animation and page navigation -->
        <button @click="deneme">deneme</button>
        <NuxtLink :to="{ path: '/shop' }">Shop</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
const blueBox = ref();
const purpleBox = ref();
const greenBox = ref();
let timeline;
const router = useRouter();

const leaveAnimation = () => {
  timeline = gsap.timeline({
    onComplete: () => {
      animationPromiseResolve();
    }
  });
  timeline.to(blueBox.value, { translateY: '-100%', duration: 1 });
  timeline.to(purpleBox.value, { translateX: '-100%', duration: 1 }, 0);
  timeline.to(greenBox.value, { translateX: '100%', duration: 1 }, 0);
};

const enterAnimation = () => {
  timeline = gsap.timeline({});

  timeline.from(blueBox.value, { translateY: '-100%', duration: 1 });
  timeline.from(purpleBox.value, { translateX: '-100%', duration: 1 }, 0);
  timeline.from(greenBox.value, { translateX: '100%', duration: 1 }, 0);
};

let animationPromiseResolve;
const animationPromise = new Promise(resolve => {
  animationPromiseResolve = resolve;
});

onMounted(() => {
  enterAnimation();
});

router.beforeEach((to, from, next) => {
  leaveAnimation();
  animationPromise.then(() => {
    next();
  });
});

onBeforeUnmount(() => {
  if (timeline) {
    timeline.kill();
  }
});
</script>

<style scoped></style>

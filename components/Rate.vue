<template>
  <div class="w-fit flex gap-1">
    <div @click="fillStars(index)" ref="container" class="w-fit cursor-pointer" v-for="(star, index) in stars">
      <Vue3Lottie
        ref="lottie"
        :height="100"
        :width="100"
        animationLink="https://lottie.host/d74230d2-c9b5-4b54-8e1f-233e8da56ce4/lX3AvuWHRE.json"
        :autoPlay="false"
        :loop="false" />
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

const stars = [false, false, false, false, false];
const lottie = ref();
const container = ref();

onMounted(() => {
  const tl = gsap.timeline();
  container.value.forEach((value, index) => {
    gsap.set(container.value[index], { scale: 0 });
    tl.to(container.value[index], { scale: 1.3, duration: 0.3 }, '<').to(container.value[index], { scale: 1, duration: 0.4 });
  });
  tl.play();
});

function fillStars(index) {
  let delay_fill = 0;
  let delay_empty = index;

  lottie.value.forEach((lot, i) => {
    if (i <= index && !stars[i]) {
      setTimeout(() => {
        lot.playSegments([0, 120], true);
      }, delay_fill * 200); // Decrease delay to 200ms
      stars[i] = true;
      delay_fill++;
    }

    if (i > index && stars[i]) {
      setTimeout(() => {
        lot.playSegments([120, 0], { reverse: true }, true);
      }, delay_empty * 200); // Decrease delay to 200ms
      stars[i] = false;
      delay_empty--;
    }
  });
}

function deneme() {
  lottie.value.playSegments([40, 120], true);
}
</script>

<style scoped></style>

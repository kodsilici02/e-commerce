<template>
  <div class="w-fit flex flex-wrap justify-center gap-1">
    <div @click="fillStars(index)" ref="container" class="w-fit cursor-pointer hover:scale-[1.1]" v-for="(star, index) in stars">
      <Vue3Lottie
        ref="lottie"
        :height="120"
        :width="120"
        animationLink="https://lottie.host/d74230d2-c9b5-4b54-8e1f-233e8da56ce4/lX3AvuWHRE.json"
        :autoPlay="false"
        :loop="false" />
    </div>
    <div class="w-full flex justify-center text-2xl font-bold">
      <Transition name="fade_blur" mode="out-in">
        <div :key="text" :class="text">{{ text }}</div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

const stars = [false, false, false, false, false];
const lottie = ref();
const container = ref();
const rate = ref(null);
const text = computed(() => {
  if (rate.value == 0) {
    return 'Terrible';
  }
  if (rate.value == 1) {
    return 'Bad';
  }
  if (rate.value == 2) {
    return 'Ok';
  }
  if (rate.value == 3) {
    return 'Good';
  }
  if (rate.value == 4) {
    return 'Excellent';
  }
});

const emits = defineEmits('handleClick');

onMounted(() => {
  const tl = gsap.timeline();
  container.value.forEach((value, index) => {
    gsap.set(container.value[index], { scale: 0 });
    tl.to(container.value[index], { scale: 1.3, duration: 0.3 }, '<').to(container.value[index], { scale: 1, duration: 0.4 });
  });
  tl.delay(1);
  tl.play();
});

function fillStars(index) {
  let delay_fill = 0;
  let delay_empty = index;
  emits('handleClick', index);
  rate.value = index;

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
        lot.playSegments([120, 0], true);
      }, delay_empty * 200); // Decrease delay to 200ms
      stars[i] = false;
      delay_empty--;
    }
  });
}
</script>

<style scoped>
.Terrible {
  color: var(--danger);
}
.Bad {
  color: rgb(242, 109, 37);
}
.Ok {
  color: var(--text-gray);
}
.Good {
  color: rgb(161, 196, 33);
}
.Excellent {
  color: var(--success);
}
.fade_blur-enter-from,
.fade_blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}
.fade_blur-enter-to,
.fade_blur-leave-from {
  opacity: 1;
  filter: blur(0px);
}
.fade_blur-enter-active,
.fade_blur-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>

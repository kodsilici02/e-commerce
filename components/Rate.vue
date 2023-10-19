<template>
  <div class="w-fit flex flex-wrap justify-center gap-1">
    <div @click="handleClick(index)" ref="container" class="w-fit cursor-pointer hover:scale-[1.1]" v-for="(star, index) in stars">
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
const filled = ref(0);
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

const emits = defineEmits(['handleClick']);

onMounted(() => {
  const tl = gsap.timeline();
  container.value.forEach((value, index) => {
    gsap.set(container.value[index], { scale: 0 });
    tl.to(container.value[index], { scale: 1.3, duration: 0.15 }, '<').to(container.value[index], { scale: 1, duration: 0.25 });
  });
  tl.delay(1);
  tl.play();
});

function handleClick(index) {
  filled.value = index;
  emits('handleClick', index);
}
watch(filled, (newVal, oldVal) => {
  rate.value = newVal;
  if (newVal > oldVal) {
    fillStars(newVal);
  } else {
    empty(newVal, oldVal);
  }
});

function fillStars(index) {
  let delay_fill = 0;
  emits('handleClick', index);

  lottie.value.forEach((lot, i) => {
    lot.setSpeed(2.5);
    if (i <= index && !stars[i]) {
      setTimeout(() => {
        lot.playSegments([0, 120], true);
      }, delay_fill * 100); // Decrease delay to 200ms
      stars[i] = true;
      delay_fill++;
    }
  });
}

function empty(index, old) {
  let delay_empty = index;
  lottie.value.forEach((lot, i) => {
    lot.setSpeed(2.5);
    if (i > index && stars[i]) {
      setTimeout(() => {
        lot.playSegments([120, 0], true);
      }, (4 - i) * 200); // Decrease delay to 200ms
      stars[i] = false;
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

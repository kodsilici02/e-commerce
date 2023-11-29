<template>
  <div @click="click" class="w-full relative">
    <Vue3Lottie
      ref="lottie"
      :height="height"
      :autoPlay="autoPlay"
      :loop="loop"
      animationLink="https://lottie.host/77454174-27c5-40e3-85b0-9ada2fd7f366/74J0geobud.json" />
  </div>
</template>

<script setup>
const props = defineProps({
  autoPlay: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: false
  },
  height: {
    type: Number,
    default: 100
  },
  active: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['handleClick']);

const lottie = ref(null);
onMounted(() => {
  setTimeout(() => {
    if (props.active && lottie.value) {
      lottie.value.playSegments([1, 160], true);
    }
  }, 100);
});

watch(
  () => props.active,
  () => {
    if (props.active) {
      lottie.value.playSegments([1, 160], true);
    } else {
      lottie.value.playSegments([160, 1], true);
    }
  }
);
function click() {
  emits('handleClick');
}
</script>

<style scoped></style>

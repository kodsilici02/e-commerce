<template>
  <div :class="[props.class]">
    <div v-if="!isLoaded" class="w-full h-full p-4">
      <skeleton-loader class="w-full h-full"></skeleton-loader>
    </div>
    <img v-show="isLoaded" :src="props.src" ref="img" @load="loaded" :class="[hero, imgClass]" />
  </div>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  imgClass: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    default: ''
  },
  hero: {
    type: String,
    default: ''
  }
});

const img = ref();
const isLoaded = ref(false);

onMounted(() => {
  img.value.src = props.src;
});

function loaded() {
  isLoaded.value = true;
}
</script>

<style scoped></style>

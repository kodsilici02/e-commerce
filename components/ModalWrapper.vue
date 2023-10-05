<template>
  <div
    class="fixed w-full h-full top-0 left-0 z-[1001] flex justify-center items-center pointer-events-none"
    style="color: var(--text-color)">
    <div :style="{ height: height + 'px', width: width + 'px' }" class="bg-white rounded-xl z-[1001] pointer-events-auto overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  height: {
    type: Number,
    default: 300
  },
  width: {
    type: Number,
    default: 500
  }
});
</script>

<style scoped></style>

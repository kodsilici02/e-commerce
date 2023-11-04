<template>
  <div
    class="fixed w-full h-full top-0 left-0 z-[1001] flex justify-center items-center pointer-events-none"
    style="color: var(--text-color)">
    <div
      class="h-auto rounded-xl z-[1001] pointer-events-auto overflow-auto"
      style="background-color: var(--background)"
      :style="{ 'max-height': max_height + 'px', 'max-width': max_width + 'px', width: width + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  max_height: {
    type: Number,
    default: 650
  },
  max_width: {
    type: Number,
    default: 500
  },
  width: {
    type: Number,
    default: 500
  }
});
</script>

<style scoped></style>

<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="height"
      :height="width"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  height: Number,
  width: Number,
  color: {
    type: String,
    default: '#fcfcfc'
  }
});
</script>

<style scoped></style>

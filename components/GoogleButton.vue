<template>
  <button @click="emits('handleClick')" class="w-fit rounded-full flex conic-border" style="color: var(--text-color)">
    <div class="background"></div>
    <div class="w-fit h-fit flex gap-3 rounded-full px-3 py-2 z-10" style="background-color: var(--background)">
      <IconsGoogle class="w-6 h-6"></IconsGoogle>
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
const emits = defineEmits(['handleClick']);
</script>

<style scoped>
.conic-border {
  position: relative;
  cursor: pointer;
  --width: 2px;
}
.background {
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  background-image: conic-gradient(from var(--a), transparent, #08f, #f03 50%, transparent);
  animation: border 4s infinite linear;
  background-size: 100% 100%;
  border-radius: 9999px;
  width: calc(100% + var(--width));
  height: calc(100% + var(--width));
  translate: -50% -50%;
  scale: 1 1;
  transition: scale 500ms linear;
}
.conic-border:hover {
  --width: 2px;
}
.conic-border:hover .background {
  scale: 1.025 1.1;
}

@property --a {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@keyframes border {
  0% {
    --a: 0deg;
  }
  100% {
    --a: 360deg;
  }
}
</style>

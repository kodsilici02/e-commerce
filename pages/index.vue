<template>
  <div class="text-black w-full justify-center flex flex-wrap gap-3 mt-20"></div>
</template>

<script setup>
const open = ref(false);
</script>

<style lang="scss" scoped>
.box {
  aspect-ratio: 1/1;
  width: 50%;
  position: relative;
  border-radius: 9999px;
  background-image: conic-gradient(from var(--a), transparent, #08f, #f03 50%, transparent);
  background-size: 100% 100%;
  animation: border 4s infinite linear;
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

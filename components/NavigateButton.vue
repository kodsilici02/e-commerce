<template>
  <div @click="$emit('handleClick')">
    <NuxtLink :to="to"
      ><div
        class="w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg cursor-pointer"
        style="border-radius: 35px; color: var(--text-white)">
        {{ text }}
      </div></NuxtLink
    >
  </div>
</template>

<script setup>
const props = defineProps({
  to: String,
  text: String
});
</script>

<style scoped>
.purchase-button {
  background-color: #3bc1e2;
}
.purchase-button:hover {
  background-color: #64d2ed;
}
.purchase-button:active {
  transition: background-color 0s ease;
  background-color: #648bed;
}
</style>

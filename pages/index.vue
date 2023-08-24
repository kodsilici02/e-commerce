<template>
  <div class="w-full h-[100vh]" style="color: var(--text-color)">
    <v-typical :steps="item"></v-typical>
    <button @click="deneme">Deneme</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VTypical from 'vue-typical';

const item = ref(['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]);

function deneme() {
  item.value = ['he', 1000];
}
</script>

<style scoped></style>

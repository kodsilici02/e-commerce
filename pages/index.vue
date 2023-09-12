<template>
  <div class="w-full h-[100vh]" style="color: var(--text-color)">
    <button @click="deneme2">deneme</button>
    <div>{{ store.deneme }}</div>
    <v-typical :steps="item"></v-typical>
    <button @click="deneme">Deneme</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VTypical from 'vue-typical';
import { useDeneme } from '@/stores/deneme';
import { storeToRefs } from 'pinia';
const store = storeToRefs(useDeneme());
watch(store.deneme, newValue => {
  console.log(newValue);
});

function deneme2() {
  console.log(store.deneme.value);
  store.deneme.value = store.deneme.value + 1;
}

const item = ref(['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]);

function deneme() {
  item.value = ['he', 1000];
}
</script>

<style scoped></style>

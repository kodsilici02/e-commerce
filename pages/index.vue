<template>
  <div class="w-full h-[100vh]" style="color: var(--text-color)">
    <v-typical :steps="item"></v-typical>
    <button @click="deneme">Deneme</button>
    <div class="w-36">
      <category :category-icon="['fas', 'shopping-cart']" :back-ground-color="'rgba(150, 67, 67, 0.4)'">
        <div class="h-52 w-full bg-red-500"></div>
      </category>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VTypical from 'vue-typical';

const item = ref(['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]);
const min = 0;
const max = 10;

function deneme() {
  item.value = ['he', 1000];
}

const value = ref(1);

function increase() {
  let deneme = value.value + 1;
  if (deneme <= max) {
    value.value++;
  }
}

function decrease() {
  let deneme = value.value - 1;
  if (deneme >= min) {
    value.value--;
  }
}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  position: absolute;
}

.list-enter-active {
  position: relative;
}

.num-input::-webkit-inner-spin-button,
.num-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.num-input {
  font-size: 1.2em;
  text-align: center;
  background: none;
  border: none;
  color: var(--accent);
  font-weight: bold;
  width: 100%;
}
.num-input:focus {
  outline: none;
}
.num-icon {
  font-size: 1.2em;
  cursor: pointer;
}
</style>

<template>
  <div class="w-full h-auto flex flex-wrap p-5" style="color: var(--text-color)">
    <button
      @click="
        () => {
          open = !open;
        }
      ">
      deneme
    </button>
    <button
      @click="
        () => {
          items++;
        }
      ">
      deneme
    </button>
  </div>

  <div class="w-64 h-auto">
    <Accordeon :open="open" class="w-full h-full flex flex-col gap-3">
      <div v-for="item in items" class="w-full h-20 bg-green-700"></div>
    </Accordeon>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const items = ref(5);

function deneme() {
  console.log(event.target);
}

const open = ref(true);
</script>

<style scoped></style>

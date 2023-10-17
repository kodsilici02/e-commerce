<template>
  <div class="w-full flex justify-center flex-wrap p-2">
    <div v-for="item in items" class="basis-1/3 px-3 py-2">
      <div class="w-full rounded-lg p-3 flex justify-between items-center" style="background-color: var(--background-hover)">
        <div class="font-bold">CPU type</div>
        <div>bla bla</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const deneme = [{}];
</script>

<style scoped></style>

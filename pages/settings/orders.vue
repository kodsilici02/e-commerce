<template>
  <div class="w-full flex flex-wrap gap-2" style="color: var(--text-color)">
    <div class="w-full text-2xl flex justify-between mt-2">
      <div class="flex-1" style="font-weight: 600">Your Orders</div>
      <div class="flex-1 flex justify-center">
        <SearchBar :placeholder="'Search in Orders'" :cancel_btn_color="'#000'"></SearchBar>
      </div>
      <div class="flex-1"></div>
    </div>
    <div class="w-full flex gap-2 p-2 flex-wrap">
      <div v-for="item in items" class="filter-button cursor-pointer flex justify-center items-center p-4">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
const items = ['All', 'Ongoing Orders', 'Canceled Orders', 'Returned Orders', 'Undeliverable'];
</script>

<style scoped>
.filter-button {
  background-color: #fff;
  border: 1px solid #dddddd;
  height: 32px;
  border-radius: 32px;
  font-weight: 600;
  font-size: 12px;
  color: #7b7b7b;

  position: relative;
}
</style>

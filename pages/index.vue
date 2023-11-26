<template>
  <div class="text-black flex flex-wrap gap-3 ml-20 mt-20">
    <SortableContainer
      :options="{
        handle: '.handle',
        animation: 200,
        swapThreshold: 0.5,
        dragClass: 'sortable-drag',
        ghostClass: 'sortable-ghost',

        onStart: evt => onStart(evt),

        onEnd: evt => onEnd(evt)
      }"
      class="flex gap-2 relative">
      <div :key="item.name" v-for="(item, index) in items" class="p-1 w-32 h-32 flex justify-center items-center bg-green-500 handle">
        {{ item.name }}
      </div>
    </SortableContainer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const items = ref([
  {
    name: 'Kristina Zasiadko',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/tr/2202/gallery/tr-galaxy-s22-ultra-s908-sm-s908edrdtur-530980041?$624_624_PNG$'
  },
  {
    name: 'Gabriel Wilson',
    image:
      'https://images.samsung.com/is/image/samsung/p6pim/tr/2202/gallery/tr-galaxy-s22-ultra-s908-sm-s908edrdtur-530980041?$624_624_PNG$'
  }
]);

function onStart(event) {
  event.item.style.opacity = '0';
}

function onEnd(event) {
  event.item.style.opacity = '1';
}

function onChange(event) {}
</script>

<style scoped>
.sortable-drag {
  opacity: 1;
}
.sortable-ghost {
  opacity: 0;
}
</style>

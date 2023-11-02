<template>
  <div class="w-full flex">
    <div class="flex-1 w-0">
      <div class="overflow-x-auto">
        <div class="bg-gray-400 w-[150em] h-20">Foo</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const items = [
  {
    name: 'All',
    component: resolveComponent('OrdersAll')
  },
  {
    name: 'Ongoing Orders',
    component: resolveComponent('OrdersOngoing')
  },
  {
    name: 'Canceled Orders',
    component: resolveComponent('OrdersCanceled')
  },
  {
    name: 'Returned Orders',
    component: resolveComponent('OrdersReturned')
  },
  {
    name: 'Undeliverable Orders',
    component: resolveComponent('OrdersUndeliverable')
  }
];

const activeState = ref(0);
const transition = ref();

function activate(index) {
  if (activeState.value > index) {
    transition.value = 'left';
  } else {
    transition.value = 'right';
  }
  activeState.value = index;
}

const scrollContainer = ref(null);

function handleMouseWheel(event) {
  const container = scrollContainer.value;
  container.scrollLeft += 3 * event.deltaY;
}
</script>

<style scoped></style>

<template>
  <div class="w-full flex flex-wrap gap-2 overflow-hidden" style="color: var(--text-color)">
    <div class="w-full text-2xl flex flex-col items-center justify-center gap-3 mt-2">
      <div class="flex-1" style="font-weight: 600">Your Orders</div>
      <div class="flex-1 flex justify-center">
        <SearchBarAnimated :placeholder="'Search in Orders'" :cancel_btn_color="'#000'"></SearchBarAnimated>
      </div>
      <div class="flex-1"></div>
    </div>
    <div class="w-full flex">
      <div class="flex-1 w-0">
        <div class="overflow-x-auto">
          <div class="flex overflow-y-hidden gap-1">
            <div
              @click="activate(index)"
              v-for="(item, index) in items"
              :style="{ color: activeState == index ? 'var(--success)' : '' }"
              class="filter-button px-3 py-2 mb-2 flex-shrink-0 cursor-pointer flex justify-center items-center p-4 transition-colors duration-300">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-2">
      <Transition :name="transition" mode="out-in">
        <KeepAlive>
          <component @handleClick="activate(0)" :is="items[activeState].component" />
        </KeepAlive>
      </Transition>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.filter-button {
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 32px;
  font-weight: 600;
  font-size: 12px;
  position: relative;
}
.filter-button:hover {
  color: var(--primary);
}
</style>

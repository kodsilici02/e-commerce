<template>
  <Transition name="component_space">
    <SideBarSpace @handleClick="toggleOrderSidebar" v-if="isOrderSidebarOpen"></SideBarSpace>
  </Transition>
  <div
    class="w-52 fixed top-0 p-2 right-0 z-[1000] md:z-[998] md:sticky md:top-28 overflow-y-auto filter-height md:bg-transparent transition-transform duration-200"
    :class="{ ' translate-x-[110%]': !isOrderSidebarOpen && isWindowSmall }"
    style="box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 8px 0px inset">
    <div class="text-2xl flex items-center gap-1">
      <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>
      <div>999</div>
    </div>
    <div class="w-full flex flex-wrap items-center gap-x-1">
      <div class="w-full flex items-center gap-x-1 text-lg font-bold">
        <ClientOnly><font-awesome :icon="['fas', 'calendar-days']" /></ClientOnly>Delivery Date
      </div>
      <div class="w-full">{{ getDate() }}</div>
    </div>
    <div class="w-full flex flex-wrap items-center gap-x-1">
      <div class="w-full flex items-center gap-x-1 text-lg font-bold">
        <ClientOnly><font-awesome :icon="['fas', 'location-dot']" /></ClientOnly>Delivery Location
      </div>
      <div class="cursor-pointer w-full location-button" @click="toggleModal">Select a Location</div>
    </div>
    <div class="w-full flex flex-col gap-2 items-center justify-center">
      <div class=""></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useSidebarStore } from '@/stores/sidebar.js';

const emits = defineEmits(['toggleLocationModal']);

const store = useSidebarStore();
const { orderSidebarOpen } = useSidebarStore();
import { addDays, format } from 'date-fns';

const isOrderSidebarOpen = ref(orderSidebarOpen);
const isWindowSmall = ref(true);
watch(
  () => store.orderSidebarOpen,
  newState => {
    isOrderSidebarOpen.value = newState;
  }
);

function calculateWindowSize() {
  if (window.innerWidth <= 768) {
    isWindowSmall.value = true;
  } else {
    isWindowSmall.value = false;
  }
}

onMounted(() => {
  calculateWindowSize();
  window.addEventListener('resize', () => {
    calculateWindowSize();
  });
});

function toggleOrderSidebar() {
  store.toggleOrderSidebar();
}

function getDate() {
  const currentDate = new Date();
  const newDate = addDays(currentDate, 2);
  const formattedDate = format(newDate, 'EEEE, MMMM do'); // Output: Monday, August 14th
  return formattedDate;
}

function toggleModal() {
  emits('toggleLocationModal');
}
</script>

<style scoped>
.location-button {
  transition: color 0.2s ease;
  color: var(--text-color);
}
.location-button:hover {
  color: var(--secondary);
}
.filter-height {
  height: calc(100vh - 7.55rem);
}

@media only screen and (max-width: 768px) {
  .filter-height {
    height: 100%;
    color: var(--text-color);
    background-color: var(--background);
  }
  .location-button {
    transition: color 0.2s ease;
    color: var(--text-secondary);
  }
  .location-button:hover {
    color: var(--secondary-light);
  }
}
</style>

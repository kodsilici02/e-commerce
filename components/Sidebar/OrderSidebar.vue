<template>
  <div
    class="fixed top-0 right-0 md:sticky md:top-28 w-52 filter-height p-2"
    style="box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 8px 0px inset; z-index: 10"
    :style="{ 'z-index': open ? 1001 : 10 }">
    <div class="text-2xl flex items-center gap-1 z-[1000]">
      <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>
      <div>999</div>
    </div>
    <div class="w-full flex flex-wrap items-center gap-x-1 z-[1000]">
      <div class="w-full flex items-center gap-x-1 text-lg font-bold">
        <ClientOnly><font-awesome :icon="['fas', 'calendar-days']" /></ClientOnly>Delivery Date
      </div>
      <div class="w-full font-[600]">{{ getDate() }}</div>
    </div>
    <div class="w-full flex flex-wrap items-center gap-x-1 z-[1000]">
      <div class="w-full flex items-center gap-x-1 text-lg font-bold">
        <ClientOnly><font-awesome :icon="['fas', 'location-dot']" /></ClientOnly>Delivery Location
      </div>
      <div class="w-full flex items-center gap-x-1 text-lg font-[600]">
        {{ address.address }}/{{ address.county }}/{{ address.province }}
      </div>
      <ModalButton :open="open" @update:open="value => (open = value)">
        <template v-slot:button>
          <div class="cursor-pointer w-full location-button font-bold">Select a Location</div>
        </template>
        <template v-slot:modal>
          <div class="bg-white">
            <SelectLocation
              @select="
                index => {
                  emits('changeAddress', index);
                  open = false;
                }
              "></SelectLocation>
          </div>
        </template>
      </ModalButton>
    </div>
    <div class="w-full flex flex-col gap-2 items-center justify-center">
      <div class=""></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { addDays, format } from 'date-fns';

const emits = defineEmits(['changeAddress']);

const open = ref(false);

const props = defineProps({
  address: {
    type: Object,
    default: {}
  }
});

function getDate() {
  const currentDate = new Date();
  const newDate = addDays(currentDate, 2);
  const formattedDate = format(newDate, 'EEEE, MMMM do'); // Output: Monday, August 14th
  return formattedDate;
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

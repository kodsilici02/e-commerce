<template>
  <div class="w-full flex">
    <div id="sidebar">
      <SidebarContainer>
        <SidebarShoppingFilter></SidebarShoppingFilter>
      </SidebarContainer>
    </div>
    <div id="content" class="flex-1 flex flex-wrap items-start justify-start bg-green-300] mt-1 p-1" style="color: var(--text-white)">
      <TransitionGroup
        name="list"
        tag="div"
        class="flex-1 flex flex-wrap items-start justify-start mt-1 p-1"
        style="color: var(--text-white)"
        @before-leave="itemLeave">
        <div class="w-full h-full relative" :key="'aaaa'">
          <Transition name="fade">
            <div v-if="filteredItems.length == 0" class="w-full flex flex-col items-center justify-center">
              <Vue3Lottie
                ref="lottie"
                :height="500"
                animationLink="https://lottie.host/25a75051-6b06-44b2-a75d-037f747f83c2/p6eHupD7HS.json"
                :autoPlay="true"
                :loop="true"
                direction="alternate" />
              <div class="text-2xl" style="color: var(--text-color)">There is no product with the features you are looking for</div>
            </div></Transition
          >
        </div>
        <div
          v-for="(item, index) in filteredItems"
          @click="deneme($event, index, item.img)"
          @mouseenter="deneme($event, index, item.img)"
          :key="item.name"
          class="h-[300px] md:h-[400px] basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex p-2 transition-transform duration-200 cursor-pointer hover:scale-[1.02] overflow-hidden">
          <NuxtLink
            :to="'/shop/' + $route.params.category + '/' + convertName(item.name)"
            class="h-full w-full rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative">
            <div class="absolute top-0 left-0 w-full h-full purchase-layer rounded-lg transition-[background-color] duration-500 z-[2]">
              <div class="w-full h-full flex justify-center items-center">
                <div
                  class="w-36 h-10 bg-slate-400 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg"
                  style="border-radius: 35px">
                  Purchase Now
                </div>
              </div>
            </div>
            <div class="absolute top-1 right-4">
              <div class="flex gap-1 items-center md:text-lg">
                <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>{{ item.price }}
              </div>
            </div>
            <div class="text-lg md:text-2xl h-14 w-full flex justify-center items-center font-code-next px-2 mt-4">{{ item.name }}</div>
            <div class="flex-1 flex justify-center overflow-hidden">
              <img
                :key="item.name"
                :src="item.img"
                :class="{ image: item.img == products.hero_image }"
                class="object-contain object-center image-selector" />
            </div>
            <div
              class="h-12 w-full font-code-next text-xs md:text-base font-bold flex flex-wrap px-2 justify-center items-center gap-2 sm:gap-x-3 mb-2">
              <div class="flex gap-1 items-center">
                <ClientOnly><font-awesome :icon="['fas', 'battery-full']" /></ClientOnly>3200mAh
              </div>
              <div class="flex gap-1 items-center">
                <ClientOnly><font-awesome :icon="['fas', 'compact-disc']" /></ClientOnly>{{ item.memory }}
              </div>
              <div class="flex gap-1 items-center">
                <IconsScreenSize :height="20" :width="20" :color="'aliceblue'"></IconsScreenSize>
                6.7 Inc
              </div>
            </div>
          </NuxtLink>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/stores/products.js';
import { useFilterStore } from '@/stores/filters';
const filterStore = useFilterStore();

const products = useProductStore();
const route = useRoute();
const router = useRouter();

function deneme(event, index, image) {
  products.hero_image = image;
  const img = document.querySelectorAll('.image-selector')[index];
  img.classList.add('image');
}

const items = ref(products.items);

const filteredItems = ref(items.value);
watchEffect(() => {
  applyFilters();
});

onMounted(() => {
  applyFilters();
});

function applyFilters() {
  const filters = filterStore.filters;

  // Apply filtering logic using the updated filters object
  // For example:
  let filteredItemsTemp = items.value.filter(item => item.price >= filters.price.min && item.price <= filters.price.max);
  if (filters.brands.include) {
    filteredItemsTemp = filteredItemsTemp.filter(item => filters.brands.brands.includes(item.brand));
  } else if (filters.brands.include === false) {
    filteredItemsTemp = filteredItemsTemp.filter(item => !filters.brands.brands.includes(item.brand));
  }

  // Update the filteredItems value
  filteredItems.value = filteredItemsTemp;
}

function convertName(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

function itemLeave(el) {
  el.style.setProperty('--width', `${el.offsetWidth}px`);
}
</script>

<style scoped>
.image {
  view-transition-name: view-image;
  contain: paint;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  translate: 0px -100%;
}
.list-leave-active {
  --width: 380px;
  width: var(--width);
  position: absolute;
}

.list-enter-active {
  position: relative;
}

.item-background {
  background-color: var(--primary);
}
.purchase-layer {
  background-color: #6a6ccf00;
}
.item-background:hover .purchase-layer {
  background-color: #6a6ccfa0;
}

.purchase-button {
  opacity: 0;
  background-color: #3bc1e2;
}
.purchase-button:hover {
  background-color: #64d2ed;
}
.purchase-button:active {
  transition: background-color 0s ease;
  background-color: #648bed;
}
.item-background:hover .purchase-button {
  opacity: 1;
}
</style>

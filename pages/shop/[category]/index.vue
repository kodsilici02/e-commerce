<template>
  <div class="w-full flex">
    <div id="sidebar">
      <SidebarContainer>
        <SidebarShoppingFilters></SidebarShoppingFilters>
      </SidebarContainer>
    </div>
    <div id="content" class="flex-1 flex flex-wrap items-start justify-start bg-green-300] mt-1 p-1" style="color: var(--text-white)">
      <div
        v-auto-animate
        class="flex-1 flex flex-wrap items-start justify-start mt-1 p-1"
        style="color: var(--text-white)"
        @before-leave="itemLeave">
        <div class="w-full h-full relative" :key="'aaaa'">
          <Transition name="fade">
            <div v-if="filteredItems.length == 0" class="w-full flex flex-col items-center justify-center">
              <Vue3Lottie
                ref="lottie"
                :height="480"
                animationLink="https://lottie.host/25a75051-6b06-44b2-a75d-037f747f83c2/p6eHupD7HS.json"
                :autoPlay="true"
                :loop="true"
                direction="alternate" />
              <div class="text-xl md:text-2xl font-bold text-center" style="color: var(--text-color)">
                There is no product with the features you are looking for
              </div>
            </div></Transition
          >
        </div>
        <div
          v-for="(item, index) in filteredItems"
          @click="deneme(item.images[0])"
          :key="item.name"
          ref="element"
          class="h-[300px] md:h-[400px] basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex p-4 cursor-pointer">
          <div class="item-background transition-[background-color] w-full duration-500 rounded-lg">
            <div v-if="false" class="h-full w-full flex flex-col relative">
              <div class="text-xs sm:text-2xl text-center h-14 px-3 py-2 w-full flex justify-center items-center mt-4">
                <SkeletonLoader class="w-full h-full"></SkeletonLoader>
              </div>
              <div class="flex-1 w-full flex justify-center overflow-hidden p-3">
                <SkeletonLoader class="w-full h-full"></SkeletonLoader>
              </div>
              <div
                class="h-12 w-full text-xs md:text-base font-bold flex flex-wrap px-3 py-1 justify-center items-center gap-1 md:gap-2 sm:gap-x-3 mb-2">
                <SkeletonLoader class="w-full h-full"></SkeletonLoader>
              </div>
            </div>
            <NuxtLink :to="'/shop/' + $route.params.category + '/' + convertName(item.name)" class="h-full w-full flex flex-col relative">
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
                <div class="flex gap-1 items-center text-xs sm:text-lg">
                  <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>{{ item.price }}
                </div>
              </div>
              <div class="text-xs sm:text-2xl text-center h-14 w-full flex justify-center items-center px-2 mt-4">{{ item.name }}</div>
              <div class="flex-1 w-full flex justify-center overflow-hidden">
                <img
                  :key="item.name"
                  :src="item.images[0]"
                  :class="{ image: products.hero_image == item.images[0] }"
                  class="object-contain object-center image-selector" />
              </div>
              <div
                class="h-12 w-full text-xs md:text-base font-bold flex flex-wrap px-2 justify-center items-center gap-1 md:gap-2 sm:gap-x-3 mb-2">
                <div class="flex gap-1 items-center">
                  <ClientOnly><font-awesome :icon="['fas', 'battery-full']" /></ClientOnly>{{ item.battery }} mAh
                </div>
                <div class="flex gap-1 items-center">
                  <ClientOnly><font-awesome :icon="['fas', 'compact-disc']" /></ClientOnly>{{ item.memory[0] }} GB
                </div>
                <div class="flex gap-1 items-center">
                  <IconsScreenSize :height="20" :width="20" :color="'aliceblue'"></IconsScreenSize>
                  {{ item.screensize }} Inch
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { useProductStore } from '@/stores/products.js';
import { useFilterOptions } from '@/stores/filterOptions';
import { storeToRefs } from 'pinia';
import { phones } from '@/assets/deneme.js';

const route = useRoute();

const filterOptions = storeToRefs(useFilterOptions());
function findOptions() {
  return filterOptions.options.value.find(item => item.name == route.params.category).filters;
}
const products = useProductStore();

function deneme(image) {
  products.hero_image = image;
}

onBeforeRouteLeave((to, from) => {
  if (!to.fullPath.includes('/shop/') && document.querySelector('.image')) {
    document.querySelector('.image').classList.remove('image');
  }
});

const items = ref(phones);

onMounted(() => {
  items.value = items.value.map(item => {
    return { ...item, loaded: false };
  });
});

function isLoaded(name) {
  return filteredItems.value.find(item => item.name == name).loaded;
}

function image_loaded(name) {
  setTimeout(() => {
    filteredItems.value.find(item => item.name == name).loaded = true;
  }, 1000);
}

//sakın buraya dokunma
const filteredItems = computed(() => {
  const categoryFilters = findOptions();
  const clonedItems = items.value.filter(item => {
    let details = item.details;
    return checkFilter(details, categoryFilters);
  });
  return clonedItems;
});
//buraya da dokunma
function checkFilter(details, filters) {
  let conditionArray = [];
  details.forEach(detail => {
    let option = filters.find(filter => filter.type == detail.type);
    if (option.rangeSlider) {
      if (detail.value >= option.currentMin && detail.value <= option.currentMax) {
        conditionArray.push(true);
      } else {
        conditionArray.push(false);
      }
    } else if (option.selectedCategories.length > 0 && option.single_choice) {
      if (option.include) {
        if (option.selectedCategories.includes(detail.value)) {
          conditionArray.push(true);
        } else {
          conditionArray.push(false);
        }
      } else {
        if (option.selectedCategories.includes(detail.value)) {
          conditionArray.push(false);
        } else {
          conditionArray.push(true);
        }
      }
    } else if (option.selectedCategories.length > 0 && option.multi_choice) {
      if (option.include) {
        if (containsAny(detail.value, option.selectedCategories)) {
          conditionArray.push(true);
        } else {
          conditionArray.push(false);
        }
      } else {
        if (containsAny(detail.value, option.selectedCategories)) {
          conditionArray.push(false);
        } else {
          conditionArray.push(true);
        }
      }
    }
  });
  if (conditionArray.includes(false)) {
    return false;
  } else {
    return true;
  }
}

function containsAny(arr1, arr2) {
  return arr2.some(item => arr1.includes(item));
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

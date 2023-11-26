<template>
  <div class="w-full flex flex-wrap">
    <div id="sidebar">
      <SidebarContainer>
        <SidebarShoppingFilters></SidebarShoppingFilters>
      </SidebarContainer>
    </div>
    <div class="flex-1 flex flex-wrap items-start justify-start mt-1 p-1" style="color: var(--text-white)">
      <div v-auto-animate class="flex-1 flex flex-wrap items-start justify-start mt-1 p-1" style="color: var(--text-white)">
        <div v-if="filteredItems.length == 0" :key="'no_product'" class="w-full flex flex-col items-center justify-center">
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
        </div>
        <div
          :key="item.name"
          v-for="(item, index) in filteredItems"
          class="h-[300px] md:h-[400px] basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex p-2 sm:p-4 cursor-pointer">
          <Card class="h-full w-full flex cursor-pointer" background_color="var(--primary)">
            <template v-slot:layer>
              <div class="w-full h-full flex flex-col gap-4 justify-center items-center pointer-events-none text-sm sm:text-ba">
                <NuxtLink
                  @click="setHeroImage(item.images[0])"
                  :to="'/shop/' + $route.params.category + '/' + convertName(item.name)"
                  class="w-28 sm:w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center pointer-events-auto"
                  style="border-radius: 35px">
                  Purchase Now
                </NuxtLink>
                <button
                  @click="addCompare(item.id)"
                  class="w-28 sm:w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center pointer-events-auto"
                  style="border-radius: 35px">
                  Compare
                </button>
              </div>
            </template>
            <template v-slot:main>
              <NuxtLink
                @click="setHeroImage(item.images[0])"
                :to="'/shop/' + $route.params.category + '/' + convertName(item.name)"
                class="w-full h-full flex flex-col">
                <div class="absolute top-1 right-4">
                  <div class="flex gap-1 items-center text-xs sm:text-lg">
                    <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>{{ item.price }}
                  </div>
                </div>
                <div class="text-xs sm:text-2xl text-center h-14 w-full flex justify-center items-center px-2 mt-4">{{ item.name }}</div>
                <div class="flex-1 w-full flex justify-center items-center overflow-hidden">
                  <SkeletonImg
                    :src="item.images[0]"
                    class="flex-1 flex justify-center h-full rounded-lg overflow-hidden"
                    :hero="hero == item.images[0] ? 'deneme' : ''"></SkeletonImg>
                </div>
                <div
                  class="h-12 w-full text-[0.60rem] md:text-base font-bold flex flex-wrap px-2 justify-center items-center gap-1 md:gap-2 sm:gap-x-3 mb-2">
                  <div class="flex gap-1 items-center">
                    <ClientOnly><font-awesome :icon="['fas', 'battery-full']" /></ClientOnly>{{ item.battery }} mAh
                  </div>
                  <div class="flex gap-1 items-center">
                    <ClientOnly><font-awesome :icon="['fas', 'compact-disc']" /></ClientOnly>{{ item.memory }} GB
                  </div>
                  <div class="flex gap-1 items-center">
                    <IconsScreenSize :height="20" :width="20" :color="'aliceblue'"></IconsScreenSize>
                    {{ item.screensize }} Inch
                  </div>
                </div>
              </NuxtLink>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <Transition name="fade">
      <div
        v-if="compareStore.items.length > 0 && route.path != '/shop/' + route.params.category + '/compare'"
        class="fixed bottom-0 left-0 w-full h-20 flex flex-wrap justify-center items-center gap-2 p-2 z-[1000]"
        style="background-color: var(--primary)">
        <div class="flex-1 h-full"></div>
        <div v-auto-animate class="h-full flex-1 flex justify-center items-center">
          <div v-for="(item, index) in compareStore.items" class="h-full w-fit relative item rounded-lg overflow-hidden">
            <div class="h-full w-full absolute top-0 left-0 cover p-2 pointer-events-none"></div>
            <div class="h-full w-full absolute top-0 left-0 cover-button flex items-center justify-center z-[1001] text-white">
              <button
                @click="remove(item)"
                class="w-full h-7 text-xs z-[3] purchase-button transition-all duration-200 flex justify-center items-center pointer-events-auto"
                style="border-radius: 35px">
                Remove
              </button>
            </div>
            <img
              :src="getImage(item)"
              :style="{ 'view-transition-name': viewTransitionName(index) }"
              class="object-contain object-center h-full" />
          </div>
        </div>
        <div class="h-full flex-1 flex items-center justify-end mr-4">
          <button
            @click="compareItems"
            class="w-28 sm:w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center pointer-events-auto"
            style="border-radius: 35px; background-color: var(--secondary-light)">
            Compare Items
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useFilterOptions } from '@/stores/filterOptions';
import { storeToRefs } from 'pinia';
import { phones } from '@/assets/deneme.js';
import { useCompareStore } from '@/stores/compare';

const compareStore = useCompareStore();

function getImage(id) {
  return useNuxtApp().$getProduct(id).images[0];
}

function viewTransitionName(index) {
  return 'compareTransition' + index;
}

function compareItems() {
  let items = compareStore.items.map(item => item);

  if (items.length >= 2) {
    router.push({ path: '/shop/' + route.params.category + '/compare', query: { item: items } });
  }
}

function remove(item) {
  compareStore.removeItem(item);
}

function addCompare(id) {
  let item = useNuxtApp().$getProduct(id);
  useCompareStore().addItem(item);
}

const route = useRoute();
const router = useRouter();
const hero = ref();

onBeforeRouteLeave((to, from) => {
  if (!to.path.includes('/shop/' + route.params.category)) {
    compareStore.items = [];
  }
});

const filterOptions = storeToRefs(useFilterOptions());
function findOptions() {
  return filterOptions.options.value.find(item => item.name == route.params.category).filters;
}

function setHeroImage(image) {
  hero.value = image;
}

const items = ref(phones);

onMounted(() => {
  items.value = items.value.map(item => {
    return { ...item, loaded: false };
  });
});

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
<style>
.deneme {
  view-transition-name: view-image;
}
.cover {
  opacity: 0;
  background-color: var(--primary);
  transition: all 0.2s ease-in-out;
}

.item:hover .cover {
  opacity: 0.5;
}

.cover-button {
  opacity: 0;
  z-index: 1001;
  transition: all 0.2s ease-in-out;
}

.item:hover .cover-button {
  opacity: 1;
}
</style>

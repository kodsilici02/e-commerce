<template>
  <div class="w-full flex flex-wrap">
    <div id="sidebar">
      <SidebarContainer>
        <SidebarShoppingFilters></SidebarShoppingFilters>
      </SidebarContainer>
    </div>
    <div class="flex-1 flex flex-wrap items-start justify-start bg-green-300] mt-1 p-1" style="color: var(--text-white)">
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
        <Card
          :key="item.name"
          v-for="(item, index) in filteredItems"
          @click="setHeroImage(item.images[0])"
          class="h-[300px] md:h-[400px] basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex p-4 cursor-pointer"
          background_color="var(--primary)">
          <template v-slot:layer>
            <NuxtLink
              :to="'/shop/' + $route.params.category + '/' + convertName(item.name)"
              class="w-full h-full flex justify-center items-center">
              <button
                class="w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg"
                style="border-radius: 35px">
                Purchase Now
              </button>
            </NuxtLink>
          </template>
          <template v-slot:main>
            <NuxtLink :to="'/shop/' + $route.params.category + '/' + convertName(item.name)" class="w-full h-full flex flex-col">
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
                  :hero="hero == item.images[0] ? 'deneme2' : ''"></SkeletonImg>
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
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFilterOptions } from '@/stores/filterOptions';
import { storeToRefs } from 'pinia';
import { phones } from '@/assets/deneme.js';

function redirect(name) {
  router.push('/shop');
}

const route = useRoute();
const router = useRouter();
const hero = ref('');

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
.deneme2 {
  view-transition-name: view-image;
}
</style>

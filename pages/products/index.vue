<template>
  <div class="w-full h-full flex flex-wrap content-start gap-1 p-3" style="color: var(--text-color)">
    <div class="w-full p-2 flex">
      <div class="flex-1"></div>
      <div class="flex-1 flex justify-center">
        <SearchBarAnimated
          :cancel_btn_color="'var(--secondary)'"
          @updateValue="updateValue"
          placeholder="Search Product"></SearchBarAnimated>
      </div>
      <div class="flex-1 flex justify-end">
        <NuxtLink to="/products/add">
          <button
            class="w-28 sm:w-36 h-11 purchase-button transition-all duration-500 flex justify-center items-center gap-2 pointer-events-auto"
            style="border-radius: 35px; color: var(--text-white)">
            <ClientOnly><font-awesome :icon="['fas', 'circle-plus']"></font-awesome></ClientOnly>
            <div>Add Product</div>
          </button>
        </NuxtLink>
      </div>
    </div>
    <div v-auto-animate class="w-full flex flex-wrap gap-2 p-2">
      <Card
        v-for="(item, index) in filteredItems"
        :key="item.name"
        class="h-[200px] md:h-[250px] lg:h-[400px] basis-1/3 lg:basis-1/4 flex p-3"
        :background_color="'var(--secondary)'">
        <template v-slot:layer>
          <div class="w-full h-full flex flex-col gap-4 justify-center items-center pointer-events-none text-sm sm:text-ba">
            <NuxtLink
              @click="setHeroImage(item.images[0])"
              :to="'/shop/' + $route.params.category + '/' + convertName(item.name)"
              class="w-28 sm:w-36 h-10 z-[3] bg-[var(--secondary-light)] hover:bg-[var(--primary)] transition-all duration-500 flex justify-center items-center pointer-events-auto"
              style="border-radius: 35px">
              Purchase Now
            </NuxtLink>
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
            <div class="text-xs sm:text-xl text-center h-14 w-full flex justify-center items-center px-2 mt-4">{{ item.name }}</div>
            <div class="flex-1 w-full flex justify-center items-center overflow-hidden">
              <SkeletonImg
                :src="item.images[0]"
                class="flex-1 flex justify-center h-full rounded-lg overflow-hidden"
                :hero="hero == item.images[0] ? 'deneme' : ''"></SkeletonImg>
            </div>
            <div
              class="h-12 w-full text-[0.60rem] md:text-base font-bold flex flex-wrap px-2 justify-center items-center gap-1 md:gap-2 sm:gap-x-3 mb-4">
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
</template>

<script setup>
const items = ['samsung-galaxy-s22', 'xiaomi-redmi-note-10'];
const products = ref([]);

const hero = ref();

const searchText = ref();

function updateValue(value) {
  searchText.value = value;
}

const filteredItems = computed(() => {
  return products.value.filter(product => product.name.toLowerCase().includes(searchText.value.toLowerCase()));
});

onMounted(() => {
  items.forEach(item => {
    products.value.push(getProduct(item));
  });
});

function convertName(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

function setHeroImage(image) {
  hero.value = image;
}

function getProduct(id) {
  return useNuxtApp().$getProduct(id);
}
</script>

<style scoped></style>

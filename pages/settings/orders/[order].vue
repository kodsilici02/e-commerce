<template>
  <div class="w-full flex flex-wrap gap-2 p-2 lg:p-4" style="color: var(--text-color)">
    <div class="w-full text-2xl font-bold flex justify-center mt-3">{{ product.name }}</div>
    <div class="w-full lg:basis-1/4 h-[350px] flex justify-center items-center 2xl:mt-10">
      <img :src="image_url" :class="{ hero_image: hero_active }" ref="image_element" />
    </div>
    <!--Progress Bar and order details-->
    <div class="w-full flex-1 flex flex-wrap content-start lg:mt-10 gap-3">
      <div class="w-full px-5 md:px-10 md:pr-20">
        <ProgressBar
          :states="[
            {
              name: 'Shipped',
              progress: 100,
              success: true
            },
            {
              name: 'Out to be Delivered',
              progress: 100,
              success: true
            },
            { name: 'Delivered', progress: 20, success: true }
          ]"></ProgressBar>
      </div>
      <div class="w-full flex justify-center flex-wrap p-2 gap-5 mt-12 md:pr-8">
        <div class="basis-1/2 md:basis-2/3 flex flex-wrap gap-4">
          <div class="w-full text-xl md:text-2xl font-bold ml-1">Order Summary</div>
          <div v-for="info in infos" class="w-full flex items-center gap-2">
            <InputFloatingLabel
              :read-only="true"
              :error-messages="[]"
              :type="'text'"
              :label="info.title"
              :value="info.value"></InputFloatingLabel>
          </div>
        </div>
        <div class="h-fit flex-1 flex justify-center flex-wrap items-center gap-1 font-bold mt-2">
          <div class="w-full flex gap-1 items-center justify-center text-xl md:text-2xl">
            <ClientOnly>
              <font-awesome :icon="['fas', 'dollar-sign']"></font-awesome>
            </ClientOnly>
            <div>999</div>
          </div>
          <div class="flex-1 content-start flex flex-wrap gap-2">
            <div v-for="summary in summaries" class="w-full text-sm md:text-lg font-[500] flex content-start items-center gap-2">
              <div class="font-[600] flex-shrink-1 w-fit">{{ summary.title }}:</div>
              <div class="flex-1 flex justify-end">{{ summary.value }}</div>
              <ClientOnly>
                <font-awesome :icon="['fas', 'dollar-sign']"></font-awesome>
              </ClientOnly>
            </div>
            <div class="w-full flex items-center gap-2">
              <div class="text-sm md:text-lgfont-[600]">Total:</div>
              <div class="text-sm md:text-lg font-[500] flex-1 flex justify-end items-center gap-1">
                {{ Total() }}
                <ClientOnly>
                  <font-awesome :icon="['fas', 'dollar-sign']"></font-awesome>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Rate-->
    <div class="w-full flex flex-wrap justify-center">
      <div class="w-full flex justify-center font-bold text-2xl">Rate This Product</div>
      <Rate></Rate>
    </div>
    <div class="w-full">
      <Details></Details>
    </div>
    <div class="w-full flex flex-col mt-14">
      <Comments></Comments>
    </div>

    <div class="h-64"></div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/products.js';
import { useRoute, onBeforeRouteLeave } from 'vue-router';

const hero_active = ref(true);

onBeforeRouteLeave(() => {
  hero_active.value = false;
});

const route = useRoute();

const infos = ref([
  {
    title: 'Order No',
    value: '408-7776348-2943536'
  },
  {
    title: 'Delivery Date',
    value: 'He?'
  },
  {
    title: 'Delivery Adress',
    value: 'He?'
  },
  {
    title: 'Dealer',
    value: 'He?'
  },
  {
    title: 'Card Number',
    value: 11111111111
  }
]);
const summaries = ref([
  {
    title: 'Product Subtotal',
    value: 939
  },
  {
    title: 'Cargo and Packaging',
    value: 0
  },
  {
    title: 'Taxes',
    value: 60
  }
]);

function Total() {
  let total = 0;
  summaries.value.forEach(summary => {
    total += summary.value;
  });
  return total;
}

const products = useProductStore();
const image_url = products.getImageByName(route.params.order);
const product = ref(products.getProduct(route.params.order));

const states = ref([
  {
    name: 'Shipped',
    progress: 100
  },
  {
    name: 'Out to be Delivered',
    progress: 100
  },
  { name: 'Delivered', progress: 20 }
]);
</script>

<style scoped>
.progress-bar {
  background-color: var(--secondary);
}
</style>

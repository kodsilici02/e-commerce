<template>
  <div class="w-full flex flex-wrap gap-2 p-4" style="color: var(--text-color)">
    <div class="w-full lg:basis-1/4 h-[350px] flex justify-center items-center 2xl:mt-10">
      <img :src="image_url" class="object-center object-contain image" ref="image_element" />
    </div>
    <!--Progress Bar and order details-->
    <div class="w-full lg:basis-2/3 flex flex-wrap content-start lg:mt-10 gap-3">
      <div class="w-full px-10">
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
      <div class="w-full flex flex-wrap p-2 gap-2 mt-12">
        <div class="flex-1 flex flex-wrap gap-2">
          <div class="w-full text-2xl font-bold">Order Summary</div>
          <div v-for="info in infos" class="w-full flex items-center gap-2">
            <div class="text-lg font-[700]">{{ info.title }}:</div>
            <div class="text-lg font-[500]">{{ info.value }}</div>
            <ClientOnly v-if="info.icon">
              <font-awesome :icon="info.icon"></font-awesome>
            </ClientOnly>
          </div>
        </div>
        <div class="flex-1 content-start flex flex-wrap gap-2">
          <div class="w-full text-2xl font-bold">{{ product.name }}</div>
          <div v-for="summary in summaries" class="w-full flex items-center gap-2">
            <div class="text-lg font-[700]">{{ summary.title }}:</div>
            <div class="text-lg">{{ summary.value }}</div>
            <ClientOnly>
              <font-awesome :icon="['fas', 'dollar-sign']"></font-awesome>
            </ClientOnly>
          </div>
          <div class="w-full flex items-center gap-2">
            <div class="text-lg font-[700]">Total:</div>
            <div class="text-lg">{{ Total() }}</div>
          </div>
        </div>
        <div class="h-fit w-28 flex items-center gap-1 text-xl font-bold">
          <ClientOnly>
            <font-awesome :icon="['fas', 'dollar-sign']"></font-awesome>
          </ClientOnly>
          <div>999</div>
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
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/products.js';
import { useOrderImage } from '@/stores/orders.js';
import { useRoute, onBeforeRouteLeave } from 'vue-router';

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
    title: 'Payment Method',
    icon: ['fab', 'cc-visa']
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

const order_image_state = useOrderImage();
const products = useProductStore();
const image_url = products.getImageByName(route.params.order);
const image_element = ref();
const product = ref(products.getProduct(route.params.order));

onMounted(() => {
  order_image_state.hero_image = image_url;
});
onBeforeRouteLeave((to, from) => {
  if (to.fullPath != '/settings/orders') {
    image_element.value.classList.remove('image');
  }
});

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
.image {
  view-transition-name: view-image;
  contain: paint;
}
.progress-bar {
  background-color: var(--secondary);
}
</style>

<template>
  <div class="w-full h-52 flex flex-wrap gap-2 p-4" style="color: var(--text-color)">
    <div class="basis-1/4 flex justify-center items-center">
      <img :src="image_url" class="object-center object-contain image" ref="image_element" />
    </div>
    <div class="basis-1/2 relative flex h-fit items-center">
      <div class="h-[13px] w-[13px] rounded-full thumb transition-colors duration-200" style="background-color: var(--secondary)">
        <div class="relative w-full h-full flex justify-center">
          <div class="absolute top-3 text-center" style="color: var(--success)">Order Confirmed</div>
        </div>
      </div>
      <div v-for="(state, index) in states" :key="index" class="flex-1 h-[3px] flex items-center relative" ref="progress_bar">
        <div class="absolute right-0 h-3 w-3 rounded-full thumb transition-colors duration-200" style="background-color: var(--text-gray)">
          <div class="relative w-full h-full flex justify-center">
            <div class="absolute top-3 w-24 text-center state-text transition-colors duration-200">
              {{ state.name }}
            </div>
          </div>
        </div>
        <div class="h-full progress-bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { useProductStore } from '@/stores/products.js';
import { useOrderImage } from '@/stores/orders.js';
import { useRoute, onBeforeRouteLeave } from 'vue-router';

const route = useRoute();
const router = useRouter();

const order_image_state = useOrderImage();
const products = useProductStore();
const image_url = products.getImageByName(route.params.order);
const image_element = ref();

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

const tl1 = gsap.timeline({ paused: true, ease: 'linear' });

const progress_bar = ref();
onMounted(async () => {
  setTimeout(() => {
    states.value.forEach((state, index) => {
      let bar = progress_bar.value[index].querySelector('.progress-bar');
      let thumb = progress_bar.value[index].querySelector('.thumb');
      let text = progress_bar.value[index].querySelector('.state-text');
      gsap.set(bar, { width: 0 });
      tl1.to(bar, { width: state.progress + '%', duration: 0.8 });
      if (state.progress == 100) {
        tl1.to(thumb, { backgroundColor: 'var(--secondary)' });
        tl1.to(text, { color: 'var(--success)' }, '<');
      }
    });
    tl1.play();
  }, 400);
});
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

<template>
  <div class="w-full flex flex-wrap">
    <div v-if="deneme" class="w-full gap-4 flex flex-wrap">
      <div class="w-full flex flex-col items-center justify-center">
        <Vue3Lottie
          ref="lottie"
          :height="400"
          animationLink="https://lottie.host/25a75051-6b06-44b2-a75d-037f747f83c2/p6eHupD7HS.json"
          :autoPlay="true"
          :loop="true"
          direction="alternate" />
        <div class="text-2xl text-center w-[50%]" style="color: var(--text-color); font-weight: 600">
          You don't have any orders, but this is a very good time to start shopping
        </div>
      </div>
      <div class="w-full flex justify-center">
        <NavigateButton :to="'/shop'" :text="'Start Shopping'"></NavigateButton>
      </div>
    </div>
    <div v-for="(item, index) in items" class="w-full flex flex-wrap gap-1 px-10 relative">
      <div class="absolute left-0 top-0 h-full flex items-center flex-col">
        <div
          class="mt-[6px] z-10 cursor-pointer transition-transform duration-200"
          :class="{ 'rotate-90': item.isOpen }"
          @click="toggleCategory(index)">
          <IconsTimeLine></IconsTimeLine>
        </div>
        <div class="h-full w-[2px] bg-black absolute z-0 top-0"></div>
      </div>
      <div class="w-full mt-2 flex">
        <div class="cursor-pointer date transition-colors duration-300" @click="toggleCategory(index)">Orders in {{ item.date }}</div>
      </div>
      <div class="w-full flex flex-wrap gap-1 overflow-hidden transition-all duration-200" ref="container">
        <div class="w-full flex flex-wrap gap-1 item-container">
          <NuxtLink
            :to="'/settings/orders/' + useNuxtApp().$convertName(order.name)"
            @click="addClass(orderindex, order.img)"
            v-for="(order, orderindex) in item.items"
            class="w-full flex flex-wrap cursor-pointer rounded-lg transition-colors duration-300 item-background">
            <div class="h-28 flex flex-wrap gap-2 overflow-hidden">
              <div class="w-32 h-full p-1 flex justify-center items-center overflow-hidden">
                <div class="flex-1 h-full flex justify-center overflow-hidden">
                  <img
                    ref="images"
                    :src="order.img"
                    :class="{ image: orderImage.hero_image == order.img }"
                    class="object-center object-contain h-full" />
                </div>
              </div>
            </div>
            <div class="flex-1 h-full flex flex-wrap content-start">
              <div class="w-full font-bold text-lg">{{ order.name }}</div>
              <div class="w-full flex gap-2 items-center">
                <ClientOnly>
                  <font-awesome :icon="['fas', 'location-dot']"></font-awesome>
                </ClientOnly>
                <div>Bla Bla</div>
              </div>
              <div class="w-full flex gap-2 items-center">
                <ClientOnly>
                  <font-awesome :icon="['fas', 'calendar-days']"></font-awesome>
                </ClientOnly>
                <div>Delivered on Aug 21, 2023</div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderImage } from '@/stores/orders.js';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
const deneme = false;
const orderImage = useOrderImage();

onBeforeRouteLeave((to, from) => {
  if (!to.fullPath.includes('/settings/orders') && document.querySelector('.image')) {
    document.querySelector('.image').classList.remove('image');
  }
});

const items = ref([
  {
    date: 'Aug 18, 2023',
    isOpen: true,
    items: [
      { name: 'Samsung Galaxy S22', img: 'https://cdn.vatanbilgisayar.com/images/Lp/samsung-s22/images/gallery-base-pink-gold/front.png' },
      { name: 'Xiaomi 13 Pro', img: 'https://resim.epey.com/839868/m_xiaomi-13-pro-2.png' }
    ]
  }
]);
onMounted(() => {
  items.value.forEach((item, index) => {
    let element = container.value[index].querySelector('.item-container').offsetHeight;
    container.value[index].style.maxHeight = element + 'px';
  });
});
const container = ref();

function toggleCategory(index) {
  if (items.value[index].isOpen) {
    container.value[index].style.maxHeight = 0;
  } else {
    let element = container.value[index].querySelector('.item-container').offsetHeight;
    container.value[index].style.maxHeight = element + 'px';
  }
  items.value[index].isOpen = !items.value[index].isOpen;
}
const images = ref();
function addClass(index, image) {
  const img = images.value[index];
  img.classList.add('image');
  orderImage.hero_image = image;
}
</script>

<style scoped>
.image {
  view-transition-name: view-image;
  contain: paint;
}
.item-background:hover {
  background-color: var(--background-hover);
}
.date:hover {
  color: var(--secondary);
}
</style>

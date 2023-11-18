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
    <div v-for="(item, index) in items" class="w-full flex flex-wrap gap-1 px-5 relative">
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
        <button class="cursor-pointer date transition-colors duration-300" @click="toggleCategory(index)">Orders in {{ item.date }}</button>
      </div>
      <div class="w-full flex flex-wrap gap-1 overflow-hidden transition-all duration-200" ref="container">
        <div class="w-full flex flex-wrap gap-1 item-container">
          <Accordeon :open="item.isOpen">
            <NuxtLink
              :to="'/settings/orders/' + useNuxtApp().$convertName(order.name)"
              @click="addClass(order.img)"
              v-for="(order, orderindex) in item.items"
              class="w-full flex cursor-pointer rounded-lg transition-colors duration-300 background">
              <div class="w-32 h-32 flex justify-center p-1">
                <SkeletonImg
                  :hero="hero_image == order.img ? 'hero_image' : ''"
                  :src="order.img"
                  class="flex-1 flex justify-center h-full rounded-lg overflow-hidden p-1"></SkeletonImg>
              </div>
              <div class="flex-1 h-full flex flex-wrap content-start gap-2 md:gap-1 text-xs md:text-base mt-2 md:mt-0">
                <div class="w-full font-bold text-sm md:text-lg">{{ order.name }}</div>
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
          </Accordeon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderImage } from '@/stores/orders.js';
const deneme = false;

const hero_image = ref('');
function addClass(image) {
  hero_image.value = image;
}

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

items.value.forEach(item => {
  item.items.map(order => {
    return { ...order, loaded: false };
  });
});

function toggleCategory(index) {
  items.value[index].isOpen = !items.value[index].isOpen;
}
</script>
<style>
.hero_image {
  view-transition-name: deneme;
}
</style>

<style scoped>
.background:hover {
  background-color: var(--background-hover);
}
.date:hover {
  color: var(--secondary);
}
</style>

<template>
  <div class="w-full flex">
    <ShoppingFilter @update-filters="applyFilters"></ShoppingFilter>
    <div class="flex-1 flex flex-wrap items-start justify-start bg-green-300] mt-1 p-1" style="color: var(--text-white)">
      <TransitionGroup
        name="list"
        tag="div"
        class="flex-1 flex flex-wrap items-start justify-start mt-1 p-1"
        style="color: var(--text-white)"
        @before-leave="itemLeave">
        <div class="w-full h-full relative" :key="'aaaa'">
          <client-only>
            <Transition name="fade">
              <div v-if="filteredItems.length == 0" class="w-full flex flex-col items-center justify-center">
                <Vue3Lottie
                  :height="500"
                  animationLink="https://lottie.host/25a75051-6b06-44b2-a75d-037f747f83c2/p6eHupD7HS.json"
                  :autoPlay="true" />
                <div class="text-2xl" style="color: var(--text-color)">There is no product with the features you are looking for</div>
              </div></Transition
            >
          </client-only>
        </div>
        <div
          v-for="(item, index) in filteredItems"
          :key="item.name"
          class="h-[300px] md:h-[400px] basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex p-2 transition-transform duration-500 cursor-pointer hover:scale-[1.02] overflow-hidden">
          <div class="h-full w-full rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative">
            <div class="absolute top-0 left-0 w-full h-full purchase-layer rounded-lg transition-[background-color] duration-500 z-[2]">
              <div class="w-full h-full flex justify-center items-center">
                <NuxtLink :to="'/shop/' + convertName(item.name)">
                  <div
                    class="w-36 h-10 bg-slate-400 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg"
                    style="border-radius: 35px"
                    @click="deneme(index)">
                    Purchase Now
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="absolute top-1 right-4">
              <div class="flex gap-1 items-center md:text-lg">
                <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>{{ item.price }}
              </div>
            </div>
            <div class="text-lg md:text-2xl h-14 w-full flex justify-center items-center font-code-next px-2 mt-4">{{ item.name }}</div>
            <div
              class="flex-1 p-2"
              :style="{ 'background-image': `url(${item.img})` }"
              style="background-size: contain; background-repeat: no-repeat; background-position: center"></div>
            <div
              class="h-12 w-full font-code-next text-xs md:text-base font-bold flex flex-wrap px-2 justify-center items-center gap-2 sm:gap-x-3 mb-2">
              <div class="flex gap-1 items-center">
                <ClientOnly><font-awesome :icon="['fas', 'battery-full']" /></ClientOnly>3200mAh
              </div>
              <div class="flex gap-1 items-center">
                <ClientOnly><font-awesome :icon="['fas', 'compact-disc']" /></ClientOnly>{{ item.memory }}
              </div>
              <div class="flex gap-1 items-center">
                <ScreenSizeIcon :height="20" :width="20" :color="'aliceblue'"></ScreenSizeIcon>
                6.7 Inc
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
const router = useRouter();
let timeline;

const items = ref([
  { name: 'Iphone 14 Pro', brand: 'Iphone', price: 999, memory: 128, img: '../../assets/deneme.png' },
  {
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',

    price: 600,
    memory: 64,
    img: 'https://cdn.vatanbilgisayar.com/images/Lp/samsung-s22/images/gallery-base-pink-gold/front.png'
  },
  {
    name: 'Xiaomi 13 Pro',
    brand: 'Xiaomi',
    price: 1500,
    memory: 512,
    img: 'https://resim.epey.com/839868/m_xiaomi-13-pro-2.png'
  }
]);

const filteredItems = ref(items.value);
function applyFilters(filters) {
  // Filter items based on the 'price' filter
  const { min, max } = filters.price;
  let filteredItemsTemp = items.value.filter(item => item.price >= min && item.price <= max);

  // Filter items based on selected subcategories
  if (filters.brands.include) {
    // If 'include' is true, show only the selected brands
    filteredItemsTemp = filteredItemsTemp.filter(item => filters.brands.brands.includes(item.brand));
  } else if (filters.brands.include === false) {
    // If 'include' is false, remove the selected brands from the list
    filteredItemsTemp = filteredItemsTemp.filter(item => !filters.brands.brands.includes(item.brand));
  }

  // Apply other filters here, such as brand or category
  // if (filters.brand) {
  //   filteredItemsTemp = filteredItemsTemp.filter(item => item.brand === filters.brand);
  // }

  // Update the filteredItems value
  filteredItems.value = filteredItemsTemp;
}

function convertName(name) {
  return name.toLowerCase().replace(/ /g, '-');
}

const box = ref();
let animationPromiseResolve;
const animationPromise = new Promise(resolve => {
  animationPromiseResolve = resolve;
});
function leaveAnimation(index) {
  timeline = gsap.timeline({
    onComplete: () => {
      animationPromiseResolve();
    }
  });
  const photoElement = box.value[index];
  const top = photoElement.getBoundingClientRect().top;
  const left = photoElement.getBoundingClientRect().left;
  console.log(top, left);
  timeline.fromTo(photoElement, { position: 'fixed', top: top, left: left }, { position: 'fixed', top: 360, left: 205, duration: 1 });
}
function deneme(index) {
  //leaveAnimation(index);
}

// router.beforeEach((to, from, next) => {
//   animationPromise.then(() => {
//     next();
//   });
// });

function itemLeave(el) {
  el.style.setProperty('--width', `${el.offsetWidth}px`);
}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-100%);
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

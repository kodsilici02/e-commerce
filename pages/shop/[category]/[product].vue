<template>
  <div class="w-full flex p-2 gap-2" style="color: var(--text-color)">
    <div class="flex-1 flex flex-wrap p-2 gap-2">
      <div class="flex w-full lg:basis-2/4" id="images">
        <div class="hidden lg:flex flex-col gap-2 h-[70vh] overflow-hidden">
          <div v-for="(image, index) in images" class="flex-1 w-40 cursor-pointer" @click="changeImage(image)">
            <div class="w-full h-full">
              <img class="w-full h-full object-center object-contain" :src="image" />
            </div>
          </div>
        </div>
        <!--Actual Image-->
        <div class="flex-1 h-[70vh] flex justify-center items-center z-0">
          <Transition name="slide-up" mode="out-in"
            ><img class="object-center object-contain image actual-image" :key="activeImage" :src="activeImage"
          /></Transition>
        </div>
      </div>
      <div class="flex-1 flex flex-wrap content-start items-center justify-center gap-x-4 gap-y-3 font-code-next font-bold">
        <div class="w-full justify-center flex text-2xl">Iphone 14 Pro</div>
        <!--General Info-->
        <div class="w-full flex flex-wrap gap-x-4 gap-y-3 border-b-2 pb-4 items-center justify-center">
          <div
            v-for="(info, index) in generalInfo"
            class="flex text-xs text-center lg:text-base basis-1/4 xl:basis-1/6 flex-col items-center justify-center">
            <div class="flex gap-1 items-center justify-center">
              <IconsResolution v-if="info.resolution"></IconsResolution>
              <IconsScreenSize v-if="info.exceptional" :width="20"></IconsScreenSize>
              <ClientOnly v-if="info.icon"><font-awesome :icon="info.icon"></font-awesome></ClientOnly>
              {{ info.name }}
            </div>
            <ClientOnly v-if="info.checkIcon"><font-awesome :icon="['fa', 'circle-check']"></font-awesome></ClientOnly>
            {{ info.value }}
          </div>
        </div>
        <!--Options Section-->
        <div class="w-full flex flex-wrap gap-1 mt-2">
          <div class="w-full flex flex-col">
            <div class="text-lg font-bold">Memory Options</div>
            <div class="w-full flex gap-1 mt-2" style="color: var(--text-white)">
              <div class="p-2 px-3 rounded-lg cursor-pointer options-button transition-colors duration-200">128 GB</div>
              <div class="p-2 px-3 rounded-lg cursor-pointer options-button transition-colors duration-200">256 GB</div>
              <div class="p-2 px-3 rounded-lg cursor-pointer options-button transition-colors duration-200">512 GB</div>
              <div class="p-2 px-3 rounded-lg cursor-pointer options-button transition-colors duration-200">1 TB</div>
            </div>
          </div>
          <div class="w-full flex flex-col">
            <div class="text-lg font-bold mt-2">Color Options</div>
            <div class="w-full flex gap-1 mt-2">
              <div
                class="w-10 h-10 rounded-full cursor-pointer color-button duration-200 border border-black"
                style="background-color: #f4e8cf"></div>
              <div
                class="w-10 h-10 rounded-full cursor-pointer color-button duration-200 border border-black"
                style="background-color: #f1f3f2"></div>
              <div
                class="w-10 h-10 rounded-full cursor-pointer color-button duration-200 border border-black"
                style="background-color: #6c6376"></div>
              <div
                class="w-10 h-10 rounded-full cursor-pointer color-button duration-200 border border-black"
                style="background-color: #504f4d"></div>
            </div>
          </div>
          <div class="w-full flex-1 flex flex-col">
            <div class="text-lg font-bold mt-2">About</div>
            <div class="flex flex-col gap-1 mt-2">
              <div v-for="text in aboutTexts">
                <ClientOnly><font-awesome style="color: var(--secondary-light)" :icon="['fa', 'circle']"></font-awesome></ClientOnly>
                {{ text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--VueChart-->
      <div class="w-full flex flex-col mt-10">
        <div class="">Price History</div>
        <VueChart></VueChart>
      </div>
      <!--Recommendeds-->
      <div class="w-full mt-10">
        <div class="flex text-2xl w-full">Recommended</div>
        <Recommended></Recommended>
      </div>
      <!--Rest of the Content-->

      <div class="w-full h-20"></div>
    </div>
    <!--SideNav-->
    <SidebarOrderSidebar @toggleLocationModal="toggleLocationModal"></SidebarOrderSidebar>
    <!--Modals-->
    <Transition name="modal">
      <SelectLocation v-if="isLocationModalOpen" @toggleModal="toggleLocationModal"></SelectLocation>
    </Transition>
    <Transition name="component_space">
      <SideBarSpace v-if="isLocationModalOpen" @handleClick="toggleLocationModal"></SideBarSpace>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useProductStore } from '@/stores/products.js';

const route = useRoute();
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.fullPath == '/shop/' + route.params.category) {
    document.querySelector('.actual-image').classList.add('image');
  }
  next();
});
const products = useProductStore();
const image_url = 'https://www.kvk.com/images/Product/23092022151344_ip14promdeeppurple.png';
onMounted(() => {
  products.hero_image = image_url;
  setTimeout(() => {
    document.querySelector('.actual-image').classList.remove('image');
  }, 10);
});

const aboutTexts = [
  '6.1 inch Super Retina XDR display with Always On and ProMotion',
  'Dynamic Island, a magical way to experience your iPhone',
  '48MP Main camera with up to 4x the resolution',
  'Cinematic mode shooting 4K Dolby Vision at up to 30 frames per second',
  'Motion mode for smooth, jitter-free videos',
  'All-day battery life and up to 23 hours of video playback'
];

const generalInfo = [
  {
    exceptional: true,
    name: 'Screen Size',
    value: '6.7 Inc'
  },
  {
    icon: ['fa', 'compact-disc'],
    name: 'Memory',
    value: '128 GB'
  },
  {
    icon: ['fa', 'memory'],
    name: 'Ram',
    value: '8 GB'
  },
  {
    icon: ['fa', 'battery'],
    name: 'Battery',
    value: '3200 mAh'
  },
  {
    icon: ['fa', 'microchip'],
    name: 'CPU',
    value: ' 3.2gHz 6 Core'
  },
  {
    icon: ['fa', 'bolt-lightning'],
    name: 'Fast Charge',
    checkIcon: true
  },
  {
    icon: ['fa', 'camera'],
    name: 'Camera',
    value: '12 MP'
  },
  {
    resolution: true,
    name: 'Resolution',
    value: '1170x2532 (FHD+) Piksel'
  }
];
const images = ref([
  image_url,
  '../../assets/deneme.png',
  'https://store.ite.net/wp-content/uploads/2022/11/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-2__en-US.png',
  'https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14.png'
]);
const activeImage = ref(images.value[0]);

function changeImage(image) {
  activeImage.value = image;
}

const isLocationModalOpen = ref(false);
function toggleLocationModal() {
  isLocationModalOpen.value = !isLocationModalOpen.value;
}
</script>

<style scoped>
.image {
  view-transition-name: view-image;
  contain: paint;
}
.options-button {
  background-color: var(--secondary);
}
.options-button:hover {
  background-color: var(--secondary-light);
}
.color-button {
  transition: all 0.2s ease-in-out;
}
.color-button:hover {
  transform: translateY(-6px);
}
</style>

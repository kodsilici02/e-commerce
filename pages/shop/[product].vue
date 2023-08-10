<template>
  <div class="w-full flex p-2 gap-2" style="color: var(--text-color)">
    <div class="flex-1 flex flex-wrap p-2 gap-2">
      <div class="flex w-full lg:basis-2/4">
        <div class="hidden lg:flex flex-col gap-2 h-[70vh]">
          <div v-for="(image, index) in images" class="flex-1 w-40 cursor-pointer" @click="changeImage(image)">
            <img class="w-full h-full object-center object-cover" :src="image" />
          </div>
        </div>
        <!--Actual Image-->
        <div class="flex-1 h-[70vh] p-5 flex">
          <Transition name="slide-up" mode="out-in"
            ><img class="w-full h-full object-center object-cover" :key="activeImage" :src="activeImage"
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
                class="w-10 h-10 rounded-full cursor-pointer color-button transition-colors duration-200 border border-black"
                style="background-color: #f4e8cf"></div>
              <div
                class="w-10 h-10 rounded-full cursor-pointer color-button transition-colors duration-200 border border-black"
                style="background-color: #f1f3f2"></div>
              <div
                class="w-10 h-10 rounded-full cursor-pointer color-button transition-colors duration-200 border border-black"
                style="background-color: #6c6376"></div>
              <div
                class="w-10 h-10 rounded-full cursor-pointer color-button transition-colors duration-200 border border-black"
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
import { useRouter } from 'vue-router';
import pageTransition from '@/transitions/shopPage.js';

definePageMeta({
  pageTransition: pageTransition
});

import gsap from 'gsap';
let timeline;

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
  '../../assets/deneme.png',
  'https://netrinoimages.s3.eu-west-2.amazonaws.com/2022/12/08/1373191/426752/iphone_14_pro_max_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4402727_o.png',
  'https://w7.pngwing.com/pngs/961/642/png-transparent-iphone-14-pro.png'
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
.options-button {
  background-color: var(--secondary);
}
.options-button:hover {
  background-color: var(--secondary-light);
}
</style>

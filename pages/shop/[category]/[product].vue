<template>
  <div class="w-full flex p-2 gap-2" style="color: var(--text-color)">
    <div class="flex-1 flex flex-wrap p-2 gap-2">
      <div class="flex w-full lg:basis-2/4" id="images">
        <div class="hidden lg:flex flex-col gap-2 h-[70vh] overflow-hidden">
          <div v-for="(image, index) in product.images" class="w-40 basis-1/6 cursor-pointer" @click="changeImage(image, index)">
            <SkeletonImg :src="image" class="w-full h-full flex-1" img-class="object-contain object-center "></SkeletonImg>
          </div>
        </div>
        <!--Actual Image-->
        <div class="flex-1 h-[40vh] lg:h-[70vh] overflow-hidden flex justify-center items-center z-0">
          <div class="h-fit w-full overflow-hidden">
            <Transition :name="transitionName" mode="out-in">
              <img :class="{ deneme2: hero_active }" :key="activeImage" :src="activeImage"
            /></Transition>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-wrap content-start items-center justify-center gap-x-4 gap-y-3 font-code-next font-bold">
        <div class="w-full justify-center flex text-2xl">Iphone 14 Pro</div>
        <!--General Info-->
        <div class="w-full flex flex-wrap gap-y-3 border-b-2 pb-4 items-center justify-center">
          <div
            v-for="(info, index) in generalInfo"
            class="flex text-xs text-center lg:text-base basis-1/4 flex-col items-center justify-center">
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
            <div class="w-full text-xs lg:text-base flex gap-1 mt-2" style="color: var(--text-white)">
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
            <div class="flex flex-col gap-1 mt-2 text-xs lg:text-base">
              <div v-for="text in product.about">
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
      <div class="w-full">
        <Details></Details>
      </div>
      <!--Recommendeds-->
      <div class="w-full mt-10">
        <div class="flex text-2xl w-full">Recommended</div>
        <Recommended></Recommended>
      </div>
      <div class="w-full flex flex-col mt-14">
        <Comments></Comments>
      </div>
      <!--Rest of the Content-->
      <div class="w-full h-20"></div>
    </div>
    <!--SideNav-->
    <SidebarOrderSidebar :address="getAddress" @toggleLocationModal="toggleLocationModal"></SidebarOrderSidebar>
    <!--Modals-->
    <Transition name="modal">
      <Modal v-if="isLocationModalOpen" :max_width="calculateWidth()" :width="calculateWidth()">
        <SelectLocation @select="changeAddress"></SelectLocation>
      </Modal>
    </Transition>
    <Transition name="component_space">
      <SideBarSpace v-if="isLocationModalOpen" @handleClick="toggleLocationModal"></SideBarSpace>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useProductStore } from '@/stores/products.js';
import { useAddressesStore } from '@/stores/addresses';
import { storeToRefs } from 'pinia';

const addresses_store = storeToRefs(useAddressesStore());

function calculateWidth() {
  if (window.innerWidth <= 768) {
    return 350;
  }
  if (window.innerWidth <= 1024) {
    return 500;
  }
  if (window.innerWidth <= 1280) {
    return 750;
  }
  if (window.innerWidth <= 1536) {
    return 1000;
  }
}

const route = useRoute();
const product = useNuxtApp().$getProduct(route.params.product);

const hero_active = ref(true);
onBeforeRouteLeave((to, from) => {
  hero_active.value = false;
});

const products = useProductStore();
onMounted(() => {
  products.hero_image = product.images[0];
});

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
const images = ref(product.images);
const activeImage = ref(images.value[0]);
const activeImageIndex = ref(0);
const transitionName = ref('up');

function changeImage(image, index) {
  activeImage.value = image;
  if (index > activeImageIndex.value) {
    transitionName.value = 'down';
  } else {
    transitionName.value = 'up';
  }
  activeImageIndex.value = index;
}

const selectedAddressIndex = ref(null);
const isLocationModalOpen = ref(false);
function toggleLocationModal() {
  isLocationModalOpen.value = !isLocationModalOpen.value;
}

function changeAddress(index) {
  selectedAddressIndex.value = index;
  toggleLocationModal();
}

const getAddress = computed(() => {
  if (selectedAddressIndex.value == null) {
    return addresses_store.addresses.value.find(address => address.default == true);
  } else {
    return addresses_store.addresses.value[selectedAddressIndex.value];
  }
});
</script>

<style scoped>
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

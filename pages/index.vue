<template>
  <div class="w-full h-full flex p-5">
    <Card class="h-[300px] md:h-[400px] basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex p-4 cursor-pointer" background_color="var(--primary)">
      <template v-slot:main>
        <div class="w-full h-full relative">
          <div class="absolute top-1 right-4">
            <div class="flex gap-1 items-center text-xs sm:text-lg">
              <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>999
            </div>
          </div>
          <div class="text-xs sm:text-2xl text-center h-14 w-full flex justify-center items-center px-2 mt-4">aaa</div>
          <div class="flex-1 w-full flex justify-center items-center overflow-hidden">
            <SkeletonImg class="flex-1 flex justify-center h-full rounded-lg overflow-hidden"></SkeletonImg>
          </div>
          <div
            class="h-12 w-full text-xs md:text-base font-bold flex flex-wrap px-2 justify-center items-center gap-1 md:gap-2 sm:gap-x-3 mb-2">
            <div class="flex gap-1 items-center">
              <ClientOnly><font-awesome :icon="['fas', 'battery-full']" /></ClientOnly>aaaa mAh
            </div>
            <div class="flex gap-1 items-center">
              <ClientOnly><font-awesome :icon="['fas', 'compact-disc']" /></ClientOnly>aaaa GB
            </div>
            <div class="flex gap-1 items-center">
              <IconsScreenSize :height="20" :width="20" :color="'aliceblue'"></IconsScreenSize>
              aaaaa Inch
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const items = ref(5);
const deneme = ref(true);

const open = ref(true);
</script>

<style></style>

<template>
  <div class="w-full flex">
    <ShoppingFilter></ShoppingFilter>
    <div class="flex-1 flex flex-wrap items-start justify-start bg-green-300] mt-1 p-1">
      <div
        v-for="item in items"
        class="h-[400px] basis-1/4 flex p-2 transition-transform duration-500 cursor-pointer hover:scale-[1.02] relative">
        <div class="h-full w-full bg-cyan-200 rounded-lg flex flex-col">
          <div class="absolute top-3 right-4">
            <div class="flex gap-1 items-center text-lg">
              <ClientOnly><font-awesome :icon="['fas', 'dollar-sign']" /></ClientOnly>5000
            </div>
          </div>
          <div class="text-2xl h-14 w-full flex justify-center items-center font-code-next px-2 mt-4">Iphone 14 Pro</div>
          <div
            class="flex-1 p-2"
            style="
              background-image: url('../../assets/deneme.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
            "></div>
          <div class="h-12 w-full font-code-next text-base font-bold flex px-2 justify-center items-center gap-4">
            <div class="flex gap-1 items-center">
              <ClientOnly><font-awesome :icon="['fas', 'battery-full']" /></ClientOnly>3200mAh
            </div>
            <div class="flex gap-1 items-center">
              <ClientOnly><font-awesome :icon="['fas', 'memory']" /></ClientOnly>128gb
            </div>
            <div class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
              </svg>
              6.7 Inc
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(['a']);
</script>

<style scoped></style>

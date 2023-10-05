<template>
  <div class="w-full h-full flex flex-row-reverse md:flex-row flex-wrap p-1" style="color: var(--text-color)">
    <div class="basis-3/4 h-full flex flex-wrap"></div>
    <div class="flex-1 h-full flex flex-wrap p-2 justify-center overflow-hidden rounded-lg border border-gray-300">
      <div class="w-full h-1/4 flex flex-wrap justify-center items-center p-2">
        <div class="w-full flex justify-end pr-3">
          <TooltipBottom
            ><ClientOnly><font-awesome :icon="['fas', 'right-from-bracket']" class="text-xl" /></ClientOnly
          ></TooltipBottom>
        </div>
        <div class="h-36 w-36 rounded-full relative mt-10">
          <button
            class="absolute group -top-1 cursor-pointer right-3 w-7 h-7 rounded-full flex justify-center items-center"
            style="background-color: var(--background); color: var(--text-color)">
            <ClientOnly
              ><font-awesome
                :icon="['fas', 'pen']"
                class="group-hover:-translate-y-1 group-hover:text-[var(--secondary)] transition-all duration-200"
            /></ClientOnly>
          </button>
          <img src="@/assets/mcTonight.jpg" class="w-full h-full rounded-full object-cover object-center" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

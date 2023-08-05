<template>
  <div class="p-2 w-52 relative rounded-md" style="color: var(--text-white); background-color: var(--secondary-light)">
    <div
      class="absolute right-[1px] top-[-9px]"
      style="
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 12px 10px 12px;
        border-color: transparent transparent var(--secondary-light) transparent;
      "></div>
    <div class="w-full">
      <client-only>
        <Vue3Lottie
          animationLink="https://lottie.host/64f95020-5a60-4a2e-8480-ea4401063985/OVa7knnGzU.json"
          :autoPlay="true"
          :height="130"
          :width="130" />
      </client-only>
    </div>
    <div class="w-full text-center font-yolk text-lg">There are No New Notifications</div>
  </div>
</template>

<script setup></script>

<style scoped></style>

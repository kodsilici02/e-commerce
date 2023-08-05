<template>
  <div class="p-3 w-52 relative rounded-md" style="color: var(--text-white); background-color: var(--secondary-light)">
    <div
      class="absolute right-[1px] top-[-7px]"
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
          animationLink="https://lottie.host/8893b74d-f9e4-45ad-9bba-95f47fdf67df/Xi3EeEIF21.json"
          :autoPlay="true"
          :height="150"
          :width="150" />
      </client-only>
    </div>
    <div class="w-full text-center font-yolk text-lg">Your Cart is Empty</div>
  </div>
</template>

<script setup></script>

<style scoped></style>

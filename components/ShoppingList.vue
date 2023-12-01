<template>
  <div
    class="p-3 w-full relative rounded-md overflow-hidden"
    style="color: var(--text-white); background-color: var(--secondary-light); box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.7)">
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

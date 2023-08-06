<template>
  <div class="w-full flex flex-wrap" style="color: var(--text-color)">
    <div class="w-full flex justify-center">
      <client-only>
        <Vue3Lottie
          animationLink="https://lottie.host/e5261c66-6add-417a-8446-4fda5a728bf4/vERPXY4jIc.json"
          :autoPlay="true"
          :height="200"
          :width="200" />
      </client-only>
    </div>
    <div class="w-full text-xl font-yolk flex justify-center">Your Cart is Empty</div>
    <div class="w-full flex justify-center">
      <NuxtLink to="/shop"
        ><div
          class="w-36 h-10 z-[3] purchase-button transition-all duration-500 flex justify-center items-center text-base md:text-lg cursor-pointer"
          style="border-radius: 35px; color: var(--text-white)">
          Start Shopping
        </div></NuxtLink
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.purchase-button {
  background-color: #3bc1e2;
}
.purchase-button:hover {
  background-color: #64d2ed;
}
.purchase-button:active {
  transition: background-color 0s ease;
  background-color: #648bed;
}
</style>

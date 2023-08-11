<template>
  <div class="w-full flex flex-wrap" style="color: var(--text-color)">
    <div class="w-full flex justify-center">
      <client-only>
        <Vue3Lottie
          animationLink="https://lottie.host/64f95020-5a60-4a2e-8480-ea4401063985/OVa7knnGzU.json"
          :autoPlay="true"
          :height="250"
          :width="250" />
      </client-only>
    </div>
    <div class="w-full text-xl font-yolk flex justify-center">There is No New Notifications</div>
  </div>
</template>

<script setup></script>

<style scoped></style>

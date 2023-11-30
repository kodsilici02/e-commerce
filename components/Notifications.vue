<template>
  <div
    class="p-2 w-52 relative rounded-md"
    style="color: var(--text-white); background-color: var(--secondary-light); box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.7)">
    <div class="w-full">
      <client-only>
        <Vue3Lottie
          animationLink="https://lottie.host/aa8e7f1f-700c-4cb7-a872-9baab731a71e/vf7hy8ZOKY.json"
          :autoPlay="true"
          :height="200"
          :width="200" />
      </client-only>
    </div>
    <div class="w-full text-center font-yolk text-lg">There are No New Notifications</div>
  </div>
</template>

<script setup></script>

<style scoped></style>

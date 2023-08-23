<template>
  <div class="w-full flex gap-4 flex-wrap">
    <div class="w-full flex flex-col items-center justify-center">
      <Vue3Lottie
        ref="lottie"
        :height="400"
        animationLink="https://lottie.host/25a75051-6b06-44b2-a75d-037f747f83c2/p6eHupD7HS.json"
        :autoPlay="true"
        :loop="true"
        direction="alternate" />
      <div class="text-2xl text-center w-[50%]" style="color: var(--text-color); font-weight: 600">You don't have any returned orders</div>
    </div>
    <div class="w-full flex justify-center">
      <NavigateButton :to="'/settings/orders'" :text="'All Orders'" @handleClick="$emit('handleClick')"></NavigateButton>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

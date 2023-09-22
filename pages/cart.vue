<template>
  <div class="w-full h-full flex content-start items-center" style="color: var(--text-color)">
    <div class="w-full flex flex-wrap mb-12">
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
        <NavigateButton :to="'/shop'" :text="'Start Shopping'"></NavigateButton>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

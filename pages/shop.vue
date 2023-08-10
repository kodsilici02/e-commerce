<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
import transitionConfig from '@/transitions/transitionConfig';

definePageMeta({
  pageTransition: transitionConfig
});
</script>

<style scoped></style>

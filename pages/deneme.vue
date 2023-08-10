<template>
  <div class="w-full h-[100vh] flex flex-wrap"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import VTypical from 'vue-typical';
import transitionConfig from '@/transitions/transitionConfig';

definePageMeta({
  pageTransition: transitionConfig
});
</script>

<style scoped></style>

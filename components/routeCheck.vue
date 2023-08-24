<template>
  <div></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
router.beforeEach(() => {
  console.log('a');
});
</script>

<style scoped></style>

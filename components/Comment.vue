<template>
  <div class="w-full h-auto relative flex gap-3 p-2 items-center">
    <div class="h-14 w-14 rounded-full relative self-start">
      <img :src="profile_photo" class="w-full h-full rounded-full object-cover object-center" />
    </div>
    <div class="w-[70%] flex gap-4 items-center">
      <TextArea></TextArea>
      <div class="text-xl cursor-pointer transition-colors duration-300 hover:text-[var(--secondary)]">
        <ClientOnly>
          <font-awesome :icon="['fas', 'paper-plane']"></font-awesome>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js';
const auth = useAuthStore();
const profile_photo = auth.profilePhoto;
</script>

<style scoped></style>

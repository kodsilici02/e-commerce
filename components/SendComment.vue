<template>
  <div class="w-full h-auto relative flex gap-3 items-center">
    <div class="rounded-full h-10 md:h-14 w-10 md:2-14 relative self-start">
      <img :src="profile_photo" class="w-full h-full rounded-full object-cover object-center" />
    </div>
    <div class="w-[70%] flex gap-4 items-center">
      <TextArea :placeholder="placeholder"></TextArea>
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

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type a comment'
  }
});

const auth = useAuthStore();
const profile_photo = auth.profilePhoto;
</script>

<style scoped></style>

<template>
  <div class="w-full flex flex-wrap gap-3">
    <div class="w-full">
      <SendComment></SendComment>
    </div>
    <div class="w-full flex gap-2 relative">
      <div class="h-14 w-14 rounded-full relative self-start">
        <img :src="auth.profilePhoto" class="w-full h-full rounded-full object-cover object-center" />
      </div>
      <div class="flex-1 flex flex-col">
        <div class="w-full flex justify-start gap-3">
          <div class="text-base font-bold" style="color: var(--text-color)">Ananas Okan</div>
          <div class="flex gap-1 items-center" style="color: #fdd80d">
            <ClientOnly>
              <font-awesome v-for="n in stars" :key="n" :icon="['fas', 'star']"></font-awesome>
            </ClientOnly>
          </div>
        </div>
        <div class="w-full font-[600]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur fugiat fuga facere dignissimos labore voluptate unde eius
          voluptatum soluta.
        </div>
        <div class="w-full flex gap-3 text-lg items-center">
          <div class="flex gap-2 items-center">
            <ClientOnly>
              <TooltipBottom :text="'Like'">
                <font-awesome :icon="['fas', 'thumbs-up']"></font-awesome>
              </TooltipBottom>
              <div class="text-sm font-[600]">12</div>
            </ClientOnly>
          </div>
          <div class="flex gap-2 items-center">
            <ClientOnly>
              <TooltipBottom :text="'Dislike'">
                <font-awesome :icon="['fas', 'thumbs-down']"></font-awesome>
              </TooltipBottom>
              <div class="text-sm font-[600]">3</div>
            </ClientOnly>
          </div>
          <ClientOnly>
            <TooltipBottom :text="'Reply'">
              <font-awesome :icon="['fas', 'reply']"></font-awesome>
            </TooltipBottom>
          </ClientOnly>
        </div>
        <div class="w-full mt-1">
          <Replies></Replies>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js';
const auth = useAuthStore();

const stars = 4;
</script>

<style scoped></style>

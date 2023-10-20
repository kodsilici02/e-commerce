<template>
  <div class="w-full flex flex-wrap gap-3">
    <div class="w-full">
      <SendComment></SendComment>
    </div>
    <div v-for="(comment, index) in comments" :key="index" class="w-full flex gap-2 relative">
      <div class="h-10 w-10 md:h-14 md:w-14 rounded-full relative self-start">
        <img :src="auth.profilePhoto" class="w-full h-full rounded-full object-cover object-center" />
      </div>
      <div class="flex-1 flex flex-col">
        <div class="w-full flex justify-start gap-3">
          <div class="text-sm md:text-lg font-bold" style="color: var(--text-color)">Ananas Okan</div>
          <div class="flex gap-1 items-center" style="color: #fdd80d">
            <ClientOnly>
              <font-awesome v-for="n in stars" :key="n" :icon="['fas', 'star']"></font-awesome>
            </ClientOnly>
          </div>
        </div>
        <div class="w-full font-[600] text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur fugiat fuga facere dignissimos labore voluptate unde eius
          voluptatum soluta.
        </div>
        <div class="w-full flex gap-3 text-base md:text-lg items-center">
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
            <TooltipBottom @handle-click="toggleReply(index)" :text="'Reply'">
              <font-awesome :icon="['fas', 'reply']"></font-awesome>
            </TooltipBottom>
          </ClientOnly>
        </div>
        <Transition name="reply" mode="out-in">
          <div v-show="replyOpen[index]" class="w-full">
            <SendComment :radius="40" :placeholder="'Reply to this comment'"></SendComment>
          </div>
        </Transition>
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
const comments = ref([1, 2, 3, 4, 5]);
const replyOpen = ref([]);
onMounted(() => {
  for (let i = 0; i < comments.value.length; i++) {
    replyOpen.value.push(false);
  }
});

function toggleReply(index) {
  replyOpen.value[index] = !replyOpen.value[index];
}
</script>

<style scoped>
.reply-enter-from,
.reply-leave-to {
  opacity: 0;
  transform: translateX(-70px);
}
.reply-enter-to,
.reply-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.reply-enter-active,
.reply-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>

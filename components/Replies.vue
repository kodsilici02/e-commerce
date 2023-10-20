<template>
  <div class="w-full flex flex-wrap gap-0">
    <button
      @click="toggle"
      class="w-fit flex justify-center items-center gap-2 text-sm md:text-lg cursor-pointer transition-all duration-300 category-button hover:text-[var(--secondary)]">
      <div class="flex-1 flex-grow flex justify-center font-bold">
        <!-- Use ml-2 for adding left margin to create space between icon and text -->
        1 Replies
      </div>
      <div class="justify-center">
        <ClientOnly>
          <font-awesome
            :icon="['fas', 'chevron-down']"
            style="pointer-events: none"
            class="transition-transform duration-300"
            :style="{ transform: open ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
        </ClientOnly>
      </div>
    </button>
    <div class="w-full overflow-hidden transition-all duration-300" style="max-height: 0" ref="sub_category">
      <div class="sub-category">
        <!--Replies-->
        <div class="w-full flex gap-3 items-center">
          <div class="h-8 w-8 md:h-10 md:w-10 relative self-start">
            <img :src="auth.profilePhoto" class="w-full h-full rounded-full object-cover object-center" />
          </div>
          <div class="flex-1 flex flex-col">
            <div class="w-full text-sm md:text-lg font-bold" style="color: var(--text-color)">Ananas Okan</div>
            <div class="w-full font-[600] text-xs md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur fugiat fuga facere dignissimos labore voluptate unde
              eius voluptatum soluta.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const open = ref(false);
const sub_category = ref();

function toggle() {
  const element = sub_category.value;
  const height = element.querySelector('.sub-category').offsetHeight;
  if (open.value) {
    element.style.maxHeight = 0;
    element.style.marginTop = 0;
  } else {
    element.style.maxHeight = height + 'px';
    element.style.marginTop = 5 + 'px';
  }
  open.value = !open.value;
}
</script>

<style scoped></style>

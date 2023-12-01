<template>
  <div
    class="p-3 w-full relative rounded-md flex flex-wrap gap-1 overflow-hidden"
    style="color: var(--text-white); background-color: var(--secondary-light); box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.7)">
    <NuxtLink
      to="/settings/account"
      class="w-full p-1 flex gap-2 transition-colors duration-300 cursor-pointer hover:text-[var(--primary)] group">
      <img
        :src="profilePhoto"
        class="rounded-full w-8 h-8 object-center object-cover transition-transform duration-300 group-hover:scale-[1.1]" />
      <div class="flex-1 overflow-hidden font-[600]" style="white-space: nowrap; text-overflow: ellipsis">yazilimpanteri@gmail.com</div>
    </NuxtLink>
    <NuxtLink
      :to="item.link"
      v-for="item in items"
      class="w-full p-1 flex gap-3 transition-colors duration-300 cursor-pointer hover:text-[var(--primary)]">
      <div class="pl-1 w-6 flex justify-center items-center">
        <ClientOnly><font-awesome :icon="item.icon" class="text-xl" /></ClientOnly>
      </div>
      <div class="flex-1 overflow-hidden font-[600]" style="white-space: nowrap; text-overflow: ellipsis">{{ item.name }}</div>
    </NuxtLink>
    <button class="w-full flex gap-3 p-1 transition-colors duration-300 cursor-pointer hover:text-[var(--danger)]">
      <div class="pl-1 w-6 flex justify-center items-center">
        <ClientOnly><font-awesome :icon="['fas', 'right-from-bracket']" class="text-xl" /></ClientOnly>
      </div>
      <div class="flex-1 h-full flex font-[600]">Logout</div>
    </button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
const profilePhoto = useAuthStore().profilePhoto;
const emits = defineEmits(['handleClick']);

const items = [
  {
    name: 'Orders',
    icon: ['fas', 'cart-shopping'],
    link: '/settings/orders'
  },
  {
    name: 'Adresses',
    icon: ['fas', 'map'],
    link: '/settings/adresses'
  },
  {
    name: 'Payments',
    icon: ['fas', 'credit-card'],
    link: '/settings/payment'
  },
  {
    name: 'Message Center',
    icon: ['fas', 'envelope'],
    link: '/settings/message-center'
  },
  {
    name: 'Contact Us',
    icon: ['fas', 'phone'],
    link: '/settings/contact'
  }
];
</script>

<style scoped></style>

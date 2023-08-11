<template>
  <div class="w-full flex flex-col gap-1" style="color: var(--text-color)">
    <div class="w-full p-2 text-xl font-bold flex justify-center items-center mt-2">Settings</div>
    <NuxtLink
      :to="item.link"
      v-for="(item, index) in items"
      class="w-full transition-colors duration-200 flex items-center gap-2 p-2 link-items">
      <ClientOnly><font-awesome :icon="item.icon"></font-awesome></ClientOnly>
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
const items = [
  {
    name: 'Orders',
    icon: ['fas', 'cart-shopping'],
    link: '/settings/orders'
  },
  {
    name: 'Account and Security',
    icon: ['fas', 'circle-user'],
    link: '/settings/account'
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

<style scoped>
.router-link-exact-active {
  color: var(--secondary);
}
.link-items:hover {
  color: var(--primary);
}
</style>

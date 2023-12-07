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
    name: 'Products',
    icon: ['fas', 'boxes-stacked'],
    link: '/products'
  },
  {
    name: 'DashBoard',
    icon: ['fas', 'chart-line'],
    link: '/products/dashboard'
  },

  {
    name: 'Add Product',
    icon: ['fas', 'circle-plus'],
    link: '/products/add'
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

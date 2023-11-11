<template>
  <div
    class="fixed w-64 lg:w-80 h-full bg-gray-900 z-[1001] flex flex-wrap p-2 gap-2 content-start sidebar"
    style="color: var(--text-white)">
    <div v-for="(route, index) in routes" class="w-full flex flex-col justify-center items-center" ref="route_items">
      <NuxtLink
        v-if="!route.subRoutes"
        :to="route.link"
        class="w-full h-9 flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 category-button">
        <div class="flex basis-2/3 items-center justify-between gap-2 px-2">
          <div class="flex-1 flex justify-start items-center text-xl">
            <ClientOnly>
              <font-awesome :icon="route.icon" style="pointer-events: none" class="transition-transform duration-300"></font-awesome>
            </ClientOnly>
          </div>
          <div class="flex-1 flex justify-center text-xl">
            <!-- Use ml-2 for adding left margin to create space between icon and text -->
            {{ route.name }}
          </div>
          <div class="flex-1 justify-center text-xl"></div>
        </div>
      </NuxtLink>
      <Category
        v-if="route.subRoutes"
        @handle-click="
          () => {
            route.subRoutesOpen = !route.subRoutesOpen;
          }
        "
        :hover="true"
        :category-icon="route.icon"
        :title="route.name"
        :open="route.subRoutesOpen">
        <div v-for="(child, subCatindex) in route.subRoutes" class="w-full flex gap-1 justify-center text-base h-8 items-center">
          <NuxtLink :to="child.link" class="flex-1 text-center text-lg transition-colors duration-200 cursor-pointer child-route">
            {{ child.name }}
          </NuxtLink>
        </div>
      </Category>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const routes = ref([
  {
    name: 'Home',
    link: '/',
    icon: ['fas', 'home']
  },
  {
    name: 'Shop',
    link: '/shop',
    icon: ['fas', 'cart-shopping'],
    subRoutesOpen: false,
    subRoutes: [
      {
        name: 'Phones',
        link: '/shop/phones'
      },
      {
        name: 'Laptops',
        link: '/shop/laptops'
      },
      {
        name: 'Computers',
        link: '/shop/computers'
      },
      {
        name: 'Tablets',
        link: '/shop/tablets'
      }
    ]
  },
  {
    name: 'Settings',
    link: '/settings',

    icon: ['fas', 'gears'],
    subRoutesOpen: false,
    subRoutes: [
      {
        name: 'Account',
        link: '/settings/account'
      },
      {
        name: 'Orders',
        link: '/settings/orders'
      },

      {
        name: 'Adresses',
        link: '/settings/adresses'
      },
      {
        name: 'Payment',
        link: '/settings/payment'
      },
      {
        name: 'Message Center',
        link: '/settings/message-center'
      },
      {
        name: 'Contact Us',
        link: '/settings/contact'
      }
    ]
  }
]);
const route_items = ref();
</script>

<style scoped>
.sidebar {
  view-transition-name: main-sidenav;
  box-shadow: 0px 0px 20px 15px rgba(0, 0, 0, 0.8);
}
.router-link-active {
  color: var(--secondary);
}

.category-button:hover {
  color: var(--primary);
}
.child-route:hover {
  color: var(--primary);
}
</style>

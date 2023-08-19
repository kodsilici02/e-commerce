<template>
  <div
    class="fixed w-80 h-full bg-gray-900 z-[1001] flex flex-wrap p-2 gap-2 content-start"
    style="color: var(--text-white); view-transition-name: sidebar">
    <div v-for="(route, index) in routes" class="w-full flex flex-col justify-center items-center" ref="route_items">
      <NuxtLink
        v-if="!route.subRoutes"
        :to="route.link"
        class="w-full flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 category-button"
        @click="toggleCategory($event, index)">
        <div class="flex basis-1/2 items-center justify-between gap-2">
          <div class="flex-1 flex justify-start items-center">
            <ClientOnly>
              <font-awesome :icon="route.icon" style="pointer-events: none" class="transition-transform duration-300"></font-awesome>
            </ClientOnly>
          </div>
          <div class="flex-1 flex justify-start">
            <!-- Use ml-2 for adding left margin to create space between icon and text -->
            {{ route.name }}
          </div>
          <div class="flex-1 flex justify-center"></div>
        </div>
      </NuxtLink>

      <button
        v-if="route.subRoutes"
        class="w-full flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 category-button"
        @click="toggleCategory($event, index)">
        <div class="flex basis-1/2 items-center justify-between gap-2">
          <div class="flex-1 flex justify-start items-center">
            <ClientOnly>
              <font-awesome :icon="route.icon" style="pointer-events: none" class="transition-transform duration-300"></font-awesome>
            </ClientOnly>
          </div>
          <div class="flex-1 flex justify-start">
            <!-- Use ml-2 for adding left margin to create space between icon and text -->
            {{ route.name }}
          </div>
          <div class="flex-1 flex justify-center">
            <ClientOnly>
              <font-awesome
                :icon="['fas', 'chevron-down']"
                style="pointer-events: none"
                class="transition-transform duration-300"
                :style="{ transform: route.subRoutesOpen ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
            </ClientOnly>
          </div>
        </div>
      </button>
      <div
        v-if="route.subRoutes"
        class="w-full overflow-hidden transition-all duration-300 mt-1 sub-category-container"
        style="max-height: 0"
        ref="sub_category">
        <div class="sub-category">
          <div class="mr-[3px] py-2" style="background-color: rgba(0, 0, 0, 0.1)">
            <div v-for="(child, subCatindex) in route.subRoutes" class="w-full flex gap-1 justify-center text-base h-8 items-center">
              <NuxtLink :to="child.link" class="flex-1 text-center text-lg transition-colors duration-200 cursor-pointer child-route">
                {{ child.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
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
    icon: ['fas', 'gears']
  }
]);
function capitalizeFirstLetterFromPath(path) {
  const withoutSlash = path.substring(1); // Remove the initial slash
  return withoutSlash.charAt(0).toUpperCase() + withoutSlash.slice(1);
}

const sub_category = ref();
const route_items = ref();

function toggleCategory(event, index) {
  const element = route_items.value[index];
  const height = element.querySelectorAll('.sub-category')[0].offsetHeight;
  if (routes.value[index].subRoutesOpen) {
    element.querySelectorAll('.sub-category-container')[0].style.maxHeight = 0;
    routes.value[index].subRoutesOpen = !routes.value[index].subRoutesOpen;
  } else {
    element.querySelectorAll('.sub-category-container')[0].style.maxHeight = height + 'px';
    routes.value[index].subRoutesOpen = !routes.value[index].subRoutesOpen;
  }
}
</script>

<style scoped>
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

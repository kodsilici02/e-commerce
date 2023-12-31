<template>
  <!--Topbar shadow-->
  <div class="fixed top-0 left-0 w-full h-12 md:h-16 header-shadow z-[994]" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6)"></div>
  <!--TopBar-->
  <div
    class="sticky top-0 left-0 w-full h-12 md:h-16 flex justify-between p-3 gap-2 flex-grow-0 z-[999] sm:text-xl lg:text-2xl purple-background main-header-1">
    <div class="h-full flex items-center flex-1 justify-start">
      <ClientOnly>
        <font-awesome :icon="['fas', 'bars']" class="cursor-pointer icon" @click="store.toggleMainSidebar"></font-awesome
      ></ClientOnly>
    </div>
    <div class="h-full flex items-center justify-center flex-1">
      <SearchBarAnimated @updateValue="updateSearchValue"></SearchBarAnimated>
    </div>
    <div class="h-full flex gap-3 md:gap-4 items-center flex-1 justify-end">
      <Popover class="w-fit" :arrow-border-color="'var(--secondary-light)'" :arrow-color="'var(--secondary-light)'">
        <template v-slot:popover>
          <NuxtLink to="/settings/account">
            <ClientOnly><font-awesome :icon="['fas', 'circle-user']" class="" /></ClientOnly>
          </NuxtLink>
        </template>
        <template v-slot:content>
          <div class="w-52 text-base">
            <Account></Account>
          </div>
        </template>
      </Popover>
      <Popover class="w-fit" :arrow-border-color="'var(--secondary-light)'" :arrow-color="'var(--secondary-light)'">
        <template v-slot:popover>
          <NuxtLink to="/notifications" class="relative">
            <div
              class="absolute top-[-5px] right-[-5px] w-2 h-2 sm:w-4 sm:h-4 rounded-full text-xs flex justify-center items-center"
              style="background-color: var(--secondary-light)">
              0
            </div>
            <ClientOnly><font-awesome :icon="['fas', 'bell']" class="cursor-pointer" /></ClientOnly>
          </NuxtLink>
        </template>
        <template v-slot:content>
          <div class="w-52">
            <Notifications></Notifications>
          </div>
        </template>
      </Popover>
      <Popover class="w-fit" :arrow-border-color="'var(--secondary-light)'" :arrow-color="'var(--secondary-light)'">
        <template v-slot:popover>
          <NuxtLink to="/cart" class="relative">
            <div
              class="absolute top-[-5px] right-[-5px] w-2 h-2 sm:w-4 sm:h-4 rounded-full text-xs flex justify-center items-center"
              style="background-color: var(--secondary-light)">
              0
            </div>
            <ClientOnly><font-awesome :icon="['fas', 'basket-shopping']" class="" /></ClientOnly
          ></NuxtLink>
        </template>
        <template v-slot:content>
          <div class="w-52">
            <ShoppingList></ShoppingList>
          </div>
        </template>
      </Popover>
    </div>
  </div>
  <div
    v-if="route.fullPath == '/' && !store.isWindowSmall"
    class="w-full flex z-[97] justify-center items-center text-base lg:text-4xl font-yolk h-16 md:h-28 reverse-background purple-background px-4 text-center main-header-2">
    Everything You are Looking For is Here
  </div>
  <div
    class="w-full grid grid-cols-10 text-xs md:text-xl font-fester left-0 sticky top-12 md:top-16 h-12 z-[995] purple-background px-3 main-header-3"
    style="color: rgb(255, 255, 255); background-color: rgb(57, 102, 215); box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6)">
    <div class="h-full col-span-1 flex justify-start items-center gap-1">
      <Transition name="fade">
        <div
          v-show="sideNavButtonRoutes.includes(route.fullPath)"
          class="flex gap-1 items-center cursor-pointer md:hidden"
          @click="toggleFilterSidebar()">
          <ClientOnly><font-awesome :icon="['fas', 'filter']" /></ClientOnly>Filters
        </div>
      </Transition>
    </div>
    <div v-auto-animate class="h-full col-span-8 flex gap-1 justify-center items-center font-yolk relative">
      <NuxtLink
        :to="segment.link"
        v-for="(segment, index) in breadcrumbSegments"
        :key="segment.name"
        class="h-full col-span-1 text-[10px] transition-colors duration-200 hover:text-[var(--primary)] sm:text-sm md:text-lg lg:text-xl flex justify-start items-center gap-1">
        {{ segment.name }}
        <span v-if="index !== breadcrumbSegments.length - 1"> > </span>
      </NuxtLink>
    </div>
    <Transition name="fade">
      <div
        v-show="$route.fullPath == '/shop/' + route.params.category + '/' + route.params.product"
        class="flex gap-1 items-center justify-end cursor-pointer md:hidden"
        @click="toggleOrderSidebar()">
        <ClientOnly><font-awesome :icon="['fas', 'cart-shopping']" /></ClientOnly>Order
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useSidebarStore } from '@/stores/sidebar.js';
const route = useRoute();
const router = useRouter();
const breadcrumbSegments = ref([]);

onMounted(() => {
  updateBreadcrumb();
});
watch(
  () => route.path,
  () => {
    updateBreadcrumb();
  }
);
function updateBreadcrumb() {
  const pathSegments = route.path.split('/').filter(segment => segment !== '');
  breadcrumbSegments.value = [
    {
      name: 'Home',
      link: '/'
    },
    ...pathSegments.map((segment, index) => {
      return {
        name: segment,
        link: '/' + pathSegments.slice(0, index + 1).join('/')
      };
    })
  ];
}

const sideNavButtonRoutes = ['/shop/' + route.params.category];
const sideNavButtonState = ref();
router.beforeEach((to, from) => {
  if (sideNavButtonRoutes.includes(to.fullPath)) {
    sideNavButtonState.value = true;
  } else {
    sideNavButtonState.value = false;
  }
});

const store = useSidebarStore();

function toggleFilterSidebar() {
  store.toggleSidebar();
}

function toggleOrderSidebar() {
  store.toggleOrderSidebar();
}

const sidebar_Open = ref(false);
function toggleSidebar() {
  sidebar_Open.value = !sidebar_Open.value;
}

//Search Bar updates
function updateSearchValue(value) {}
</script>

<style scoped>
.icon {
  transition: transform 0.2s ease-in-out;
}
.icon:hover {
  transform: scale(1.15);
}
.cover {
  opacity: 0;
  background-color: var(--primary);
  transition: all 0.2s ease-in-out;
}

.item:hover .cover {
  opacity: 0.5;
}

.cover-button {
  opacity: 0;
  z-index: 1001;
  transition: all 0.2s ease-in-out;
}

.item:hover .cover-button {
  opacity: 1;
}

.header-shadow {
  view-transition-name: header-shadow;
}
.main-header-1 {
  view-transition-name: main-header-1;
}
.main-header-3 {
  view-transition-name: main-header-3;
}

.purple-background {
  background: linear-gradient(90deg, var(--secondary) 0%, var(--secondary-light) 100%);
}
.reverse-background.purple-background {
  background: linear-gradient(90deg, var(--secondary-light) 0%, var(--secondary) 100%);
}
.modal-Transition-enter-from,
.modal-Transition-leave-to {
  opacity: 0;
}
.modal-transition-enter-to,
.modal-Transition-leave-from {
  opacity: 1;
}
.modal-Transition-enter-active,
.modal-Transition-leave-active {
  transition: all 0.2s ease-in-out;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-100%);
}
.sidebar-enter-to,
.sidebar-leave-from {
  transform: translateX(0);
}
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>

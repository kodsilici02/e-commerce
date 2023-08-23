<template>
  <div class="w-full h-auto" style="color: var(--text-white)">
    <!--SideBar-->
    <Transition name="sidebar">
      <SideBar v-if="sidebar_Open"></SideBar>
    </Transition>
    <Transition name="component_space">
      <SideBarSpace v-if="sidebar_Open" @handleClick="toggleSidebar"></SideBarSpace>
    </Transition>

    <!--Topbar shadow-->
    <div class="fixed top-0 left-0 w-full h-12 md:h-16 header-shadow z-[99]" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6)"></div>
    <!--TopBar-->
    <div
      class="sticky top-0 left-0 w-full h-12 md:h-16 flex justify-between p-3 gap-2 flex-grow-0 z-[999] purple-background sm:text-2xl main-header-1">
      <div class="h-full flex items-center flex-1 justify-start">
        <ClientOnly> <font-awesome :icon="['fas', 'bars']" class="cursor-pointer" @click="toggleSidebar"></font-awesome></ClientOnly>
      </div>
      <div class="h-full flex items-center justify-center flex-1">
        <SearchBar @updateValue="updateSearchValue"></SearchBar>
      </div>
      <div class="h-full flex gap-3 md:gap-4 items-center flex-1 justify-end">
        <div class="h-full cursor-pointer flex items-center">
          <NuxtLink to="/homeprofile">
            <ClientOnly><font-awesome :icon="['fas', 'circle-user']" class="" /></ClientOnly>
          </NuxtLink>
        </div>
        <div
          class="relative h-full flex items-center cursor-pointer z-[999]"
          @mouseenter="openNotifications"
          @mouseleave="closeNotifications">
          <NuxtLink to="/notifications">
            <ClientOnly><font-awesome :icon="['fas', 'bell']" class="" /></ClientOnly>
          </NuxtLink>
          <div
            class="absolute top-[-5px] right-[-5px] w-4 h-4 rounded-full text-xs flex justify-center items-center"
            style="background-color: var(--secondary-light)">
            0
          </div>
          <div class="absolute top-10 right-0">
            <Transition name="modal-Transition">
              <Notifications v-if="isNotificationsOpen"></Notifications>
            </Transition>
          </div>
        </div>
        <div class="relative h-full flex items-center cursor-pointer" @mouseenter="openShoppingList" @mouseleave="closeShoppingList">
          <NuxtLink to="/cart"
            ><ClientOnly><font-awesome :icon="['fas', 'basket-shopping']" class="" /></ClientOnly
          ></NuxtLink>
          <div
            class="absolute top-[-5px] right-[-5px] w-4 h-4 rounded-full text-xs flex justify-center items-center"
            style="background-color: var(--secondary-light)">
            0
          </div>
          <div class="absolute top-10 right-0">
            <Transition name="modal-Transition">
              <ShoppingList v-if="isShoppingListOpen"></ShoppingList>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="route.fullPath == '/'"
      class="w-full flex z-[97] justify-center items-center text-base lg:text-4xl font-yolk h-16 md:h-28 reverse-background purple-background px-4 text-center main-header-2">
      Everything You are Looking For is Here
    </div>
    <div
      class="w-full grid grid-cols-5 text-xs md:text-xl font-fester left-0 sticky top-12 md:top-16 h-12 z-[100] purple-background px-3 main-header-3"
      style="color: rgb(255, 255, 255); background-color: rgb(57, 102, 215); box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6)">
      <div class="h-full col-span-1 flex justify-start items-center gap-1">
        <Transition name="fade">
          <div v-if="sideNavButtonState" class="flex gap-1 items-center cursor-pointer md:hidden" @click="toggleFilterSidebar()">
            <ClientOnly><font-awesome :icon="['fas', 'filter']" /></ClientOnly>Filters
          </div>
        </Transition>
      </div>

      <TransitionGroup name="text" tag="div" class="h-full col-span-3 flex gap-1 justify-center items-center font-yolk relative">
        <NuxtLink
          :to="segment.link"
          v-for="(segment, index) in breadcrumbSegments"
          :key="segment.name"
          class="h-full col-span-1 flex justify-start items-center gap-1">
          {{ segment.name }}
          <span v-if="index !== breadcrumbSegments.length - 1"> > </span>
        </NuxtLink>
      </TransitionGroup>
      <Transition name="fade">
        <div
          v-if="$route.fullPath == '/shop/' + route.params.category + '/' + route.params.product"
          class="flex gap-1 items-center justify-end cursor-pointer md:hidden"
          @click="toggleOrderSidebar()">
          <ClientOnly><font-awesome :icon="['fas', 'cart-shopping']" /></ClientOnly>Order
        </div>
      </Transition>
    </div>

    <div class="w-full px-3">
      <div class="w-full px-1" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5) inset">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import VTypical from 'vue-typical';
import { ref, onMounted, watchEffect, nextTick } from 'vue';
import { useSidebarStore } from '@/stores/sidebar.js';

const route = useRoute();
const router = useRouter();

const breadcrumbSegments = ref([]);

onMounted(() => {
  updateBreadcrumb();
});
watch(
  () => route.fullPath,
  () => {
    updateBreadcrumb();
  }
);
function updateBreadcrumb() {
  const pathSegments = route.fullPath.split('/').filter(segment => segment !== '');
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

const sideNavButtonRoutes = ['/shop', '/profile', '/shop/' + route.params.category];
const sideNavButtonState = ref();
router.beforeEach((to, from) => {
  if (sideNavButtonRoutes.includes(to.fullPath)) {
    sideNavButtonState.value = true;
  } else {
    sideNavButtonState.value = false;
  }
});
onMounted(() => {
  if (sideNavButtonRoutes.includes(route.fullPath)) {
    sideNavButtonState.value = true;
  }
});

const store = useSidebarStore();

function toggleFilterSidebar() {
  store.toggleSidebar();
}

function toggleOrderSidebar() {
  store.toggleOrderSidebar();
}

const isShoppingListOpen = ref(false);
function openShoppingList() {
  isShoppingListOpen.value = true;
}
function closeShoppingList() {
  isShoppingListOpen.value = false;
}

const isNotificationsOpen = ref(false);
function openNotifications() {
  isNotificationsOpen.value = true;
}
function closeNotifications() {
  isNotificationsOpen.value = false;
}

const items = ref(['Bilgisayara', 'Telefon', 'Televizyon', 'Aksesuarlar', 'Harici Parçalar']);

const sidebar_Open = ref(false);
function toggleSidebar() {
  sidebar_Open.value = !sidebar_Open.value;
}

//Search Bar updates
function updateSearchValue(value) {}
</script>

<style scoped>
.header-shadow {
  view-transition-name: header-shadow;
}
.main-header-1 {
  view-transition-name: main-header-1;
}
.main-header-2 {
  view-transition-name: main-header-2;
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

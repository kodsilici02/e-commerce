<template>
  <div class="w-full h-auto">
    <!--SideBar-->
    <Transition name="sidebar">
      <SideBar v-if="sidebar_Open"></SideBar>
    </Transition>
    <Transition name="sidebar_space">
      <SideBarSpace v-if="sidebar_Open" @toggleSideBar="toggleSidebar"></SideBarSpace>
    </Transition>

    <!--Topbar shadow-->
    <div class="fixed top-0 left-0 w-full h-16" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6)"></div>
    <!--TopBar-->
    <div class="sticky top-0 left-0 w-full h-16 flex justify-between p-3 gap-2 flex-grow-0 z-[999] purple-background">
      <div class="h-full flex items-center flex-1 justify-start">
        <ClientOnly>
          <font-awesome :icon="['fas', 'bars']" class="text-white cursor-pointer" size="xl" @click="toggleSidebar"></font-awesome
        ></ClientOnly>
      </div>
      <div class="h-full flex items-center justify-center flex-1">
        <SearchBar></SearchBar>
      </div>
      <div class="h-full flex gap-4 items-center flex-1 justify-end">
        <div class="h-full cursor-pointer">
          <ClientOnly><font-awesome :icon="['fas', 'circle-user']" size="2xl" class="text-[aliceblue]" /></ClientOnly>
        </div>
        <div
          class="relative h-full flex items-center cursor-pointer z-[999]"
          @mouseenter="openNotifications"
          @mouseleave="closeNotifications">
          <ClientOnly><font-awesome :icon="['fas', 'bell']" size="xl" class="text-[aliceblue]" /></ClientOnly>
          <div
            class="absolute top-[-5px] right-[-5px] w-4 h-4 bg-slate-500 rounded-full text-xs flex justify-center items-center text-white">
            1
          </div>
          <div class="absolute top-10 right-0">
            <Transition name="modal-Transition">
              <Notifications v-if="isNotificationsOpen"></Notifications>
            </Transition>
          </div>
        </div>
        <div class="relative h-full flex items-center cursor-pointer" @mouseenter="openShoppingList" @mouseleave="closeShoppingList">
          <ClientOnly><font-awesome :icon="['fas', 'basket-shopping']" size="xl" class="text-[aliceblue]" /></ClientOnly>
          <div
            class="absolute top-[-5px] right-[-5px] w-4 h-4 bg-slate-500 rounded-full text-xs flex justify-center items-center text-white">
            1
          </div>
          <div class="absolute top-10 right-0">
            <Transition name="modal-Transition">
              <ShoppingList v-if="isShoppingListOpen"></ShoppingList>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center text-4xl font-yolk text-[aliceblue] h-28 reverse-background purple-background">
      Everything You are Looking For is Here
    </div>
    <div
      class="w-full flex justify-center items-center text-xl font-fester left-0 sticky top-16 h-12 z-[100] purple-background"
      style="color: rgba(192, 200, 200, 0.7); background-color: rgb(57, 102, 215); box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6)">
      Home
    </div>

    <div class="w-full px-3">
      <div class="w-full px-1" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5) inset">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted } from 'vue';

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
</script>

<style scoped>
.purple-background {
  background: linear-gradient(90deg, rgba(29, 32, 63, 1) 0%, rgba(29, 32, 63, 1) 100%);
}
.reverse-background.purple-background {
  background: linear-gradient(90deg, rgb(58, 49, 134) 0%, rgba(29, 32, 63, 1) 100%);
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

.sidebar_space-enter-from,
.sidebar_space-leave-to {
  opacity: 0;
}
.sidebar_space-enter-to,
.sidebar_space-leave-from {
  opacity: 1;
}
.sidebar_space-enter-active,
.sidebar_space-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>

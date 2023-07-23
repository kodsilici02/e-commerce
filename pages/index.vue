<template>
  <div class="w-full h-auto">
    <!--Topbar shadow-->
    <div class="fixed top-0 left-0 w-full h-16" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8)"></div>
    <!--TopBar-->
    <div
      class="sticky top-0 left-0 w-full h-16 flex justify-between p-3 gap-2 flex-grow-0 z-[1000]"
      style="background-color: rgb(57, 102, 215)">
      <div class="h-full flex items-center flex-1 justify-start">
        <ClientOnly> <font-awesome :icon="['fas', 'bars']" class="text-white cursor-pointer" size="xl"></font-awesome></ClientOnly>
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
    <div class="w-full flex justify-center items-center text-4xl font-yolk text-[aliceblue] h-28">
      Everything You are Looking For is Here
    </div>
    <div
      class="w-full flex justify-center items-center text-2xl font-fester left-0 sticky top-16 h-16 z-[100]"
      style="color: rgba(192, 200, 200, 0.7); background-color: rgb(57, 102, 215); box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8)">
      Home
    </div>
    <div class="w-52 sticky top-32 left-0 bg-slate-50" style="height: calc(100dvh - 128px)">aaaaaaaa</div>
    <div class="h-[200vh] w-full"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VTypical from 'vue-typical';
</script>

<style scoped></style>

<template>
  <div class="w-full h-full flex flex-wrap" style="color: var(--text-color)">
    <TransitionGroup name="list" tag="div" class="w-full h-full p-2 flex flex-wrap content-start">
      <div
        v-for="(info, index) in addresses"
        :key="info.address"
        style="color: var(--text-white)"
        class="h-[350px] w-full lg:basis-1/3 2xl:basis-1/4 flex p-2 transition-transform duration-200 hover:scale-[1.02] overflow-hidden relative">
        <div class="absolute z-[2] cursor-pointer -top-3 right-2">
          <Bookmark @handle-click="toggleBookmark(index)" :active="info.default"></Bookmark>
        </div>
        <div
          class="h-full w-full rounded-lg flex flex-col item-background transition-[background-color] duration-500 relative overflow-hidden">
          <div class="h-full w-full flex flex-col p-3 gap-2">
            <div class="w-full text-2xl text-center">{{ info.title }}</div>
            <div class="w-full tetx-lg font-[600]">{{ info.name }}</div>
            <div class="w-full">{{ info.address }}</div>
            <div class="w-full">{{ info.province }}</div>
            <div class="w-full">{{ info.county }}</div>
            <div class="w-full">{{ info.district }}</div>
            <div class="w-full">{{ info.phone }}</div>
            <div class="w-full flex-1 flex gap-2 items-end justify-center">
              <button
                @click="
                  () => {
                    selectedItem = index;
                    delete_modal = true;
                  }
                "
                class="w-36 h-10 bg-slate-400 z-[3] cursor-pointer delete-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
                style="border-radius: 35px">
                Delete<ClientOnly>
                  <font-awesome :icon="['fas', 'trash']"></font-awesome>
                </ClientOnly>
              </button>
              <button
                @click="
                  () => {
                    selectedItem = index;
                    edit_modal = true;
                  }
                "
                class="w-36 h-10 bg-slate-400 z-[3] edit-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
                style="border-radius: 35px">
                Edit<ClientOnly><font-awesome :icon="['fas', 'pen']"></font-awesome></ClientOnly>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        :key="'addNew'"
        class="h-[350px] w-full lg:basis-1/3 2xl:basis-1/4 flex p-2 transition-transform duration-200 hover:scale-[1.02] overflow-hidden">
        <div
          @click="
            () => {
              add_modal = true;
            }
          "
          class="w-full h-full rounded-lg flex justify-center items-center add-new cursor-pointer">
          <Vue3Lottie
            ref="lottie"
            :height="70"
            animationLink="https://lottie.host/c61be757-e3d7-4e15-97b8-789a034f4a7b/1EQ2o67xyj.json"
            :autoPlay="true"
            :loop="true"
            direction="alternate" />
        </div>
      </div>
      <div key="heeee?" class="w-full text-black">
        <button @click="deneme">deneme</button>
      </div>
    </TransitionGroup>
    <Transition name="modal">
      <Modal v-if="edit_modal">
        <AdressesEdit :info="infos[selectedItem]" @handleCancel="closeModals" @handle-edit="saveInfo"></AdressesEdit>
      </Modal>
    </Transition>
    <Transition name="modal">
      <Modal v-if="delete_modal">
        <AdressesDelete @handleCancel="closeModals" @handleDelete="deleteInfo"></AdressesDelete>
      </Modal>
    </Transition>
    <Transition name="modal">
      <Modal v-if="add_modal">
        <AdressesNew @handleCancel="closeModals" @handleSave="addInfo"></AdressesNew>
      </Modal>
    </Transition>
    <Transition name="component_space">
      <SideBarSpace v-if="edit_modal || delete_modal || add_modal" @handleClick="closeModals"></SideBarSpace>
    </Transition>
  </div>
</template>

<script setup>
import { useAddressesStore } from '@/stores/addresses';
import { storeToRefs } from 'pinia';

const store = storeToRefs(useAddressesStore());

const addresses = ref(store.addresses.value);

function toggleBookmark(index) {
  store.addresses.value.find(info => info.default == true).default = false;
  store.addresses.value[index].default = true;
}

function addInfo(obj) {
  store.addresses.value.push(obj);
  closeModals();
}

function saveInfo(obj) {
  store.addresses.value[selectedItem.value] = obj;
  closeModals();
}
function deleteInfo() {
  store.addresses.value.splice(selectedItem.value, 1);
  closeModals();
}

const edit_modal = ref(false);
const delete_modal = ref(false);
const add_modal = ref(false);
const selectedItem = ref(0);

function closeModals() {
  edit_modal.value = false;
  delete_modal.value = false;
  add_modal.value = false;
}
</script>

<style scoped>
.bookmark {
  position: relative;
  height: 70px;
  width: 50px;
  padding: 0px;
  -webkit-transform: rotate(0deg) skew(0deg);
  transform: rotate(0deg) skew(0deg);
  border-left: 25px solid red;
  border-right: 25px solid red;
  border-bottom: 25px solid transparent;
}
.add-new {
  border: 3px dashed var(--text-color);
}

.item-background {
  background-color: var(--primary);
}

.edit-button {
  background-color: #3bc1e2;
}
.edit-button:hover {
  background-color: #64d2ed;
}
.edit-button:active {
  transition: background-color 0s ease;
  background-color: #648bed;
}

.delete-button {
  background-color: #b50c0c;
}
.delete-button:hover {
  background-color: #cf1414;
}
.delete-button:active {
  transition: background-color 0s ease;
  background-color: #900b0b;
}
</style>

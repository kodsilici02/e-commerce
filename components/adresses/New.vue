<template>
  <div
    class="h-full w-full flex content-start flex-wrap p-5"
    style="background-color: var(--background)"
    :style="{ 'max-width': calculateWidth() + 'px' }">
    <div class="w-full p-2 px-3">
      <InputFloatingLabel
        :label="'Title'"
        @handle-type="
          value => {
            title = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <InputFloatingLabel
        :label="'Name'"
        @handle-type="
          value => {
            name = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <InputFloatingLabel
        :label="'Surname'"
        @handle-type="
          value => {
            surname = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <InputFloatingLabel
        :label="'Phone Number'"
        @handle-type="
          value => {
            phone = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <InputFloatingLabel
        :label="'Province'"
        @handle-type="
          value => {
            province = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <InputFloatingLabel
        :label="'County'"
        @handle-type="
          value => {
            county = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <InputFloatingLabel
        :label="'District'"
        @handle-type="
          value => {
            district = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="w-full p-2 px-3">
      <InputFloatingLabel
        :label="'Adress'"
        @handle-type="
          value => {
            address = value;
          }
        "></InputFloatingLabel>
    </div>
    <div class="w-full flex-1 flex gap-2 mt-2 items-end self-end justify-center" style="color: var(--text-white)">
      <button
        @click="cancel"
        class="w-36 h-10 bg-slate-400 z-[3] cursor-pointer delete-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
        style="border-radius: 35px">
        Cancel<ClientOnly>
          <font-awesome :icon="['fas', 'xmark']"></font-awesome>
        </ClientOnly>
      </button>
      <button
        @click="save"
        class="w-36 h-10 bg-slate-400 z-[3] edit-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
        style="border-radius: 35px">
        Save<ClientOnly><font-awesome :icon="['fas', 'check']"></font-awesome></ClientOnly>
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['handleSave', 'handleCancel']);

function calculateWidth() {
  if (window.innerWidth <= 768) {
    return 350;
  }
  if (window.innerWidth <= 1024) {
    return 500;
  }
  if (window.innerWidth >= 1280) {
    return 750;
  }
}

const title = ref();
const name = ref();
const surname = ref();
const phone = ref();
const province = ref();
const county = ref();
const district = ref();
const address = ref();

function save() {
  let obj = {
    title: title.value,
    name: name.value,
    surname: surname.value,
    address: address.value,
    province: province.value,
    county: county.value,
    district: district.value,
    phone: phone.value
  };
  let nullExist = false;
  Object.keys(obj).forEach(function (key) {
    if (obj[key] == null) {
      nullExist = true;
    }
  });
  if (nullExist) {
    console.log('empty input');
  } else {
    emits('handleSave', obj);
  }
}

function cancel() {
  emits('handleCancel');
}
</script>

<style scoped>
.edit-button {
  background-color: #3bc1e2;
  color: var(--text-white);
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
  color: var(--text-white);
}
.delete-button:hover {
  background-color: #cf1414;
}
.delete-button:active {
  transition: background-color 0s ease;
  background-color: #900b0b;
}
</style>

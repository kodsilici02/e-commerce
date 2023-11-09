<template>
  <div class="w-full h-auto flex flex-wrap p-5" style="color: var(--text-color)">
    <button @click="deneme">deneme</button>
    <v-typical :steps="item"></v-typical>

    <div class="w-full gap-3 flex flex-col">
      <div v-for="item in items" class="w-52 h-52 overflow-hidden">
        <SkeletonLoader class="w-full h-full"></SkeletonLoader>
        <NuxtImg
          :preload="false"
          :src="item"
          loading="lazy"
          @load="
            () => {
              console.log('loaded');
            }
          "></NuxtImg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VTypical from 'vue-typical';

const items = ref([
  'https://assets.getmobil.com/uploads/41726/getmobil-samsung-s225g-phantomgreen-00webp.png',
  'https://netrinoimages.s3.eu-west-2.amazonaws.com/2022/12/08/1373191/426752/iphone_14_pro_max_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4402727_o.png',
  'https://cepmarketavm.com/cdn/shop/files/replika-iphone-14-pro-max-5-akillicepmarket.com_dd951276-ecac-4e31-b835-196bcc19f9c9_1445x.png?v=1691762675'
]);

const item = ref(['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]);
const min = 0;
const max = 10;

function deneme() {
  item.value.push('he', 1000);
  console.log(item.value);
}

const value = ref(1);

function increase() {
  let deneme = value.value + 1;
  if (deneme <= max) {
    value.value++;
  }
}

function decrease() {
  let deneme = value.value - 1;
  if (deneme >= min) {
    value.value--;
  }
}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  position: absolute;
}

.list-enter-active {
  position: relative;
}

.num-input::-webkit-inner-spin-button,
.num-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.num-input {
  font-size: 1.2em;
  text-align: center;
  background: none;
  border: none;
  color: var(--accent);
  font-weight: bold;
  width: 100%;
}
.num-input:focus {
  outline: none;
}
.num-icon {
  font-size: 1.2em;
  cursor: pointer;
}
</style>

<template>
  <div class="search-box" ref="search_box">
    <input type="text" ref="search_input" placeholder="Type to Search.." />
    <div class="search-btn flex items-center justify-center" @click="searchBoxOpen" ref="search_btn">
      <ClientOnly><font-awesome :icon="['fas', 'search']"></font-awesome></ClientOnly>
    </div>
    <div class="cancel-btn" ref="cancel_btn" @click="searchBoxClose">
      <ClientOnly> <font-awesome :icon="['fas', 'times']"></font-awesome></ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const search_btn = ref();
const cancel_btn = ref();
const search_box = ref();
const search_input = ref();

function searchBoxOpen() {
  search_box.value.classList.add('active');
  search_input.value.classList.add('active');
  search_btn.value.classList.add('active');
  cancel_btn.value.classList.add('active');
}
function searchBoxClose() {
  console.log('close');
  search_box.value.classList.remove('active');
  search_input.value.classList.remove('active');
  search_btn.value.classList.remove('active');
  cancel_btn.value.classList.remove('active');
}
</script>

<style scoped>
.search-box {
  height: 45px;
  width: 45px;
  position: relative;
  transition: all 0.5s cubic-bezier(0.68, -0.25, 0.265, 1.25);
}
.search-box.active {
  width: 300px;
}

.search-box input {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: #fff;
  font-size: 18px;
  border-radius: 50px;
  padding: 0 60px 0 20px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.68, -0.25, 0.265, 1.25);
}
.search-box input.active {
  opacity: 1;
}
.search-box .search-btn {
  position: absolute;
  top: 50%;
  right: 0px;
  height: 45px;
  z-index: 1;
  width: 45px;
  color: #664aff;
  transform: translateY(-50%);
  background: #fff;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  border-radius: 45px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.68, -0.25, 0.265, 1.25);
}
.search-box .search-btn:hover {
  background-color: rgb(215, 199, 219);
}
.search-box .search-btn.active {
  --search-btn-radius: 40px;
  height: var(--search-btn-radius);
  width: var(--search-btn-radius);
  right: 5px;
  color: #fff;
  background: #664aff;
  line-height: 50px;
  font-size: 20px;
  transform: translateY(-50%) rotate(360deg);
}
.search-box .cancel-btn {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.25, 0.265, 1.25);
}
.search-box .cancel-btn.active {
  right: -25px;
  transform: translateY(-50%) rotate(360deg);
}

@media only screen and (max-width: 768px) {
  .search-box.active {
    width: 150px;
  }
  .search-box {
    width: 35px;
    height: 35px;
  }
  .search-box .search-btn {
    width: 35px;
    height: 35px;
    font-size: 17px;
  }
  .search-box .search-btn.active {
    --search-btn-radius: 32px;
    font-size: 17px;
  }
}
</style>

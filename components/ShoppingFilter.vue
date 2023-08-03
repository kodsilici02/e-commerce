<template>
  <Transition name="sidebar_space">
    <ShoppingFilterSpace v-if="isFilterSidebarOpen"></ShoppingFilterSpace>
  </Transition>
  <div
    class="w-52 fixed top-0 left-0 z-[1000] md:sticky md:top-28 overflow-y-auto filter-box-shadow filter-height bg-[#6a6bcf] md:bg-transparent transition-transform duration-200"
    :class="{ ' translate-x-[-105%]': !isFilterSidebarOpen && isWindowSmall }">
    <div class="flex flex-col gap-2 text-white">
      <div class="w-full h-14 text-2xl flex justify-center items-center mb-2">Filters</div>
      <div v-for="(category, index) in categories" class="flex flex-col justify-center items-center">
        <button
          class="w-full flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 hover:text-[#bfbfbf]"
          @click="openCategory(index)">
          {{ category.name }}
          <ClientOnly>
            <font-awesome
              :icon="['fas', 'chevron-down']"
              style="pointer-events: none"
              class="transition-transform duration-300"
              :style="{ transform: category.categoryOpen ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
          </ClientOnly>
        </button>
        <div class="w-full overflow-hidden transition-all duration-300 mt-1" style="max-height: 0" ref="sub_category">
          <div class="sub-category">
            <div class="mr-[3px] py-2" style="color: rgb(222, 222, 222); background-color: rgba(0, 0, 0, 0.1)">
              <div class="w-full px-3">
                <div class="field field_v2">
                  <input
                    id="last-name"
                    class="field__input text-white"
                    v-model="categoryInputValues[index]"
                    placeholder="Type"
                    @input="filterCategory(index)"
                    autocomplete="off" />
                  <span class="field__label-wrap" aria-hidden="true">
                    <span class="field__label text-white">Search in Category</span>
                  </span>
                </div>
              </div>
              <div
                v-for="(subCategory, subCatindex) in filteredSubCategories(index)"
                class="w-full flex justify-center text-base h-8 items-center">
                {{ subCategory }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useFilterSidebarStore } from '@/stores/sidebar.js';
const store = useFilterSidebarStore();
const { filterSidebarOpen } = useFilterSidebarStore();

const categories = ref([
  { name: 'Category One', categoryOpen: false, subCategory: ['SubCategory One', 'SubCategory Two', 'SubCategory Three'] },
  { name: 'Category Two', categoryOpen: false, subCategory: ['SubCategory One', 'SubCategory Two'] }
]);
const isFilterSidebarOpen = ref(filterSidebarOpen);
const isWindowSmall = ref(true);
watch(
  () => store.filterSidebarOpen,
  newState => {
    isFilterSidebarOpen.value = newState;
  }
);

onMounted(() => {
  if (window.innerWidth <= 768) {
    isWindowSmall.value = true;
  } else {
    isWindowSmall.value = false;
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      isWindowSmall.value = true;
    } else {
      isWindowSmall.value = false;
    }
  });
});

const sub_category = ref();

function openCategory(index) {
  const element = sub_category.value[index];
  const height = element.querySelectorAll('.sub-category')[0].offsetHeight;
  if (categories.value[index].categoryOpen) {
    element.style.maxHeight = 0;
    categories.value[index].categoryOpen = !categories.value[index].categoryOpen;
  } else {
    element.style.maxHeight = height + 'px';
    categories.value[index].categoryOpen = !categories.value[index].categoryOpen;
  }
}

const categoryInputValues = categories.value.map(() => '');

function filterCategory(index) {
  const searchTerm = categoryInputValues[index].toLowerCase();
  const category = categories.value[index];
  const filteredSubCategories = category.subCategory.filter(subCategory => {
    return subCategory.toLowerCase().includes(searchTerm);
  });
  category.filteredSubCategories = filteredSubCategories;
}

function filteredSubCategories(index) {
  return categories.value[index].filteredSubCategories || categories.value[index].subCategory;
}
</script>

<style scoped>
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
.filter-background {
  background: linear-gradient(0deg, rgb(29, 32, 63) 0%, rgb(29, 32, 63) 100%);
}
.filter-box-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) -3px -3px 6px 1px inset;
}
.filter-height {
  height: calc(100vh - 7rem);
}
@media only screen and (max-width: 768px) {
  .filter-height {
    height: 100%;
  }
}
</style>

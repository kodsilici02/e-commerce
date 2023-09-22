<template>
  <div v-if="categories" class="w-full h-full">
    <div class="flex flex-col gap-1">
      <div class="w-full h-14 text-2xl flex justify-center items-center">Filters</div>
      <div v-for="(category, index) in categories" class="flex flex-col justify-center items-center">
        <div v-if="category.rangeSlider" class="w-full flex flex-wrap" ref="sub_category">
          <div class="w-full flex justify-center text-xl">{{ category.name }}</div>
          <div class="w-full px-2">
            <RangeSlider
              :max="category.max"
              :min="category.min"
              :minValue="category.currentMin"
              :maxValue="category.currentMax"
              :unit="category.unit"
              @update="sliderValues => updateSlider(category.type, sliderValues)"></RangeSlider>
          </div>
        </div>
        <div v-else class="flex flex-col justify-center items-center w-full">
          <button
            class="w-full flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 category-button"
            @click="toggleCategory(category.type)">
            {{ category.name }}
            <ClientOnly>
              <font-awesome
                :icon="['fas', 'chevron-down']"
                style="pointer-events: none"
                class="transition-transform duration-300"
                :style="{ transform: category.categoryOpen ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
            </ClientOnly>
          </button>
          <div
            class="w-full overflow-hidden transition-all duration-300 mt-1"
            :style="{ 'max-height': computeCategory(category.type, index) }"
            ref="sub_category">
            <div class="sub-category p-2 md:p-1">
              <div class="mr-[3px] py-2 overflow-hidden rounded-xl" style="color: var(--text-color); background-color: rgba(0, 0, 0, 0.1)">
                <div class="w-full px-3">
                  <div class="field field_v2">
                    <input id="last-name" class="field__input" placeholder="Type" @input="filterCategory(index)" autocomplete="off" />
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Search in Category</span>
                    </span>
                  </div>
                </div>
                <div
                  v-for="(subCategory, subCatindex) in category.subCategory"
                  class="w-full flex gap-1 justify-center text-base h-8 items-center">
                  <div class="flex-1 flex justify-center items-center">
                    <ClientOnly
                      ><font-awesome
                        :icon="['fas', 'xmark']"
                        class="cursor-pointer"
                        style="color: var(--danger)"
                        @click="excludeSubCategoryFilter(category.type, subCategory.value)"></font-awesome
                    ></ClientOnly>
                  </div>
                  <div
                    class="flex-1 text-center transition-colors duration-200"
                    :style="{ color: toggleColor(category.type, subCategory.value) }">
                    {{ subCategory.name }}
                  </div>
                  <div class="flex-1 flex justify-center items-center">
                    <ClientOnly
                      ><font-awesome
                        :icon="['fas', 'check']"
                        class="cursor-pointer"
                        style="color: var(--success)"
                        @click="includeSubCategoryFilter(category.type, subCategory.value)"></font-awesome
                    ></ClientOnly>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, watchEffect } from 'vue';
import { useFilterOptions } from '@/stores/filterOptions.js';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();

const store = storeToRefs(useFilterOptions());
const categories = ref(findOptions());

function findOptions() {
  return store.options.value.find(item => item.name == route.params.category).filters;
}

function updateSlider(type, values) {
  categories.value.find(item => item.type == type).currentMax = values.max;
  categories.value.find(item => item.type == type).currentMin = values.min;
}

function toggleColor(type, value) {
  let category = categories.value.find(option => option.type == type);
  if (category.include == true && category.selectedCategories.includes(value)) {
    return 'var(--success)';
  } else if (category.include == null) return 'var(--text-color)';
  else if (category.include == false && category.selectedCategories.includes(value)) {
    return 'var(--danger)';
  }
}

//include and exclude don't touch it
function includeSubCategoryFilter(type, subCategory) {
  var category = categories.value.find(option => option.type == type);
  if (category.include != true) {
    category.include = true;
    category.selectedCategories = [];
    if (category.selectedCategories.includes(subCategory)) {
      // Subcategory is already selected, remove it from filters
      category.selectedCategories = category.selectedCategories.filter(item => item !== subCategory);
      if (category.selectedCategories.length == 0) {
        category.selectedCategories = null;
      }
    } else {
      // Subcategory is not selected, add it to filters
      category.selectedCategories.push(subCategory);
    }
  } else {
    if (category.selectedCategories.includes(subCategory)) {
      // Subcategory is already selected, remove it from filters
      category.selectedCategories = category.selectedCategories.filter(item => item !== subCategory);
      if (category.selectedCategories.length == 0) {
        category.selectedCategories = [];
      }
    } else {
      // Subcategory is not selected, add it to filters
      category.selectedCategories.push(subCategory);
    }
  }
  categories.value.find(option => option.type == type).include = category.include;
  categories.value.find(option => option.type == type).selectedCategories = category.selectedCategories;
}

function excludeSubCategoryFilter(type, subCategory) {
  var category = categories.value.find(option => option.type == type);
  if (category.include != false) {
    category.include = false;
    category.selectedCategories = [];
    if (category.selectedCategories.includes(subCategory)) {
      category.selectedCategories = category.selectedCategories.filter(item => item !== subCategory);
      if (category.selectedCategories.length == 0) {
        category.selectedCategories = null;
      }
    } else {
      category.selectedCategories.push(subCategory);
    }
  } else {
    if (category.selectedCategories.includes(subCategory)) {
      category.selectedCategories = category.selectedCategories.filter(item => item !== subCategory);
      if (category.selectedCategories.length == 0) {
        category.selectedCategories = [];
      }
    } else {
      category.selectedCategories.push(subCategory);
    }
  }
  categories.value.find(option => option.type == type).include = category.include;
  categories.value.find(option => option.type == type).selectedCategories = category.selectedCategories;
}

const sub_category = ref([]);

function toggleCategory(type) {
  categories.value.find(option => option.type == type).categoryOpen = !categories.value.find(option => option.type == type).categoryOpen;
}

function computeCategory(type, index) {
  let open = categories.value.find(option => option.type == type).categoryOpen;
  const element = sub_category.value[index];
  if (element) {
    const height = element.querySelectorAll('.sub-category')[0].offsetHeight;
    if (open) {
      return height + 'px';
    } else {
      return 0;
    }
  }
}
</script>

<style scoped>
.category-button {
  color: var(--text-color);
}
.category-button:hover {
  color: var(--secondary);
}
</style>

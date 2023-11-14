<template>
  <div v-if="categories" class="w-full h-full">
    <div class="flex flex-col gap-3 pb-4">
      <div class="w-full h-14 text-2xl flex justify-center items-center">
        <div class="flex-1"></div>
        <div>Filters</div>
        <div class="flex-1 flex justify-end pr-5">
          <TooltipBottom :text="'Reset'" @handle-click="resetFilters()">
            <ClientOnly><font-awesome :icon="['fas', 'rotate-right']" class="text-2xl" /></ClientOnly>
          </TooltipBottom>
        </div>
      </div>
      <div v-for="(category, index) in categories" class="flex flex-col justify-center items-center">
        <Category
          v-if="category.rangeSlider"
          @handle-click="
            () => {
              findCategory(category.type).categoryOpen = !findCategory(category.type).categoryOpen;
            }
          "
          :title="category.name"
          :height="400"
          :bold="true"
          :open="category.categoryOpen"
          :backGroundColor="'rgba(0, 0, 0, 0.1)'">
          <div class="w-full flex flex-wrap">
            <div ref="sub_category" class="w-full flex justify-center text-center text-lg font-bold">{{ category.name }}</div>
            <div class="w-full px-2">
              <RangeSlider
                :max="category.max"
                :min="category.min"
                :minValue="category.currentMin"
                :maxValue="category.currentMax"
                :unit="category.unit"
                :step="category.step"
                @update="sliderValues => updateSlider(category.type, sliderValues)"></RangeSlider>
            </div>
          </div>
        </Category>
        <Category
          v-else
          @handle-click="
            () => {
              findCategory(category.type).categoryOpen = !findCategory(category.type).categoryOpen;
            }
          "
          :title="category.name"
          :bold="true"
          :open="category.categoryOpen"
          :backGroundColor="'rgba(0, 0, 0, 0.1)'">
          <div class="w-full px-3 sticky top-0 left-0">
            <SearchBarLabel text="Search in Category" @handleType="deneme(category.type, index)"></SearchBarLabel>
          </div>
          <div class="py-4 w-full flex overflow-y-auto" style="max-height: 400px">
            <div v-auto-animate class="w-full flex flex-col overflow-x-hidden gap-1">
              <div
                v-for="(subCategory, subCatindex) in filteredCategory(category.subCategory, category.type)"
                :key="subCategory.name"
                class="w-full flex gap-2 justify-center text-base items-center px-8">
                <div class="w-fit flex justify-center items-center">
                  <button @click="excludeSubCategoryFilter(category.type, subCategory.value)">
                    <ClientOnly
                      ><font-awesome :icon="['fas', 'xmark']" class="cursor-pointer" style="color: var(--danger)"></font-awesome
                    ></ClientOnly>
                  </button>
                </div>
                <div
                  class="flex-1 text-center transition-colors duration-200 text-sm"
                  :style="{ color: toggleColor(category.type, subCategory.value) }">
                  {{ subCategory.name }}
                </div>
                <div class="w-fit flex justify-center items-center">
                  <button @click="includeSubCategoryFilter(category.type, subCategory.value)">
                    <ClientOnly
                      ><font-awesome :icon="['fas', 'check']" class="cursor-pointer" style="color: var(--success)"></font-awesome
                    ></ClientOnly>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Category>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, watchEffect, computed } from 'vue';
import { useFilterOptions } from '@/stores/filterOptions.js';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();

const store = storeToRefs(useFilterOptions());
const categories = ref(findOptions());

function filteredCategory(options, type) {
  let text = findCategory(type).filter_text.toLowerCase();
  if (text) {
    return options.filter(option => option.name.toLowerCase().includes(text));
  }

  return options;
}
const sub_category = ref([]);

function deneme(type, index) {
  findCategory(type).filter_text = event.target.value;
}
function findCategory(type) {
  return categories.value.find(option => option.type == type);
}

function findOptions() {
  return store.options.value.find(item => item.name == route.params.category).filters;
}

function updateSlider(type, values) {
  categories.value.find(item => item.type == type).currentMax = values.max;
  categories.value.find(item => item.type == type).currentMin = values.min;
}

function toggleColor(type, value) {
  let category = findCategory(type);
  if (category.include == true && category.selectedCategories.includes(value)) {
    return 'var(--success)';
  } else if (category.include == null) return 'var(--text-color)';
  else if (category.include == false && category.selectedCategories.includes(value)) {
    return 'var(--danger)';
  }
}

//include and exclude don't touch it
function includeSubCategoryFilter(type, subCategory) {
  var category = findCategory(type);
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
  findCategory(type).include = category.include;
  findCategory(type).selectedCategories = category.selectedCategories;
}

function excludeSubCategoryFilter(type, subCategory) {
  var category = findCategory(type);
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
  findCategory(type).include = category.include;
  findCategory(type).selectedCategories = category.selectedCategories;
}

function resetFilters() {
  useFilterOptions().resetFilters(route.params.category);
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

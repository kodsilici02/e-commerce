<template>
  <div v-if="categories" class="w-full h-full">
    <div class="flex flex-col gap-3">
      <div class="w-full h-14 text-2xl flex justify-center items-center">Filters</div>
      <div v-for="(category, index) in categories" class="flex flex-col justify-center items-center">
        <div v-if="category.rangeSlider" class="w-full flex flex-wrap">
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
        <div v-else class="flex flex-col justify-center items-center w-full">
          <button
            class="w-full flex justify-center items-center gap-2 text-lg font-bold cursor-pointer transition-all duration-300 category-button"
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
            :style="{ 'max-height': category.categoryOpen ? findHeight(category.type) : '0px' }"
            ref="sub_category">
            <div class="sub-category p-2 md:p-1">
              <div
                class="mr-[3px] overflow-y-auto rounded-xl"
                style="color: var(--text-color); background-color: rgba(0, 0, 0, 0.1); max-height: 400px">
                <div class="w-full px-3 sticky top-0 left-0" style="background-color: rgb(216, 216, 216)">
                  <div class="field field_v2">
                    <input
                      id="last-name"
                      class="field__input"
                      placeholder="Type"
                      autocomplete="off"
                      @input="deneme(category.type, index)" />
                    <span class="field__label-wrap" aria-hidden="true">
                      <span class="field__label">Search in Category</span>
                    </span>
                  </div>
                </div>
                <div
                  v-for="(subCategory, subCatindex) in filteredCategory(category.subCategory, category.type)"
                  class="w-full flex gap-1 justify-center text-base items-center">
                  <div class="flex-1 flex justify-center items-center">
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
                  <div class="flex-1 flex justify-center items-center">
                    <button @click="includeSubCategoryFilter(category.type, subCategory.value)">
                      <ClientOnly
                        ><font-awesome :icon="['fas', 'check']" class="cursor-pointer" style="color: var(--success)"></font-awesome
                      ></ClientOnly>
                    </button>
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
import { ref, watch, onMounted, watchEffect, computed } from 'vue';
import { useFilterOptions } from '@/stores/filterOptions.js';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();

const store = storeToRefs(useFilterOptions());
const categories = ref(findOptions());

function filteredCategory(options, type) {
  let text = findCategory(type).filter_text.toLowerCase();

  return options.filter(option => option.name.toLowerCase().includes(text));
}
const sub_category = ref([]);

function deneme(type, index) {
  changeHeight(type, index);
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

function toggleCategory(type) {
  findCategory(type).categoryOpen = !findCategory(type).categoryOpen;
}

const heights = ref([]);
function pushCategoryHeight(type, index) {
  let element = sub_category.value[index];
  let height = element.querySelector('.sub-category');
  if (height) {
    let item = {
      name: type,
      height: height.offsetHeight
    };
    heights.value.push(item);
  }
}

onMounted(() => {
  categories.value.forEach((category, index) => {
    pushCategoryHeight(category.type, index);
  });
});

function findHeight(type) {
  let object = heights.value.find(item => item.name == type);
  return toRaw(object.height) + 12 + 'px';
}
function changeHeight(type, index) {
  let element = sub_category.value[index];
  let height = element.querySelector('.sub-category').offsetHeight;
  heights.value.find(item => item.name == type).height = height + 12;
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

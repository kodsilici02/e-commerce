<template>
  <div class="w-full h-full">
    <div class="flex flex-col gap-2">
      <div class="w-full h-14 text-2xl flex justify-center items-center mb-2">Filters</div>
      <div class="w-full flex justify-center text-xl">Price Range</div>
      <div class="w-full p-2">
        <RangeSlider
          :min="65"
          :max="3000"
          v-model:min-value="sliderMin"
          v-model:max-value="sliderMax"
          @update:minValue="updateFilterOptions"
          @update:maxValue="updateFilterOptions"></RangeSlider>
      </div>
      <div v-for="(category, index) in categories" class="flex flex-col justify-center items-center">
        <button
          class="w-full flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 category-button"
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
            <div class="mr-[3px] py-2" style="color: var(--text-color); background-color: rgba(0, 0, 0, 0.1)">
              <div class="w-full px-3">
                <div class="field field_v2">
                  <input
                    id="last-name"
                    class="field__input"
                    v-model="categoryInputValues[index]"
                    placeholder="Type"
                    @input="filterCategory(index)"
                    autocomplete="off" />
                  <span class="field__label-wrap" aria-hidden="true">
                    <span class="field__label">Search in Category</span>
                  </span>
                </div>
              </div>
              <div
                v-for="(subCategory, subCatindex) in filteredSubCategories(index)"
                class="w-full flex gap-1 justify-center text-base h-8 items-center">
                <div class="flex-1 flex justify-center items-center">
                  <ClientOnly
                    ><font-awesome
                      :icon="['fas', 'xmark']"
                      class="cursor-pointer"
                      style="color: var(--danger)"
                      @click="excludeSubCategoryFilter(subCategory)"></font-awesome
                  ></ClientOnly>
                </div>
                <div class="flex-1 text-center transition-colors duration-200" :style="{ color: toggleColor(subCategory) }">
                  {{ subCategory }}
                </div>
                <div class="flex-1 flex justify-center items-center">
                  <ClientOnly
                    ><font-awesome
                      :icon="['fas', 'check']"
                      class="cursor-pointer"
                      style="color: var(--success)"
                      @click="includeSubCategoryFilter(subCategory)"></font-awesome
                  ></ClientOnly>
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
import { ref, watch, onMounted } from 'vue';

const emits = defineEmits(['update-filters']);

function updateFilterOptions() {
  // Create the filter options object
  const filters = {
    price: {
      min: sliderMin.value,
      max: sliderMax.value
    },
    brands: {
      include: subCategoriesFilterType.value,
      brands: selectedSubCategories.value
    }
  };

  // Emit the filters object to the parent component (index.vue)

  emits('update-filters', filters);
}

const subCategoriesFilterType = ref(null);

const selectedSubCategories = ref([]);

function toggleColor(subCategory) {
  if (subCategoriesFilterType.value && checkSubCategory(subCategory)) {
    return 'var(--success)';
  } else if (subCategoriesFilterType.value == null) return 'var(--text-color)';
  else if (subCategoriesFilterType.value == false && checkSubCategory(subCategory)) {
    return 'var(--danger)';
  }
}

function checkSubCategory(subCategory) {
  if (selectedSubCategories.value.includes(subCategory)) {
    return true;
  } else {
    return false;
  }
}

function updateSubCategory(subCategory) {
  if (selectedSubCategories.value.includes(subCategory)) {
    // Subcategory is already selected, remove it from filters
    selectedSubCategories.value = selectedSubCategories.value.filter(item => item !== subCategory);
    if (selectedSubCategories.value.length == 0) {
      subCategoriesFilterType.value = null;
    }
  } else {
    // Subcategory is not selected, add it to filters
    selectedSubCategories.value.push(subCategory);
  }
}

function includeSubCategoryFilter(subCategory) {
  if (subCategoriesFilterType.value != true) {
    subCategoriesFilterType.value = true;
    selectedSubCategories.value = [];
    updateSubCategory(subCategory);
  } else {
    updateSubCategory(subCategory);
  }
}

function excludeSubCategoryFilter(subCategory) {
  if (subCategoriesFilterType.value != false) {
    subCategoriesFilterType.value = false;
    selectedSubCategories.value = [];
    updateSubCategory(subCategory);
  } else {
    updateSubCategory(subCategory);
  }
}

const sliderMin = ref(65);
const sliderMax = ref(3000);

const categories = ref([
  { name: 'Brands', categoryOpen: false, subCategory: ['Iphone', 'Samsung', 'Xiaomi'] },
  { name: 'Category Two', categoryOpen: false, subCategory: [' One', ' Two'] }
]);

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
.category-button {
  color: var(--text-color);
}
.category-button:hover {
  color: var(--secondary);
}
</style>

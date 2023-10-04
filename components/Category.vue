<template>
  <div class="w-full flex flex-wrap justify-center items-center">
    <button
      @click="toggleCategory()"
      class="w-full flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 category-button">
      <div class="flex basis-1/2 items-center justify-between gap-2">
        <div v-if="categoryIcon" class="flex-1 flex justify-start items-center">
          <ClientOnly>
            <font-awesome :icon="categoryIcon" style="pointer-events: none" class="transition-transform duration-300"></font-awesome>
          </ClientOnly>
        </div>
        <div class="flex-1 flex justify-start" :class="{ 'font-bold': bold }">
          <!-- Use ml-2 for adding left margin to create space between icon and text -->
          {{ title }}
        </div>
        <div class="flex-1 flex justify-center">
          <ClientOnly>
            <font-awesome
              :icon="['fas', 'chevron-down']"
              style="pointer-events: none"
              class="transition-transform duration-300"
              :style="{ transform: subCategoryOpen ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
          </ClientOnly>
        </div>
      </div>
    </button>
    <div class="w-full overflow-hidden transition-all duration-300 rounded-xl mt-2" style="max-height: 0" ref="sub_category">
      <div class="sub-category">
        <div class="mr-[3px] overflow-y-auto" :style="{ 'background-color': backGroundColor, 'max-height': height + 'px' }">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categoryIcon: Array,
  title: String,
  bold: Boolean,
  open: Boolean,
  backGroundColor: {
    type: String,
    default: 'rgba(67, 67, 67, 0.4)'
  },
  height: Number
});
const subCategoryOpen = ref(props.open);

const sub_category = ref();

function toggleCategory() {
  const element = sub_category.value;
  const height = element.querySelector('.sub-category').offsetHeight;

  if (subCategoryOpen.value) {
    element.style.maxHeight = 0;
    subCategoryOpen.value = !subCategoryOpen.value;
  } else {
    element.style.maxHeight = height + 'px';
    subCategoryOpen.value = !subCategoryOpen.value;
  }
}
</script>

<style scoped></style>

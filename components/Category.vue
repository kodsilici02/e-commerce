<template>
  <div class="w-full flex flex-wrap justify-center items-center">
    <button
      @click="toggleCategory()"
      class="w-full flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 category-button">
      <div class="flex basis-2/3 items-center justify-center gap-2 px-2">
        <div v-if="categoryIcon" class="flex-1 flex justify-start items-center text-xl">
          <ClientOnly>
            <font-awesome :icon="categoryIcon" style="pointer-events: none" class="transition-transform duration-300"></font-awesome>
          </ClientOnly>
        </div>
        <div class="flex-1 flex-grow flex justify-center text-lg" :class="{ 'font-bold': bold }">
          <!-- Use ml-2 for adding left margin to create space between icon and text -->
          {{ title }}
        </div>
        <div class="justify-center text-xl" :class="{ 'flex-1': categoryIcon, 'basis-1/6': categoryIcon == null }">
          <ClientOnly>
            <font-awesome
              :icon="['fas', 'chevron-down']"
              style="pointer-events: none"
              class="transition-transform duration-300"
              :style="{ transform: open ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
          </ClientOnly>
        </div>
      </div>
    </button>
    <div class="w-full overflow-hidden transition-all duration-300 rounded-xl" style="max-height: 0" ref="sub_category">
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

const emits = defineEmits(['handleClick']);
const sub_category = ref();

onMounted(() => {
  setTimeout(() => {
    const element = sub_category.value;
    const height = element.querySelector('.sub-category').offsetHeight;
    if (!props.open) {
      element.style.maxHeight = 0;
      element.style.marginTop = 0;
    } else {
      element.style.maxHeight = height + 15 + 'px';
      element.style.marginTop = 10 + 'px';
    }
  }, 10);
});

function computeHeight() {
  const element = sub_category.value;
  const height = element.querySelector('.sub-category').offsetHeight;
  if (props.open) {
    element.style.maxHeight = 0;
  } else {
    element.style.maxHeight = height + 'px';
  }
}

function toggleCategory() {
  emits('handleClick');
  const element = sub_category.value;
  const height = element.querySelector('.sub-category').offsetHeight;
  if (props.open) {
    element.style.maxHeight = 0;
    element.style.marginTop = 0;
  } else {
    element.style.maxHeight = height + 'px';
    element.style.marginTop = 10 + 'px';
  }
}
</script>

<style scoped></style>

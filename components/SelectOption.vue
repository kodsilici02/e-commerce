<template>
  <div ref="container" class="w-full h-full flex flex-wrap items-center border rounded-lg border-[var(--text-gray)] p-2 relative">
    <button @click="handleClick" class="w-full flex items-center">
      <div class="flex items-center">{{ before }} {{ value }}</div>
      <div class="flex-1 flex justify-end">
        <ClientOnly>
          <font-awesome
            :icon="['fas', 'chevron-down']"
            style="pointer-events: none"
            class="transition-transform duration-300"
            :style="{ transform: open ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
        </ClientOnly>
      </div>
    </button>
    <!--Options-->
    <div
      class="w-full overflow-hidden transition-all duration-300 rounded-lg absolute top-14 left-0 z-[100]"
      style="max-height: 0"
      ref="sub_category">
      <div class="sub-category w-full relative">
        <div class="w-full overflow-y-auto" :style="{ 'background-color': backGroundColor }">
          <div
            class="w-full flex items-center flex-col gap-1 rounded-lg border border-[var(--text-gray)]"
            style="background-color: var(--background)">
            <button
              @click="select(option)"
              class="w-full flex justify-center items-center hover:bg-[--background-hover] transition-colors duration-300"
              v-for="option in options">
              {{ before }} {{ option }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['handleSelect']);

const props = defineProps({
  categoryIcon: Array,
  title: String,
  bold: Boolean,
  backGroundColor: {
    type: String,
    default: 'rgba(67, 67, 67, 0.4)'
  },
  height: Number,
  options: Array,
  prop_value: {
    default: null
  },
  before: {
    type: String,
    default: ''
  }
});

const options = ref(props.options);
const value = ref(props.prop_value);
const open = ref(false);
const sub_category = ref();
const container = ref();

function select(option) {
  value.value = option;
  emits('handleSelect', option);
  handleClick();
}

function handleClickOutside(event) {
  if (container.value && !container.value.contains(event.target)) {
    open.value = false;
    const element = sub_category.value;
    element.style.maxHeight = 0;
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
  const element = sub_category.value;
  const height = element.querySelector('.sub-category').offsetHeight;
  if (open.value) {
    element.style.maxHeight = height + 15 + 'px';
  } else {
    element.style.maxHeight = 0;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});

function handleClick() {
  open.value = !open.value;
  const element = sub_category.value;
  const height = element.querySelector('.sub-category').offsetHeight;
  if (open.value) {
    element.style.maxHeight = height + 'px';
  } else {
    element.style.maxHeight = 0;
  }
}
</script>

<style scoped></style>

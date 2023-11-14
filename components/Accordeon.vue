<template>
  <div class="w-full flex flex-wrap justify-center items-center">
    <div class="w-full overflow-hidden transition-all duration-300 rounded-xl" :style="{ 'max-height': open ? height + 'px' : 0 }">
      <div ref="wrapper">
        <div class="mr-[3px] overflow-y-auto" :class="[props.class]">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: true
  },
  class: {
    type: String,
    default: ''
  }
});

const height = ref();
onMounted(() => {
  height.value = computeHeight();
});

const wrapper = ref();

onUpdated(() => {
  height.value = computeHeight();
});
function computeHeight() {
  if (wrapper.value) {
    let height = wrapper.value.offsetHeight;
    return height;
  } else {
    return 0;
  }
}
</script>

<style scoped></style>

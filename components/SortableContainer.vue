<template>
  <div ref="dragContainer" class="w-full h-full">
    <slot></slot>
  </div>
</template>

<script setup>
import Sortable from 'sortablejs';

const props = defineProps({
  options: {
    type: Object,
    default: {
      animation: 150,
      swapThreshold: 0.5
    }
  }
});

const dragContainer = ref();

const options = ref({});

onMounted(() => {
  const sortable = new Sortable(dragContainer.value, props.options);
});
</script>

<style lang="scss" scoped></style>

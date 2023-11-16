<template>
  <div
    style="color: var(--text-white)"
    :class="[props.class]"
    class="transition-transform duration-200 hover:scale-[1.02] relative cursor-pointer">
    <div
      class="h-full w-full rounded-lg card-background transition-[background-color] duration-200 relative overflow-hidden"
      :style="{ backgroundColor: props.background_color }">
      <div
        class="absolute top-0 left-0 w-full h-full layer pointer-events-none z-10"
        :style="{ backgroundColor: props.background_color }"></div>
      <div class="absolute top-0 left-0 w-full h-full layer-content z-10">
        <slot name="layer"> </slot>
      </div>
      <div class="w-full h-full">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  background_color: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.card-background {
  box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.7);
  transition: box-shadow 200ms linear, transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}
.card-background:hover {
  transform: scale(1.02);
}

.layer {
  background-color: black;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}
.card-background:hover .layer {
  opacity: 0.5;
}

.layer-content {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}
.card-background:hover .layer-content {
  opacity: 1;
}
</style>

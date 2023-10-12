<template>
  <button @click="emits('handleClick')" class="tooltip group flex justify-center items-center">
    <div
      @pointerenter="
        () => {
          showTooltip = true;
        }
      "
      @pointerleave="
        () => {
          showTooltip = false;
        }
      "
      class="group-hover:text-[var(--secondary)] transition-colors duration-300">
      <slot></slot>
    </div>
    <Transition name="fade">
      <span v-if="showTooltip" class="tooltiptext">{{ text }}</span>
    </Transition>
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});
const emits = defineEmits(['handleClick']);
const showTooltip = ref(false);
</script>

<style scoped>
.tooltip {
  position: relative;
  cursor: pointer;
}

.tooltip .tooltiptext {
  padding: 0.5em;
  background-color: var(--text-color);
  color: var(--text-white);
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  transition: all ease-in-out 0.2s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>

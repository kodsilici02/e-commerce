<template>
  <Transition name="component_space">
    <Transition name="fade">
      <div v-if="open" @click="closeModal" class="fixed top-0 left-0 w-full h-full z-[1000] pointer-events-auto">
        <div class="w-full h-full bg-black opacity-30"></div>
      </div>
    </Transition>
  </Transition>
  <Transition name="modal">
    <div v-if="open" class="fixed z-[1002] top-0 left-0 w-full h-full pointer-events-none flex justify-center items-center">
      <div class="w-fit h-fit rounded-lg overflow-hidden pointer-events-auto">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  max_height: {
    type: Number,
    default: 650
  },
  max_width: {
    type: Number,
    default: 500
  },
  width: {
    type: Number,
    default: 500
  },
  open: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['update:open']);

function closeModal() {
  emits('update:open', false);
}
</script>

<style scoped></style>

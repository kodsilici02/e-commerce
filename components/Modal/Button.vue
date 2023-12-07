<template>
  <div @click="openModal" class="w-full h-full flex justify-center items-center">
    <slot name="button"></slot>
  </div>
  <Transition name="fade">
    <div v-if="open" @click="closeModal" class="fixed top-0 left-0 w-full h-full z-[1001] pointer-events-auto">
      <div class="w-full h-full bg-black opacity-30"></div>
    </div>
  </Transition>
  <Transition name="modal">
    <div v-if="open" class="fixed z-[1002] top-0 left-0 w-full h-full pointer-events-none flex justify-center items-center">
      <div class="w-fit h-fit rounded-lg overflow-hidden pointer-events-auto">
        <slot name="modal"></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['update:open']);

function openModal() {
  emits('update:open', true);
}
function closeModal() {
  emits('update:open', false);
}
</script>

<style scoped></style>

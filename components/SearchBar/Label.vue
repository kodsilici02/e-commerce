<template>
  <div class="w-full">
    <div class="field field_v2">
      <input id="last-name" class="field__input" placeholder="Type" autocomplete="off" @input="handle" />
      <span class="field__label-wrap" aria-hidden="true">
        <span class="field__label">{{ text }}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Search'
  }
});
const emits = defineEmits(['handleType']);

function handle() {
  emits('handleType');
}
</script>

<style lang="scss" scoped></style>

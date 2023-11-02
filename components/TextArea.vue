<template>
  <div class="w-full relative flex flex-wrap items-center">
    <textarea
      @input="autoResize"
      ref="textarea"
      v-model="comment"
      :placeholder="placeholder"
      class="w-full outline-none resize-none overflow-hidden block"
      style="background-color: var(--background); height: 2rem"></textarea>
    <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400"></div>
    <div class="absolute bottom-0 left-0 h-[2px] bottom-line"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type a comment'
  }
});

const textarea = ref();
const comment = ref();

function autoResize() {
  textarea.value.style.height = 2 + 'rem';
  if (comment.value != '') {
    textarea.value.style.height = textarea.value.scrollHeight + 'px';
  } else {
    textarea.value.style.height = 2 + 'rem';
  }
}
</script>

<style scoped>
.bottom-line {
  background: linear-gradient(90deg, var(--accent) 0%, var(--secondary-light) 100%);
  transition: transform 500ms ease-in-out;
  width: 100%;
  transform: scaleX(0);
  transform-origin: bottom right;
}
textarea:focus ~ .bottom-line {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

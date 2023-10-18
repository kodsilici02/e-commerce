<template>
  <div class="w-full relative flex flex-wrap items-center">
    <textarea
      @input="autoResize"
      ref="textarea"
      v-model="comment"
      placeholder="Type a comment"
      class="w-full outline-none resize-none overflow-hidden block"
      style="background-color: var(--background); height: 2rem"></textarea>
    <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400"></div>
    <div class="absolute bottom-0 left-0 h-[2px] bottom-line"></div>
  </div>
</template>

<script setup>
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
  transition: width 300ms ease-in-out;
  width: 0;
  transform-origin: left;
}
textarea:focus ~ .bottom-line {
  width: 100%;
}
</style>

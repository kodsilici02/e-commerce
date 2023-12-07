<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-4 p-5" style="background-color: var(--background)">
    <div class="w-full text-2xl font-bold flex justify-center text-center" style="color: var(--text-color)">
      Are you sure you want to delete?
    </div>
    <div @click="handleClick" class="w-full cursor-pointer">
      <Vue3Lottie
        ref="lottie"
        :height="430"
        :autoPlay="false"
        :loop="false"
        @onComplete="complete"
        animationLink="https://lottie.host/da71f814-2ba0-4119-86a0-cb7af338a8a4/MO6PwQnAeA.json" />
    </div>
    <div class="w-full justify-center flex" style="color: var(--text-white)">
      <button
        @click="cancel"
        class="w-36 h-10 bg-slate-400 z-[3] cursor-pointer delete-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
        style="border-radius: 35px">
        Cancel<ClientOnly>
          <font-awesome :icon="['fas', 'xmark']"></font-awesome>
        </ClientOnly>
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['handleCancel', 'handleDelete']);

const lottie = ref();
const delete_var = ref(false);
const deleted = ref(false);

function handleClick() {
  lottie.value.play();
  delete_var.value = true;
}
function complete() {
  deleted.value = true;
  emits('handleDelete');
}
onBeforeUnmount(() => {
  if (!deleted.value && delete_var.value) {
    emits('handleDelete');
  }
});

function cancel() {
  emits('handleCancel');
}
</script>
<style scoped>
.delete-button {
  background-color: #b50c0c;
  color: var(--text-white);
}
.delete-button:hover {
  background-color: #cf1414;
}
.delete-button:active {
  transition: background-color 0s ease;
  background-color: #900b0b;
}
</style>

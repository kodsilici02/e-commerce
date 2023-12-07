<template>
  <div
    ref="container"
    @click="handleClick"
    @dragover.prevent
    @drop.prevent="handleDrop"
    class="w-full h-full flex justify-center items-center p-2 add-new rounded-lg transition-transform duration-200 hover:scale-[1.05] cursor-pointer relative">
    <div class="absolute top-0 left-0 w-full h-full" style="background-color: var(--secondary-light); opacity: 0.15">
      <input
        ref="input"
        @input="handleChange"
        type="file"
        class="file hidden"
        multiple="multiple"
        accept="image/jpeg, image/png, image/jpg" />
    </div>
    <div class="flex flex-col items-center justify-center gap-2">
      <IconsImagePlus class="w-7 h-7 mt-2" :color="'var(--secondary)'"></IconsImagePlus>
      <div class="text-sm text-center">Click to upload or drag and drop file</div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['emitFile']);

const input = ref();

function handleClick() {
  input.value.click();
}

function handleChange() {
  handleFile(event.target.files[0]);
}

function handleDrop() {
  event.preventDefault();
  handleFile(event.dataTransfer.files[0]);
}

function handleFile(file) {
  let reader = new FileReader();
  reader.onload = () => {
    const base64Data = reader.result.split(',')[1];
    const dataUrl = `data:${file.type};base64,${base64Data}`;
    emits('emitFile', dataUrl);
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}
</script>

<style scoped>
.add-new {
  border: 2px dashed var(--secondary);
}
</style>

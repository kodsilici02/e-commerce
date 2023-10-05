<template>
  <div class="w-full h-full flex justify-center content-start p-4 flex-wrap gap-2" style="color: var(--text-white)">
    <div class="w-full flex justify-center items-center content-end mt-2 gap-4">
      <button
        class="p-3 rounded-full font-bold flex gap-2 items-center justify-center"
        @click="openFileInput"
        style="background-color: var(--secondary-light)">
        Select Image
        <ClientOnly>
          <font-awesome :icon="['fas', 'image']" />
        </ClientOnly>
      </button>
      <button
        class="p-3 rounded-full font-bold flex gap-2 items-center justify-center"
        @click="clearFile"
        style="background-color: var(--danger)">
        Clear Image
        <ClientOnly>
          <font-awesome :icon="['fas', 'trash']" />
        </ClientOnly>
      </button>
      <input type="file" ref="imageInput" accept=".jpg,.jpeg,.png" @change="fileChanged" class="hidden" />
    </div>
    <div class="w-full">
      <div v-show="imageSrc" class="w-64 h-64 object-fill mx-auto">
        <img :src="imageSrc" ref="img" class="block max-w-full" />
      </div>
    </div>
    <button
      v-if="imageSrc"
      class="p-3 rounded-full font-bold flex gap-2 items-center justify-center"
      @click="handleCroppedImage"
      style="background-color: var(--secondary)">
      Crop Image
      <ClientOnly>
        <font-awesome :icon="['fas', 'crop']" />
      </ClientOnly>
    </button>
  </div>
</template>

<script setup>
import Cropper from 'cropperjs';

const emits = defineEmits(['imageCropped']);
const props = defineProps({
  imageSrc: String
});

const imageInput = ref(null);
const selectedFile = ref();
const imageSrc = ref();
const img = ref();
let cropper = null;

onMounted(() => {
  cropper = new Cropper(img.value, {
    aspectRatio: 1,
    minCropBoxHeight: 256,
    minCropBoxWidth: 256,
    viewMode: 3,
    dragMode: 'move',
    background: false,
    cropBoxMovable: false,
    cropBoxResizable: false
  });
  imageSrc.value = props.imageSrc;
});

onUnmounted(() => {
  cropper.destroy();
});

watch(
  imageSrc,
  () => {
    if (imageSrc.value) {
      cropper.replace(imageSrc.value);
    }
  },
  {
    flush: 'post'
  }
);

const openFileInput = () => {
  if (imageInput.value) {
    imageInput.value.click();
  }
};

function fileChanged(event) {
  // Handle the file selection here
  const file = event.target.files[0];

  if (file) {
    let fileReader = new FileReader();

    fileReader.onload = e => {
      // Convert the selected image to base64
      const base64Image = e.target.result;

      // Update the imageSrc with the base64 data
      imageSrc.value = base64Image;
    };

    // Read the selected file as data URL
    fileReader.readAsDataURL(file);

    selectedFile.value = file;
    console.log('Selected file:', selectedFile.value);
  }
}
function clearFile() {
  selectedFile.value = null;
  imageSrc.value = null;
}

function handleCroppedImage() {
  cropper
    .getCroppedCanvas({
      width: 256,
      height: 256,
      imageSmoothingQuality: 'high'
    })
    .toBlob(blob => {
      console.log(blob);
      emits('imageCropped', blob);
    }, 'image/jpeg');
}
</script>

<style scoped></style>

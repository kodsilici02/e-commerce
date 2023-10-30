<template>
  <div class="w-full h-full flex flex-col-reverse lg:flex-row lg:flex-wrap lg:p-1" style="color: var(--text-color)">
    <!--Main Content-->
    <div class="basis-3/4 h-full flex flex-wrap content-start justify-center gap-1 p-2 relative">
      <div class="w-full p-3 ml-3 text-xl font-bold">User Informations</div>
      <div class="w-full flex flex-wrap justify-center gap-y-5 p-3">
        <div class="basis-1/2 p-2">
          <FloatingLabel :error-messages="[]" :type="'Text'" :label="'Name'" :value="'Ananas'"></FloatingLabel>
        </div>
        <div class="basis-1/2 p-2"><FloatingLabel :type="'Text'" :label="'Surname'" :value="'Okan'"></FloatingLabel></div>
        <div class="w-full p-2"><FloatingLabel :type="'date'" :label="'Birth Date'"></FloatingLabel></div>
        <div class="w-24 p-2">
          <SelectOption :back-ground-color="'#dcdcdc'" :prop_value="90" :before="'+'" :options="[90, 49, 43, 994]"></SelectOption>
        </div>
        <div class="flex-1 p-2">
          <FloatingLabel :type="'number'" :label="'Number'" :max="10"></FloatingLabel>
        </div>
        <div class="w-full p-2">
          <FloatingLabel :type="'text'" :label="'E-mail Adress'" :value="'yazilimpanteri@gmail.com'"></FloatingLabel>
        </div>
      </div>
      <div class="w-full px-5 text-xl font-bold">Change Password</div>
      <div class="w-full flex flex-wrap justify-center lg:gap-y-3 p-3">
        <div class="w-full lg:flex-1 p-2">
          <FloatingLabel :type="'text'" :label="'Current Password'" :value="''"></FloatingLabel>
        </div>
        <div class="flex-1 p-2">
          <FloatingLabel :type="'text'" :label="'New Password'" :value="''"></FloatingLabel>
        </div>
      </div>
      <!--Save and Reset Buttons-->
      <div
        class="w-full h-14 sticky bottom-0 left-0 flex justify-center items-center gap-8 z-10"
        style="background-color: var(--background)">
        <TooltipTop :text="'Reset'"
          ><ClientOnly><font-awesome :icon="['fas', 'rotate-right']" class="text-2xl" /></ClientOnly
        ></TooltipTop>
        <TooltipTop :text="'Save'"
          ><ClientOnly><font-awesome :icon="['fas', 'floppy-disk']" class="text-2xl" /></ClientOnly
        ></TooltipTop>
      </div>
    </div>
    <!--profile Section-->
    <div
      class="w-full lg:flex-1 h-full flex flex-col p-4 content-start justify-center gap-3 overflow-hidden rounded-lg border border-gray-300"
      style="background-color: var(--background-hover)">
      <!--Logout-->
      <div class="w-full flex justify-end pr-2">
        <TooltipBottom :text="'Logout'"
          ><ClientOnly><font-awesome :icon="['fas', 'right-from-bracket']" class="text-xl" /></ClientOnly
        ></TooltipBottom>
      </div>
      <!--Profile Photo-->
      <div class="w-full gap-0 flex flex-wrap justify-center items-center p-2">
        <div class="h-36 w-36 rounded-full relative">
          <button
            @click="toggleCropperModal"
            class="absolute group -top-1 cursor-pointer right-3 w-7 h-7 rounded-full flex justify-center items-center"
            style="background-color: var(--background-hover); color: var(--text-color)">
            <ClientOnly
              ><font-awesome
                :icon="['fas', 'pen']"
                class="group-hover:-translate-y-1 group-hover:text-[var(--secondary)] transition-all duration-200"
            /></ClientOnly>
          </button>
          <img :src="store.profilePhoto" class="w-full h-full rounded-full object-cover object-center" />
        </div>
        <div class="w-full flex flex-wrap">
          <div class="w-full text-xl flex font-bold justify-center items-center">Mc Tonight</div>
          <div class="w-full text-base flex justify-center items-center" style="color: var(--text-gray)">yazilimpanteri@gmail.com</div>
        </div>
      </div>
      <div class="w-full border rounded-lg flex flex-wrap text-sm" style="background-color: var(--background)">
        <div class="basis-1/2 flex flex-col gap-1 p-2">
          <div
            class="w-full rounded-lg flex justify-center items-center p-1"
            style="background-color: rgba(110, 82, 212, 0.2); color: rgba(110, 82, 212, 1)">
            Browsed Items
          </div>
          <div class="w-full flex justify-center items-center font-bold">347</div>
        </div>
        <div class="basis-1/2 flex flex-col gap-1 p-2">
          <div
            class="w-full rounded-lg flex justify-center items-center p-1"
            style="background-color: rgba(82, 145, 212, 0.2); color: rgba(82, 145, 212, 1)">
            Order Count
          </div>
          <div class="w-full flex justify-center items-center font-bold">27</div>
        </div>
        <div class="basis-1/2 flex flex-col gap-1 p-2">
          <div
            class="w-full rounded-lg flex justify-center items-center p-1"
            style="background-color: rgba(254, 21, 0, 0.2); color: rgba(254, 21, 0, 1)">
            Loved Items
          </div>
          <div class="w-full flex justify-center items-center font-bold">65</div>
        </div>
        <div class="basis-1/2 flex flex-col gap-1 p-2">
          <div
            class="w-full rounded-lg flex justify-center items-center p-1"
            style="background-color: rgba(24, 187, 45, 0.2); color: rgba(24, 187, 45, 1)">
            Reviewed
          </div>
          <div class="w-full flex justify-center items-center font-bold">17</div>
        </div>
      </div>
      <!--General Info-->
      <div class="flex-1 w-full border rounded-lg flex flex-wrap gap-1 p-2" style="background-color: var(--background)">
        <div class="w-full flex gap-1">
          <div>Name:</div>
          <div>Ananas Okan</div>
        </div>
      </div>
      <Transition name="modal">
        <ModalWrapper v-if="cropperOpen" :height="400" :width="700" @closeModal="toggleCropperModal">
          <ImageCropper @image-cropped="handleCroppedImage" :image-src="store.profilePhoto"></ImageCropper>
        </ModalWrapper>
      </Transition>
      <Transition name="component_space">
        <SideBarSpace v-if="cropperOpen" @handleClick="toggleCropperModal"></SideBarSpace>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();
const cropperOpen = ref(false);

function toggleCropperModal() {
  cropperOpen.value = !cropperOpen.value;
}

function handleCroppedImage(blob) {
  toggleCropperModal();
  let fileReader = new FileReader();
  fileReader.onload = function () {
    // 'result' contains the Base64-encoded data
    let base64String = fileReader.result;

    // Now, you can use 'base64String' as needed
    store.profilePhoto = base64String;
  };

  fileReader.readAsDataURL(blob);
}

function downloadPhoto(base64String) {
  const a = document.createElement('a');
  a.href = base64String; // Set the href to the Base64 data
  a.download = 'image.jpg'; // Set the download filename
  // Trigger a click event on the anchor element to initiate the download
  a.click();
}
</script>

<style scoped></style>

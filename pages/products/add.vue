<template>
  <div class="w-full h-auto flex flex-wrap content-start gap-y-10 p-2" style="color: var(--text-color)">
    <div class="w-full md:basis-1/2 gap-8 flex flex-wrap">
      <div class="w-full p-2 h-[45vh]">
        <div class="text-xl font-bold w-full mb-2 ml-1">Descriptions</div>
        <div class="w-full h-full border rounded-lg content-start flex flex-col gap-3 p-3 pb-5" style="border-color: var(--border-gray)">
          <div class="w-full">
            <InputLabel class="text-base" label="Product Name"></InputLabel>
          </div>
          <div class="flex-1 w-full flex flex-col gap-1">
            <div class="font-[600] w-full px-3" style="color: var(--text-gray)">Product Description</div>
            <div class="flex-1 w-full px-2" ref="quill_container">
              <div class="deneme w-full h-full">
                <ClientOnly>
                  <QuillEditor
                    class="border-[var(--border-gray)] border rounded-lg z-[1001]"
                    theme="bubble"
                    :options="editorOptions"
                    :contentType="'html'"
                    placeholder="Description" />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full p-2 h-fit">
        <div class="text-xl font-bold w-full mb-2 ml-1">Features</div>
        <div class="w-full h-full border rounded-lg content-start flex flex-wrap gap-3 p-3 pb-5" style="border-color: var(--border-gray)">
          <div class="basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col gap-2">
            <div class="font-[600] w-full ml-[2px]" style="color: var(--text-gray)">Product Category</div>
            <SelectOption
              class="w-full"
              :back-ground-color="'#dcdcdc'"
              @handle-select="
                option => {
                  category = option.toLocaleLowerCase();
                }
              "
              prop_value="Select"
              :options="getCategories().map(item => formatText(item))"></SelectOption>
          </div>
          <!-- Product Feature -->
          <div class="font-[600] ml-[2px] w-full" style="color: var(--text-gray)">Product Features</div>
          <div v-auto-animate class="w-full flex flex-wrap gap-y-2 items-center">
            <div v-for="(feature, index) in features" class="basis-1/2 md:basis-1/3 flex flex-col gap-2 items-start px-2">
              <div class="font-[600] text-sm ml-2 w-full flex" style="color: var(--text-gray)">
                {{ feature.name }}
                <div v-if="feature.unit">({{ feature.unit }})</div>
              </div>
              <SelectOption
                v-if="feature.subCategory"
                class="w-full"
                :back-ground-color="'#dcdcdc'"
                prop_value="Select"
                :options="feature.subCategory.map(item => item.name)">
              </SelectOption>
              <InputSlider
                v-if="feature.rangeSlider"
                :unit="feature.unit"
                :min="feature.min"
                :max="feature.max"
                :step="feature.step"></InputSlider>
            </div>

            <!-- Add feature Button -->
            <div class="basis-1/2 md:basis-1/3 flex flex-col mt-2 px-2">
              <div class="font-[600] ml-2 w-full h-[25px]" style="color: var(--text-gray)"></div>
              <ModalButton v-model:open="addFeatureModal" @update:open="value => (addFeatureModal = value)">
                <template v-slot:button>
                  <button
                    class="w-full add-new py-2 rounded-lg flex gap-1 items-center justify-center transition-transform duration-200 hover:scale-[1.04]"
                    style="color: var(--secondary)">
                    <ClientOnly><font-awesome :icon="['fas', 'circle-plus']"></font-awesome></ClientOnly>
                    <div>Add Feature</div>
                  </button>
                </template>
                <template v-slot:modal>
                  <div class="h-[500px] bg-white flex flex-wrap justify-center p-3" :style="{ width: calculateWidth() + 'px' }">
                    <div class="w-full flex justify-center mt-3">
                      <SearchBarAnimated
                        @update-value="value => (FeatureSearchText = value)"
                        :cancel_btn_color="'var(--secondary)'"
                        background="var(--secondary)"
                        text_color="var(--text-white)"
                        search_btn_color="var(--text-white)"></SearchBarAnimated>
                    </div>
                    <div v-auto-animate class="w-full content-start flex flex-wrap">
                      <div :key="feature.name" v-for="(feature, index) in remainingFeatures()" class="p-2">
                        <button
                          @click="addFeature(feature)"
                          class="w-fit h-fit p-2 px-4 rounded-lg flex gap-1 items-center justify-center transition-transform duration-200 hover:scale-[1.04]"
                          style="color: var(--text-white); background-color: var(--secondary)">
                          <ClientOnly><font-awesome :icon="['fas', 'circle-plus']"></font-awesome></ClientOnly>
                          <div>{{ feature.name }}</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </template>
              </ModalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:basis-1/2 p-2 h-fit flex flex-wrap gap-y-3">
      <div class="text-xl font-bold w-full mb-2 ml-1">Product Images</div>
      <div v-auto-animate class="w-full h-full border rounded-lg content-start flex flex-wrap p-3" style="border-color: var(--border-gray)">
        <div
          v-for="(image, index) in images"
          :key="image"
          @click="removeImage(index)"
          class="h-40 basis-1/2 md:basis-1/3 lg:basis-1/4 p-2 cursor-pointer transition-transform duration-200 hover:scale-[1.05] relative group">
          <div class="absolute w-full h-full top-0 left-0 z-10 p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div class="w-full h-full rounded-lg flex justify-center items-center" style="background-color: rgba(0, 0, 0, 0.5)">
              <div class="p-2 font-[600]" style="color: var(--text-white)">Remove</div>
            </div>
          </div>
          <img :src="image" class="object-cover object-center w-full h-full rounded-lg" />
        </div>
        <div :key="'AddImage'" class="h-40 basis-1/2 md:basis-1/3 lg:basis-1/4 p-2">
          <AddImage @emitFile="addImage"></AddImage>
        </div>
      </div>
      <div class="text-xl font-bold w-full ml-1">Pricing</div>
      <div class="w-full border rounded-lg content-start flex flex-wrap p-3" style="border-color: var(--border-gray)">
        <div class="text-base basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col">
          <div class="font-[600] w-full px-3" style="color: var(--text-gray)">Unit</div>
          <div class="py-3">
            <SelectOption class="text-base w-full" :back-ground-color="'#dcdcdc'" prop_value="Select" :options="['$', 'TL', 'EUR']">
            </SelectOption>
          </div>
        </div>
        <InputLabel class="text-base basis-1/2 md:basis-1/3 lg:basis-1/4" label="Price" type="number"></InputLabel>
      </div>
      <div class="w-full flex justify-end mt-2">
        <button
          class="w-fit h-fit px-3 py-2 z-[3] cursor-pointer edit-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
          style="border-radius: 35px; color: var(--text-white)">
          <ClientOnly>
            <font-awesome :icon="['fas', 'circle-plus']"></font-awesome>
          </ClientOnly>
          Add Product
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { useFilterOptions } from '@/stores/filterOptions';

const addFeatureModal = ref(false);

function findFeatures() {
  return useFilterOptions().options.find(item => item.name == category.value).filters;
}

const features = ref([]);

const FeatureSearchText = ref('');

function remainingFeatures() {
  return findFeatures().filter(
    feature => !features.value.includes(feature) && feature.name.toLocaleLowerCase().includes(FeatureSearchText.value.toLocaleLowerCase())
  );
}

function addFeature(feature) {
  closeAddFeatureModal();
  setTimeout(() => {
    features.value.push(feature);
  }, 200);
}
function closeAddFeatureModal() {
  addFeatureModal.value = false;
}

const category = ref(getCategories()[0]);

const editorOptions = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'], // toggled buttons
      ['blockquote'],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'bullet' }],
      [{ script: 'super' }], // superscript/subscript

      // text direction
      [{ color: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ['link'],

      ['clean'] // remove formatting button
    ]
  }
};

function getCategories() {
  let names = useFilterOptions().options.map(option => {
    return option.name.toLocaleLowerCase();
  });
  return names;
}

function formatText(inputText) {
  let words = inputText.split('_');
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  let formattedText = words.join(' ');
  return formattedText;
}

const images = ref([]);

function removeImage(index) {
  images.value.splice(index, 1);
}

function addImage(image) {
  images.value.push(image);
}

const quill_container = ref();
onMounted(() => {
  setTimeout(() => {
    UpdateQuillEditorHeight();
  }, 0);
  window.addEventListener('resize', UpdateQuillEditorHeight);
});
onUnmounted(() => {
  window.removeEventListener('resize', UpdateQuillEditorHeight);
});

function UpdateQuillEditorHeight() {
  if (document.querySelector('.ql-container')) {
    let height = quill_container.value.offsetHeight;
    document.querySelector('.ql-container').style.height = height - 5 + 'px';
  }
}

function calculateWidth() {
  if (window.innerWidth <= 768) {
    return 350;
  }
  if (window.innerWidth <= 1024) {
    return 500;
  }
  if (window.innerWidth <= 1280) {
    return 750;
  }
  if (window.innerWidth <= 1536) {
    return 1000;
  }
  if (window.innerWidth > 1536) {
    return 1250;
  }
}
</script>

<style scoped>
.edit-button {
  background-color: #3bc1e2;
}
.edit-button:hover {
  background-color: #64d2ed;
}
.edit-button:active {
  transition: background-color 0s ease;
  background-color: #648bed;
}
.add-new {
  border: 1px dashed var(--secondary);
}
</style>
<style>
.ql-container {
  box-sizing: border-box;
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  margin: 0px;
  position: relative;
  z-index: 990;
}
</style>

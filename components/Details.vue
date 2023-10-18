<template>
  <div ref="wrapper" class="w-full overflow-hidden p-2 transition-all duration-500 relative">
    <div ref="container" class="flex justify-center flex-wrap">
      <div ref="item" v-for="detail in product.details" class="basis-1/2 px-3 py-2">
        <div class="w-full rounded-lg p-3 flex justify-between items-center" style="background-color: var(--background-hover)">
          <div class="font-bold">{{ formatType(detail.type) }}</div>
          <div class="flex-shrink-0 font-[700]" v-if="detail.number || detail.string">{{ detail.value }}</div>
          <div class="flex-shrink-0 font-[700]" v-if="detail.array">{{ detail.value[0] }}</div>
          <div v-if="detail.bool">
            <ClientOnly>
              <font-awesome v-if="detail.value" :icon="['fas', 'circle-check']"></font-awesome>
              <font-awesome v-else :icon="['fas', 'circle-xmark']"></font-awesome>
            </ClientOnly>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <button
          @click="deneme"
          class="text-[var(--text-color)] font-bold text-lg cursor-pointer transition-all duration-500 hover:text-[var(--secondary)]">
          Show Less
        </button>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 w-full h-20 overflow-hidden transition-all duration-500 max-h-0 gradient"
      :class="{ 'show-gradient': !showAll }">
      <div class="w-full h-full gradient flex justify-center items-end">
        <button
          @click="deneme"
          class="text-[var(--text-color)] font-bold text-lg cursor-pointer transition-all duration-500 hover:text-[var(--secondary)]">
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const product = useNuxtApp().$getProduct('samsung-galaxy-s22');
function formatType(type) {
  // Split the type by underscores and capitalize the first letter of each word
  const words = type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  // Join the words back together with a space
  return words.join(' ');
}

const item = ref();
const container = ref();
const wrapper = ref();
const showAll = ref(false);

onMounted(() => {
  wrapper.value.style.maxHeight = calculateMaxHeight();
});

function deneme() {
  showAll.value = !showAll.value;
  wrapper.value.style.maxHeight = calculateMaxHeight();
}

function calculateMaxHeight() {
  if (!showAll.value && item.value) {
    return item.value[0].offsetHeight * 4 + 'px';
  }
  if (showAll.value && item.value) {
    return container.value.offsetHeight + 50 + 'px';
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(0deg, var(--background) 0%, rgba(255, 255, 255, 0) 100%);
}
.show-gradient {
  max-height: 5rem;
}
</style>

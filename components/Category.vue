<template>
  <div class="w-full flex flex-wrap justify-center items-center">
    <button
      v-if="title"
      @click="
        () => {
          emits('handleClick');
        }
      "
      class="w-full flex justify-center items-center gap-2 cursor-pointer transition-all duration-300"
      :class="{ 'category-button': hover }">
      <div class="flex basis-2/3 items-center justify-center gap-2 px-2">
        <div v-if="categoryIcon" class="flex-1 flex justify-start items-center text-xl">
          <ClientOnly>
            <font-awesome :icon="categoryIcon" style="pointer-events: none" class="transition-transform duration-300"></font-awesome>
          </ClientOnly>
        </div>
        <div class="flex-1 flex-grow flex justify-center text-lg" :class="{ 'font-bold': bold }">
          <!-- Use ml-2 for adding left margin to create space between icon and text -->
          {{ title }}
        </div>
        <div class="justify-center text-xl" :class="{ 'flex-1': categoryIcon, 'basis-1/6': categoryIcon == null }">
          <ClientOnly>
            <font-awesome
              :icon="['fas', 'chevron-down']"
              style="pointer-events: none"
              class="transition-transform duration-300"
              :style="{ transform: open ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
          </ClientOnly>
        </div>
      </div>
    </button>
    <Accordeon :open="open">
      <div
        class="mr-[3px] mt-2 overflow-y-auto rounded-lg box-shadow"
        :style="{ 'background-color': backGroundColor, 'max-height': height + 'px' }">
        <slot></slot>
      </div>
    </Accordeon>
  </div>
</template>

<script setup>
const props = defineProps({
  categoryIcon: Array,
  title: String,
  bold: Boolean,
  open: Boolean,
  backGroundColor: {
    type: String,
    default: 'rgba(67, 67, 67, 0.4)'
  },
  height: Number,
  hover: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['handleClick']);
</script>

<style scoped>
.category-button:hover {
  color: var(--primary);
}

.box-shadow {
  box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.6) inset;
  -webkit-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.6) inset;
  -moz-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.6) inset;
}
</style>

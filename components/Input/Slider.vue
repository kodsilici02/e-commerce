<template>
  <div class="w-full flex flex-wrap">
    <div class="w-full flex-col">
      <input
        ref="slider"
        class="slider rounded-full"
        type="range"
        :min="min"
        :max="max"
        v-model="sliderValue"
        :step="step"
        @input="onInput" />
    </div>
    <div class="w-full flex justify-around">
      <div class="flex-1 flex justify-start">{{ min }}</div>
      <div class="flex-1 flex flex-col gap-1">
        <div class="up-arrow top-1"></div>
        <input type="number" class="bg-transparent outline-none w-full text-center" v-model="sliderValue" />
      </div>
      <div class="flex-1 flex justify-end">{{ max }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';

// define component props for the slider component
const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  value: {
    type: Number,
    default: 50
  },
  unit: String
});

const emit = defineEmits(['update']);

const slider = ref(null);
const sliderValue = ref(50);

const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

const setCSSProps = percent => {
  slider.value.style.setProperty('--percent', `${percent}%`);
};

watchEffect(() => {
  if (sliderValue.value > props.max) {
    sliderValue.value = props.max;
  }
  if (sliderValue.value < props.min) {
    sliderValue.value = props.min;
  }
  if (slider.value) {
    const percent = getPercent(sliderValue.value, props.min, props.max);
    setCSSProps(percent);
  }
});

const onInput = ({ target }) => {
  emit('update', target.value);
};
</script>
<style scoped>
.up-arrow {
  position: relative;
  text-decoration: none;
  border-radius: 1px;
}

.up-arrow:after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  bottom: calc(100% - 1px);
  width: 0;
  height: 0;
  border: 9px solid transparent;
  border-bottom-color: var(--secondary);
  transform: translateX(-50%);
}
.slider {
  --trackHeight: 0.4rem;
  --thumbRadius: 0.9rem;
  position: relative;
  appearance: none;
  background: none;
  z-index: 0;
  height: 100%;
  pointer-events: none;
  appearance: none;
  width: 100%;
  height: var(--trackHeight);
}
.slider::before {
  content: '';
  position: absolute;
  border-radius: 999px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: var(--secondary-light);
}
.slider::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  top: 0;
  left: 0;
  width: var(--percent);
  height: 100%;
  background-color: var(--secondary);
}

.slider::-webkit-slider-thumb {
  position: relative;
  cursor: pointer;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  background: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

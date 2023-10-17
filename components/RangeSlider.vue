<template>
  <div class="w-full flex flex-wrap">
    <div ref="slider" class="custom-slider minmax w-full">
      <div class="minmax-indicator"></div>
      <input ref="inputMin" type="range" name="min" id="min" :min="min" :max="max" :value="minValue" :step="step" @input="onInput" />
      <input ref="inputMax" type="range" name="max" id="max" :min="min" :max="max" :value="maxValue" :step="step" @input="onInput" />
    </div>
    <div class="w-full flex justify-between items-center">
      <NumberInput
        :value="sliderMinValue"
        :max="sliderMaxValue"
        :min="min"
        @increase="
          () => {
            if (sliderMinValue < sliderMaxValue) {
              if (isFloat(sliderMinValue)) {
                sliderMinValue = parseFloat((sliderMinValue + step).toFixed(1));
              } else {
                sliderMinValue = sliderMinValue + step;
              }
            }
          }
        "
        @decrease="
          () => {
            if (sliderMinValue > min) {
              if (isFloat(sliderMinValue)) {
                sliderMinValue = parseFloat((sliderMinValue - step).toFixed(1));
              } else {
                sliderMinValue = sliderMinValue - step;
              }
            }
          }
        "
        @onInput="value => changeMin(value)"></NumberInput>
      <div class="flex-1 flex justify-center items-center text-xl font-bold">{{ unit }}</div>
      <NumberInput
        :value="sliderMaxValue"
        :max="max"
        :min="sliderMinValue"
        @increase="
          () => {
            if (sliderMaxValue < max) {
              if (isFloat(sliderMaxValue)) {
                sliderMaxValue = parseFloat((sliderMaxValue + step).toFixed(1));
              } else {
                sliderMaxValue = sliderMaxValue + step;
              }
            }
          }
        "
        @decrease="
          () => {
            if (sliderMaxValue > sliderMinValue) {
              if (isFloat(sliderMaxValue)) {
                sliderMaxValue = parseFloat((sliderMaxValue - step).toFixed(1));
              } else {
                sliderMaxValue = sliderMaxValue - step;
              }
            }
          }
        "
        @onInput="value => changeMax(value)"></NumberInput>
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
  unit: String,
  minValue: Number,
  maxValue: Number
});

function isFloat(number) {
  return Number(number) === number && number % 1 !== 0;
}

watch(
  () => props.minValue,
  newVal => {
    sliderMinValue.value = newVal;
  }
);
watch(
  () => props.maxValue,
  newVal => {
    sliderMaxValue.value = newVal;
  }
);

// define emits for the slider component
const emit = defineEmits(['update']);

// define refs for the slider element and the slider values
const slider = ref(null);
const inputMin = ref(null);
const inputMax = ref(null);
const sliderMinValue = ref(props.minValue);
const sliderMaxValue = ref(props.maxValue);

function changeMax(value) {
  sliderMaxValue.value = value;
}
function changeMin(value) {
  sliderMinValue.value = value;
}

// function to get the percentage of a value between the min and max values
const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to get the difference between the min and max values
const sliderDifference = computed(() => {
  return Math.abs(sliderMaxValue.value - sliderMinValue.value);
});

// function to set the css variables for width, left and right
const setCSSProps = (left, right) => {
  slider.value.style.setProperty('--progressLeft', `${left}%`);
  slider.value.style.setProperty('--progressRight', `${right}%`);
};

// watchEffect to emit the updated values, and update the css variables
// when the slider values change
watchEffect(() => {
  if (slider.value) {
    // emit slidet values when updated
    emit('update', { min: sliderMinValue.value, max: sliderMaxValue.value });

    // calculate values in percentages
    const leftPercent = getPercent(sliderMinValue.value, props.min, props.max);
    const rightPercent = 100 - getPercent(sliderMaxValue.value, props.min, props.max);

    // set the CSS variables
    setCSSProps(leftPercent, rightPercent);
  }
});

// validation sliderMinValue do not greater than sliderMaxValue and opposite
const onInput = ({ target }) => {
  if (target.name === 'min') {
    target.value > sliderMaxValue.value ? (target.value = sliderMaxValue.value) : (sliderMinValue.value = parseFloat(target.value));
  }

  if (target.name === 'max') {
    target.value < sliderMinValue.value ? (target.value = sliderMinValue.value) : (sliderMaxValue.value = parseFloat(target.value));
  }
};
</script>

<style scoped>
.custom-slider {
  --trackHeight: 0.35rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type='range'] {
  position: relative;
  appearance: none;
  background: none;
  border-radius: 999px;
  z-index: 0;
  height: 100%;
  pointer-events: none;
}

/* ::before element to replace the slider track */
.custom-slider input[type='range']::before {
  content: '';
  display: block;
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: var(--primary);
  border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type='range']::-webkit-slider-runnable-track {
  appearance: none;
  background: var(--primary);
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type='range']::-webkit-slider-thumb {
  position: relative;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider.default input[type='range']::-moz-range-track {
  appearance: none;
  background: var(--secondary);
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type='range']::-moz-range-thumb {
  position: relative;
  box-sizing: border-box;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.custom-slider.minmax {
  position: relative;
  height: var(--trackHeight);
  background: var(--secondary-light);
  border-radius: 999px;
  margin: 0.5rem 0;
  --progressLeft: 0%;
  --progressRight: 0%;
}

.custom-slider .minmax-indicator {
  position: absolute;
  height: 100%;
  pointer-events: none;
  left: var(--thumbRadius);
  right: var(--thumbRadius);
}

.custom-slider .minmax-indicator::before {
  content: '';
  position: absolute;
  background: var(--secondary);
  height: 100%;
  left: var(--progressLeft);
  right: var(--progressRight);
}

.custom-slider.minmax input[type='range'] {
  position: absolute;
  width: calc(100% - var(--thumbRadius));
}

.custom-slider.minmax input[type='range'][name='max'] {
  left: var(--thumbRadius);
}

.custom-slider.minmax input[type='range']::-webkit-slider-runnable-track {
  background: none;
}

.custom-slider.minmax input[type='range']::before {
  display: none;
}

.minmax-inputs {
  display: flex;
  justify-content: space-between;
}
</style>

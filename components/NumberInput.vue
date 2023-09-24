<template>
  <div>
    <div
      class="m-[0.2em] text-black flex w-[3em] border border-black rounded-[2.4em] justify-between items-center flex-col transition duration-300"
      style="border-color: var(--text-color)">
      <button :key="'key1'" class="num-icon" @click="increase">
        <ClientOnly><font-awesome :icon="['fas', 'chevron-up']"></font-awesome></ClientOnly>
      </button>
      <input
        class="num-input"
        :key="'key2'"
        :min="props.min"
        :max="props.max"
        :value="props.value"
        @focusout="onInput($event)"
        type="number" />
      <button :key="'key3'" class="num-icon" @click="decrease">
        <ClientOnly> <font-awesome :icon="['fas', 'chevron-down']"></font-awesome> </ClientOnly>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },

  value: {
    type: Number,
    default: 50
  }
});

const reactiveValue = ref(props.value);

const emits = defineEmits(['increase', 'decrease', 'onInput']);

function onInput(event) {
  let tempValue = parseInt(event.target.value);
  if (tempValue == '') {
    tempValue = props.min;
  }
  if (tempValue < props.min) {
    tempValue = props.min;
  }
  if (tempValue > props.max) {
    tempValue = props.max;
  }
  reactiveValue.value = tempValue;
  emits('onInput', tempValue);
}

function increase() {
  emits('increase');
}

function decrease() {
  emits('decrease');
}
</script>

<style scoped>
.num-input::-webkit-inner-spin-button,
.num-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.num-input {
  font-size: 14px;
  text-align: center;
  background: none;
  border: none;
  color: var(--secondary);
  font-weight: bold;
}
.num-input:focus {
  outline: none;
}
.num-icon {
  font-size: 1em;
  cursor: pointer;
}
</style>

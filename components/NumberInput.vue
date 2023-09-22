<template>
  <div>
    <div
      class="m-[0.2em] text-black flex w-[3em] border border-black rounded-[2.4em] justify-between items-center flex-col transition duration-300"
      style="border-color: var(--text-color)">
      <div :key="'key1'" class="num-icon" @click="increase">
        <ClientOnly><font-awesome :icon="['fas', 'chevron-up']"></font-awesome></ClientOnly>
      </div>
      <input class="num-input" :key="'key2'" :min="min" :max="max" :value="reactiveValue" @focusout="onInput($event)" type="number" />
      <div :key="'key3'" class="num-icon" @click="decrease">
        <ClientOnly> <font-awesome :icon="['fas', 'chevron-down']"></font-awesome> </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
const { min, max, value } = defineProps({
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

const reactiveValue = ref(value);

const emits = defineEmits(['increase', 'decrease', 'onInput']);

function onInput(event) {
  reactiveValue.value = parseInt(event.target.value);
  if (reactiveValue.value == '') {
    reactiveValue.value = min;
  }
  if (reactiveValue.value < min) {
    reactiveValue.value = min;
  }
  if (reactiveValue.value > max) {
    reactiveValue.value = max;
  }
  emits('onInput', reactiveValue.value);
}

function increase() {
  emits('increase');
}

function decrease() {
  emits('decrease');
}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  position: absolute;
}

.list-enter-active {
  position: relative;
}

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

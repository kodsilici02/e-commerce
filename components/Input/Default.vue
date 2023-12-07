<template>
  <div class="w-full">
    <input
      @input="handleInput()"
      :type="type"
      :readonly="readOnly"
      :max="max"
      class="border-shadow p-2 mt-1 text-base rounded-lg font-bold w-full bg-transparent placeholder:text-transparent transition-all duration-200"
      :class="{ form_error_border: checkError() }"
      v-model="internalValue"
      ref="input"
      id="name"
      required />
  </div>
</template>

<script setup>
const emits = defineEmits(['handleType']);
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },

  value: {
    default: null
  },
  errorMessages: {
    type: Array,
    default: []
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  max: Number
});

const input = ref();
const internalValue = ref(props.value);

function handleInput() {
  let target = event.target.value;
  emits('handleType', target);
}

function checkError() {
  if (props.errorMessages.length > 0) {
    return true;
  } else {
    return false;
  }
}
</script>

<style scoped>
.border-shadow {
  transition: all 200ms ease-in-out;
  box-shadow: 0px 0px 0px 1px var(--border-gray);
  outline: none;
}
.border-shadow:focus {
  box-shadow: 0px 0px 3px 2px var(--secondary);
}

.form_error_border {
  border: 1px solid var(--danger);
}
</style>

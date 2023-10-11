<template>
  <div class="w-full relative">
    <input
      :type="type"
      class="form_field p-3 rounded-lg w-full bg-transparent placeholder:text-transparent transition-all duration-200"
      :placeholder="label"
      :value="value"
      name="name"
      id="name"
      required />
    <label
      for="name"
      class="form_label pointer-events-none transition-all duration-200 px-2 top-[10px] absolute left-2 text-xl block bg-[var(--background)]">
      {{ label }}</label
    >
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: 'Label'
  },
  value: {
    default: null
  },
  error: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped lang="scss">
.form_field {
  color: var(--text-color);
  outline: none;
  border: 1px solid var(--text-gray);
}

.form_field::-webkit-inner-spin-button,
.form_field::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.form_field:not(:placeholder-shown) ~ .form_label,
.form_field:focus ~ .form_label {
  top: -15px;
  display: block;
  font-size: 14px;
}

.form_field:focus {
  outline: none;
  border: 1px solid var(--secondary);
}

.form_field:required,
.form_field:invalid {
  box-shadow: none;
}

.form_field:focus ~ .form_label {
  color: var(--secondary);
  position: absolute;
  top: -15px;
  display: block;
  font-size: 14px;
  outline: none;
}
</style>

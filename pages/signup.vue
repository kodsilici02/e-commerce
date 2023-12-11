<template>
  <div class="w-full h-full flex justify-center items-center">
    <BackGround></BackGround>
    <div
      class="w-full sm:basis-1/2 lg:basis-1/3 box-shadow rounded-lg flex gap-y-1 p-5 flex-wrap"
      style="background-color: var(--background); color: var(--text-color)">
      <div class="p-2 py-3 basis-1/2">
        <InputFloatingLabel class="w-full" label="Name" type="text"></InputFloatingLabel>
      </div>
      <div class="p-2 py-3 basis-1/2">
        <InputFloatingLabel class="w-full" label="Surname" type="text"></InputFloatingLabel>
      </div>
      <div class="p-2 w-full flex flex-wrap gap-y-2">
        <div ref="switch_cont" class="ml-1 pb-1 switch">
          <div class="w-fit flex gap-4 px-1">
            <button
              class="hover:text-[var(--primary)] transition-colors duration-200"
              :class="{ 'text-[var(--success)]': index == selected_method }"
              ref="option_button"
              v-for="(option, index) in options"
              @click="switchInput(index)">
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
      <div class="w-full p-2 flex flex-wrap gap-y-2 overflow-hidden">
        <Transition :name="transitionName" mode="out-in">
          <InputFloatingLabel
            :key="options[selected_method].label"
            class="w-full"
            :label="options[selected_method].label"
            :type="options[selected_method].type"></InputFloatingLabel>
        </Transition>
      </div>
      <div class="p-2 py-3 w-full">
        <InputFloatingLabel class="w-full" label="Password" type="text"></InputFloatingLabel>
      </div>
      <div class="p-2 py-3 w-full">
        <InputFloatingLabel class="w-full" label="Password(Again)" type="text"></InputFloatingLabel>
      </div>
      <div class="w-full flex flex-wrap justify-center gap-2 p-2">
        <GoogleButton class="w-fit"><div class="w-full">Sign Up with Google</div></GoogleButton>
      </div>
      <div class="w-full p-2 flex justify-end">
        <div class="box-shadow-button cursor-pointer w-fit h-fit flex gap-2 justify-center items-center px-2 py-1 font-[600] text-lg">
          Create Account
          <ClientOnly>
            <font-awesome :icon="['fas', 'chevron-right']"></font-awesome>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = [
  {
    label: 'E-mail',
    type: 'text'
  },
  {
    label: 'Phone',
    type: 'number'
  }
];
const selected_method = ref(0);
const option_button = ref();
const switch_cont = ref();
function switchInput(index) {
  if (index > selected_method.value) {
    transitionName.value = 'right';
  } else {
    transitionName.value = 'left';
  }
  selected_method.value = index;
  let container = switch_cont.value;
  let element = option_button.value[index];
  container.style.setProperty('--line-left', element.offsetLeft - 5 + 'px');
  container.style.setProperty('--line-width', element.offsetWidth + 10 + 'px');
}

const transitionName = ref('left');

onMounted(() => {
  switchInput(selected_method.value);
});
</script>

<style scoped>
.box-shadow-button {
  border-radius: 5px;
  border: 2px solid var(--secondary);
  transition: 0.3s ease-in-out;
}
.box-shadow-button:hover {
  box-shadow: 0.3em 0.3em 0 0 var(--secondary), inset 0 0 0 0 var(--secondary);
  transform: translate(-5px, -5px);
  color: var(--secondary);
}
.box-shadow-button:active {
  color: var(--primary);
  transition: all 0;
}
.box-shadow {
  box-shadow: 0px 1px 18px 2px rgba(0, 0, 0, 0.7);
}
.switch {
  position: relative;
}
.switch::before {
  content: '';
  position: absolute;
  height: 3px;
  top: 100%;
  width: 100%;
  border-top: 2px solid rgb(141, 141, 141);
  transform: translateY(0px);
}

.switch::after {
  transition: all 0.2s;
  content: '';
  position: absolute;
  height: 3px;
  top: 100%;
  left: var(--line-left, 0);
  width: var(--line-width);
  border-top: 2px solid rgb(0, 194, 104);
  transform: translateY(0px);
}
</style>

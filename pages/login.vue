<template>
  <div class="w-full h-full flex justify-center items-center px-2">
    <BackGround></BackGround>
    <div
      class="w-full sm:basis-1/2 lg:basis-1/3 box-shadow rounded-lg flex gap-y-1 p-5 flex-wrap"
      style="background-color: var(--background); color: var(--text-color)">
      <div class="p-2 w-full flex flex-wrap gap-y-2">
        <div ref="switch_cont" class="ml-1 pb-1 switch">
          <div class="w-fit flex gap-4 px-1">
            <button
              class="hover:text-[var(--primary)] transition-colors duration-200"
              :class="{ 'text-[var(--success)]': index == selected_method }"
              ref="option_button"
              v-for="(option, index) in options"
              @click="switchInput(index)">
              {{ option }}
            </button>
          </div>
        </div>
      </div>
      <div class="w-full p-2 flex flex-wrap gap-y-2 overflow-hidden">
        <Transition :name="transitionName" mode="out-in">
          <InputFloatingLabel :key="label" class="w-full" :label="label" type="text"></InputFloatingLabel>
        </Transition>
      </div>
      <div class="p-2 py-3 w-full">
        <InputFloatingLabel class="w-full" label="Password" type="text"></InputFloatingLabel>
      </div>

      <div class="w-full flex flex-wrap justify-center gap-2 p-2">
        <GoogleButton class="w-fit"><div class="w-full">Login with Google</div></GoogleButton>
      </div>
      <div class="w-full p-2 flex justify-end">
        <button class="box-shadow-button cursor-pointer w-fit h-fit flex gap-2 justify-center items-center px-2 py-1 font-[600]">
          Login
          <ClientOnly>
            <font-awesome :icon="['fas', 'chevron-right']"></font-awesome>
          </ClientOnly>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = ['E-mail', 'Phone'];
const selected_method = ref(0);
const option_refs = ref(null);
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
  label.value = options[selected_method.value];
}

const transitionName = ref('left');

const label = ref(options[0]);
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

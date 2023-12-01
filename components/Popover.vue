<template>
  <div @mouseover="openPopover" @mouseleave="closePopover" class="container" ref="container">
    <div>
      <div ref="popover" class="relative">
        <div class="popover transition-[scale] duration-150"><slot name="popover"></slot></div>
        <Transition name="modal-Transition">
          <div v-if="open" class="up-arrow top-2 z-[1011]"></div>
        </Transition>
      </div>
      <Transition name="modal-Transition">
        <div v-if="open" class="absolute z-[1010] pt-2 content" ref="content" style="view-transition-name: popover">
          {{ calculatePosition() }}
          <slot name="content"></slot></div
      ></Transition>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  arrowColor: {
    type: String,
    default: 'white'
  },
  arrowBorderColor: {
    type: String,
    default: 'black'
  }
});

const container = ref();

onMounted(() => {
  if (container.value) {
    container.value.style.setProperty('--arrow-color', props.arrowColor);
    container.value.style.setProperty('--arrow-border', props.arrowBorderColor);
  }
});
const open = ref(false);
const popover = ref();
const content = ref();

const calculatePosition = () => {
  if (content.value && popover.value) {
    let contentRect = content.value.getBoundingClientRect();
    let popoverRect = popover.value.getBoundingClientRect();
    let windowWidth = window.innerWidth;
    let offsetLeft = popoverRect.x + popoverRect.width / 2 - contentRect.width / 2;
    content.value.style.left = offsetLeft + 'px';
    if (offsetLeft <= 0) {
      content.value.style.left = 0.75 + 'rem';
    }
    if (contentRect.right >= windowWidth) {
      content.value.style.left = windowWidth - contentRect.width - convertRemToPixels(1) + 'px';
    }
    content.value.style.top = popoverRect.bottom + popover.height + 'px';
  }
};

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

onMounted(() => {
  setTimeout(() => {
    calculatePosition();
  }, 10);
});

function openPopover() {
  open.value = true;
  popover.value.querySelector('.popover').style.scale = 1.15;
}
function closePopover() {
  open.value = false;
  popover.value.querySelector('.popover').style.scale = 1;
}
</script>

<style scoped>
.container {
  --arrow-border: black;
  --arrow-color: red;
}
.up-arrow {
  position: relative;
  text-decoration: none;
  border-radius: 1px;
}
.up-arrow:before {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  bottom: 100%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: var(--arrow-border);
  transform: translateX(-50%);
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
  border-bottom-color: var(--arrow-color);
  transform: translateX(-50%);
}
.modal-Transition-enter-from,
.modal-Transition-leave-to {
  opacity: 0;
}
.modal-transition-enter-to,
.modal-Transition-leave-from {
  opacity: 1;
}
.modal-Transition-enter-active,
.modal-Transition-leave-active {
  transition: all 0.15s ease-in-out;
}
</style>

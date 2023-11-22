<template>
  <div ref="main_container" class="w-full h-full overflow-x-auto" style="color: var(--text-color)">
    <div class="w-fit mx-auto mt-3">
      <div class="flex">
        <div :style="{ width: width }" v-for="(item, index) in items" class="p-1">
          <div class="w-full flex flex-wrap justify-center gap-2 rounded-xl relative">
            <div
              class="w-full h-9 sticky top-0 flex font-[600] text-sm text-center lg:text-xl justify-center items-center z-[-1]"
              style="background-color: var(--background)">
              {{ item.name }}
            </div>
            <div class="h-[350px] py-4 w-full flex gap-3 items-center justify-center">
              <img :src="item.images[0]" :style="{ 'view-transition-name': viewTransitionName(index) }" class="h-full object-contain" />
            </div>
            <div class="w-full h-9 flex flex-wrap items-center justify-center text-sm md:text-lg">
              <div
                v-if="item.details.find(detail => detail.type === 'score')"
                class="w-full px-3 flex justify-center items-center flex-wrap gap-2">
                <div class="w-full h-[4px] rounded-full overflow-hidden" style="background-color: var(--background-hover)">
                  <div ref="score_container" class="h-full w-0" style="background-color: var(--success)"></div>
                </div>
                <div class="w-full flex gap-2 text-center justify-center">
                  {{ item.details.find(detail => detail.type === 'score').value }}
                </div>
              </div>
              <ClientOnly ref="score_container" v-else>
                <font-awesome :icon="['far', 'circle-question']" />
              </ClientOnly>
            </div>
            <div class="w-full h-72">
              <Chart></Chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { gsap } from 'gsap';

function viewTransitionName(index) {
  return 'compareTransition' + index;
}

const route = useRoute();
const items = ref();
items.value = route.query.item.map(item => useNuxtApp().$getProduct(item));

const score_container = ref();
function setScore(index, value) {
  let fraction = (value / 5) * 100 + '%';
  let element = score_container.value[index];
  let tl = gsap.timeline();
  gsap.set(element, { width: 0 });
  tl.to(element, { width: fraction, duration: 1 });
  tl.delay(0.5);
  tl.play();
}

onMounted(() => {
  items.value.forEach((item, index) => {
    if (item.details.find(detail => detail.type === 'score')) {
      setScore(index, item.details.find(detail => detail.type === 'score').value);
    }
  });
});

const width = ref();

function calculateWith() {
  if (window.innerWidth < 1024) {
    width.value = window.innerWidth / 2 - 24 + 'px';
  } else if (window.innerWidth <= 1280) {
    width.value = window.innerWidth / 3 - 24 + 'px';
  } else {
    width.value = window.innerWidth / 4 - 24 + 'px';
  }
  console.log(width.value);
}

onMounted(() => {
  calculateWith();
  window.addEventListener('resize', () => {
    calculateWith();
  });
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    calculateWith();
  });
});

const scrollContainer = ref(null);
function handleMouseWheel(event) {
  scrollContainer.value.scrollLeft += 3 * event.deltaY;
}
</script>

<style scoped>
.item {
  width: 125px;
}
@media only screen and (min-width: 768px) {
  .item {
    width: 250px;
  }
}
@media only screen and (min-width: 1024px) {
  .item {
    width: 350px;
  }
}
</style>

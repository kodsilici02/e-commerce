<template>
  <div ref="main_container" class="w-full h-full overflow-x-auto" style="color: var(--text-color)">
    <div class="w-fit mx-auto mt-3">
      <SortableContainer
        :options="{
          handle: '.handle',
          animation: 200,
          swapThreshold: 0.5,
          dragClass: 'sortable-drag',
          ghostClass: 'sortable-ghost',
          onStart: evt => onStart(evt),
          onEnd: evt => onEnd(evt)
        }"
        class="flex">
        <div :key="item.name" :style="{ width: width }" v-for="(item, index) in items" class="p-1">
          <div class="w-full flex flex-wrap justify-center gap-2 rounded-xl relative">
            <div class="w-full p-3 flex justify-center">
              <ClientOnly
                ><font-awesome class="cursor-pointer text-xl handle" :icon="['fas', 'up-down-left-right']"></font-awesome
              ></ClientOnly>
            </div>
            <div
              class="w-full h-9 sticky top-0 flex font-[600] text-sm text-center lg:text-xl justify-center items-center z-[-1]"
              style="background-color: var(--background)">
              {{ item.name }}
            </div>
            <div class="h-[350px] py-4 w-full flex gap-3 items-center justify-center">
              <img :src="item.images[0]" :style="{ 'view-transition-name': viewTransitionName(index) }" class="h-full object-contain" />
            </div>
            <div class="w-full h-9 flex flex-wrap items-center justify-center mt-2 text-sm md:text-lg">
              <div v-if="item.score" class="w-full px-3 flex justify-center items-center flex-wrap gap-2">
                <div class="w-full h-[4px] rounded-full overflow-hidden" style="background-color: var(--background-hover)">
                  <div ref="score_container" class="h-full" style="background-color: var(--success)"></div>
                </div>
                <div class="w-full flex gap-2 text-center justify-center">
                  {{ item.details.find(detail => detail.type === 'score').value }}
                </div>
              </div>
              <ClientOnly ref="score_container" v-else>
                <font-awesome :icon="['far', 'circle-question']" />
              </ClientOnly>
            </div>
            <div class="w-full h-72 mt-2">
              <Chart></Chart>
            </div>
            <div class="w-full flex flex-col mt-2">
              <div
                v-for="(filter, filterIndex) in filters()"
                class="flex flex-col content-start justify-center w-full border-b"
                :class="filter.type"
                style="border-color: var(--secondary)">
                <div class="w-full flex h-fit justify-center text-sm md:text-xl font-[600]">{{ formatText(filter.type) }}</div>
                <div class="w-full flex-1 items-center flex justify-center text-xs md:text-base font-[500] mb-2">
                  <div v-if="item.details.find(detail => detail.type === filter.type)">
                    <div v-if="item.details.find(detail => detail.type === filter.type).bool">
                      <ClientOnly v-if="item.details.find(detail => detail.type === filter.type).value">
                        <font-awesome :icon="['fas', 'circle-check']" />
                      </ClientOnly>

                      <ClientOnly v-else>
                        <font-awesome :icon="['fas', 'circle-xmark']" />
                      </ClientOnly>
                    </div>

                    <div v-else>
                      {{ item.details.find(detail => detail.type === filter.type).value }}
                    </div>
                  </div>
                  <ClientOnly v-else ref="score_container">
                    <font-awesome :icon="['far', 'circle-question']" />
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SortableContainer>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useFilterOptions } from '@/stores/filterOptions';
import { gsap } from 'gsap';

function filters() {
  return useFilterOptions().options.find(item => item.name == route.params.category).filters;
}

function formatText(inputText) {
  let words = inputText.split('_');
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  let formattedText = words.join(' ');
  return formattedText;
}

function rowHeight(name) {
  let elements = document.querySelectorAll('.' + name);
  let heights = [];
  elements.forEach(element => {
    heights.push(element.offsetHeight);
  });
  elements.forEach(element => {
    element.style.height = Math.max(...heights) + 'px';
  });
}

onMounted(async () => {
  setTimeout(() => {
    filters().forEach(filter => {
      rowHeight(filter.type);
    });
  }, 0);
}),
  function onStart(event) {
    event.item.style.opacity = '0';
  };

function onEnd(event) {
  event.item.style.opacity = '1';
  switchItems(event.oldIndex, event.newIndex);
}

function switchItems(one, two) {
  let temporary = items.value[one];
  items.value[one] = items.value[two];
  items.value[two] = temporary;
}

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
    if (item.score) {
      setScore(index, item.score);
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
    width.value = window.innerWidth / 3 - 24 + 'px';
  }
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
.sortable-drag {
  opacity: 1;
}
.sortable-ghost {
  opacity: 0;
}
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

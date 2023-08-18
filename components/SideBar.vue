<template>
  <div class="fixed w-80 h-full bg-gray-900 z-[1001] flex flex-wrap p-2 gap-2 content-start" style="color: var(--text-white)">
    <div v-for="(route, index) in router.options.routes" class="w-full flex flex-col justify-center items-center">
      <button
        class="w-full flex justify-center items-center gap-2 text-xl cursor-pointer transition-all duration-300 category-button"
        @click="openCategory(index)">
        {{ capitalizeFirstLetterFromPath(route.path) }}
        <ClientOnly>
          <font-awesome
            :icon="['fas', 'chevron-down']"
            style="pointer-events: none"
            class="transition-transform duration-300"
            :style="{ transform: categoryStates[index] ? 'rotate(-90deg)' : 'rotate(0)' }"></font-awesome>
        </ClientOnly>
      </button>
      <div class="w-full overflow-hidden transition-all duration-300 mt-1" style="max-height: 0" ref="sub_category">
        <div class="sub-category">
          <div class="mr-[3px] py-2" style="background-color: rgba(0, 0, 0, 0.1)">
            <div v-for="(child, subCatindex) in route.children" class="w-full flex gap-1 justify-center text-base h-8 items-center">
              <div class="flex-1 text-center transition-colors duration-200">
                {{ child.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const categoryStates = Array(router.options.routes.length).fill(false);
console.log(categoryStates);
console.log(router.options.routes);

const routes = ref([
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Shop',
    link: '/shop'
  },
  {}
]);
function capitalizeFirstLetterFromPath(path) {
  const withoutSlash = path.substring(1); // Remove the initial slash
  return withoutSlash.charAt(0).toUpperCase() + withoutSlash.slice(1);
}

function openCategory(index) {
  const element = sub_category.value[index];
  const height = element.querySelectorAll('.sub-category')[0].offsetHeight;
  if (categories.value[index].categoryOpen) {
    element.style.maxHeight = 0;
    categories.value[index].categoryOpen = !categories.value[index].categoryOpen;
  } else {
    element.style.maxHeight = height + 'px';
    categories.value[index].categoryOpen = !categories.value[index].categoryOpen;
  }
}
</script>

<style scoped>
.category-button {
  color: var(--text-white);
}
.category-button:hover {
  color: var(--secondary);
}
</style>

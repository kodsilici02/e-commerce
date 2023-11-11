<template>
  <div class="h-full w-full flex content-start flex-wrap justify-center p-5">
    <div class="w-full p-2 px-3">
      <FloatingLabel
        :label="'Title'"
        :value="info.title"
        @handle-type="
          value => {
            title = value;
          }
        "></FloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <FloatingLabel
        :label="'Name'"
        :value="info.name"
        @handle-type="
          value => {
            name = value;
          }
        "></FloatingLabel>
    </div>
    <div class="basis-1/2 p-2 px-3">
      <FloatingLabel
        :label="'Surname'"
        :value="info.surname"
        @handle-type="
          value => {
            surname = value;
          }
        "></FloatingLabel>
    </div>
    <div class="w-full p-2 px-3">
      <FloatingLabel
        :label="'Card Number'"
        :type="'number'"
        :value="info.number"
        @handle-type="
          value => {
            number = value;
          }
        "></FloatingLabel>
    </div>
    <div class="w-full flex justify-center gap-y-3 py-3 flex-wrap">
      <div class="w-full text-xl font-bold text-center">Expiration Date</div>
      <div class="w-20 p-2 px-3">
        <SelectOption
          :back-ground-color="'#dcdcdc'"
          @handle-select="
            value => {
              month = value;
            }
          "
          :prop_value="month"
          :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"></SelectOption>
      </div>
      <div class="w-20 p-2 px-3">
        <SelectOption
          :back-ground-color="'#dcdcdc'"
          @handle-select="
            value => {
              year = value;
            }
          "
          :prop_value="year"
          :options="years"></SelectOption>
      </div>
    </div>
    <div class="w-full flex-1 flex gap-2 items-end self-end justify-center" style="color: var(--text-white)">
      <button
        @click="cancel"
        class="w-36 h-10 bg-slate-400 z-[3] cursor-pointer delete-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
        style="border-radius: 35px">
        Cancel<ClientOnly>
          <font-awesome :icon="['fas', 'xmark']"></font-awesome>
        </ClientOnly>
      </button>
      <button
        @click="edit"
        class="w-36 h-10 bg-slate-400 z-[3] edit-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
        style="border-radius: 35px">
        Save<ClientOnly><font-awesome :icon="['fas', 'check']"></font-awesome></ClientOnly>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    default: {}
  }
});

const emits = defineEmits(['handleEdit', 'handleCancel']);

const title = ref(props.info.title);
const name = ref(props.info.name);
const surname = ref(props.info.surname);
const number = ref(props.info.number);
const month = ref(props.info.month);
const year = ref(props.info.year);
const years = ref([]);

onMounted(() => {
  let date = new Date();
  let lastTwoDigits = date.getFullYear() % 100;
  let increased_date = lastTwoDigits;
  while (increased_date <= lastTwoDigits + 20) {
    years.value.push(increased_date);
    increased_date++;
  }
});

function edit() {
  let obj = {
    title: title.value,
    name: name.value,
    surname: surname.value,
    number: number.value,
    month: month.value,
    year: year.value,
    type: 'mastercard'
  };
  emits('handleEdit', obj);
}

function cancel() {
  emits('handleCancel');
}
</script>

<style scoped>
.edit-button {
  background-color: #3bc1e2;
}
.edit-button:hover {
  background-color: #64d2ed;
}
.edit-button:active {
  transition: background-color 0s ease;
  background-color: #648bed;
}

.delete-button {
  background-color: #b50c0c;
}
.delete-button:hover {
  background-color: #cf1414;
}
.delete-button:active {
  transition: background-color 0s ease;
  background-color: #900b0b;
}
</style>

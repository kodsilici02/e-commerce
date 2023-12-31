<template>
  <div class="w-full h-full flex flex-wrap" style="color: var(--text-white)">
    <div v-auto-animate class="w-full h-full p-2 flex flex-wrap content-start">
      <Card
        :background_color="'var(--primary)'"
        v-for="(info, index) in infos"
        :key="info.number"
        class="h-[350px] w-full lg:basis-1/3 2xl:basis-1/4 flex p-4">
        <template v-slot:main>
          <div class="h-full w-full rounded-lg flex flex-col relative overflow-hidden">
            <div class="h-full w-full flex flex-col p-3 gap-2">
              <div class="w-full text-2xl text-center">{{ info.title }}</div>
              <div class="w-full tetx-lg font-[600]">{{ info.name }} {{ info.surname }}</div>
              <div class="w-full">{{ convertNumber(info.number) }}</div>
              <div class="w-full">{{ info.month }}/{{ info.year }}</div>
              <div class="w-full flex-1 overflow-hidden">
                <img :src="cardType(info.type)" class="w-full h-full object-contain object-center" />
              </div>

              <div class="w-full flex-1 flex gap-2 items-end justify-center">
                <button
                  @click="
                    () => {
                      selectedItem = index;
                      delete_modal = true;
                    }
                  "
                  class="w-36 h-10 bg-slate-400 z-[3] cursor-pointer delete-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
                  style="border-radius: 35px">
                  Delete<ClientOnly>
                    <font-awesome :icon="['fas', 'trash']"></font-awesome>
                  </ClientOnly>
                </button>
                <button
                  @click="
                    () => {
                      selectedItem = index;
                      edit_modal = true;
                    }
                  "
                  class="w-36 h-10 bg-slate-400 z-[3] edit-button transition-all duration-500 flex justify-center gap-2 items-center text-base md:text-lg"
                  style="border-radius: 35px">
                  Edit<ClientOnly><font-awesome :icon="['fas', 'pen']"></font-awesome></ClientOnly>
                </button>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <div
        :key="'addNew'"
        class="h-[350px] w-full lg:basis-1/3 2xl:basis-1/4 flex p-4 transition-transform duration-200 hover:scale-[1.02] group overflow-hidden">
        <div
          @click="
            () => {
              add_modal = true;
            }
          "
          class="w-full h-full rounded-lg flex justify-center items-center add-new cursor-pointer">
          <Vue3Lottie
            class="group-hover:scale-[1.10] transition-transform duration-200"
            ref="lottie"
            :height="70"
            animationLink="https://lottie.host/c61be757-e3d7-4e15-97b8-789a034f4a7b/1EQ2o67xyj.json"
            :autoPlay="true"
            :loop="true"
            direction="alternate" />
        </div>
      </div>
    </div>
    <ModalDefault :open="edit_modal" @update:open="value => (edit_modal = value)">
      <PaymentEdit :info="infos[selectedItem]" @handleCancel="closeModals" @handle-edit="saveInfo"></PaymentEdit>
    </ModalDefault>
    <ModalDefault :open="delete_modal" @update:open="value => (delete_modal = value)">
      <PaymentDelete @handleCancel="closeModals" @handleDelete="deleteInfo"></PaymentDelete>
    </ModalDefault>
    <ModalDefault :open="add_modal" @update:open="value => (add_modal = value)">
      <PaymentNew @handleCancel="closeModals" @handleSave="addInfo"></PaymentNew>
    </ModalDefault>
  </div>
</template>

<script setup>
const infos = ref([
  {
    title: 'Ev 1',
    name: 'Şafak ',
    surname: 'Dinç',
    number: 1234567890123456,
    month: 3,
    year: 28,
    type: 'visa'
  },
  {
    title: 'Ev 2',
    name: 'Şafak ',
    surname: 'Dinç',
    number: 1234567890123456,
    month: 3,
    year: 28,
    type: 'visa'
  },
  {
    title: 'Ev 3',
    name: 'Şafak ',
    surname: 'Dinç',
    number: 1234567890123456,
    month: 3,
    year: 28,
    type: 'mastercard'
  }
]);

function convertNumber(number) {
  // Convert the number to a string
  const numberStr = String(number);

  // Calculate the number of digits to hide
  const digitsToHide = Math.max(0, numberStr.length - 4);

  // Create a string with the last four digits
  const lastFourDigits = numberStr.slice(digitsToHide);

  // Create a string with dots to replace the hidden digits
  const hiddenDigits = '.'.repeat(digitsToHide);

  // Add a space between every four digits
  let formattedNumberWithSpaces = hiddenDigits + lastFourDigits;
  if (formattedNumberWithSpaces.length > 4) {
    formattedNumberWithSpaces = formattedNumberWithSpaces.slice(0, -4) + ' ' + formattedNumberWithSpaces.slice(-4);
  }

  return formattedNumberWithSpaces;
}

function cardType(type) {
  if (type == 'visa') {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/120px-Former_Visa_%28company%29_logo.svg.png';
  }
  if (type == 'mastercard') {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png';
  }
}

function addInfo(obj) {
  console.log(obj);
  infos.value.push(obj);
  closeModals();
}

function saveInfo(obj) {
  console.log(obj);
  infos.value[selectedItem.value] = obj;
  closeModals();
}
function deleteInfo() {
  infos.value.splice(selectedItem.value, 1);
  closeModals();
}

const edit_modal = ref(false);
const delete_modal = ref(false);
const add_modal = ref(false);
const selectedItem = ref(0);

function closeModals() {
  edit_modal.value = false;
  delete_modal.value = false;
  add_modal.value = false;
}
</script>

<style scoped>
.add-new {
  border: 3px dashed var(--text-color);
}
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

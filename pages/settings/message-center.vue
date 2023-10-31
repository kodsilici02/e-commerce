<template>
  <div class="w-full h-full flex flex-wrap content-start justify-center items-center p-5 gap-5" style="color: var(--text-color)">
    <div class="w-full text-2xl text-center font-[600]">My Communication Preferences</div>
    <div class="w-full lg:basis-1/2 border border-[var(--text-color)] rounded-lg px-5 py-3 flex flex-col gap-10">
      <div v-for="item in items" class="w-full flex gap-3 flex-col">
        <div class="w-full text-lg font-[600]">{{ item.title }}</div>
        <div class="w-full flex gap-3">
          <div class="flex-1">{{ item.text }}</div>
          <div class="w-fit"><Switch :checked="item.checked"></Switch></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: 'Text message channels',
    text: 'Messages to be sent by Bla Bla to your mobile phone via text message channels',
    checked: false
  },
  {
    title: 'E-Mail',
    text: 'Notifications to be sent by Bla Bla via email',
    checked: true
  },
  {
    title: 'Phone Call',
    text: 'Calls to be made by Bla Bla to your mobile phone using the search method.',
    checked: false
  }
]);
</script>

<style scoped></style>

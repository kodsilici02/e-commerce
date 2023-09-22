<template>
  <div class="w-full h-full flex justify-center p-3" style="color: var(--text-color)">
    <div class="w-[75%] h-full flex flex-wrap items-center">
      <div class="w-full flex flex-wrap content-start">
        <NuxtLink
          :to="'/settings/' + item.to"
          v-for="(item, index) in items"
          :key="item.header"
          class="card-item transition-all duration-300 basis-1/3 h-36 rounded-lg cursor-pointer flex content-start overflow-hidden p-2 gap-2">
          <div class="w-24 h-[80%] flex justify-center items-center">
            <client-only>
              <Vue3Lottie :animationLink="item.animation" :autoPlay="true" :height="130" :width="130" />
            </client-only>
          </div>
          <div class="flex-1 h-full flex flex-col gap-2">
            <div class="w-full text-lg font-bold">{{ item.header }}</div>
            <div class="flex-1">{{ item.explanation }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    animation: 'https://lottie.host/c0f86967-2c15-4e6e-94ee-01dbfc6bd836/J5iG9Do1Oz.json',
    header: 'Orders',
    explanation: 'Track, return, cancel, download invoice or repurchase an order',
    to: 'orders'
  },
  {
    animation: 'https://lottie.host/d9f011e1-c396-4097-86d8-b2cd98ae93d9/CJPUmMfHZT.json',
    header: 'Account and Security',
    explanation: 'Manage your passwords, phone numbers and e-mail addresses',
    to: 'account'
  },
  {
    animation: 'https://lottie.host/ed3ef84c-0c3c-48ac-a5e7-2f32f00caf73/ro5yyiFyFW.json',
    header: 'Adresses',
    explanation: 'Manage your adresses, edit or delete them',
    to: 'adresses'
  },
  {
    animation: 'https://lottie.host/367e3f8e-8d38-4d45-9dad-f0faec9884e3/vmWKIlkUqi.json',
    header: 'Payment',
    explanation: 'Manage or add payment methods and view your transactions',
    to: 'payment'
  },
  {
    animation: 'https://lottie.host/08c2aef6-371e-4c7f-9ae3-f43f404f9923/s33xEJmwdC.json',
    header: 'Message Center',
    explanation: 'View or reply to messages from Amazon, sellers and buyers',
    to: 'message-center'
  },
  {
    animation: 'https://lottie.host/58d657e6-dd48-4876-ab93-3802127eb215/8eiaOPrdb2.json',
    header: 'Contact Us',
    explanation: 'Browse self-service options, help articles, or contact us',
    to: 'contact'
  }
];
</script>

<style scoped>
.card-item {
  scale: 1;
}
.card-item:hover {
  scale: 1.02;
}
</style>

<template>
  <div class="text-black w-full justify-center flex flex-wrap gap-3 mt-20">
    <Popover class="w-fit" :arrow-border-color="'var(--secondary-light)'" :arrow-color="'var(--secondary-light)'">
      <template v-slot:popover>
        <ClientOnly><font-awesome :icon="['fas', 'bell']" class="cursor-pointer" /></ClientOnly>
      </template>
      <template v-slot:content>
        <Notifications></Notifications>
      </template>
    </Popover>
  </div>
</template>

<script setup></script>

<style scoped></style>

<template>
  <div class="w-full flex">
    <SidebarContainer><SidebarSettingsSidebar></SidebarSettingsSidebar> </SidebarContainer>
    <div class="flex-1 lg:p-1">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['setting']
});
</script>

<style scoped></style>

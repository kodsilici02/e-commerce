<template>
  <div class="fixed w-full h-full top-0 left-0 z-[1001] flex justify-center items-center pointer-events-none">
    <div class="w-[500px] h-[300px] max-h-[500px] bg-white rounded-xl z-[1001] pointer-events-auto overflow-auto">
      <div class="flex flex-col">
        <div class="w-full h-16 bg-gray-300 text-xl items-center flex pl-3 gap-2">
          <ClientOnly><font-awesome :icon="['fas', 'map']" class="text-[#5080da]"></font-awesome></ClientOnly>Bir Adres Seçin
        </div>
        <div class="flex-1 flex flex-col gap-2 p-2">
          <div class="border border-black rounded-lg p-1 cursor-pointer transition-colors duration-300 hover:bg-slate-100">
            <div class="font-bold">Şafak Dinç</div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, magni!
          </div>
          <div class="border border-black rounded-lg p-1 cursor-pointer transition-colors duration-300 hover:bg-slate-100">
            <div class="font-bold">Şafak Dinç</div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, magni!
          </div>
        </div>
        <div class="w-full pl-3 pb-3 flex">
          <div class="text-[#5080da] transition-colors duration-300 hover:text-[#81a5e8] cursor-pointer">Manage your locations</div>
        </div>
        <!--Additional Content goes here-->
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

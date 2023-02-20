<script setup lang="ts">
const items = [0, 1, 2, 3];
</script>

<template>
  <div id="miaosha-grid" class="gap-3 grid h-[260px]">
    <div id="miaosha-board" class="bg-white col-span-1"></div>
    <div id="slider-items" class="bg-white col-span-4 grid grid-cols-4">
      <div :key="i" v-for="i in items" :class="[i ? 'border-l-[1px] border-gray-100' : '']">{{ i }}</div>
    </div>
    <div id="seckill-brand" class="bg-white col-span-1"></div>
  </div>
</template>

<style scoped lang="scss">
#miaosha-grid {
  grid-template-columns: repeat(6, 190px);
}
</style>
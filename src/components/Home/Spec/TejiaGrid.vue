<script setup lang="ts">
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';

type typeItem = {
  id: number;
  pic: string;
};

const itemSpec = ref<typeItem[]>(new Array(4).fill(0).map(() => {
  return {
    id: Math.random() * 10000 >>> 0,
    pic: randomPic(),
  };
}));
</script>

<template>
  <div id="tejia" class="bg-white p-5 flex flex-col">
    <div class="flex justify-between items-center h-[60px]">
      <h1 class="text-3xl font-bold">每日特价</h1>
      <a href="#" class="border-b-2 border-[#E1251B] text-[#E1251B] leading-5"
        >精选</a
      >
    </div>
    <div id="the-grid" class="grid grid-rows-2 grid-cols-3 w-full grow">
      <div
        style="grid-area: ms"
        alt=""
        class="max-h-[240px] min-h-[240px]"
      >
        <img :src="randomPic()" class="w-full h-full p-1" alt="">
      </div>
      <div :style="`grid-area: x${i + 1}`" :key="it.id " v-for="(it, i) of itemSpec" :src="it.pic" alt="" class="max-w-[185px] max-h-[120px] p-1">
        <img class="w-full h-full" :src="it.pic" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#the-grid {
  grid-template-areas: 
    "ms x1 x2"
    "ms x3 x4";
}
</style>

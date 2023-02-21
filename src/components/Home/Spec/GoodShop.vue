<script setup lang="ts">
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';
// @ts-ignore
import faker from "faker";

type typeShop = {
  id: number;
  bgPic: string;
  avatar: string;
  title: string;
  cntFollow: number;
};

const shops = ref<typeShop[]>(
  new Array(2).fill(0).map(() => {
    return {
      id: Math.random(),
      bgPic: randomPic(),
      avatar: randomPic(),
      title: faker.lorem.sentence(2),
      cntFollow: +(Math.random() * 100).toFixed(1),
    };
  })
);

</script>

<template>
  <div class="w-full h-full grid grid-rows-2 gap-2">
    <a href="#" :key="s.id" v-for="s of shops" class="relative rounded-md overflow-hidden flex justify-end items-center gap-2 hover:opacity-90">
      <img class="absolute w-full h-full left-0 top-0" :src="s.bgPic" alt="">
      <div class="h-[100px] w-[150px] z-10 flex flex-col justify-between">
        <div class="hover:text-[#c81623]">
          {{ s.title }}
        </div>
        <div class="text-gray-400 text-sm">
          {{ s.cntFollow }}万人关注
        </div>
      </div>
      <img class="w-[90px] h-[90px] z-10 relative mr-2 rounded-sm shadow-xl" :src="s.avatar" alt="">
    </a>
  </div>
</template>

<style scoped lang="scss"></style>
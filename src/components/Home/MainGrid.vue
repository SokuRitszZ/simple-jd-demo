<script setup lang="ts">
import ThreeItems from '@/components/Home/Main/ThreeItem.vue';
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';
import CateMenu from './Main/CateMenu.vue';

import MainSlider from './Main/MainSlider.vue';
// @ts-ignore
import faker from "faker";

type typeNews = {
  id: number;
  type: string;
  title: string;
};

const news = ref<typeNews[]>(
  new Array(4).fill(0).map(() => {
    return {
      id: Math.random() * 10000 >>> 0,
      type: faker.lorem.word(3).toUpperCase(),
      title: faker.lorem.sentence(10),
    }
  })
);

type typeService = {
  title: string;
  img: string;
}

const services = ref<typeService[]>(
  new Array(12).fill(0).map(() => {
    return {
      title: faker.lorem.word(4),
      img: randomPic(),
    }
  })
);
</script>

<template>
  <div id="main-grid" class="">
    <div class="pr-1" style="grid-area: cim">
      <CateMenu />
    </div>
    <div class="px-1" style="grid-area: ms">
      <div
        id="main-slider"
        style="grid-area: ms"
        class="bg-white w-full h-full relative"
      >
        <MainSlider />
      </div>
    </div>
    <div class="px-1 overflow-hidden" style="grid-area: ti">
      <ThreeItems />
    </div>
    <div id="other" style="grid-area: o" class="bg-white pt-5 text-[10px]">
      <div class="flex justify-center items-center gap-2 pb-3">
        <img class="w-[50px] h-[50px] rounded-full" :src="randomPic()" alt="">
        <div class="">
          <div>Hi~欢迎逛京东!</div>
          <a href="#" class="hover:text-[#c81623]">登录</a> | <a href="#" class="hover:text-[#c81623]">注册</a>
        </div>
      </div>
      <div class="grid grid-cols-2 text-sm pb-2">
        <button class="w-fit m-auto px-3 py-1 text-white bg-[#e1251b] rounded-full">新人福利</button>
        <button class="w-fit m-auto px-3 py-1 text-[#e5d790] bg-[#363634] rounded-full">PLUS会员</button>
      </div>
      <hr>
      <div class="pt-2 flex justify-between items-center px-3">
        <div class="font-bold text-sm">京东快报</div>
        <a href="#" class="text-gray-400">更多</a>
      </div>
      <div :key="n.id" v-for="n of news" class="flex items-center gap-1 px-2 mt-1">
        <div class="bg-[#e1251b14] text-[#e1251b] w-[30px] text-center">{{ n.type }}</div>
        <a href="#" class="overflow-hidden text-ellipsis whitespace-nowrap w-[150px] text-[#666666] hover:text-[#c81623]">{{ n.title }}</a>
      </div>
      <div class="pb-2"></div>
      <hr>
      <div class="grid grid-cols-3 grid-rows-4">
        <a href="#" :key="s.title" v-for="s in services">
          <img class="w-[30px] h-[30px] m-auto pt-1" :src="s.img" alt="">
          <div class="text-center hover:text-[#c81623] transition">{{ s.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#main-grid {
  --height: 150px;
  display: grid;

  min-width: 1000px;

  grid-template-areas:
    'cim ms ms ms ti o'
    'cim ms ms ms ti o'
    'cim ms ms ms ti o';

  grid-template-columns: repeat(6, calc(1200px / 6));
}

</style>

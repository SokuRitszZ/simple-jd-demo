<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import faker from "faker";
import randomPic from '@/utils/randomPic';

type typeBrand = {
  id: number;
  price: number;
  title: string;
  pic: string;
};

const brands = ref<typeBrand[]>(
  new Array(6).fill(0).map(() => {
    return {
      id: Math.random() * 10000 >>> 0,
      price: +(Math.random() * 1000).toFixed(2),
      title: faker.lorem.sentence(1),
      pic: randomPic(),
    }
  })
);

</script>

<template>
  <div id="tejia" class="bg-white p-5 flex flex-col">
    <div class="flex items-center h-[60px]">
      <h1 class="text-3xl font-bold">品牌闪购</h1>
    </div>
    <div id="the-grid" class="grid grid-rows-3 grid-cols-4 w-full grow">
      <a class="row-span-3 col-span-2 bg-gradient-to-t from-blue-100 block" href="#" style="grid-area: ms">
        <div class="text-center">{{ faker.lorem.sentence(2) }}</div>
        <div class="text-sm text-gray-400 text-center">
          <span>
            {{ faker.lorem.sentence(2) }} | Last 
          </span>
          <span>{{ Math.random() * 10 >>> 0 }}</span>
          <span> Day</span>
        </div>
        <img class="w-[140px] h-[140px] max-h-[240px] m-auto pt-4" :src="randomPic()" alt="">
      </a>
      <a href="#" :key="i" :style="`grid-area: i${i}`" v-for="(b, i) of brands">
        <img class="w-3/4 h-2/3 m-auto" :src="b.pic" alt="">
        <div class="text-center">{{ b.title }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
#the-grid {
  grid-template-columns: repeat(4, 139px);
  grid-template-rows: repeat(3, 80px);
  grid-template-areas: 
    "ms ms i0 i1"
    "ms ms i2 i3"
    "ms ms i4 i5"
    "ms ms i6 i7";
}
</style>

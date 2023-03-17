<script setup lang="ts">
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';
// @ts-ignore
import faker from 'faker';

type typeItem = {
  id: number;
  pic: string;
  title: string;
  price: number;
};

const itemSpec = ref<typeItem[]>(
  new Array(4).fill(0).map(() => {
    return {
      id: (Math.random() * 10000) >>> 0,
      pic: randomPic(),
      title: faker.lorem.sentence(2),
      price: +(Math.random() * 1000).toFixed(2),
    };
  })
);
</script>

<template>
  <div id="tejia" class="bg-white p-5 flex flex-col">
    <div class="flex justify-between items-center h-[60px]">
      <a href="#" class="text-3xl font-bold"> 每日特价 </a>
      <div
        class="transition w-[30px] h-[30px] border-2 border-[#C81623] relative -left-40 rounded-full"
      ></div>
      <a href="#" class="border-b-2 border-[#E1251B] text-[#E1251B] leading-5"
        >精选</a
      >
    </div>
    <div id="the-grid" class="grid grid-rows-2 grid-cols-3 w-full grow">
      <div
        style="grid-area: ms"
        alt=""
        class="max-h-[240px] min-h-[240px] pt-4 bg-gradient-to-t from-gray-100 to-white"
      >
        <img
          :src="randomPic()"
          class="w-[120px] h-[120px] m-auto"
          alt="main-spec-item"
        />
        <div class="text-center pt-5">{{ faker.lorem.sentence(2) }}</div>
        <div class="text-center pt-2 text-[#E1251B]">
          <span class="text-sm"> ￥ </span>
          <span class="font-bold">
            {{ (Math.random() * 1000).toFixed(2) }}
          </span>
        </div>
      </div>
      <a
        :style="`grid-area: x${i + 1}`"
        :key="it.id"
        v-for="(it, i) of itemSpec"
        :src="it.pic"
        alt=""
        class="max-w-[185px] max-h-[120px] flex justify-center items-center gap-2 text-sm other-item"
        href="#"
      >
        <img id="img" class="w-[60px] h-[60px]" :src="it.pic" alt="" />
        <div class="w-[100px]">
          <div id="title">{{ it.title }}</div>
          <div id="price" class="text-[#E1251B] font-bold">
            ￥{{ it.price }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
#the-grid {
  grid-template-areas:
    'ms x1 x2'
    'ms x3 x4';
}

.other-item * {
  transition: 0.2s;
}

.other-item:hover {
  @apply text-[#E1251B];

  #img {
    opacity: 0.7;
  }
}

a:hover + div {
  @apply bg-[#C81623];
}
</style>

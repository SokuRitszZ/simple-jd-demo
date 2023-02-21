<script setup lang="ts">
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';
// @ts-ignore
import faker from "faker";

type typeItem = {
  id: number;
  pic: string;
  price: number;
  title: string;
  main?: boolean;
};

const navs = ref<string[]>(new Array(4).fill(0).map(() => faker.lorem.word(4)));

const itemsThree = ref<typeItem[]>([]);

function select(option: string) {
  console.log(option);
  itemsThree.value = new Array(3).fill(0).map(() => {
    return {
      id: (Math.random() * 10000) >>> 0,
      pic: randomPic(),
      price: +(Math.random() * 1000).toFixed(2),
      title: faker.lorem.sentence(10),
    };
  });
}
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <nav class="flex gap-2 w-full pt-5 justify-center">
      <a
        @mouseenter="() => select(nv)"
        href="#"
        :key="nv"
        v-for="nv of navs"
        class="bg-[#f6f6f6] w-1/4 text-center text-[#999999] rounded-full text-sm hover:bg-[#e1251b] hover:text-white"
        >{{ nv }}</a
      >
    </nav>
    <div class="grow pt-3 flex flex-col gap-3">
      <a href="#" :key="it.id" v-for="it in itemsThree" class="flex gap-2">
        <img :src="it.pic" class="w-[70px] h-[70px]" alt="" />
        <div class="w-[150px]">
          <div
            class="overflow-hidden text-ellipsis whitespace-nowrap w-full text-sm"
          >
            {{ it.title }}
          </div>
          <div class="text-sm text-[#e1251b]">
            <span class="text-[10px]"> ￥ </span
            ><span class="text-lg">{{ it.price.toString().split('.')[0] }}</span
            ><span>.{{ it.price.toString().split('.')[1] }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

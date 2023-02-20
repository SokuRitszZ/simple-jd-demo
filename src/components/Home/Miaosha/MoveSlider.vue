<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import faker from "faker";
import randomPic from '@/utils/randomPic';

type typeItem = {
  id: number;
  title: string;
  price: number;
  img: string;
};

const items = ref<typeItem[]>(new Array(12).fill(0).map(() => {
  return {
    id: (Math.random() * 100) >>> 0,
    title: faker.lorem.sentence(),
    price: Math.random() * 1000,
    img: randomPic(),
  };
}));

const $sliderMove = ref<HTMLDivElement>();
const timer = ref<any>();

function moveLeft() {
  if (timer.value) return ;
  const is = items.value;
  if (!$sliderMove.value) return;
  $sliderMove.value.classList.add('animate');
  $sliderMove.value.classList.add('left-move');
  timer.value = setTimeout(() => {
    for (let i = 0; i < 4; ++i) is.push(is.shift()!);
    $sliderMove.value?.classList.remove('animate');
    $sliderMove.value?.classList.remove('left-move');
    timer.value = null;
  }, 500);
}

function moveRight() {
  if (timer.value) return ;
  const is = items.value;
  if (!$sliderMove.value) return;
  $sliderMove.value.classList.add('animate');
  $sliderMove.value.classList.add('right-move');
  timer.value = setTimeout(() => {
    for (let i = 0; i < 4; ++i) is.unshift(is.pop()!);
    $sliderMove.value?.classList.remove('animate');
    $sliderMove.value?.classList.remove('right-move');
    timer.value = null;
  }, 500);
}
</script>

<template>
  <div
    id="slider"
    class="bg-white w-[800px] overflow-hidden col-span-4 relative"
  >
    <div
      ref="$sliderMove"
      class="w-[800px] flex flex-nowrap -translate-x-[800px]"
    >
      <div
        :key="i.title"
        v-for="i in items"
        :class="[
          i ? 'border-l-[1px] border-gray-100' : '',
          'text-center p-7 min-w-[200px]',
          'item-card',
        ]"
      >
        <img class="w-[140px] h-[140px] m-auto" :src="i.img" alt="shop-item" />
        <div
          id="title"
          class="pt-3 overflow-hidden text-ellipsis whitespace-nowrap text-sm"
        >
          {{ i.title }}
        </div>
        <div class="text-sm font-bold pt-3 text-[#E1251B]">
          ￥{{ i.price.toFixed(2) }}
        </div>
      </div>
    </div>
    <div
      class="absolute w-full h-full left-0 top-0 flex justify-between items-center px-2"
    >
      <button @click="moveRight" class="circle-btn w-[30px] h-[30px]"></button>
      <button @click="moveLeft" class="circle-btn w-[30px] h-[30px]"></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.animate {
  transition: 0.5s;
}

.left-move {
  transform: translateX(-1600px);
}

.right-move {
  transform: translateX(0px);
}
</style>

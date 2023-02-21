<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import faker from 'faker';

type typeCoupon = {
  id: number;
  price: number;
  limit: number;
  description: string;
};

const coupons = ref<typeCoupon[]>(
  new Array(3).fill(0).map(() => {
    return {
      id: (Math.random() * 10000) >>> 0,
      price: (Math.random() * 100) >>> 0,
      limit: (Math.random() * 100) >>> 0,
      description: faker.lorem.sentence(2),
    };
  })
);
</script>

<template>
  <div class="w-full h-full relative overflow-hidden">
    <div class="list px-5">
      <a
        href="#"
        :key="c.id"
        v-for="(c, i) in coupons"
        class="relative translate-y-3 drop-shadow-2xl z-10 bg-[#F6F6F6] h-[85px] flex justify-between items-center px-3 text-sm"
        :class="[(i > 0 && 'border-t-2 border-dashed border-[#EB8882]') || '']"
      >
        <div class="">
          <div class="text-[#e33333]">
            ￥<span class="text-lg font-bold">{{ c.price }}</span>
          </div>
          <div class="text-[10px] text-gray-400">满{{ c.limit }}元可用</div>
          <div class="">
            {{ c.description }}
          </div>
        </div>
        <div class="w-[10px] text-[#666666]" style="word-wrap: break-word">
          更多好券
        </div>
      </a>
    </div>
    <div
      class="absolute left-1/2 -translate-x-1/2 top-5 z-0 bg-[#E1251B] w-[300px] h-[300px] rounded-full"
    ></div>
    <div
      class="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 ring-[80px] ring-[#F92F0D] rounded-full w-[400px] h-[400px] drop-shadow-2xl pointer-events-none"
    ></div>
  </div>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import NavBar from './Recommend/NavBar.vue';
// @ts-ignore
import faker from 'faker';
import { ref } from 'vue';

type typeItem = {
  pic: string;
  description: string;
  price: number;
};

const items = ref<typeItem[]>([]);

function getItems(option: string) {
  console.log(option);
  items.value = new Array(100).fill(0).map(() => ({
    pic: 'https://sdfsdf.dev/100x100.png',
    description: faker.lorem.paragraph(),
    price: +(Math.random() * 1000).toFixed(2),
  }));
}

</script>

<template>
  <div class="w-full">
    <div class="my-2">
      <NavBar @change-option="getItems" />
    </div>
    <div class="grid grid-cols-5 gap-2">
      <div :key="i" v-for="(it, i) of items" class="bg-white h-[322px] p-5">
        <img :src="it.pic" alt="item-img" class="w-full" />
        <div
          class="overflow-hidden text-ellipsis h-[40px] text-sm mt-1 text-[#666666]"
        >
          {{ it.description }}
        </div>
        <div class="text-[#E1251B] font-bold text-sm mt-4">
          <span>￥</span>
          <span class="text-lg">{{ Math.floor(it.price) }}</span>
          <span>.</span>
          <span class="text-sm">{{
            (it.price - Math.floor(it.price)).toFixed(2).slice(2)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';
// @ts-ignore
import faker from 'faker';

type typeItem = {
  id: number;
  pic: string;
  price: number;
  title: string;
  main?: boolean;
};

const navs = ref<string[]>(new Array(4).fill(0).map(() => faker.lorem.word(4)));
const navSelected = ref<string>('');

const itemsThree = ref<{ [key: string]: typeItem[] }>({});
const listShown = ref<typeItem[]>([]);

function select(option: string) {
  navSelected.value = option;
  const list =
    itemsThree.value[option] ||
    new Array(3).fill(0).map(() => {
      return {
        id: (Math.random() * 10000) >>> 0,
        pic: randomPic(),
        price: +(Math.random() * 1000).toFixed(2),
        title: faker.lorem.sentence(10),
      };
    });
  itemsThree.value[option] = list;
  listShown.value = list;
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
        class="w-1/4"
      >
        <label :for="`lb-${nv}`" class="nav pointer-events-none">
          {{ nv }}
        </label>
        <input
          name="option"
          :id="`lb-${nv}`"
          type="radio"
          class="hidden"
          :checked="navSelected === nv"
        />
      </a>
    </nav>
    <div class="grow pt-3 flex flex-col gap-3">
      <keep-alive>
        <a href="#" :key="it.id" v-for="it in listShown" class="flex gap-2">
          <img :src="it.pic" class="w-[70px] h-[70px]" alt="" />
          <div class="w-[150px]">
            <div
              class="overflow-hidden text-ellipsis whitespace-nowrap w-full text-sm"
            >
              {{ it.title }}
            </div>
            <div class="text-sm text-[#e1251b]">
              <span class="text-[10px]"> ￥ </span
              ><span class="text-lg">{{
                it.price.toString().split('.')[0]
              }}</span
              ><span>.{{ it.price.toString().split('.')[1] }}</span>
            </div>
          </div>
        </a>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped lang="scss">
a:has(.nav) {
  width: inherit;
  @apply bg-[#f6f6f6] text-center text-[#999999] rounded-full text-sm;
}

a:has(input:checked) {
  @apply bg-[#e1251b] text-white;
}
</style>

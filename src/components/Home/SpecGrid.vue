<script setup lang="ts">
import TejiaGrid from '@/components/Home/Spec/TejiaGrid.vue';
import ShangouGrid from '@/components/Home/Spec/ShangouGrid.vue';
import Core2Container from './Spec/Core2Container.vue';
import ScaleSlider from './Spec/ScaleSlider.vue';
import { ref } from 'vue';
import randomPic from '@/utils/randomPic';
// @ts-ignore
import faker from "faker";

type typeItem = {
  id: number;
  pic: string;
  price: number;
  title: string;
  main?: boolean;
};

const items = ref<typeItem[]>(
  new Array(5).fill(0).map((_, i) => {
    return {
      id: Math.random() * 10000 >>> 0,
      pic: randomPic(),
      title: faker.lorem.sentence(2),
      price: +(Math.random() * 1000).toFixed(2),
      main: i === 2,
    }
  })
);

const $sliderScale = ref();
</script>

<template>
  <div id="spec" class="w-full pt-7">
    <div id="core1" class="grid grid-cols-2 h-[340px] gap-2">
      <TejiaGrid />
      <ShangouGrid />
    </div>
    <div id="core2" class="mt-3 grid grid-cols-4 w-full h-[340px] gap-2">
      <Core2Container title="新品首发" >
        <div class="w-full h-full pt-7 relative">
          <ScaleSlider ref="$sliderScale" :items="items" />
          <button @click="() => $sliderScale.prev()" class="circle-btn w-[20px] h-[20px] absolute left-3 top-1/2"></button>
          <button @click="() => $sliderScale.next()" class="circle-btn w-[20px] h-[20px] absolute right-3 top-1/2"></button>
        </div>
      </Core2Container>
      <Core2Container title="JOY 寻宝" ></Core2Container>
      <Core2Container title="逛好店" ></Core2Container>
      <Core2Container title="领券中心" ></Core2Container>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

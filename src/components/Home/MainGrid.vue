<script setup lang="ts">
import HoverBoard from '@/components/Home/Main/HoverBoard.vue';
import ThreeItems from '@/components/Home/Main/ThreeItem.vue';
import randomPic from '@/utils/randomPic';

// @ts-ignore
import faker from 'faker';
import { ref, watch } from 'vue';
import PicSlider from '../PicSlider.vue';

const $sliderMain = ref();

const keywords = new Array(15).fill(0).map(() => {
  return new Array(3).fill(0).map(() => faker.lorem.word(4));
});

const urls = ref<string[]>(new Array(5).fill(0).map(() => randomPic()));

const ptrSliderMain = ref<number>(0);

</script>

<template>
  <div id="main-grid" class="">
    <div class="pr-1" style="grid-area: cim">
      <div id="cate-items-menu" class="bg-white pt-3 relative">
        <div
          :key="i"
          v-for="(ws, i) of keywords"
          class="option pl-5 py-1 text-sm hover:bg-gray-300 transition-colors"
        >
          <span :key="i" v-for="(w, i) of ws">
            <span v-if="i" class="px-1">/</span>
            <span class="hover:text-[#C81623] cursor-pointer">{{ w }}</span>
          </span>
          <div
            class="board absolute z-50 left-full top-0 bg-white border-[1px] border-gray-100 p-4 min-w-[800px] shadow-lg hidden"
          >
            <HoverBoard :keyword="'' + i" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-1" style="grid-area: ms">
      <div
        id="main-slider"
        style="grid-area: ms"
        class="bg-white w-full h-full relative"
      >
        <PicSlider v-model="ptrSliderMain" ref="$sliderMain" :urls="urls" />
        <div
          class="absolute top-0 left-0 z-20 flex justify-between items-center w-full h-full px-2"
        >
          <button
            @click="() => $sliderMain.prev()"
            class="circle-btn w-[50px] h-[50px]"
          ></button>
          <button
            @click="() => $sliderMain.next()"
            class="circle-btn w-[50px] h-[50px]"
          ></button>
        </div>
        <div class="absolute flex gap-1 bottom-[30px] left-[30px] z-20">
          <button
            @click="() => $sliderMain.jump(i)"
            :class="[
              'circle-btn w-[10px] h-[10px] transition',
              ptrSliderMain === i && 'scale-150',
            ]"
            :key="i"
            v-for="(_, i) of urls.length"
          />
        </div>
      </div>
    </div>
    <div class="px-1 overflow-hidden" style="grid-area: ti">
      <ThreeItems />
    </div>
    <div id="other" style="grid-area: o" class="bg-white"></div>
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

.option:hover > .board {
  display: block;
}

.shown-img {
  @apply w-full h-full;
}
</style>

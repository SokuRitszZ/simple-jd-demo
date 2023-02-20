<script setup lang="ts">
import { ref } from 'vue';

import PicSlider from '@/components/PicSlider.vue';
import randomPic from '@/utils/randomPic';

const $sliderMain = ref();

const urls = ref<string[]>(new Array(5).fill(0).map(() => randomPic()));

const ptrSliderMain = ref<number>(0);
</script>

<template>
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
</template>

<style scoped lang="scss"></style>

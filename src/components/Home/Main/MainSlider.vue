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
  <button
    @click="() => $sliderMain.prev()"
    class="absolute left-2 top-1/2 -translate-y-1/2 circle-btn w-[50px] h-[50px] z-10"
  ></button>
  <button
    @click="() => $sliderMain.next()"
    class="absolute right-2 top-1/2 -translate-y-1/2 circle-btn w-[50px] h-[50px] z-10"
  ></button>
  <div class="absolute bottom-9 left-9 z-10 flex gap-1">
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

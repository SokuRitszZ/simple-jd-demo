<script setup lang="ts">
import PicSlider from '@/components/PicSlider.vue';
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';

const items = ref<string[][]>(
  new Array(3).fill(0).map(() => new Array(5).fill(0).map(() => randomPic()))
);

const slidersSub = ref();

function allDo(method: string) {
  slidersSub.value.forEach((s: any) => s[method]());
}
</script>

<template>
  <div class="w-[190px] h-full overflow-hidden m-0 relative">
    <div class="shader flex flex-col gap-3">
      <div
        class="relative w-[190px] h-[136px]"
        v-for="(urls, i) of items"
        :key="i"
      >
        <PicSlider ref="slidersSub" :urls="urls" />
      </div>
    </div>
    <button
      @click="() => allDo('prev')"
      class="circle-btn w-[30px] h-[30px] absolute left-2 top-1/2 -translate-y-1/2 z-10"
    ></button>
    <button
      @click="() => allDo('next')"
      class="circle-btn w-[30px] h-[30px] absolute right-2 top-1/2 -translate-y-1/2 z-10"
    ></button>
  </div>
</template>

<style scoped lang="scss">
img {
  @apply w-[200px] h-[136px] cursor-pointer;
}

.shader {
  @apply absolute;
}

img:hover + div {
  @apply block;
}

@keyframes fade {
  from {
    display: none;
    opacity: 0;
  }

  50% {
    display: none;
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.v-enter-active {
  animation: fade 0.2s;
}

.v-leave-active {
  animation-delay: 0.3s;
  animation: fade reverse 0.2s;
}
</style>

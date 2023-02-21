<script setup lang="ts">
import randomPic from '@/utils/randomPic';
import { ref } from 'vue';

const $canvas = ref<HTMLCanvasElement>();
const shouldShown = ref<boolean>(false);
const src = ref<string>("https://sdfsdf.dev/1000x1000.png");
const $imgBig = ref<HTMLImageElement>();

function move(e: MouseEvent) {
  if (!$canvas.value) return;
  shouldShown.value = true;
  let left = Math.max(e.offsetX - 50, 0);
  let top = Math.max(e.offsetY - 50, 0);
  const right = Math.max(Math.min(e.offsetX + 50, 300) - 100, 0);
  const bottom = Math.max(Math.min(e.offsetY + 50, 300) - 100, 0);
  left = Math.min(left, right);
  top = Math.min(top, bottom);
  $canvas.value.style.setProperty('transform', `translate(${left}px, ${top}px)`);
  if (!$imgBig.value) return ;
  $imgBig.value.style.setProperty('transform', `translate(-${left * 4}px, -${top * 4}px)`);
}

function leave() {
  if (!$canvas.value) return;
  shouldShown.value = false;
}
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="relative w-[300px] h-[300px]">
      <img
        @mousemove="move"
        @mouseleave="leave"
        class="w-[300px] h-[300px]"
        :src="src"
        alt="canvas"
      />
      <div v-show="shouldShown" class="absolute top-0 left-full w-[400px] h-[400px] bg-black overflow-hidden">
        <img ref="$imgBig" class="w-[1200px] h-[1200px] min-w-[1200px] min-h-[1200px] absolute top-0 left-0" :src="src" alt="">
      </div>
      <div
        v-show="shouldShown"
        ref="$canvas"
        class="bg-orange-400 opacity-30 w-[100px] h-[100px] absolute pointer-events-none top-0 left-0"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

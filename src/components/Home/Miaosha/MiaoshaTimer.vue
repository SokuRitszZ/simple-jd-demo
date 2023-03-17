<script setup lang="ts">
import zeroPad from '@/utils/zeroPad';
import { onMounted, onUnmounted, ref } from 'vue';

const timeCurrent = ref<[number, number, number]>([0, 0, 0]);

function getCurrentTime() {
  let d = +new Date('2023.02.25 00:00:00') - +new Date();
  d = (d / 1000) >>> 0;
  const h = (d / 3600) >>> 0;
  d %= 3600;
  const m = (d / 60) >>> 0;
  d %= 60;
  const s = d;
  timeCurrent.value = [h, m, s];
}

const timer = ref<any>();

onMounted(() => {
  timer.value = setInterval(() => {
    getCurrentTime();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div
    id="miaosha-board"
    class="col-span-1 bg-[#E62C21] p-7 text-white text-center font-bold w-full"
  >
    <h1 class="text-3xl pt-7">京东秒杀</h1>
    <h1 class="text-4xl pt-8">电</h1>
    <h1 class="pt-7">
      <span>20:00</span>
      <span class="font-normal text-sm">点场 距结束</span>
    </h1>
    <h1 class="pt-3 flex justify-center gap-1">
      <div :key="i" v-for="(t, i) in timeCurrent" class="timer">
        <span class="bg-[#2F3430] p-1 text-lg">
          {{ zeroPad(2, t) }}
        </span>
      </div>
    </h1>
  </div>
</template>

<style scoped lang="scss">
.timer:not(:last-child)::after {
  content: ':';
  width: 100px;
  height: 100px;
  @apply ml-1;
}
</style>

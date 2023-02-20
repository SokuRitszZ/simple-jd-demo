<script setup lang="ts">
import HoverBoard from '@/components/Home/Main/HoverBoard.vue';
// @ts-ignore
import faker from 'faker';

const keywords = new Array(15).fill(0).map(() => {
  return new Array(3).fill(0).map(() => faker.lorem.word(4));
});
</script>

<template>
  <div id="main-grid" class="gap-3">
    <div
      id="cate-items-menu"
      style="grid-area: cim"
      class="bg-white pt-3 relative"
    >
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
          class="board absolute left-full top-0 bg-white border-[1px] border-gray-100 p-4 min-w-[800px] shadow-lg hidden"
        >
          <HoverBoard :keyword="'' + i" />
        </div>
      </div>
    </div>
    <div id="main-slider" style="grid-area: ms" class="bg-white"></div>
    <div id="focus-items-0" style="grid-area: fi0" class="bg-white"></div>
    <div id="focus-items-1" style="grid-area: fi1" class="bg-white"></div>
    <div id="focus-items-2" style="grid-area: fi2" class="bg-white"></div>
    <div id="other" style="grid-area: o" class="bg-white"></div>
  </div>
</template>

<style scoped lang="scss">
#main-grid {
  --height: 150px;
  display: grid;

  min-width: 1000px;

  grid-template-areas:
    'cim ms ms ms fi0 o'
    'cim ms ms ms fi1 o'
    'cim ms ms ms fi2 o';

  grid-template-columns: repeat(6, auto);
  grid-template-rows: repeat(3, var(--height));
}

.option:hover > .board {
  display: block;
}
</style>

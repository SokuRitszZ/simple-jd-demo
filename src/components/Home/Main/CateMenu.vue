<script setup lang="ts">
import HoverBoard from '@/components/Home/Main/HoverBoard.vue';
// @ts-ignore
import faker from 'faker';

const keywords = new Array(15).fill(0).map(() => {
  return new Array(3).fill(0).map(() => faker.lorem.word(4));
});
</script>

<template>
  <div id="cate-items-menu" class="bg-white pt-3 relative">
    <div
      :key="i"
      v-for="(ws, i) of keywords"
      class="option pl-5 py-1 text-sm hover:bg-gray-300 transition-colors"
    >
      <span :key="i" v-for="(w, i) of ws">
        <span v-if="i" class="px-1">/</span>
        <a href="#" class="hover:text-[#C81623]">{{ w }}</a>
      </span>
      <div
        class="board absolute z-50 left-full top-0 bg-white border-[1px] border-gray-100 p-4 min-w-[800px] shadow-lg hidden"
      >
        <HoverBoard :keyword="'' + i" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.option:hover > .board {
  display: block;
}

.shown-img {
  @apply w-full h-full;
}
</style>

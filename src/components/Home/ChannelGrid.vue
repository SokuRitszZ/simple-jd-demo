<script setup lang="ts">
import randomPic from '@/utils/randomPic';
import ChannelBlock from './Channel/ChannelBlock.vue';

type typeChannel = {
  title: string;
  description: string;
};
const channels: typeChannel[] = [
  { title: '企业购', description: '一站式企业采购平台' },
  { title: '京东图书', description: '专注优质好书' },
  { title: '京东超市', description: '一站式囤生活好物' },
  { title: '生鲜馆', description: '尝遍天下鲜' },
  { title: 'Joy寻宝', description: '懂你的Joy' },
  { title: '智能数码', description: '尽享玩物' },
  { title: '家用电器', description: '买家电 上京东' },
  { title: '京东酒行', description: '享全球美酒品美好生活' },
];
</script>

<template>
  <div
    id="container"
    class="grid grid-rows-3 grid-cols-4 h-[600px] w-full gap-2"
  >
    <div class="row-span-2 col-span-1">
      <img :src="randomPic()" alt="channel" class="w-full h-full">
    </div>
    <div class="row-span-2 col-span-1">
      <img :src="randomPic()" alt="channel" class="w-full h-full">
    </div>
    <!-- div*8 -->
    <ChannelBlock :key="c.title" v-for="c in channels" :title="c.title" :description="c.description">
      <div class="w-full h-full flex justify-between gap-2">
        <img :src="randomPic()" alt="item0" class="w-[120px] h-[120px]">
        <img :src="randomPic()" alt="item1" class="w-[120px] h-[120px]">
      </div>
    </ChannelBlock>
  </div>
</template>

<style scoped lang="scss">
#container div {
  @apply bg-white;
}
</style>

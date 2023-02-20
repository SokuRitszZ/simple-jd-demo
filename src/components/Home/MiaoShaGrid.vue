<script setup lang="ts">
// @ts-ignore
import MiaoshaTimer from '@/components/Home/MiaoSha/MiaoshaTimer.vue';
import MoveSlider from './Miaosha/MoveSlider.vue';
import randomPic from '@/utils/randomPic';

</script>

<template>
  <div id="miaosha-grid" class="w-full grid h-[260px] mb-4">
    <MiaoshaTimer />
    <MoveSlider />
    <div id="seckill-brand" class="bg-white col-span-1 p-7 bg-gradient-to-t from-blue-200 to-white">
      <img :src="randomPic()" alt="special" class="w-[140px] h-[140px] m-auto">
      <div class="text-center text-sm pt-3 text-gray-500">自营XX 超值特卖</div>
      <div class="text-center font-bold">低至66元</div>
      <div class="text-center pt-1">
        <button class="text-sm font-bold text-[#E1251B] hover:text-white hover:bg-[#E1251B] border-[1px] border-[#E1251B] px-2 rounded-full">品类秒杀</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#miaosha-grid {
  grid-template-columns: repeat(6, 200px);
}

.item-card {
  @apply cursor-pointer text-gray-500;
}

.item-card:hover {
  #title {
    @apply text-[#C81623];
  }
}

</style>

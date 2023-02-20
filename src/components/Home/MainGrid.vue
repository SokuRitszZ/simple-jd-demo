<script setup lang="ts">
import ThreeItems from '@/components/Home/Main/ThreeItem.vue';
import CateMenu from './Main/CateMenu.vue';

import MainSlider from './Main/MainSlider.vue';
</script>

<template>
  <div id="main-grid" class="">
    <div class="pr-1" style="grid-area: cim">
      <CateMenu />
    </div>
    <div class="px-1" style="grid-area: ms">
      <div
        id="main-slider"
        style="grid-area: ms"
        class="bg-white w-full h-full relative"
      >
        <MainSlider />
      </div>
    </div>
    <div class="px-1 overflow-hidden -z-10" style="grid-area: ti">
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

</style>

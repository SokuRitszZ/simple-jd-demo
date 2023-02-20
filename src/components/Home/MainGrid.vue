<script setup lang="ts">
</script>

<template>
  <div id="main-grid" class="gap-3">
    <div id="cate-items-menu" style="grid-area: cim" class="bg-white"></div>
    <div id="main-slider" style="grid-area: ms" class="bg-white"></div>
    <div id="focus-items-0" style="grid-area: fi0" class="bg-white"></div>
    <div id="focus-items-1" style="grid-area: fi1" class="bg-white"></div>
    <div id="focus-items-2" style="grid-area: fi2" class="bg-white"></div>
    <div id="other" style="grid-area: o" class="bg-white"></div>
  </div>
</template>

<style scoped lang="scss">
#main-grid {
  --width: 190px;
  --height: 150px;
  display: grid;

  min-width: 1000px;

  grid-template-areas:
    'cim ms ms ms fi0 o'
    'cim ms ms ms fi1 o'
    'cim ms ms ms fi2 o';

  grid-template-columns: repeat(6, var(--width));
  grid-template-rows: repeat(3, var(--height));
}
</style>

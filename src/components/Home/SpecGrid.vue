<script setup lang="ts">
import TejiaGrid from '@/components/Home/Spec/TejiaGrid.vue';
import ShangouGrid from '@/components/Home/Spec/ShangouGrid.vue';
import Core2Container from './Spec/Core2Container.vue';
</script>

<template>
  <div id="spec" class="w-full pt-7">
    <div id="core1" class="grid grid-cols-2 h-[340px] gap-2">
      <TejiaGrid />
      <ShangouGrid />
    </div>
    <div id="core2" class="mt-3 grid grid-cols-4 w-full h-[340px] gap-2">
      <Core2Container title="新品首发" ></Core2Container>
      <Core2Container title="JOY 寻宝" ></Core2Container>
      <Core2Container title="逛好店" ></Core2Container>
      <Core2Container title="领券中心" ></Core2Container>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

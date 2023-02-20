<script setup lang="ts">
import ChannelGrid from '@/components/Home/ChannelGrid.vue';
import HomeHeader from '@/components/Home/HomeHeader.vue';
import MainGrid from '@/components/Home/MainGrid.vue';
import MiaoShaGrid from '@/components/Home/MiaoShaGrid.vue';
import RecommendGrid from '@/components/Home/RecommendGrid.vue';
import SpecGrid from '@/components/Home/SpecGrid.vue';

</script>

<template>
  <main>
    <HomeHeader />
    <div class="pt-3 m-auto">
      <MainGrid />
    </div>
    <div class="pt-3 m-auto">
      <MiaoShaGrid />
    </div>
    <div class="pt-3 m-auto">
      <SpecGrid />
    </div>
    <h1 class="text-center my-8 font-bold text-3xl"> -- 频道广场 -- </h1>
    <div class="m-auto">
      <ChannelGrid />
    </div>
    <h1 class="text-center my-8 font-bold text-3xl"> -- 为你推荐 -- </h1>
    <div class="m-auto">
      <RecommendGrid />
    </div>
  </main>
</template>

<style scoped>
div {
  width: 1200px;
}
</style>
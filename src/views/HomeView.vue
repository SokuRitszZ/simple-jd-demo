<script setup lang="ts">
import HomeHeader from '@/components/Home/HomeHeader.vue';
import MainGrid from '@/components/Home/MainGrid.vue';
import MiaoShaGrid from '@/components/Home/MiaoShaGrid.vue';
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
  </main>
</template>

<style scoped>
div {
  width: 1200px;
}
</style>
<script setup lang="ts">
import HomeHeader from '@/components/Home/HomeHeader.vue';
import MainGrid from '@/components/Home/MainGrid.vue';
import MiaoShaGrid from '@/components/Home/MiaoShaGrid.vue';

</script>

<template>
  <main>
    <HomeHeader />
    <div class="pt-3 w-fit m-auto">
      <MainGrid />
    </div>
    <div class="pt-3 w-fit m-auto">
      <MiaoShaGrid />
    </div>
  </main>
</template>

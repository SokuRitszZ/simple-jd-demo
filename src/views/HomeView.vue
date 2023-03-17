<script setup lang="ts">
import ChannelGrid from '@/components/Home/ChannelGrid.vue';
import HomeHeader from '@/components/Home/HomeHeader.vue';
import MainGrid from '@/components/Home/MainGrid.vue';
import MiaoShaGrid from '@/components/Home/MiaoShaGrid.vue';
import RecommendGrid from '@/components/Home/RecommendGrid.vue';
import SpecGrid from '@/components/Home/SpecGrid.vue';
import throttle from '@/utils/throttle';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import FixSearch from '@/components/Home/Header/FixSearch.vue';
import ScrollComp from '@/components/ScrollComp.vue';

const scrollTop = ref<number>(0);

const shouldShownFixedSearch = computed(() => scrollTop.value >= 590);

const handler = throttle(() => {
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop.value = document.documentElement.scrollTop;
  } else {
    scrollTop.value = document.body.scrollTop;
  }
}, 100);

onMounted(() => {
  window.addEventListener('scroll', handler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handler);
});

type typeOption = {
  title: string;
  url: string;
};

const options: typeOption[] = [
  { title: '京东秒杀', url: '#miaosha' },
  { title: '特色优选', url: '#special' },
  { title: '频道优选', url: '#channel' },
  { title: '为你推荐', url: '#recommend' },
];
</script>

<template>
  <ScrollComp :options="options" />
  <main class="relative w-screen">
    <div
      v-if="shouldShownFixedSearch"
      id="search-fix"
      class="w-screen min-w-[1200px] h-[50px] bg-white border-b-2 border-[#e14514] fixed top-0 left-0 z-50"
    >
      <div class="w-[1200px] h-full m-auto flex justify-between items-center">
        <div
          class="w-[100px] h-[30px] bg-white flex justify-center items-center text-[#e14514] text-3xl font-bold"
        >
          京东
        </div>
        <div class="relative -left-20">
          <FixSearch />
        </div>
      </div>
    </div>
    <HomeHeader />
    <div class="comp pt-3">
      <MainGrid />
    </div>
    <div id="miaosha" class="comp pt-3">
      <MiaoShaGrid />
    </div>
    <div id="special" class="comp pt-3">
      <SpecGrid />
    </div>
    <h1 id="channel" class="text-center my-8 font-bold text-3xl">
      -- 频道广场 --
    </h1>
    <div class="comp">
      <ChannelGrid />
    </div>
    <h1 id="recommend" class="text-center my-8 font-bold text-3xl">
      -- 为你推荐 --
    </h1>
    <div class="comp">
      <RecommendGrid />
    </div>
  </main>
</template>

<style scoped lang="scss">
div.comp {
  width: 1200px;
  @apply m-auto;
}

#search-fix {
  animation: entryIn 0.4s;
}

@keyframes entryIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: 0;
  }
}
</style>

<script setup lang="ts">
// @ts-ignore
import faker from 'faker';
import FixSearch from './Header/FixSearch.vue';
const hotWords = new Array(8).fill(0).map(() => faker.name.firstName());
const navItems = new Array(8).fill(0).map(() => faker.name.firstName());
</script>

<template>
  <header id="home-header" class="bg-white border-b-[1px] min-w-[1200px]">
    <div class="w-[1200px] m-auto flex justify-center items-center gap-10">
      <div id="logo" class="w-[120px] h-[120px] bg-[#E21D17]"></div>
      <div id="header-middle">
        <div class="pt-6">
          <FixSearch />
        </div>
        <div id="hot-words" class="flex gap-3 text-sm pt-1">
          <a
            href="#"
            :class="[
              i ? 'text-[#B4B4B4]' : 'text-[#E1251B]',
              'hover:text-[#C81623] cursor-pointer',
            ]"
            :key="w"
            v-for="(w, i) in hotWords"
            >{{ w }}</a
          >
        </div>
        <div id="nav-items" class="pt-6">
          <a
            href="#"
            class="cursor-pointer transition-colors hover:text-[#D6515B] mx-3 leading-[40px]"
            :key="n"
            v-for="n in navItems"
            >{{ n }}</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>

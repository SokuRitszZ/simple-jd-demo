<script setup lang="ts">
const hotWords = [
  'Karianne',
  'Travis',
  'Leanne',
  'Brandon',
  'Gussie',
  'Ernesto',
  'Porter',
  'Shanie',
];
const navItems = [
  'Michael',
  'Aliya',
  'Mckayla',
  'Elizabeth',
  'Queen',
  'Antonina',
  'Sofia',
  'Judy',
];
</script>

<template>
  <header
    id="home-header"
    class="bg-white border-b-[1px]"
  >
    <div class="w-[1200px] m-auto flex justify-center items-center gap-10">
      <div id="logo" class="w-[120px] h-[120px] bg-[#E21D17]"></div>
      <div id="header-middle">
        <div id="search" class="pt-6 w-fit relative flex items-center">
          <input
            placeholder="Shopping"
            id="search-input"
            class="border-[#E21D17] border-2 w-[530px] px-5 outline-none py-2 text-sm"
            type="text"
          />
          <span
            class="absolute left-[500px] text-[#B9B9B9] hover:text-[#D54F58] cursor-pointer"
            >图</span
          >
          <button
            class="bg-[#E1251B] border-[#E1251B] border-2 font-bold text-white px-3 py-2 text-center text-sm min-w-[60px]"
          >
            搜
          </button>
        </div>
        <div id="hot-words" class="flex gap-3 text-sm pt-1">
          <span
            :class="[
              i ? 'text-[#B4B4B4]' : 'text-[#E1251B]',
              'hover:text-[#C81623] cursor-pointer',
            ]"
            :key="w"
            v-for="(w, i) in hotWords"
            >{{ w }}</span
          >
        </div>
        <div id="nav-items" class="pt-6">
          <a
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

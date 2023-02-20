<script setup lang="ts">
// @ts-ignore
import faker from 'faker';
const hotWords = new Array(8).fill(0).map(() => faker.name.firstName());
const navItems = new Array(8).fill(0).map(() => faker.name.firstName());
</script>

<template>
  <header id="home-header" class="bg-white border-b-[1px] min-w-[1200px]">
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
            class="bg-[#E1251B] border-[#E1251B] border-2 font-bold text-white px-3 py-2 text-center text-sm min-w-[60px] hover:bg-[#C81623] transition-colors"
          >
            搜
          </button>
          <div class="relative">
            <button
              class="cart-btn ml-5 text-sm border-[1px] border-gray-100 px-4 py-2 text-[#E33128] hover:ring-1 ring-[#E33128] flex justify-between items-center gap-4"
            >
              <div class="rounded-full bg-[#a11200] p-3"></div>
              我的购物车
              <div class="bg-[#E1251B] text-white px-2 text-[12px] rounded-full absolute left-12 top-2">0</div>
              <div
                class="cart-list absolute w-[300px] h-[200px] right-0 top-10 hidden z-50"
              ></div>
            </button>
          </div>
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

<style scoped lang="scss">
.cart-btn:hover .cart-list {
  @apply block bg-white border-[1px] border-[#E33128];
}
</style>

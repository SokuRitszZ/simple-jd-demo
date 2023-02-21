<script setup lang="ts">
// @ts-ignore
import faker from 'faker';

const options = ['我的京东', '企业采购', '商家服务', '网站导航'];

function getSubOptions() {
  return new Array((Math.random() * 20) >>> 0)
    .fill(0)
    .map(() => faker.lorem.word(4));
}
</script>

<template>
  <nav id="home-nav" class="min-w-[1200px]">
    <div class="bg-[#E3E4E5]">
      <div class="w-[1200px] m-auto flex justify-between text-sm">
        <div
          id="header-location"
          class="text-[#999999] flex items-center gap-1 py-1"
        >
          <div class="inline-block w-1 h-1 rounded-full p-2 bg-[#F10215]"></div>
          <span> location </span>
        </div>
        <div
          id="header-options"
          class="text-sm text-[#999999] py-1 flex items-center"
        >
          <div class="nav-item border-none">你好，请登录</div>
          <div class="ml-1 mr-4 text-[#F10215] cursor-pointer">免费注册</div>
          <div class="nav-item pr-1">我的订单</div>
          <div class="nav-item relative" :key="o" v-for="o of options">
            <div class="nav-item-label">
              {{ o }}
            </div>
            <div class="dropdown absolute hidden w-[300px] grid-cols-3">
              <span
                :key="oo"
                v-for="oo in getSubOptions()"
                class="sub-option"
                >{{ oo }}</span
              >
            </div>
          </div>
          <div class="nav-item px-1">手机京东</div>
          <div class="nav-item px-1">网站无障碍</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-item {
  @apply leading-[28px] h-[28px] cursor-pointer text-[#999999] hover:text-[#F30213];
  .nav-item-label {
    @apply px-1;
  }
}

.nav-item-label:hover {
  @apply bg-white z-20 w-full h-full;
  & + .dropdown {
    display: block;
    left: 0;
    top: 100%;
    @apply bg-white border-[1px] border-t-0 border-gray-200 z-10 p-4 grid;
  }
}

.dropdown:hover {
  display: block;
  left: 0;
  top: 100%;
  @apply cursor-default bg-white border-[1px] border-t-0 border-gray-200 z-10 p-4 grid;
}

.sub-option {
  @apply text-[#999999] hover:text-[#F30213] cursor-pointer;
}
</style>

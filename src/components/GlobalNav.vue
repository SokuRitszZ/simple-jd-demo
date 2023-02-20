<script setup lang="ts">
const options = ['我的京东', '企业采购', '商家服务', '网站导航'];
</script>

<template>
  <nav id="home-nav">
    <div class="bg-[#E3E4E5] p-1">
      <div class="min-w-[1000px] w-fit m-auto flex justify-between text-sm py-1">
        <div id="header-location" class="text-[#999999] flex items-center gap-1">
          <div class="inline-block w-1 h-1 rounded-full p-2 bg-[#F10215]"></div>
          <span>
            location
          </span>
        </div>
        <div id="header-options">
          <span class="text-sm px-2 text-[#999999] hover:text-[#F30213]" :class="[i ? 'border-l-[1px] border-gray-300' : '']" :key="o" v-for="(o, i) of options">
            {{ o }}
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>

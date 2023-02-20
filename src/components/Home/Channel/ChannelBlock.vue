<script setup lang="ts">
type PropsType = {
  title: string;
  description: string;
};
const props = defineProps<PropsType>();
</script>

<template>
  <div class="bg-white flex flex-col p-5">
    <div class="flex items-end gap-1">
      <h1 class="text-2xl font-bold">{{ props.title }}</h1>
      <span class="text-sm text-[#999999]">{{ props.description }}</span>
    </div>
    <div class="grow w-full">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

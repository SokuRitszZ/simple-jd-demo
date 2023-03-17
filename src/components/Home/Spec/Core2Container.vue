<script setup lang="ts">
type PropsType = {
  title: string;
};
const props = defineProps<PropsType>();
</script>

<template>
  <div class="bg-white p-3 flex flex-col overflow-hidden">
    <div class="flex items-center">
      <a href="#" class="text-2xl font-bold px-3">{{ props.title }}</a>
      <div
        class="w-[20px] h-[20px] rounded-full border-2 border-[#C81623] transition"
      ></div>
    </div>
    <div class="w-full grow">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
a:hover + div {
  @apply bg-[#C81623];
}
</style>

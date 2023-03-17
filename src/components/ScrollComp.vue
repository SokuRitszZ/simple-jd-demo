<script setup lang="ts">
import throttle from '@/utils/throttle';
import { computed, onMounted, onUnmounted, ref } from 'vue';

type PropsType = {
  options: typeOption[];
};
const props = defineProps<PropsType>();

const shouldBeFixed = computed(() => scrollTop.value >= 590);

type typeOption = {
  title: string;
  url: string;
};

const options = ref<typeOption[]>([
  ...props.options,
  { title: '客服', url: '#' },
  { title: '反馈', url: '#' },
]);

const scrollTop = ref<number>(0);
const breaker = ref<number[]>([590, 886, 1590, 2290]);

const ptrBreaker = computed(() => {
  return breaker.value.reduce((pre, cur, i) => {
    return scrollTop.value >= cur ? i : pre;
  }, -1);
});

const _handler = () => {
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop.value = document.documentElement.scrollTop;
  } else {
    scrollTop.value = document.body.scrollTop;
  }
};

const handler = throttle(_handler, 100);

onMounted(() => {
  window.addEventListener('scroll', handler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handler);
});
</script>

<template>
  <div
    :class="[
      (shouldBeFixed && 'fixed top-0 translate-y-16 transition') ||
        'absolute top-[650px]',
      'right-3',
      'w-[60px] bg-white z-50 border-[1px] border-gray-200 text-sm font-medium',
    ]"
  >
    <a
      :href="o.url"
      :key="o.title"
      v-for="(o, i) in options"
      class="option"
      :class="[(ptrBreaker === i && 'text-[#e1251b]') || 'text-[#333333]']"
    >
      {{ o.title }}
    </a>
    <a v-if="shouldBeFixed" href="#" class="option text-[#e1251b]">顶部</a>
  </div>
</template>

<style scoped lang="scss">
.option {
  @apply p-3 w-full h-[60px] flex justify-center text-center items-center hover:bg-[#c81623] hover:text-white transition;
}
</style>

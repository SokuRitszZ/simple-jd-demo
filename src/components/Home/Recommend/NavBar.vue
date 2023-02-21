<script setup lang="ts">
import { ref } from 'vue';


type typeOption = {
  title: string;
  description: string;
};
const options: typeOption[] = [
  { title: '精选', description: '猜你喜欢' },
  { title: '智能先锋', description: '大电器城' },
  { title: '居家优品', description: '品质生活' },
  { title: '超市百货', description: '百货生鲜' },
  { title: '时尚达人', description: '美妆穿搭' },
  { title: '进口好物', description: '京东国际' },
];

const emit = defineEmits(['changeOption']);
const $nav = ref<HTMLDivElement>();

function select(option: string) {
  window.scrollTo({
    top: $nav.value?.offsetTop,
  });
  emit('changeOption', option);
}
</script>

<template>
  <div ref="$nav" class="bg-white flex justify-center items-center py-1 gap-2 text-center">
    <label
      name="option"
      :for="o.title"
      class="link"
      :key="o.title"
      v-for="o in options"
      @click="select(o.title)"
    >
      <input
        name="option"
        :id="o.title"
        type="radio"
        class="hidden"
      />
      <div class="title">{{ o.title }}</div>
      <div class="description">{{ o.description }}</div>
    </label>
  </div>
</template>

<style scoped lang="scss">
.link {
  @apply px-10 py-1 cursor-pointer;
  .title {
    @apply font-bold w-[100px] py-1;
  }
  .description {
    @apply text-sm text-[#999999];
  }
}

.link:hover {
  @apply text-[#C81623];

  .description {
    @apply text-[#C81623];
  }
}

input[type='radio']:checked {
  & + .title {
    @apply bg-[#E1251B] rounded-full text-white;
  }
}

.link:not(:first-child) {
  @apply border-l-[1px] border-gray-200;
}
</style>

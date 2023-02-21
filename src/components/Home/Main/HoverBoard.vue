<script setup lang="ts">
import { onMounted, ref } from 'vue';
// @ts-ignore
import faker from 'faker';
import randomPic from '@/utils/randomPic';

type typeOptions = {
  title: string;
  options: string[];
};

const optionsTop = ref<string[]>([]);
const optionsMap = ref<typeOptions[]>(
  new Array(10).fill(0).map(() => {
    return {
      title: faker.lorem.word(),
      options: new Array(10).fill(0).map(() => faker.lorem.word()),
    };
  })
);

type PropsType = {
  keyword: string;
};

onMounted(() => {
  optionsTop.value = new Array(5).fill(0).map(() => faker.lorem.word());
});

const props = defineProps<PropsType>();
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-[600px]">
      <nav class="flex gap-2">
        <a
          href="#"
          :key="o"
          v-for="o in optionsTop"
          class="bg-black text-white px-2 py-1 hover:bg-[#C81623]"
        >
          {{ o }}
        </a>
      </nav>
      <div
        class="w-full grid grid-cols-9 gap-4 pt-5"
        :key="om.title"
        v-for="om of optionsMap"
      >
        <a
          href="#"
          class="col-span-2 text-right font-bold hover:text-[#C81623]"
        >
          {{ om.title }}
        </a>
        <div class="col-span-7 flex gap-2 flex-wrap text-[#666666]">
          <a
            href="#"
            :key="o"
            v-for="o in om.options"
            class="hover:text-[#C81623]"
            >{{ o }}</a
          >
        </div>
      </div>
    </div>
    <div class="w-[200px]">
      <img :src="randomPic()" alt="brand_pic" class="w-full max-h-[300px]" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

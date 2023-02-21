<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

type typeItems = {
  id: number;
  pic: string;
  price: number;
  title: string;
  main?: boolean;
};
type PropsType = {
  items: typeItems[];
};
const props = defineProps<PropsType>();
const items = ref<typeItems[]>(props.items);

const onTimer = ref<any>();

onMounted(() => {
  onTimer.value = setInterval(() => {
    next();
  }, 4000);
});

onUnmounted(() => {
  clearInterval(onTimer.value);
})

const timer = ref<any>();
const $slider = ref<HTMLDivElement>();
const $imgs = ref<HTMLImageElement[]>();

function prev() {
  if (timer.value) return ;
  try {
    const its = items.value;
    its[2].main = false;
    its[1].main = true;
    $slider.value?.classList.remove('slider-normal');
    $slider.value?.classList.add('slider-scale-animate');
    $slider.value?.classList.add('slider-left');
    timer.value = setTimeout(() => {
      $slider.value?.classList.add('slider-normal');
      $slider.value?.classList.remove('slider-scale-animate');
      $slider.value?.classList.remove('slider-left');
      its.unshift(its.pop()!);
      timer.value = null;
    }, 500);
  } catch (e) {
    e;
  }
}
function next() {
  if (timer.value) return ;
  try {
    const its = items.value;
    its[2].main = false;
    its[3].main = true;
    $slider.value?.classList.remove('slider-normal');
    $slider.value?.classList.add('slider-scale-animate');
    $slider.value?.classList.add('slider-right');
    timer.value = setTimeout(() => {
      $slider.value?.classList.add('slider-normal');
      $slider.value?.classList.remove('slider-scale-animate');
      $slider.value?.classList.remove('slider-right');
      its.push(its.shift()!);
      timer.value = null;
    }, 500);
  } catch (e) {
    e;
  }
}

const $container = ref<HTMLDivElement>();
const $div = ref<HTMLDivElement[]>();

defineExpose({
  next,
  prev,
});

// 270 = 150 + 50 + 50 + 10 + 10

</script>

<template>
  <div ref="$container" class="w-full h-full overflow-hidden pt-10">
    <div ref="$slider" id="slider-scale" class="flex w-[1000px] slider-normal">
      <a ref="$div" :key="it.id" v-for="(it) of items" class="relative block item-a" href="#">
        <img ref="$imgs" class="relative bottom-0 img-animate w-[100px] h-[100px] hover:opacity-80" :class="[it.main && 'img-main' || 'mx-[5px]' || '']" :src="it.pic" alt="">
        <transition>
          <div v-show="it.main" class="pt-10 text-center relative">
            <div class="absolute left-2/4 -translate-x-1/2 ">
              <div id="title" class="whitespace-nowrap text-ellipsis transition hover:text-[#E1251B]">
                {{ it.title }}
              </div>
              <div class="text-[#E1251B] font-bold">￥{{ it.price }}</div>
            </div>
          </div>
        </transition>
      </a>
    </div>
  </div>
</template>

<style lang="scss">

.item:hover {
  @apply bg-black
}

.img-animate {
  transition: .4s;
}

.img-main {
  @apply scale-150 mx-[30px];
}

.slider-scale-animate {
  transition: .5s;
}

.slider-normal {
  transform: translateX(-165px);
}

.slider-left {
  transform: translateX(-55px);
}

.slider-right {
  // 100 + 10 + 100 + 10 + 50
  transform: translateX(-275px);
}

.v-enter-active,
.v-leave-active {
  transition: .2s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

type PropsType = {
  urls: string[];
  modelValue?: number;
};

const emit = defineEmits(['update:modelValue']);

const ptr = ref<number>(0);
watch(
  () => props.modelValue,
  (newV) => {
    if (!newV) return;
    ptr.value = newV;
    emit('update:modelValue', newV);
  }
);

watch(ptr, (newV) => {
  emit('update:modelValue', newV);
});

const props = defineProps<PropsType>();
const ptrOld = ref<number>(0);

const $img = ref<HTMLImageElement>();
const $imgOld = ref<HTMLImageElement>();

function next() {
  jump(ptr.value + 1);
}

function prev() {
  jump(ptr.value + props.urls.length - 1);
}

function jump(to: number) {
  if (timer.value) return;
  to %= props.urls.length;
  if (to === ptr.value) return;
  ptrOld.value = ptr.value;
  ptr.value = to;
  animate();
}

defineExpose({
  next,
  prev,
  jump,
});

const timer = ref<any>(null);

function animate() {
  if (!$img.value) return;
  $img.value.classList.add('fade');
  timer.value = setTimeout(() => {
    $img.value?.classList.remove('fade');
    timer.value = null;
  }, 400);
}

const timerCycle = ref<any>();

onMounted(() => {
  timerCycle.value =  setInterval(() => next(), 2000);
});

onUnmounted(() => {
  clearInterval(timerCycle.value);
});
</script>

<template>
  <a href="#" class="w-full h-full relative block">
    <img
      class="absolute left-0 top-0 w-full h-full z-10"
      ref="$img"
      :src="props.urls[ptr]"
      alt="new"
    />
    <img
      class="absolute left-0 top-0 w-full h-full z-0"
      ref="$imgOld"
      :src="props.urls[ptrOld]"
      alt="old"
    />
  </a>
</template>

<style lang="scss">
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade {
  animation: fade 0.4s;
}
</style>

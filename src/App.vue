<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalNav from '@/components/GlobalNav.vue';
</script>

<template>
  <div>
    <GlobalNav />
    <RouterView />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
  // idea => https://www.youtube.com/watch?v=R00QiudbD4Y

  defineProps<{
    isOpen: Boolean
  }>()
</script>

<template>
  <span id="header-button">
    {{ isOpen ? '>>' : '<<' }}
  </span>
</template>

<style scoped>
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    height: calc(2rem + 24px);
    aspect-ratio: 1;
  }
</style>
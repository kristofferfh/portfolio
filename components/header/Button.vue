<script setup lang="ts">
  // Create svg hamburger menu where the shape changes on hover
  // Perhaps an icon that changes into a circle that then changes into rect with menu inside?

  const props = defineProps(['isOpen'])
</script>

<template>
  <span id="header-button">
    {{ props.isOpen ? 'close' : 'open' }}
  </span>
</template>

<style scoped>

</style>
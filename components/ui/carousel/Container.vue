<script setup lang="ts">
  const props = defineProps<Props>()

  interface Image {
    name: string
    src: string
    desc: string
  }

  interface Props {
    images: Image[]
    active: boolean
  }
</script>

<template>
  <div>
    <LazyUiCarouselImage v-for="item in props.images" v-bind="item" :state="props.active" />
  </div>
</template>

<style scoped>
  div {
    display: flex;
    position: relative;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: orange;
  }
</style>
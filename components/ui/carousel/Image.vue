<script setup lang="ts">
  const props = defineProps<Image>()

  interface Image {
    name: string
    src: string
    desc: string
  }

  // pass translateX and rotate?
</script>

<template>
  <span>
    <LazyNuxtImg :src="`projects/${props.src}`"/>
    <h3>{{ props.name }}</h3>
    <p>{{ props.desc }}</p>
  </span>
</template>

<style scoped>
  span {
    position: absolute;
    overflow: visible;
    width: clamp(500px, 100%, 1024px);
    height: 100%
  }

  img {
    position: absolute;
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    padding: 1rem;
    top: 30%;
    transform: translateY(-50%);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  p {
    position: absolute;
    bottom: 0;
    padding: 1rem;
  }
</style>
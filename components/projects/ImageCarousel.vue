<script setup lang="ts">
  const props = defineProps<Props>()
  interface Image {
    name: string
    src: string
    desc: string
  }

  interface Props {
    images: Image[]
  }


</script>

<template>
  <div>
    <span v-for="item in images" style="">
      <LazyNuxtImg :src="`projects/${item.src}`"/>
      <h3>{{ item.name }}</h3>
      <p>{{ item.desc }}</p>
    </span>
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

  span {
    position: absolute;
    overflow: visible;
    width: clamp(500px, 100%, 1024px);
    height: 100%
  }

  img {
    position: absolute;
    width: 100%;
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
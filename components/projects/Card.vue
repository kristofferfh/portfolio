<script setup lang="ts">
  interface ProjectImg {
    name: string
    src: string
    desc: string
  }

  interface Project {
    name: string
    img: ProjectImg[]
    desc: string
    src: string
  }

  const props = defineProps<Project>()
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <div v-for="image in img">
      <span>
        <h3>{{ image.name }}</h3>
        <NuxtImg :src="`~/assets/img/project/${image.src}`" />
        <p>{{ image.desc }}</p>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
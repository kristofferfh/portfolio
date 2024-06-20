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
  <div class="project-item">
    <h1>{{ name }}</h1>
    <div class="project-item-img">
      <span v-for="image in img">
        <h3>{{ image.name }}</h3>
        <NuxtImg :src="`projects/${image.src}`" />
        <p>{{ image.desc }}</p>
      </span>
    </div>
    <p>{{ desc }}</p>
    <NuxtLink :to="src">Visit</NuxtLink>
  </div>
</template>

<style scoped>
  .project-item {
    background: var(--bg-grad);
  }
  .project-item-img {
    width: clamp(200px, 100%, 768px);
  }
 .project-item-img img {
    width: 100%;
  }
</style>
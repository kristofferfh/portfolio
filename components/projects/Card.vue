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



  // Assign hover effect to tittle and desc, maybe hide entiery until hover?
</script>

<template>
  <div class="project-item">
    <ProjectsImageCarousel :images="img"/>
    <h1>{{ name }}</h1>
    <div class="project-desc">
      <p>{{ desc }} </p>
      <NuxtLink :to="src">Visit</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    padding: 1rem;
    backdrop-filter: brightness(50%);
  }

  .project-item {
    position: relative;
    background: red;
    overflow: hidden;
    width: clamp(500px, 100%, 1024px);
    height: 50svw;

    border-radius: 10px;
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
  }

  .project-desc {
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: end;
    flex-wrap: wrap;
    padding: 1rem;
    backdrop-filter: brightness(50%);
  }
</style>
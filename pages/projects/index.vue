<script setup lang="ts">
  import PROJECTS from "~/data/projects.json"
  import type { Project } from "~/types/projects";

  const projectsList = ref<Project[]>([])

  onMounted(() => {
    Object.assign(projectsList.value, PROJECTS)
  })
</script>

<template>
  <section>
    <template v-for="project in projectsList">
      <LazyProjectsCard v-bind="project"/>
    </template>
  </section>
</template>

<style scoped>

</style>
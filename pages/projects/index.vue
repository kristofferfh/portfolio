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
    <UiCardsProject v-for="project in projectsList" v-bind="project" />
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;
  }
</style>
<script setup lang="ts">
  const props = defineProps<Project>()
  const isHovering = ref(false)

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

</script>

<template>
  <div class="project-item" @mouseleave="isHovering = false">
    <UiCarouselContainer @mousedown="isHovering = true" :active="isHovering" :images="img"/>
    <Transition>
      <h1 v-if="!isHovering">{{ name }}</h1>
    </Transition>
    <Transition>
      <div v-if="!isHovering" class="project-desc">
        <p>{{ desc }} </p>
        <NuxtLink :to="src">Visit</NuxtLink>
      </div>
    </Transition>
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
    height: clamp(500px, 75svw, 33svh);

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

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
<script setup lang="ts">
  const props = defineProps<Image>()

  interface Image {
    name: string
    src?: string
    desc: string
    state: boolean
    active: boolean
  }

  // pass translateX and rotate?
</script>

<template>
  <span v-if="active">
    <LazyNuxtImg :src="props.src ? `projects/${props.src}` : 'projects/placeholder.jpg'"/>
    <Transition>
      <h3 v-if="props.state">{{ props.name }}</h3>
    </Transition>
    <Transition>
      <p v-if="props.state">{{ props.desc }}</p>
    </Transition>
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
    left: 2rem;
    top: 2rem;
    padding: 2rem 5rem;
    backdrop-filter: brightness(50%);
  }

  p {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2rem 5rem;
    margin: 2rem;
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
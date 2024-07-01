<script setup lang="ts">
  const props = defineProps<Props>()
  const activePage = ref(0)
  const currentPages = ref()

  interface Image {
    name: string
    src: string
    desc: string
  }

  interface Props {
    images: Image[]
    active: boolean
  }

  onMounted(() => {
    currentPages.value = props.images.length - 1
  })

  const pageinate = (newPage:number) => {
    if (newPage < 0 ) activePage.value = currentPages.value
    if (newPage > currentPages.value) activePage.value = 0
  }
</script>

<template>
  <div>
    <TransitionGroup>
      <template v-for="(item, index) in props.images" :key="index">
        <LazyUiCarouselImage v-bind="item" :state="props.active" :active="index === activePage" />
      </template>
    </TransitionGroup>
    <button @click="pageinate(--activePage)"></button>
    <button @click="pageinate(++activePage)"></button>
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

  button {
    position: absolute;
    width: 20%;
    height: 100%;
    background: none;
    border: none;
    transition: opacity 300ms ease-in-out;
    opacity: 0;
    background: rgb(61,61,61);
    background: linear-gradient(90deg, rgba(61,61,61,1) 0%, rgba(0,0,0,0) 100%);
  }

  button:hover {
    opacity: 1;
  }

  button:last-of-type {
    right: 0;
    background: rgb(61,61,61);
    background: linear-gradient(270deg, rgba(61,61,61,1) 0%, rgba(0,0,0,0) 100%);
  }

  button:last-of-type:hover {
    opacity: 1;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease-in-out
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
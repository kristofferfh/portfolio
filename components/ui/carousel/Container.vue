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
    <template v-for="(item, index) in props.images">
      <LazyUiCarouselImage v-bind="item" :state="props.active" :active="index === activePage" />
    </template>
    <button @click="pageinate(--activePage)">left </button>
    <button @click="pageinate(++activePage)">{{ activePage }}</button>
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
  }

  button:last-of-type {
    right: 0;
  }
</style>
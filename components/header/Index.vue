<script setup lang="ts">
  // Convert css transition to func instead or use media queuery to find size of
  // nav el to scale border-radius better.

  const isOpen = ref(true)
</script>

<template>
  <header
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
    :class="{'opened': isOpen}"
  >
    <Transition>
      <HeaderNav v-if="isOpen" />
    </Transition>
    <HeaderButton @click="isOpen = !isOpen" :isOpen="isOpen"/>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: end;
    position: fixed;
    top: 2rem;
    right: 2rem;

    color: var(--txt-header);
    background-color: var(--bg-primary);
    border: 2px solid #4d4d4d;
    border-radius: 50%;

    transition: border-radius 1200ms cubic-bezier(1,0,.9,.3);
  }

  .opened {
    transition: border-radius 100ms ease-out;
    border-radius: 10px;
  }

  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: all 1s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    max-width: 0;
  }
</style>
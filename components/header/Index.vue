<script setup lang="ts">
  const isOpen = ref(false)

  // The plan here is to have the header element expand rtl on hover with an effect that exands slowly
  // Another important thing is to make sure the border goes from buttons circle shape to nav bars rect shape
</script>

<template>
  <header :class="{'nav-open': isOpen}">
    <Transition>
      <HeaderNav v-if="isOpen" @mouseleave="isOpen = false"/>
      <HeaderButton v-else @mouseenter="isOpen = true" />
    </Transition>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    position: fixed;
    z-index: 10;
    top: 1rem;
    right: 1rem;


    border: 2px solid white;
    border-radius: 50%;
  }

  .nav-open {
    border-radius: 10px;
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
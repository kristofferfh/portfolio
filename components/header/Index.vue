<script setup lang="ts">
  const isOpen = ref(true)

  // The plan here is to have the header element expand rtl on hover with an effect that exands slowly
  // Another important thing is to make sure the border goes from buttons circle shape to nav bars rect shape
</script>

<template>
  <header :class="{'nav-open': isOpen}">
    <Transition :name="isOpen ? 'btn' : 'nav'" mode="out-in">
      <HeaderNav v-if="isOpen" @mouseout="isOpen = false"/>
      <HeaderButton v-else @mouseenter="isOpen = true" />
    </Transition>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    position: fixed;
    top: 1rem;
    right: 1rem;
    max-width: auto;

    z-index: 10;
    overflow: hidden;
  }

  /* Navigation transition */
  .nav-enter-active,
  .nav-leave-active {
    transition: all 1s ease-in-out;
  }

  .nav-enter-from,
  .nav-leave-to {
    opacity: 0;
  }

  /* Button transition */
  .btn-enter-active,
  .btn-leave-active {
    transition: all 0.1s ease-in-out;
  }

  .btn-enter-from,
  .btn-leave-to {
    opacity: 0;
  }
</style>
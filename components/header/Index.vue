<script setup lang="ts">
  const isOpen = ref(true)

  // The plan here is to have the header element expand rtl on hover with an effect that exands slowly
  // Another important thing is to make sure the border goes from buttons circle shape to nav bars rect shape
</script>

<template>
  <header :class="{'nav-open': isOpen}">
    <Transition :name="isOpen ? 'btn' : 'nav'" mode="out-in">
      <HeaderNav v-if="isOpen" @mouseleave="isOpen = false"/>
      <HeaderButton v-else @mouseenter="isOpen = true" />
    </Transition>
  </header>
</template>

<style scoped>
  header {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
</style>
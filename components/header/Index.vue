<script setup lang="ts">
  const isOpen = ref(true)

  // The plan here is to have the header element expand rtl on hover with an effect that exands slowly
  // Another important thing is to make sure the border goes from buttons circle shape to nav bars rect shape
</script>

<template>
  <header :class="{'nav-open': isOpen}" @mouseout.stop="isOpen = false">
    <Transition :name="isOpen ? 'btn' : 'nav'" mode="out-in">
      <HeaderNav v-if="isOpen"/>
    </Transition>
    <HeaderButton :isOpen="isOpen" @click="isOpen = !isOpen" @mouseenter="isOpen = !isOpen" />
  </header>
</template>

<style scoped>
  header {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
</style>
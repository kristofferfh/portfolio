<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 500ms ease-out;
  }
  .page-enter-from {
    transform: translateY(100svh);
  }
  .page-leave-to {
    transform: translateY(-100svh);
  }
</style>
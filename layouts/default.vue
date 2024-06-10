<template>
  <main>
    <slot />
  </main>
  <Footer />
  <Header />
</template>

<style scoped>
  div {
    display: flex;
    flex-flow: column nowrap;

    min-height: 100svh;
  }

  main {
    flex: 1;
  }
</style>
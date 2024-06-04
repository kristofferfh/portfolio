<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <Particles />
  </div>
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
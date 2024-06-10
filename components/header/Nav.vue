<script setup lang="ts">
  // Get menu items from nuxt.config, tmp while dev
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Timeline", path: "/timeline" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in menuItems">
        <NuxtLink :href="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  a {
    padding: 2rem 4rem;
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
    color: var(--color-txt-light);
    text-decoration: none;
  }
</style>
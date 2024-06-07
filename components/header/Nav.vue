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
        <a :href="item.path">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  li {
    padding: 2rem;
  }
</style>
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
  nav {
    overflow: hidden;
  }

  ul {
    display: flex;
    list-style: none;
    border: 1px solid gray;
    border-radius: 20px;
  }

  li {
    display: inline-flex;
    background-color: var(--bg-primary);
  }

  li:first-child {
    border-radius: 20px 0 0 20px;
  }

  li:last-child {
    border-radius: 0 20px 20px 0;
  }

  li:hover {
    background-color: #2d2d2d;
  }

  li:active {
    background-color: #3d3d3d;
  }

  a {
    padding: 2rem 4rem;
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
    color: var(--color-txt-light);
    text-decoration: none;
  }
</style>
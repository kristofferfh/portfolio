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
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    overflow: hidden;
    max-width: 1000px;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    display: flex;
  }
  li:first-child {
    border-radius: 10px 0 0 10px;
  }
  li:hover {
    background-color: #2d2d2d;
  }
  li:active {
    background-color: #3d3d3d;
  }

  a {
    padding: 1rem 3rem;
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
    color: var(--txt-header);
    text-decoration: none;
    font-size: large;
  }

  .router-link-active {
    color: orange;
  }
</style>
<template>
  <div class="bg-background-900 text-primary w-full min-h-screen min-w-fit p-5">
    <Navbar class="mb-20" />
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss" scoped></style>

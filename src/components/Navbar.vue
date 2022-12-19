<template>
  <div class="flex justify-between items-center w-full">
    <div class="flex items-center cursor-pointer">
      <i class="material-icons material-symbols-rounded text-3xl"> diamond </i>
      <span>Portfoliio</span>
    </div>
    <div
      class="text-2xl text-secondary cursor-pointer list-none flex justify-around w-96"
    >
      <li class="hover:text-primary"><a href="#projects">Projects</a></li>
      <li class="hover:text-primary">
        <a href="#technologies">Technologies</a>
      </li>
      <li class="hover:text-primary"><a href="#about">About</a></li>
    </div>
    <div class="flex justify-between w-16">
      <a href="https://github.com/ponyma2100 " target="_blank">
        <i class="fa-brands fa-github text-2xl hover:brightness-50"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/pony-ma-7b3685227/"
        target="_blank"
        class="hover:brightness-50"
      >
        <i class="fa-brands fa-linkedin text-2xl"></i>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<template>
  <div class="mt-10 flex flex-col gap-12">
    <div
      class="h-2 w-20 bg-gradient-to-r from-accent-300 to-accent-200 rounded-full"
    ></div>
    <h1 class="text-6xl font-bold" id="technologies">Technologies</h1>
    <div class="flex justify-between max-w-screen-lg">
      <div>
        <span class="material-icons material-symbols-rounded">
          dashboard_customize
        </span>
        <h2 class="text-3xl font-bold">Front-End</h2>
        <ul class="list-none text-secondary">
          <li>HTML/CSS3</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Tailwind css</li>
        </ul>
      </div>
      <div>
        <span class="material-icons material-symbols-rounded"> landscape </span>
        <h2 class="text-3xl font-bold">Back-End</h2>
        <ul class="list-none text-secondary">
          <li>Node.js / Express</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div>
        <span class="material-icons material-symbols-rounded">
          monitoring
        </span>
        <h2 class="text-3xl font-bold">Tools</h2>
        <ul class="list-none text-secondary">
          <li>Git / Github</li>
          <li>Heroku</li>
          <li>Postman</li>
          <li>Trello</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

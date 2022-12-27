<template>
  <div class="mt-10 flex flex-col gap-12">
    <div
      class="h-2 w-20 bg-gradient-to-r from-accent-300 to-accent-200 rounded-full"
    ></div>
    <h1 class="text-6xl font-bold" id="projects">Projects</h1>
    <div class="flex flex-wrap justify-evenly gap-10 w-full h-full">
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-[24rem] min-w-[380px] rounded-lg shadow-md shadow-blue-500/50"
      >
        <img
          :src="project.image"
          alt=""
          class="rounded-lg h-[240px] w-96 object-fill"
        />
        <div
          class="flex flex-col justify-between items-center p-6 gap-2 h-[360px]"
        >
          <h3 class="text-accent-400 text-3xl">{{ project.title }}</h3>
          <p class="tracking-widest">{{ project.description }}</p>
          <h3 class="text-accent-400 text-xl">Stack</h3>
          <div class="flex justify-around w-full">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="font-semibold text-secondary"
              >{{ tag }}</span
            >
          </div>
          <div class="flex justify-evenly w-full">
            <a
              :href="project.visit"
              target="_blank"
              class="h-8 w-16 bg-slate-700 rounded-xl text-center leading-8 font-bold hover:brightness-125"
              >Live</a
            >
            <a
              :href="project.source"
              target="_blank"
              class="h-8 w-16 bg-slate-700 rounded-xl text-center leading-8 font-bold hover:brightness-125"
              >Github</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Cryptocurrency Dashboard",
    description:
      "Cryptocurrency dashboard project is builded by vue3, and using Pinia to manage state . Fetching data from multiple sources using RapidAPI.",
    image:
      "https://raw.githubusercontent.com/ponyma2100/cryptodashboard_vue/master/crypto.png",
    tags: ["VUE3", "JAVASCRIPT", "API", "CHART.JS"],
    source: "https://github.com/ponyma2100/cryptodashboard_vue",
    visit: "https://ponyma2100.github.io/cryptodashboard_vue/",
    id: 0,
  },
  {
    title: "Taiwanbus App",
    description:
      "A bus information app built by vue3. Provides convenient functions such as real-time vehicle dynamics and transparency of bus information. ",
    image:
      "https://raw.githubusercontent.com/ponyma2100/taiwanbus-vue/master/bus-2.png",
    tags: ["VUE3", "JAVASCRIPT", "API", "LEAFLET"],
    source: "https://github.com/ponyma2100/taiwanbus-vue",
    visit: "https://ponyma2100.github.io/taiwanbus-vue/",
    id: 1,
  },
  {
    title: "TaiwanStock Mobile App",
    description:
      "A real-time stocks market screener mobile app using vue3. Fetch prices and data from yahoo finance",
    image:
      "https://raw.githubusercontent.com/ponyma2100/stock-app-vue/master/stock-5.png",
    tags: ["VUE3", "JAVASCRIPT", "EXPRESS", "NODE.JS"],
    source: "https://github.com/ponyma2100/stock-app-vue",
    visit: "https://ponyma2100.github.io/stock-app-vue/",
    id: 2,
  },
  {
    title: "Simplenetflix App",
    description:
      "A netflix clone website by using vue3 and firebase. Fetch and search real-time movies data from the movie database api.Demo Account: demo@gmail.com/123123",
    image:
      "https://raw.githubusercontent.com/ponyma2100/simplenetflix-vue/master/netflix-2.png",
    tags: ["VUE3", "JAVASCRIPT", "API", "FIREBASE"],
    source: "https://github.com/ponyma2100/simplenetflix-vue",
    visit: "https://ponyma2100.github.io/simplenetflix-vue/",
    id: 3,
  },
  {
    title: "Pomodoro App",
    description:
      "Create a momentumdash clone website by using vue3 . A dashboard with pomodoro and provides convenient functions such as real-time weather, and inspiration quote.",
    image:
      "https://raw.githubusercontent.com/ponyma2100/pomodoro-vue/master/pomodoro-1.png",
    tags: ["VUE3", "JAVASCRIPT", "API"],
    source: "https://github.com/ponyma2100/pomodoro-vue",
    visit: "https://ponyma2100.github.io/pomodoro-vue/",
    id: 4,
  },
];
</script>

<style lang="scss" scoped></style>

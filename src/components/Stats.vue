<script setup>
import { useI18n } from "vue-i18n";

const toolsStack = [
  {
    name: "Vue.js (Vuex, Pinia, Vue Router)",
    icon: "/vue-icon.svg",
  },
  {
    name: "React.js (Context API, Hook Form, React Query, React Router)",
    icon: "/react-icon.svg",
  },
  {
    name: "JavaScript",
    icon: "/js-icon.svg",
  },
  {
    name: "HTML5",
    icon: "/html-icon.svg",
  },
  {
    name: "CSS3",
    icon: "/css-icon.svg",
  },
  {
    name: "Bootstrap",
    icon: "/bootstrap-icon.svg",
  },
  {
    name: "Tailwind",
    icon: "/tailwind-icon.svg",
  },
  {
    name: "Sass/SCSS",
    icon: "/scss-icon.svg",
  },
];

const { t } = useI18n({
  useScope: "global",
});
</script>

<template>
  <div>
    <h2>{{ t("modals.stats.heading") }}</h2>
    <div class="info-container">
      <div class="row-container">
        <h3>{{ t("modals.stats.subHeading1") }}</h3>
        <ul class="tools-container">
          <li
            v-for="(tool, index) in toolsStack"
            :key="index"
            :title="tool.name"
          >
            <img class="svg-icon" :src="`toolsIcons${tool.icon}`" alt="" />
          </li>
        </ul>
      </div>
      <div class="row-container">
        <h3>{{ t("modals.stats.subHeading2") }}</h3>
        <img class="lang-stats-img" src="/src/assets/langStats.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.lang-stats-img {
  width: 60%;
  border-radius: 3rem;
}

.tools-container {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.info-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.row-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.svg-icon {
  width: 5rem;
}
</style>

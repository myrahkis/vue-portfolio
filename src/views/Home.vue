<script setup>
import DocLayout from "@/components/DocLayout.vue";
</script>

<template>
  <section class="home-section">
    <DocLayout>
      <template #project>
        <p>Моё Vue портфолио на Vue.js</p>
        <ul>
          <li>Файл - опции настройки сайта</li>
          <li>Вставка - мои проекты</li>
          <li>Инструменты - фичи сайта</li>
          <li>Расширения - визуальная настройка</li>
          <li>Справка - обо мне</li>
        </ul>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped>
.home-section {
  height: 100vh;
}
</style>

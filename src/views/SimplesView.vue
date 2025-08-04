<script setup>
import { onMounted } from "vue";
import { useUIStore } from "@/stores/UIStore";
import DocLayout from "@/components/DocLayout.vue";

const UIStore = useUIStore();

onMounted(() => {
  UIStore.setPayload({
    text: [
      "Мой первый проект на Vue.js.",
      "Стэк: Vue.js (VueRouter, немного Vuex), mathjs, api wiki;",
      "Функционал: todo лист; страница постов, подгружаемых по api; поиск wiki страниц; калькулятор.",
      "Проект на github."
    ],
  });
});
</script>

<template>
  <section class="simples-section">
    <DocLayout>
      <template #project>
        <iframe
          class="project-preview"
          src="https://myrahkis.github.io/simples-w-vue/"
          frameborder="0"
        ></iframe>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped></style>

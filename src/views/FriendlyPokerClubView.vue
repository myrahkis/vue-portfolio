<script setup>
import DocLayout from "@/components/DocLayout.vue";
import { useUIStore } from "@/stores/UIStore";
import { onMounted } from "vue";

const UIStore = useUIStore();

onMounted(() => {
  UIStore.setPayload({
    text: [
      "Сайт для легального покерного клуба 'Friendly Poker Club.'",
      "Стэк: Nuxt.js, pdfjs-dist;",
      "Функционал: расписание турниров, подгрузка данных для нескольких городов, определение города по IP;",
      "В планах: страница галереи и страница с правилами покера.",
      "Проект на github.",
    ],
  });
});
</script>

<template>
  <section class="friendly-club-section">
    <DocLayout>
      <template #project>
        <iframe
          class="project-preview"
          src="https://friendlypoker.ru"
          frameborder="0"
        ></iframe>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped></style>

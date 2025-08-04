<script setup>
import { onMounted } from "vue";
import { useUIStore } from "@/stores/UIStore";
import DocLayout from "@/components/DocLayout.vue";

const UIStore = useUIStore();

onMounted(() => {
  UIStore.setPayload({
    text: [
      "Лендинг для циклонных фильтров.",
      "Стэк: Vue.js, imask;",
      "Функционал: форма обратной связи;",
      "Проект на github.",
    ],
  });
});
</script>

<template>
  <section class="cyclone-section">
    <DocLayout>
      <template #project>
        <iframe
          class="project-preview"
          src="https://cyclon.pro"
          frameborder="0"
        ></iframe>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped></style>

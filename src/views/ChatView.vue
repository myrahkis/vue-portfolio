<script setup>
import { onMounted } from "vue";
import { useUIStore } from "@/stores/UIStore";
import DocLayout from "@/components/DocLayout.vue";

const UIStore = useUIStore();

onMounted(() => {
  UIStore.setPayload({
    text: [
      "Чат.",
      "Стэк: Vue.js (Vuex и VueRouter), websockets;",
      "Функционал: ws сервер лежит на Render и ему нужно пару минут, чтобы проснуться;",
      "Проект на github.",
    ],
  });
});
</script>

<template>
  <section class="chat-section">
    <DocLayout>
      <template #project>
        <iframe
          class="project-preview"
          src="https://myrahkis.github.io/real-time-chat/"
          frameborder="0"
        ></iframe>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped></style>

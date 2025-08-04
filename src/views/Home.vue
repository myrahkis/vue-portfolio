<script setup>
import { useTextBgColorStore } from "@/stores/textBgColorStore";
import { useTextColorStore } from "@/stores/textColorStore";
import { useUIStore } from "@/stores/UIStore";
import { onMounted } from "vue";
import DocLayout from "@/components/DocLayout.vue";

const textColorStore = useTextColorStore();
const textBgColorStore = useTextBgColorStore();
const UIStore = useUIStore();

onMounted(() => {
  UIStore.setPayload({
    text: ["Здесь будут отображаться подробности о проекте :)"],
  });
});
</script>

<template>
  <section class="home-section">
    <DocLayout>
      <template #project>
        <h1>
          <span
            :style="{
              color: textColorStore.selectedColor,
              backgroundColor: textBgColorStore.selectedColor,
              lineHeight: 1.55,
            }"
            >Моё Vue портфолио на Vue.js</span
          >
        </h1>
        <ul class="features-list">
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
              >Файл - опции настройки сайта</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
              >Вставка - мои проекты</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Инструменты - фичи сайта</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Расширения - визуальная настройка</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Справка - обо мне</span
            >
          </li>
        </ul>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped>
.home-section {
  height: 100vh;
}

.features-list {
  list-style: none;
}
</style>

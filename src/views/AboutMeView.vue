<script setup>
import { onMounted, watchEffect } from "vue";
import { useTextBgColorStore } from "@/stores/textBgColorStore";
import { useTextColorStore } from "@/stores/textColorStore";
import { useUIStore } from "@/stores/UIStore";
import { useI18n } from "vue-i18n";
import DocLayout from "@/components/DocLayout.vue";

const textColorStore = useTextColorStore();
const textBgColorStore = useTextBgColorStore();
const UIStore = useUIStore();
const { t, tm } = useI18n({
  useScope: "global",
});

watchEffect(() => {
  UIStore.setPayload({
    text: tm("projects.noDetails"),
  });
});
</script>

<template>
  <section class="about-me-section">
    <DocLayout>
      <template #project>
        <h1>
          <span
            :style="{
              color: textColorStore.selectedColor,
              backgroundColor: textBgColorStore.selectedColor,
              lineHeight: 1.55,
            }"
            >{{ t("aboutMe.title") }}</span
          >
        </h1>
        <ul class="about-me-list">
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              {{ t("aboutMe.li1") }}</span
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
              {{ t("aboutMe.li2") }}</span
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
              {{ t("aboutMe.li3") }}</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
              >{{ t("aboutMe.li4") }}</span
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
              {{ t("aboutMe.li5") }}</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
              >{{ t("aboutMe.li6") }}</span
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
              {{ t("aboutMe.li7") }}</span
            >
          </li>
        </ul>
        <div>
          <img class="me-diploma-img" src="/src/assets/me-diploma.jpg" alt="" />
        </div>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped>
.about-me-section {
  min-height: 100vh;
}

.about-me-list {
  list-style: inside;
}
.me-diploma-img {
  width: 100%;
  margin-top: 2rem;
}
</style>

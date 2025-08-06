<script setup>
import { useTextBgColorStore } from "@/stores/textBgColorStore";
import { useTextColorStore } from "@/stores/textColorStore";
import { useUIStore } from "@/stores/UIStore";
import { watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import DocLayout from "@/components/DocLayout.vue";

const { t } = useI18n({
  useScope: "global",
});

const textColorStore = useTextColorStore();
const textBgColorStore = useTextBgColorStore();
const UIStore = useUIStore();
const { tm } = useI18n({
  useScope: "global",
});

watchEffect(() => {
  UIStore.setPayload({
    text: tm("projects.noDetails"),
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
            >{{ t("home.h1") }}</span
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
              >{{ t("home.li1") }}</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
              >{{ t("home.li2") }}</span
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
              {{ t("home.li3") }}</span
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
              {{ t("home.li4") }}</span
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
              {{ t("home.li5") }}</span
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

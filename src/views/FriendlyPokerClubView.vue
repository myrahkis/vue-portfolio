<script setup>
import { useUIStore } from "@/stores/UIStore";
import { watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import DocLayout from "@/components/DocLayout.vue";

const UIStore = useUIStore();
const { tm } = useI18n({
  useScope: "global",
});

watchEffect(() => {
  UIStore.setPayload({
    text: tm("projects.friendlyPoker"),
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

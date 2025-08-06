<script setup>
import { watchEffect } from "vue";
import { useUIStore } from "@/stores/UIStore";
import { useI18n } from "vue-i18n";
import DocLayout from "@/components/DocLayout.vue";

const UIStore = useUIStore();
const { tm } = useI18n({
  useScope: "global",
});

watchEffect(() => {
  UIStore.setPayload({
    text: tm("projects.cyclone"),
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

<script setup>
import { watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useUIStore } from "@/stores/UIStore";
import DocLayout from "@/components/DocLayout.vue";

const UIStore = useUIStore();
const { tm } = useI18n({
  useScope: "global",
});

watchEffect(() => {
  UIStore.setPayload({
    text: tm("projects.chat"),
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

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
    text: tm("projects.simples"),
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

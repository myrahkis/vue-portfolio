<script setup>
import DocLayout from "@/components/DocLayout.vue";
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

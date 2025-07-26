<script setup>
import DocLayout from "@/components/DocLayout.vue";
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

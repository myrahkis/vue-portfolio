<script setup>
import DocLayout from "@/components/DocLayout.vue";
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

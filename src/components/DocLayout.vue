<script setup>
import { useFontSizeStore } from "@/stores/fontSizeStore";

const fontSizeStore = useFontSizeStore();
</script>

<template>
  <div class="inner-doc-wrapper">
    <div
      class="project-preview"
      :style="{ fontSize: `${fontSizeStore.selectedSize / 10}rem` }"
    >
      <slot name="project"></slot>
    </div>
  </div>
</template>

<style>
.inner-doc-wrapper {
  padding: 5rem 16rem;
}

.project-preview {
  iframe {
    width: 100%;
    aspect-ratio: 9 / 13;
  }
}
</style>

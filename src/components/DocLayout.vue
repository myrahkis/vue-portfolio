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
  padding: clamp(1.5rem, calc(-0.143rem + 0.357vw), 5rem)
    clamp(3rem, calc(-3.286rem + 1.339vw), 16rem);
}

.project-preview {
  iframe {
    width: 100%;
    aspect-ratio: 9 / 13;
  }
}

@media (max-width: 762px) {
  .project-preview {
    display: flex;
    flex-direction: column;
    justify-content: center;

    iframe {
      width: 90%;
      aspect-ratio: 9 / 16;
    }
  }
}
@media (max-width: 512px) {
  /* .inner-doc-wrapper {
    padding: clamp(1.5rem, calc(-0.143rem + 0.357vw), 5rem)
      clamp(1rem, calc(-3.286rem + 1.339vw), 5rem);
  } */

  .project-preview {
    iframe {
      width: 100%;
    }
  }
}
</style>

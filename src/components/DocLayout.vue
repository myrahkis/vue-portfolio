<script setup></script>

<template>
  <div class="inner-doc-wrapper">
    <div class="project-preview">
      <slot name="project"></slot>
    </div>
  </div>
</template>

<style>
.inner-doc-wrapper {
  padding: 5rem 4rem;
}

.project-preview {
  iframe {
    width: 60%;
    aspect-ratio: 9 / 16;
  }
}
</style>

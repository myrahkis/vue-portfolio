<script setup>
import { useUIStore } from "@/stores/UIStore";

const UIStore = useUIStore();
</script>

<template>
  <div class="modal-container">
    <div class="modal-inner">
      <button class="close-btn u-tools-hover" @click="UIStore.closeModal">
        X
      </button>
      <slot name="modal-content"></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  position: absolute;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: var(--text-color-1);
}
.modal-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  color: var(--text-color);
  padding: 2rem 3rem;
  border-radius: 2rem;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>

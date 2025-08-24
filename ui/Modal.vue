<script setup>
import { useUIStore } from "@/stores/UIStore";

const UIStore = useUIStore();
</script>

<template>
  <div class="modal-container">
    <div class="modal-inner">
      <button class="close-btn u-tools-hover" @click="UIStore.closeModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8rem"
          height="1.8rem"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z"
          />
        </svg>
      </button>
      <slot name="modal-content"></slot>
    </div>
  </div>
</template>

<style>
.modal-container {
  position: absolute;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: #000000b3;
}
.modal-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  color: var(--text-color-modal);
  padding: 2rem 3rem;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 2rem #00000062;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    color: var(--text-color-modal);

    &:hover {
      color: var(--white);
    }
  }
}
</style>

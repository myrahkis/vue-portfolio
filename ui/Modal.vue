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
          fill="none"
          viewBox="0 0 24 24"
          width="1.8rem"
          height="1.8rem"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              fill="currentColor"
              d="M 20.7457 3.32851 C 20.3552 2.93798 19.722 2.93798 19.3315 3.32851 L 12.0371 10.6229 L 4.74275 3.32851 C 4.35223 2.93798 3.71906 2.93798 3.32854 3.32851 C 2.93801 3.71903 2.93801 4.3522 3.32854 4.74272 L 10.6229 12.0371 L 3.32856 19.3314 C 2.93803 19.722 2.93803 20.3551 3.32856 20.7457 C 3.71908 21.1362 4.35225 21.1362 4.74277 20.7457 L 12.0371 13.4513 L 19.3315 20.7457 C 19.722 21.1362 20.3552 21.1362 20.7457 20.7457 C 21.1362 20.3551 21.1362 19.722 20.7457 19.3315 L 13.4513 12.0371 L 20.7457 4.74272 C 21.1362 4.3522 21.1362 3.71903 20.7457 3.32851 Z"
            />
          </g>
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

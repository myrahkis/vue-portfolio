<script setup>
import { useUIStore } from "@/stores/UIStore";

const UIStore = useUIStore();
</script>

<template>
  <aside class="details-container">
    <button class="back-btn" @click="UIStore.closeDetails">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          fill="currentColor"
          d="M25.002 13.014c.551 0 .998.46.998 1.025 0 .567-.447 1.026-.998 1.026l-19.563-.003 8.918 9.156c.39.401.39 1.051 0 1.452l-.028.03c-.39.4-1.024.4-1.415 0L2.31 14.811a1.027 1.027 0 0 1-.247-.42 1.047 1.047 0 0 1-.013-.674 1.03 1.03 0 0 1 .274-.526L12.932 2.301a.982.982 0 0 1 1.414 0l.029.03c.39.4.39 1.05 0 1.451l-8.99 9.23 19.617.002Z"
        />
      </svg>
    </button>
    <div class="details-info">
      <p
        v-for="(sentence, index) in UIStore?.detailsPayload?.text"
        :key="index"
        v-html="sentence"
      ></p>
    </div>
  </aside>
</template>

<style>
.details-container {
  position: fixed;
  top: 19%;
  left: 1.3%;
  z-index: 5;
  width: 22%;
  height: 100%;

  padding: 2rem;
}

.back-btn {
  display: flex;
  align-items: center;
  color: var(--icons-color);
  padding: 1.2rem;
  border-radius: 50%;
  width: fit-content;
  transition: all 0.2s;

  &:hover {
    background-color: var(--tools-hover-color);
  }
}

.details-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem 1rem;
  color: var(--icons-color);
}

@media (max-width: 910px) {
  .details-container {
    display: flex;
    flex-direction: column-reverse;
    height: fit-content;
    top: auto;
    bottom: 1.1%;
    left: 2%;
    width: 70%;
  }
  .details-info {
    color: var(--icons-color);
    background-color: var(--bg-color);
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
  .back-btn {
    background-color: var(--bg-color);
    border-radius: 0;
    border-bottom-right-radius: 1.5rem;

    &:hover {
      background-color: var(--tools-hover-color);
    }
  }
}
@media (max-width: 500px) {
  .details-container {
    display: flex;
    flex-direction: column-reverse;
    height: fit-content;
    top: auto;
    bottom: 1.1%;
    left: 2%;
  }
  .details-info {
    color: var(--icons-color);
    background-color: var(--bg-color);
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
  .back-btn {
    background-color: var(--bg-color);
    border-radius: 0;
    border-bottom-right-radius: 1.5rem;

    &:hover {
      background-color: var(--tools-hover-color);
    }
  }
}
</style>

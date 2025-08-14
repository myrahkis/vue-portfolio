<script setup>
import { useUIStore } from "@/stores/UIStore";

const UIStore = useUIStore();
</script>

<template>
  <aside class="details-container">
    <button class="back-btn" @click="UIStore.closeDetails">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 28 28"
        width="2rem"
        height="2rem"
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
            d="M 25.0019 13.0144 C 25.5533 13.0145 26.0002 13.4734 26.0002 14.0394 C 26.0002 14.6056 25.5531 15.0646 25.0016 15.0645 L 5.43869 15.0619 L 14.3573 24.2181 C 14.7478 24.619 14.7478 25.269 14.3573 25.6699 L 14.3287 25.6993 C 13.9382 26.1002 13.305 26.1002 12.9145 25.6993 L 2.30925 14.8117 C 2.19086 14.6901 2.10842 14.5459 2.06182 14.3924 C 2.02184 14.2816 2 14.1617 2 14.0366 C 2 13.9252 2.0173 13.818 2.04928 13.7176 C 2.08641 13.525 2.17766 13.3413 2.32305 13.192 L 12.9319 2.3007 C 13.3224 1.89977 13.9556 1.89977 14.3461 2.3007 L 14.3747 2.33009 C 14.7652 2.73099 14.7652 3.38103 14.3747 3.78197 L 5.38426 13.0118 L 25.0019 13.0144 Z"
          />
        </g>
      </svg>
    </button>
    <div class="details-info">
      <p
        v-for="(sentence, index) in UIStore?.detailsPayload?.text"
        :key="index"
      >
        {{ sentence }}
      </p>
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

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
        width="2.5rem"
        height="2.5rem"
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
    <div></div>
  </aside>
</template>

<style scoped>
.details-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: red;
}
.back-btn {
  color: var(--icons-color);
}
</style>

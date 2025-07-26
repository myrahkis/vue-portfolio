<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useDocNameStore } from "@/stores/docNameStore";
import { useFontsStore } from "@/stores/fontsStore";
import Ruler from "../../ui/Ruler.vue";
import DropDownMenus from "./DropDownMenus.vue";

const route = useRoute();
const docNameStore = useDocNameStore();
const fontsStore = useFontsStore();

const isFontsOpen = ref(false);

onMounted(() => {
  if (route.name) {
    docNameStore.setDocName(route.name.toString());
  }
});
</script>

<template>
  <header class="header">
    <div class="site-nav-container">
      <div class="nav-wrapper">
        <img class="doc-icon" src="/src/assets/logo-doc.png" alt="" />
        <div>
          <p class="doc-name">{{ docNameStore.docName }}</p>
          <DropDownMenus />
        </div>
      </div>
      <div class="user-info-container">
        <div class="user-name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="2.2rem"
            height="2.2rem"
            version="1.1"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.288"
            />

            <g id="SVGRepo_iconCarrier">
              <title>ic_fluent_lock_24_regular</title>
              <desc>Created with Sketch.</desc>
              <g
                id="🔍-Product-Icons"
                fill="none"
                fill-rule="evenodd"
                stroke-width="0.432"
              >
                <g
                  id="ic_fluent_lock_24_regular"
                  fill="currentColor"
                  fill-rule="nonzero"
                >
                  <path
                    id="🎨-Color"
                    d="M 12 2 C 14.2091 2 16 3.79086 16 6 L 16 8 L 17.75 8 C 18.9926 8 20 9.00736 20 10.25 L 20 19.75 C 20 20.9926 18.9926 22 17.75 22 L 6.25 22 C 5.00736 22 4 20.9926 4 19.75 L 4 10.25 C 4 9.00736 5.00736 8 6.25 8 L 8 8 L 8 6 C 8 3.79086 9.79086 2 12 2 Z M 17.75 9.5 L 6.25 9.5 C 5.83579 9.5 5.5 9.83579 5.5 10.25 L 5.5 19.75 C 5.5 20.1642 5.83579 20.5 6.25 20.5 L 17.75 20.5 C 18.1642 20.5 18.5 20.1642 18.5 19.75 L 18.5 10.25 C 18.5 9.83579 18.1642 9.5 17.75 9.5 Z M 12.0001 13.5 C 12.8286 13.5 13.5001 14.1716 13.5001 15 C 13.5001 15.8284 12.8286 16.5 12.0001 16.5 C 11.1717 16.5 10.5001 15.8284 10.5001 15 C 10.5001 14.1716 11.1717 13.5 12.0001 13.5 Z M 12 3.5 C 10.6193 3.5 9.5 4.61929 9.5 6 L 9.5 8 L 14.5 8 L 14.5 6 C 14.5 4.61929 13.3807 3.5 12 3.5 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p>Работодатель</p>
        </div>
        <div class="user-ava">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="iconify iconify--noto"
            role="img"
            aria-hidden="true"
            viewBox="0 0 128 128"
            preserveAspectRatio="xMidYMid meet"
            width="3.5rem"
            height="3.5rem"
          >
            <path
              fill="#6e4d44"
              d="M 80.07 76.12 s 3.94 -3.19 4.13 -4.11 s -1.69 -3.94 -0.7 -10 s 7.18 -12.25 10 -10.28 c 2.82 1.97 2.53 3.24 2.53 3.24 l 2.82 -0.28 l 2.11 1.55 l 0.56 3.1 l 3.38 1.55 l 3.38 4.08 l -2.39 8.66 l -10.7 4.43 l -15.06 5.42 l -0.06 -7.36 Z"
            />
            <path
              fill="#50362d"
              d="M 89.4 52.52 s 3.03 -1.14 4.5 0.63 c 1.06 1.27 0.28 2.96 -0.56 4.15 c -0.84 1.2 -1.96 2.72 -2.75 4.08 c -0.77 1.34 -1.62 3.24 -1.2 3.66 c 0.68 0.68 2.25 -1.27 3.17 -2.6 c 1.6 -2.34 2.99 -4.09 3.59 -4.79 c 0.84 -0.99 2.12 -1.7 3.59 -0.49 c 1.55 1.27 -0.14 3.66 -0.63 4.22 s -2.53 3.03 -3.24 4.01 c -0.7 0.99 -1.55 2.46 -1.06 2.96 c 0.42 0.42 1.83 -0.84 2.6 -1.62 c 0.77 -0.77 2.66 -2.85 3.19 -3.38 c 1.13 -1.13 2.29 -2.36 4.06 -0.92 c 1.55 1.27 -4.29 10 -4.29 10 l 4.01 -2.46 s 5 -7.46 1.67 -10.23 c -1.95 -1.62 -4.13 -0.05 -4.13 -0.05 s 1.55 -2.67 -0.77 -4.72 c -2.1 -1.84 -4.43 -0.63 -4.43 -0.63 s 0.07 -1.97 -1.9 -3.03 c -1.97 -1.04 -4.85 0.65 -5.42 1.21 Z"
            />
            <radialGradient
              id="IconifyId17ecdb2904d178eab14733"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-0.3544 0.9351 -1.016 -0.3851 175.5 48.952)"
              cx="68.416"
              cy="81.529"
              r="37.449"
            >
              <stop stop-color="#b68d76" offset="0.26" />
              <stop stop-color="#a87f6a" offset="0.41" />
              <stop stop-color="#875b4e" offset="0.679" />
            </radialGradient>
            <path
              fill="url(#IconifyId17ecdb2904d178eab14733)"
              d="M 46.82 49.07 L 16.55 64.42 s 1.12 11.29 4.36 19.15 c 4.65 11.26 14.06 23.46 30.41 29.56 c 12.81 4.79 26.14 6.29 38.22 1.97 c 9.02 -3.22 12.74 -7.32 18.3 -12.6 c 5.45 -5.18 11.33 -16.12 11.33 -16.12 s 6.34 -10.63 4.79 -25.06 c -1.53 -14.24 -11.47 -26.68 -22.31 -29.21 c -9.44 -2.21 -9.52 0.28 -5.56 5.42 c 3.8 4.93 7.88 9.15 9.57 14.36 c 1.69 5.21 3.38 15.77 -6.34 20.13 s -20.84 3.8 -28.72 -1.41 s -13.37 -11.4 -15.91 -15.2 s -3.94 -8.31 -3.94 -8.31 l -3.93 1.97 Z"
            />
            <path
              fill="#52322a"
              d="M 53.15 104.99 c -0.42 0 -0.83 -0.22 -1.05 -0.61 l -2.06 -3.66 c -0.33 -0.58 -0.12 -1.31 0.46 -1.63 c 0.58 -0.33 1.31 -0.12 1.63 0.46 l 2.06 3.66 c 0.33 0.58 0.12 1.31 -0.46 1.63 c -0.17 0.1 -0.38 0.15 -0.58 0.15 Z"
            />
            <path
              fill="#52322a"
              d="M 62.73 108.98 c -0.47 0 -0.91 -0.27 -1.1 -0.73 l -1.6 -3.75 a 1.201 1.201 0 0 1 2.21 -0.94 l 1.6 3.75 c 0.26 0.61 -0.03 1.31 -0.64 1.57 c -0.16 0.07 -0.32 0.1 -0.47 0.1 Z"
            />
            <path
              fill="#52322a"
              d="M 68.69 102.41 c -0.37 0 -0.73 -0.17 -0.96 -0.48 l -2.07 -2.77 c -0.4 -0.53 -0.29 -1.28 0.24 -1.68 c 0.53 -0.4 1.28 -0.29 1.68 0.24 l 2.07 2.77 a 1.198 1.198 0 0 1 -0.96 1.92 Z"
            />
            <path
              fill="#52322a"
              d="M 78.4 110.29 c -0.42 0 -0.83 -0.22 -1.05 -0.61 l -1.69 -3 c -0.33 -0.58 -0.12 -1.31 0.46 -1.63 c 0.58 -0.33 1.31 -0.12 1.63 0.46 l 1.69 3 a 1.194 1.194 0 0 1 -1.04 1.78 Z"
            />
            <radialGradient
              id="IconifyId17ecdb2904d178eab14734"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-0.8885 0.4589 -0.3302 -0.6394 71.499 63.129)"
              cx="29.675"
              cy="46.815"
              r="24.012"
            >
              <stop stop-color="#fbe5cb" offset="0.271" />
              <stop stop-color="#efd7be" offset="0.363" />
              <stop stop-color="#cfb09b" offset="0.538" />
              <stop stop-color="#9c7464" offset="0.776" />
              <stop stop-color="#875b4e" offset="0.865" />
            </radialGradient>
            <path
              fill="url(#IconifyId17ecdb2904d178eab14734)"
              d="M 11.69 63.29 c 2.87 3.56 10.1 9.39 28.06 -1.27 c 16.49 -9.78 12.32 -20.14 10.61 -23.46 c -1.6 -3.1 -3.54 -4.31 -3.54 -4.31 s 1.71 -3.72 -1.48 -5.6 c -3.62 -2.13 -5.53 1.3 -5.53 1.3 s -7.69 -3.37 -17.7 1.09 C 9.25 36.78 8.69 46.72 8.69 46.72 s -3.85 -0.07 -4.32 4.32 c -0.56 5.24 4.69 6.01 4.69 6.01 s 0.28 3.32 2.63 6.24 Z"
            />
            <path
              fill="#e0dfe2"
              d="M 44.43 68.5 c 2.32 -1.48 2.46 -5.33 2.53 -7.81 c 0.07 -2.46 -0.92 -4.25 -2.75 -4.01 c -2.18 0.28 -2.11 2.67 -2.11 2.67 s -1.41 -2.89 -3.8 -1.83 c -2.51 1.11 -1.06 4.43 -1.06 4.43 s -2.98 -2.18 -4.08 0.92 c -0.56 1.58 1.27 4.29 4.01 5.84 c 2.75 1.55 7.26 -0.21 7.26 -0.21 Z"
            />
            <path
              fill="#fefcfe"
              d="M 39.11 59.21 c -0.54 0.24 -0.63 1.41 0.28 3.17 c 0.81 1.55 1.79 1.9 2.32 1.55 c 0.53 -0.35 0.04 -1.72 -0.49 -2.75 c -0.35 -0.68 -1.16 -2.4 -2.11 -1.97 Z"
            />
            <path
              fill="#fefcfe"
              d="M 43.23 60.65 c 0.03 0.81 0.11 2.39 1.09 2.43 c 0.99 0.04 0.88 -1.97 0.88 -2.46 s -0.04 -1.94 -0.92 -2.01 c -0.88 -0.07 -1.09 1.05 -1.05 2.04 Z"
            />
            <path
              fill="#fefcfe"
              d="M 35.34 64.49 c 0.87 0.97 1.72 2.04 2.5 1.48 s -0.53 -1.97 -0.92 -2.5 s -1.34 -1.48 -1.94 -1.06 c -0.59 0.42 -0.23 1.41 0.36 2.08 Z"
            />
            <path
              fill="#875b4e"
              d="M 52.03 59.91 s 3.76 -7.01 12.11 -1.2 c 8.87 6.17 1.97 13.3 -2.67 13.23 s -7.95 0.42 -10.56 -0.42 s -5 -3.38 -5 -3.38 l -2.46 1.69 s 0.49 4.79 -1.2 6.83 c -1.7 2.05 1.75 11.55 -0.85 14.08 s -6.97 4.29 -9.71 3.03 c -2.75 -1.27 -5.7 -5.84 -6.26 -9.92 c -0.56 -4.08 1.41 -13.59 5.28 -13.87 c 3.87 -0.28 4.36 0.07 4.36 0.07 s 1.27 -4.5 4.65 -4.08 s 4.79 1.97 4.79 1.97 l 0.92 -0.77 s -1.2 -1.9 1.27 -4.15 c 2.46 -2.25 5.28 -0.35 5.28 -0.35 s 0.05 -2.13 0.05 -2.76 Z"
            />
            <path
              fill="#6a493b"
              d="M 26.45 81.97 c 0.43 0.9 1.36 -0.05 1.27 -2.82 s 0.52 -5.58 2.53 -7.23 c 2.02 -1.64 4.13 -0.28 4.13 -0.28 s -0.42 1.27 0.05 2.86 s 1.41 2.16 1.17 0.42 c -0.23 -1.74 0 -8.73 4.46 -8.02 c 4.46 0.7 3.53 6.44 1.69 8.96 c -1.27 1.74 -3.38 1.45 -3.38 1.74 c 0 0.28 1.69 5.58 1.88 8.31 c 0.19 2.72 -0.05 6.34 -3.05 6.76 c -3 0.42 -7.04 -0.94 -6.8 0 c 0.23 0.94 5.82 4.41 10.51 1.88 c 4.98 -2.69 3.57 -9.39 3.38 -10.65 c -0.19 -1.27 -1.17 -4.55 -1.22 -5.21 c -0.01 -0.09 1.97 -1.81 2.44 -4.04 c 0.66 -3.1 0.09 -4.6 0.09 -4.6 s 1.83 2.3 4.46 3.05 s 5.77 -0.05 5.77 -0.05 s 5.4 1.74 9.24 -0.84 c 3.85 -2.58 3.93 -5.77 3.71 -6.52 c -0.61 -2.06 -0.98 0.24 -1.55 1.22 c -0.84 1.45 -2.86 3.38 -6.19 3.89 c -3.33 0.52 -4.74 -0.7 -5.26 -0.66 s -3.28 1.55 -6.19 -0.47 c -3.68 -2.55 -2.7 -5.88 -0.84 -6.38 c 1.55 -0.42 4.3 0.47 5.4 2.06 c 1.03 1.5 1.88 3.85 2.21 3.33 c 0.33 -0.52 0.05 -2.82 -1.08 -4.32 c -1.13 -1.5 -2.39 -1.97 -2.44 -2.58 c -0.09 -1.17 0.38 -2.21 1.17 -3.1 s 2.77 -1.41 2.02 -1.97 s -3.28 -0.19 -4.41 1.55 c -1.13 1.74 -0.56 3.14 -0.56 3.14 s -3.43 -1.45 -5.73 1.22 c -1.82 2.12 -1.08 4.5 -1.08 4.5 s -1.83 -2.86 -5.02 -2.25 c -3.19 0.61 -4.32 3.99 -4.32 3.99 s -3 -1.27 -5.73 0.56 s -3.61 5.77 -3.52 7.88 c 0.09 2.13 0.37 3.77 0.79 4.67 Z"
            />
            <path
              fill="#27282d"
              d="M 19.01 47.06 c -2.46 0.43 -2.39 2.67 -2.36 3.45 c 0.04 0.77 0.81 2.15 2.71 2.01 c 2.05 -0.15 2.71 -2.08 2.57 -3.31 s -1.51 -2.39 -2.92 -2.15 Z"
            />
            <path
              fill="#27282d"
              d="M 36.4 38.9 c -1.21 1.01 -1.09 2.89 0.14 3.98 c 1.17 1.03 3.31 1.05 4.19 -0.53 c 0.85 -1.52 0.28 -2.78 -0.67 -3.55 s -2.78 -0.64 -3.66 0.1 Z"
            />
            <path
              fill="#27282d"
              d="M 28.31 41.86 c -2.33 1.12 -1.6 3.43 -1.79 5.21 c -0.22 1.97 -1.52 2.39 -1.52 4.08 c 0 1.37 2.11 0.97 4.08 1.06 c 1.65 0.07 3.21 1.83 2.22 3.1 c -0.63 0.81 -1.74 0.55 -2.36 -0.04 c -0.63 -0.6 -1.16 -0.6 -1.44 -0.14 c -0.28 0.46 0.46 2.91 3.34 2.67 c 2.57 -0.21 3.2 -3.1 3.2 -3.1 s 2.33 0.97 4.05 -0.18 c 1.9 -1.27 1.44 -3.77 0.67 -4.5 s -1.38 -0.25 -1.41 0.04 c -0.07 0.63 0.35 0.81 0.42 1.34 s -0.14 1.3 -0.77 1.65 c -0.55 0.3 -1.34 -0.11 -1.65 -0.6 c -0.32 -0.49 -0.35 -1.45 -0.28 -1.97 c 0.21 -1.55 3.83 -3.7 2.96 -5.17 c -0.81 -1.37 -1.72 0.25 -4.33 -1.48 c -1.07 -0.71 -2.47 -3.38 -5.39 -1.97 Z"
            />
            <path
              fill="#e2e2e4"
              d="M 20.42 67.59 c -0.04 0 -0.09 0 -0.14 -0.01 a 0.736 0.736 0 0 1 -0.6 -0.87 c 0 -0.03 0.46 -2.52 0.88 -5.19 c 0.42 -2.72 0.98 -4.81 1 -4.9 a 0.75 0.75 0 1 1 1.45 0.39 c -0.01 0.02 -0.56 2.11 -0.97 4.74 c -0.42 2.69 -0.88 5.2 -0.88 5.23 a 0.75 0.75 0 0 1 -0.74 0.61 Z"
            />
            <path
              fill="#e2e2e4"
              d="M 24.97 68.27 s -0.03 1.07 -0.84 1 c -0.86 -0.07 -0.66 -1.11 -0.66 -1.11 s 0.25 -3.51 0.35 -5.44 c 0.11 -1.94 0.35 -5.09 0.35 -5.09 s 0.06 -0.84 0.82 -0.79 c 0.76 0.05 0.68 0.9 0.68 0.9 s -0.25 3.12 -0.35 5.05 c -0.1 1.95 -0.35 5.48 -0.35 5.48 Z"
            />
            <path
              fill="#e2e2e4"
              d="M 27.6 67.07 c -0.4 0 -0.73 -0.32 -0.75 -0.72 c 0 0 -0.1 -2.51 -0.17 -3.39 c -0.07 -0.9 -0.07 -4.62 -0.07 -4.78 c 0 -0.41 0.34 -0.75 0.75 -0.75 s 0.75 0.34 0.75 0.75 c 0 1.32 0.01 3.98 0.07 4.66 c 0.07 0.88 0.17 3.34 0.18 3.44 c 0.02 0.41 -0.3 0.76 -0.72 0.78 c -0.02 0.01 -0.03 0.01 -0.04 0.01 Z"
            />
            <path
              fill="#e2e2e4"
              d="M 48.61 54.22 c -0.12 0 -0.25 -0.03 -0.37 -0.1 c -0.02 -0.01 -2.4 -1.34 -3.98 -2.13 c -1.56 -0.78 -3.9 -1.61 -3.93 -1.62 a 0.754 0.754 0 0 1 -0.46 -0.96 c 0.14 -0.39 0.57 -0.59 0.96 -0.46 c 0.1 0.04 2.46 0.87 4.1 1.69 c 1.62 0.81 3.94 2.11 4.04 2.16 c 0.36 0.2 0.49 0.66 0.29 1.02 c -0.13 0.26 -0.38 0.4 -0.65 0.4 Z"
            />
            <path
              fill="#e2e2e4"
              d="M 50.09 51.16 c -0.12 0 -0.25 -0.03 -0.36 -0.09 c -0.02 -0.01 -2.34 -1.29 -4.17 -2 c -1.8 -0.7 -4.5 -1.12 -4.52 -1.12 a 0.747 0.747 0 0 1 -0.63 -0.85 c 0.06 -0.41 0.44 -0.69 0.85 -0.63 c 0.12 0.02 2.89 0.44 4.84 1.2 c 1.92 0.75 4.25 2.03 4.35 2.08 c 0.36 0.2 0.49 0.66 0.29 1.02 c -0.13 0.25 -0.39 0.39 -0.65 0.39 Z"
            />
            <path
              fill="#e2e2e4"
              d="M 49.71 46.37 c -0.04 0 -0.07 0 -0.11 -0.01 c -0.03 0 -2.57 -0.39 -4.12 -0.56 c -1.51 -0.17 -4.19 -0.07 -4.22 -0.07 c -0.41 0.03 -0.76 -0.31 -0.78 -0.72 c -0.02 -0.41 0.31 -0.76 0.72 -0.78 c 0.11 0 2.82 -0.11 4.44 0.07 c 1.58 0.18 4.08 0.55 4.18 0.57 c 0.41 0.06 0.69 0.44 0.63 0.85 a 0.76 0.76 0 0 1 -0.74 0.65 Z"
            />
            <linearGradient
              id="IconifyId17ecdb2904d178eab14735"
              gradientUnits="userSpaceOnUse"
              x1="88.858"
              y1="107.701"
              x2="111.349"
              y2="87.218"
            >
              <stop stop-color="#875b4e" offset="0.208" />
              <stop stop-color="#765247" offset="0.579" />
              <stop stop-color="#6e4d44" offset="0.888" />
            </linearGradient>
            <path
              fill="url(#IconifyId17ecdb2904d178eab14735)"
              d="M 82.93 106.72 c -0.14 -3.17 0.42 -6.26 0.84 -7.81 c 1.12 -4.12 2.11 -6.62 4.36 -7.95 c 5.96 -3.54 9.95 -3.11 12.11 -4.65 c 2.46 -1.76 7.34 -9.46 10.91 -8.05 c 2.5 0.99 2.39 5.3 2.39 5.3 s 3.87 0.07 4.5 2.39 c 0.63 2.32 -0.84 4.72 -0.84 4.72 s 2.96 1.46 3.19 3.45 c 0.23 2.06 -0.66 4.27 -5.44 5.82 s -10.98 1.64 -10.98 1.64 s -1.4 8.34 -11.05 10.84 c -6.26 1.62 -9.78 -0.91 -9.99 -5.7 Z"
            />
            <path
              fill="#50362d"
              d="M 83.23 103.27 c -0.42 0.19 -2.34 -9.08 3.61 -13.19 c 4.83 -3.33 9.71 -2.58 12.44 -4.74 c 2.72 -2.16 9.24 -11.47 13.89 -7.51 c 2.53 2.16 1.22 4.79 1.22 4.79 s 2.97 -0.64 4.69 2.3 c 1.74 2.96 -0.75 5.63 -0.75 5.63 s 2.96 0.99 3 3.28 c 0.05 2.3 -0.89 4.65 -3.47 5.82 c -2.99 1.36 -7.46 2.53 -10 2.67 c -2.53 0.14 -5.44 -0.61 -3.28 -0.94 c 2.16 -0.33 10.14 -2.86 11.87 -3.38 c 2.96 -0.89 2.91 -3.1 2.11 -3.94 c -1.16 -1.23 -2.25 -0.94 -5.73 0.09 c -2.92 0.87 -6.57 2.58 -6.71 1.5 c -0.14 -1.08 3.33 -2.25 5.68 -3.57 c 2.35 -1.31 6.24 -2.72 5.21 -5.11 c -1.03 -2.39 -3.28 -1.92 -5.82 -0.38 c -2.53 1.55 -6.83 4.79 -7.04 3.52 c -0.09 -0.56 4.13 -3.99 5.35 -4.83 c 1.22 -0.84 3.75 -2.67 2.02 -4.69 s -4.08 0.28 -5.82 1.88 c -1.74 1.6 -3.85 4.65 -6.19 5.63 c -3.53 1.48 -8.56 1.95 -10.93 3.75 c -5.06 3.87 -4.52 11.05 -5.35 11.42 Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="doc-tools-container">
      <div>
        <button class="cancel-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.5rem"
            height="1.5rem"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g>
                <path fill="none" d="M 0 0 h 24 v 24 H 0 Z" />
                <path
                  d="M 5.828 7 l 2.536 2.536 L 6.95 10.95 L 2 6 l 4.95 -4.95 l 1.414 1.414 L 5.828 5 H 13 a 8 8 0 1 1 0 16 H 4 v -2 h 9 a 6 6 0 1 0 0 -12 H 5.828 Z"
                />
              </g>
            </g>
          </svg>
        </button>
        <button class="repeat-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.5rem"
            height="1.5rem"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g>
                <path fill="none" d="M 0 0 h 24 v 24 H 0 Z" />
                <path
                  d="M 18.172 7 H 11 a 6 6 0 1 0 0 12 h 9 v 2 h -9 a 8 8 0 1 1 0 -16 h 7.172 l -2.536 -2.536 L 17.05 1.05 L 22 6 l -4.95 4.95 l -1.414 -1.414 L 18.172 7 Z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="drop-down-width u-tools-hover">Width</div>
      <div class="drop-down-font u-tools-hover">
        <select @change="fontsStore.selectFont($event.target.value)">
          <option
            v-for="(font, index) in fontsStore.fontsFamilies"
            :key="index"
            :value="font.family"
          >
            {{ font.name }}
          </option>
        </select>
      </div>
      <div class="font-size-selector">
        <button class="less-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
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
              <title />
              <g id="Complete">
                <g id="minus">
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="4"
                    y1="12"
                    x2="20"
                    y2="12"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <span>10</span>
        <button class="more-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
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
              <title />
              <g id="Complete">
                <g id="add-2" data-name="add">
                  <g>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="12"
                      y1="19"
                      x2="12"
                      y2="5"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="drop-down-text-color u-tools-hover">Text color</div>
      <div class="drop-down-bg-text-color u-tools-hover">Bg text color</div>
    </div>
    <Ruler :rotate="false" />
  </header>
</template>

<style scoped>
.header {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 0 2rem;
  padding-top: 1rem;
}
.site-nav-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.nav-wrapper {
  display: flex;
  align-items: center;
}

.doc-icon {
  width: 3rem;
  margin-right: 0.5rem;
}
.doc-name {
  padding: 0 0.8rem;
  font-size: 1.9rem;
  color: var(--text-color-1);
}

.user-info-container {
  display: flex;
  gap: 1rem;
}
.user-name {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--light-blue-color);
  padding: 1rem 2rem;
  border-radius: 3.5rem;
  transition: background-color 0.2s;

  p {
    font-weight: 600;
    color: var(--dark-blue-text);
  }

  svg {
    color: var(--dark-blue-text);
    stroke: var(--dark-blue-text);
  }

  &:hover {
    background-color: var(--light-blue-hover);
  }
}
.user-ava {
  display: flex;
  align-items: center;
  border: 2px solid var(--text-color-1);
  border-radius: 50%;
  background-color: var(--bg-color-1);
  width: fit-content;
  padding: 0 0.6rem;
}

.doc-tools-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-color-1);
  color: var(--text-color-1);
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.font-size-selector {
  display: flex;
  align-items: center;
}
.less-btn,
.more-btn {
  svg {
    display: flex;
    align-items: center;
  }
}

.cancel-btn,
.repeat-btn,
.less-btn,
.more-btn {
  svg {
    color: var(--icons-color);
  }
}
</style>

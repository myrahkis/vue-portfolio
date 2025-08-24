<script setup>
import { useI18n } from "vue-i18n";

const { onClose } = defineProps({ onClose: Function });

const { t } = useI18n({
  useScope: "global",
});
</script>

<template>
  <aside class="side-header">
    <ul class="contacts-list">
      <li class="tg-icon u-tools-hover" :title="t('tooltips.telegram')">
        <a href="https://t.me/myrahkis" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
          >
            <circle fill="url(#paint0_linear_87_7225)" cx="16" cy="16" r="14" />
            <path
              fill="currentColor"
              class="accent-shape"
              d="M 22.9866 10.2088 C 23.1112 9.40332 22.3454 8.76755 21.6292 9.082 L 7.36482 15.3448 C 6.85123 15.5703 6.8888 16.3483 7.42147 16.5179 L 10.3631 17.4547 C 10.9246 17.6335 11.5325 17.541 12.0228 17.2023 L 18.655 12.6203 C 18.855 12.4821 19.073 12.7665 18.9021 12.9426 L 14.1281 17.8646 C 13.665 18.3421 13.7569 19.1512 14.314 19.5005 L 19.659 22.8523 C 20.2585 23.2282 21.0297 22.8506 21.1418 22.1261 L 22.9866 10.2088 Z"
            />
            <defs>
              <linearGradient
                id="paint0_linear_87_7225"
                gradientUnits="userSpaceOnUse"
                x1="16"
                y1="2"
                x2="16"
                y2="30"
              >
                <stop stop-color="currentColor" />
                <stop stop-color="currentColor" offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </li>
      <li class="icon u-tools-hover" title="Github">
        <a href="https://github.com/myrahkis" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10 0c5.523 0 10 4.59 10 10.25 0 4.53-2.862 8.37-6.833 9.73-.507.1-.687-.22-.687-.49 0-.34.012-1.44.012-2.82 0-.95-.32-1.57-.679-1.89 2.227-.26 4.567-1.12 4.567-5.06 0-1.12-.388-2.04-1.03-2.75.104-.26.447-1.31-.098-2.72 0 0-.838-.27-2.747 1.05A9.515 9.515 0 0 0 10 4.96c-.85 0-1.705.12-2.503.34-1.911-1.32-2.751-1.05-2.751-1.05-.543 1.41-.2 2.46-.097 2.72-.639.71-1.03 1.63-1.03 2.75 0 3.93 2.335 4.81 4.556 5.07-.286.25-.545.7-.635 1.37-.57.26-2.018.71-2.91-.86 0 0-.529-.98-1.533-1.05 0 0-.975-.02-.068.62 0 0 .655.32 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.86.014 1.67.014 1.91 0 .27-.184.59-.683.49C2.865 18.63 0 14.78 0 10.25 0 4.59 4.478 0 10 0"
            />
          </svg>
        </a>
      </li>
      <li class="email-icon u-tools-hover" :title="t('tooltips.email')">
        <a href="mailto:myrahkis@yandex.ru">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 192 192"
          >
            <path
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="12"
              d="M22 46h148v100H22Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="12"
              d="m30 54 54.686 54.686c6.249 6.249 16.379 6.249 22.628 0L162 54"
            />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m116.531 99.263 43.226 43.226a6 6 0 1 0 8.486-8.485L125.239 91l-8.708 8.263Zm-46.213-7.82-42.56 42.561a6 6 0 1 0 8.485 8.485l42.3-42.301-8.225-8.745Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
      <li
        class="react-icon u-tools-hover"
        :title="t('tooltips.reactPortfolio')"
      >
        <a href="https://myrahkis.github.io/fridge-portfolio/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path
              d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16 481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32 434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75 502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39 501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2 477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94 481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52Z"
            />
            <path
              d="M256 298.55a43 43 0 1 0-42.86-43 42.91 42.91 0 0 0 42.86 43Z"
            />
          </svg>
        </a>
      </li>
    </ul>
    <button class="hide-side-header u-tools-hover" @click="onClose">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z"
        />
      </svg>
    </button>
  </aside>
</template>

<style scoped>
.side-header {
  grid-column: 3 / -1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: var(--bg-color);
  padding: 1rem 0.5rem;
}
.contacts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  list-style: none;
}
.contacts-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 50%;
  padding: 1rem;
}

.u-tools-hover {
  svg {
    color: var(--icons-color);
  }

  svg path.accent-shape {
    color: var(--bg-color);
  }
}

.icon,
.tg-icon,
.email-icon,
.react-icon {
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.icon a svg,
.hide-side-header svg {
  width: clamp(2.5rem, 2vw + 1rem, 3rem);
  height: clamp(2.5rem, 2vw + 1rem, 3rem);
}

.react-icon a svg {
  width: clamp(3.5rem, 2.5vw + 1rem, 4rem);
  height: clamp(3.5rem, 2.5vw + 1rem, 4rem);
}

.tg-icon a svg,
.email-icon a svg {
  width: clamp(3rem, 2.3vw + 1rem, 3.5rem);
  height: clamp(3rem, 2.3vw + 1rem, 3.5rem);
}

.details-slide-enter-active,
.details-slide-leave-active {
  transition: transform 0.3s ease, opacity 0.2s ease;
}
.details-slide-enter-from,
.details-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.details-slide-enter-to,
.details-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

@media (max-width: 762px) {
  .contacts-list li {
    padding: 0.5rem;
  }
}
</style>

<script setup>
const { index, open, title, icon, colors, selectedColor, onSelect } =
  defineProps({
    index: Number,
    open: Boolean,
    title: String,
    icon: String,
    colors: Array,
    selectedColor: String,
    onSelect: Function,
  });

const emit = defineEmits(["toggle"]);

function toggleOpen() {
  emit("toggle", index);
}
</script>

<template>
  <div class="color-picker-container">
    <div class="color-picker" @click="toggleOpen" :title="title">
      <p>{{ icon }}</p>
      <div
        class="color-preview"
        :style="{ backgroundColor: selectedColor }"
      ></div>
    </div>
    <div
      class="colors-grid"
      v-if="open"
      :style="{
        gridTemplateRows: `${
          colors.includes('transparent') ? 'repeat(9, 2rem)' : 'repeat(8, 2rem)'
        }`,
      }"
    >
      <div
        v-for="(color, index) in colors"
        :key="index"
        :style="{
          backgroundColor: color,
        }"
        :class="color === 'transparent' ? 'transparent-cell' : 'color-cell'"
        @click="
          onSelect(color);
          emit('toggle', index);
        "
      >
        <p v-if="color === 'transparent'">
          <span class="no-color"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currrentColor"
              viewBox="0 0 52 52"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
              data-name="Layer 1"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M 48.5 5.6 L 46.4 3.5 a 1.67 1.67 0 0 0 -2.4 0.3 L 32.59 15.21 c -0.77 -1.3 -1.51 -2.61 -2.21 -4 a 36.5 36.5 0 0 1 -3.15 -8.36 c -0.13 -0.53 -0.39 -0.91 -1 -0.89 s -0.86 0.4 -1 0.93 c -0.06 0.26 -0.11 0.51 -0.17 0.76 A 48.3 48.3 0 0 1 21 13.7 A 97.47 97.47 0 0 1 14.13 25 a 16 16 0 0 0 -3 11.12 c 0 0.14 0 0.29 0.06 0.43 L 3.8 44 a 1.87 1.87 0 0 0 -0.3 2.4 l 2.1 2.1 A 1.67 1.67 0 0 0 8 48.2 L 48.2 8 A 1.67 1.67 0 0 0 48.5 5.6 Z"
                />
                <path
                  d="M 38.42 23.79 l -22 22.31 A 14.47 14.47 0 0 0 26.22 50 a 15.48 15.48 0 0 0 7 -1.44 c 4.94 -2.51 8.11 -6.4 8.94 -12 A 15.22 15.22 0 0 0 39 24.66 C 38.87 24.44 38.58 24 38.42 23.79 Z"
                />
              </g>
            </svg>
          </span>
          Нет
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-picker-container {
  position: relative;
}
.color-picker {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.color-preview {
  width: 2.5rem;
  height: 0.4rem;
}
.colors-grid {
  position: absolute;
  left: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(10, 2rem);
  grid-template-rows: repeat(8, 2rem);
  background-color: var(--white);
  gap: 0.2rem;
  padding: 1rem;
  box-shadow: 0 0 1rem var(--menu-shadow-color);
  border-radius: 0.5rem;
}
.color-cell {
  border-radius: 50%;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 0.3rem var(--shadow-color-1);
  }
  &:active {
    transform: scale(1);
  }
}
.transparent-cell {
  grid-column: 1 / -1;
  grid-row: 1;
  border-radius: 0.2rem;
  transition: all 0.1s;
  padding: 0 0.5rem;

  &:hover {
    background-color: var(--tools-hover-color) !important;
  }
}

.no-color {
  svg {
    width: 1.5rem;
    color: var(--text-color-1);
  }
}
</style>

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
      <span>
        <slot name="icon"></slot>
      </span>
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
          toggleOpen();
        "
      >
        <p v-if="color === 'transparent'">
          <span class="no-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currrentColor"
              data-name="Layer 1"
              transform="scale(-1 1)"
              viewBox="0 0 52 52"
            >
              <path
                d="m48.5 5.6-2.1-2.1a1.67 1.67 0 0 0-2.4.3L32.59 15.21c-.77-1.3-1.51-2.61-2.21-4a36.5 36.5 0 0 1-3.15-8.36c-.13-.53-.39-.91-1-.89s-.86.4-1 .93c-.06.26-.11.51-.17.76A48.3 48.3 0 0 1 21 13.7 97.47 97.47 0 0 1 14.13 25a16 16 0 0 0-3 11.12c0 .14 0 .29.06.43L3.8 44a1.87 1.87 0 0 0-.3 2.4l2.1 2.1a1.67 1.67 0 0 0 2.4-.3L48.2 8a1.67 1.67 0 0 0 .3-2.4ZM38.42 23.79l-22 22.31a14.47 14.47 0 0 0 9.8 3.9 15.48 15.48 0 0 0 7-1.44c4.94-2.51 8.11-6.4 8.94-12A15.22 15.22 0 0 0 39 24.66c-.13-.22-.42-.66-.58-.87Z"
              />
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

  span svg {
    color: var(--icons-color);
  }
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

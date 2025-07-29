import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useFontSizeStore = defineStore("fontSize", () => {
  const step = 1;
  const minPx = 6;
  const maxPx = 72;

  const selectedSize = ref(14);

  function increaseSize() {
    if (selectedSize.value + step <= maxPx) {
      selectedSize.value += step;
    }
  }
  function decreaseSize() {
    if (selectedSize.value - step >= minPx) {
      selectedSize.value -= step;
    }
  }

  return {
    selectedSize,
    increaseSize,
    decreaseSize,
  };
});

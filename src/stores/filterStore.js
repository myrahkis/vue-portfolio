import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useFilterStore = defineStore("filter", () => {
  const selectedBodyFilter = ref("none");

  function sepiaHandle() {
    selectedBodyFilter.value = "sepia";
  }
  function bwHandle() {
    selectedBodyFilter.value = "grayscale";
  }
  function invertHandle() {
    selectedBodyFilter.value = "invert";
  }
  function resetHandle() {
    selectedBodyFilter.value = "none";
  }

  watch(selectedBodyFilter, (newFilter) => {
    switch (newFilter) {
      case "sepia":
        document.body.style.filter = "sepia(1)";
        break;
      case "grayscale":
        document.body.style.filter = "grayscale(1)";
        break;
      case "invert":
        document.body.style.filter = "invert(1)";
        break;
      default:
        document.body.style.filter = "none";
    }
  });

  return {
    sepiaHandle,
    bwHandle,
    invertHandle,
    resetHandle,
    selectedBodyFilter,
  };
});

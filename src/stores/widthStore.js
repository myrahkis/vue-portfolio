import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useWidthStore = defineStore("width", () => {
  const widths = ["50%", "75%", "90%", "100%", "125%", "150%"];
  const options = widths.map((w) => ({ label: w, value: w }));
  const selectedWidth = ref(options[3].value);

  function setWidth(val) {
    selectedWidth.value = val;
  }

  const scale = computed(() => {
    const num = parseFloat(selectedWidth.value);
    return isNaN(num) ? 1 : num / 100;
  });

  return {
    options,
    selectedWidth,
    scale,
    setWidth,
  };
});

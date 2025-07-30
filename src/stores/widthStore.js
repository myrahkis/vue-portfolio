import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useWidthStore = defineStore("width", () => {
  const widths = ["50%", "75%", "90%", "100%", "125%", "150%"];
  // const widths = [
  //   { label: "50%", value: "10%" },
  //   { label: "75%", value: "35%" },
  //   { label: "90%", value: "50%" },
  //   { label: "100%", value: "60%" },
  //   { label: "125%", value: "85%" },
  //   { label: "150%", value: "110%" },
  // ];
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

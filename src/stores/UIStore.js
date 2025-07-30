import { defineStore } from "pinia";
import { ref } from "vue";

export const useUIStore = defineStore("UIStore", () => {
  const activeIndex = ref(null);

  function handleToggleMenu(idx) {
    activeIndex.value = activeIndex.value === idx ? null : idx;
  }

  return {
    activeIndex,
    handleToggleMenu,
  };
});

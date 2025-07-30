import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useDarkThemeStore = defineStore("darkMode", () => {
  const key = "dark-mode";
  const initState = false;

  const stored = localStorage.getItem(key);
  const isDark = ref(stored !== null ? JSON.parse(stored) : initState);

  watch(
    isDark,
    (newVal) => {
      if (newVal) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }
    },
    { immediate: true }
  );

  watch(isDark, (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal));
  });

  function toggleDarkTheme() {
    isDark.value = !isDark.value;
  }

  return {
    isDark,
    toggleDarkTheme,
  };
});

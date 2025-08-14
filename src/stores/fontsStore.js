import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useFontsStore = defineStore("fonts", () => {
  const fontsFamilies = [
    { name: "Open Sans", family: '"Open Sans", sans-serif' },
    {
      name: "Geologica",
      family: '"Geologica", sans-serif',
    },
    { name: "IBM Plex Mono", family: '"IBM Plex Mono", monospace' },
    { name: "Libertinus Sans", family: '"Libertinus Sans", sans-serif' },
    { name: "Pacifico", family: '"Pacifico", cursive' },
  ];

  const selectedFont = ref(fontsFamilies[0].family);

  function selectFont(val) {
    selectedFont.value = val;
  }

  watch(selectedFont, (font) => {
    localStorage.setItem("selectedFont", font);
    const el = document.querySelector(".doc-container");

    if (el) {
      el.style.fontFamily = font;
    }
  });

  return { fontsFamilies, selectedFont, selectFont };
});

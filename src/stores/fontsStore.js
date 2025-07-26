import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useFontsStore = defineStore("fonts", () => {
  const fontsFamilies = [
    { name: "Open Sans", family: '"Open Sans", sans-serif' },
    {
      name: "Bitcount Prop Single",
      family: '"Bitcount Prop Single", system-ui',
    },
    { name: "Intel One Mono", family: '"Intel One Mono", monospace' },
    { name: "Playfair Display", family: '"Playfair Display", serif' },
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

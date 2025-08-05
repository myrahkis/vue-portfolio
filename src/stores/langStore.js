import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { i18n } from "../../i18n.js";

export const useLangStore = defineStore("lang", () => {
  const lang = ref(
    localStorage.getItem("locale") || i18n.global.locale.value || "ru"
  );

  function changeLocale() {
    lang.value = lang.value === "ru" ? "en" : "ru";

    i18n.global.locale.value = lang.value;
    localStorage.setItem("locale", lang.value);
  }

  const currentLang = computed(() => lang.value);

  return {
    currentLang,
    changeLocale,
  };
});

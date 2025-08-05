import { createI18n } from "vue-i18n";

import ruCommon from "./locales/ru/common.json";
import enCommon from "./locales/en/common.json";
import ruHome from "./locales/ru/home.json";
import enHome from "./locales/en/home.json";

export const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    en: { common: enCommon, home: ruHome },
    ru: { common: ruCommon, home: enHome },
  },
});

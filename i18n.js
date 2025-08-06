import { createI18n } from "vue-i18n";

import ruCommon from "./locales/ru/common.json";
import enCommon from "./locales/en/common.json";
import ruHome from "./locales/ru/home.json";
import enHome from "./locales/en/home.json";
import ruTooltips from "./locales/ru/tooltips.json";
import enTooltips from "./locales/en/tooltips.json";
import ruProjects from "./locales/ru/projects.json";
import enProjects from "./locales/en/projects.json";
import ruAboutMe from "./locales/ru/aboutMe.json";
import enAboutMe from "./locales/en/aboutMe.json";

export const i18n = createI18n({
  legacy: false,
  returnObjects: true,
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    ru: {
      common: ruCommon,
      home: ruHome,
      tooltips: ruTooltips,
      projects: ruProjects,
      aboutMe: ruAboutMe,
    },
    en: {
      common: enCommon,
      home: enHome,
      tooltips: enTooltips,
      projects: enProjects,
      aboutMe: enAboutMe,
    },
  },
});

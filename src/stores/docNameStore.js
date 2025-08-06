import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { i18n } from "../../i18n";

export const useDocNameStore = defineStore("docName", () => {
  const route = useRoute();

  function setDocName(name) {
    docName.value = name;
  }

  const docName = computed(() => {
    const key = route.meta.titleKey;
    if (key) {
      return i18n.global.t(key);
    }
    return route.name?.toString() ?? "";
  });

  return { docName, setDocName };
});

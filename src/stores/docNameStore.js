import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export const useDocNameStore = defineStore("docName", () => {
  const route = useRoute();
  const docName = ref("");

  function setDocName(name) {
    docName.value = name;
  }

  watch(
    () => route.name,
    (newName) => {
      if (newName) {
        setDocName(newName.toString());
      }
    },
    { immediate: true }
  );

  return { docName, setDocName };
});

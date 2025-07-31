import { defineStore } from "pinia";
import { ref } from "vue";

export const useDeleteSiteStore = defineStore("deleteSite", () => {
  const isSiteDeleted = ref(false);

  function deleteHandle() {
    const sure1 = confirm("Точно?");
    let sure2 = false;

    if (sure1) sure2 = confirm("За что...");
    if (sure2) {
      const el = document.querySelector(".layout-grid");
      if (el) {
        el.style.display = "none";
        isSiteDeleted.value = true;
      }
    }
  }

  function handleKeydownDelete(event) {
    if (event.key === "Delete") {
      console.log("press");
      event.preventDefault();
      deleteHandle();
    }
  }

  return { isSiteDeleted, deleteHandle, handleKeydownDelete };
});

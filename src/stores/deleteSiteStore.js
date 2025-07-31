import { defineStore } from "pinia";
import { ref } from "vue";
import { useUIStore } from "./UIStore";

export const useDeleteSiteStore = defineStore("deleteSite", () => {
  const UIStore = useUIStore();
  const isSiteDeleted = ref(false);

  async function deleteHandle() {
    const sure1 = await UIStore.confirmDialog("Удаление сайта", "Точно?", "Да");
    if (!sure1) return;

    const sure2 = await UIStore.confirmDialog(
      "Удаление сайта",
      "За что...",
      "Все равно удалить"
    );
    if (!sure2) return;

    const el = document.querySelector(".layout-grid");
    if (el) {
      el.style.display = "none";
      isSiteDeleted.value = true;
    }
  }

  function handleKeydownDelete(event) {
    if (event.key === "Delete") {
      event.preventDefault();
      deleteHandle();
    }
  }

  return { isSiteDeleted, deleteHandle, handleKeydownDelete };
});

import { defineStore } from "pinia";
import { ref } from "vue";
import { useUIStore } from "./UIStore";
import { useI18n } from "vue-i18n";

export const useDeleteSiteStore = defineStore("deleteSite", () => {
  const UIStore = useUIStore();
  const isSiteDeleted = ref(false);
  const { t } = useI18n({
    useScope: "global",
  });

  async function deleteHandle() {
    const sure1 = await UIStore.confirmDialog(
      t("modals.deletion.heading"),
      t("modals.deletion.subHeading1"),
      true,
      t("modals.deletion.btnTextConfirm1")
    );
    if (!sure1) return;

    const sure2 = await UIStore.confirmDialog(
      t("modals.deletion.heading"),
      t("modals.deletion.subHeading2"),
      true,
      t("modals.deletion.btnTextConfirm2")
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

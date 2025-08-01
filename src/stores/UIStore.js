import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";
import ConfirmModal from "../../ui/ConfirmModal.vue";

export const useUIStore = defineStore("UIStore", () => {
  const activeIndex = ref(null);
  const modalOpen = ref(false);
  const confirmOpen = ref(false);
  const modalContent = shallowRef(null);
  const isDetailsOpen = ref(false);

  function handleToggleMenu(idx) {
    activeIndex.value = activeIndex.value === idx ? null : idx;
  }
  function openModal(content) {
    modalOpen.value = true;
    modalContent.value = content;
  }
  function openConfirm(content) {
    confirmOpen.value = true;
    modalContent.value = content;
  }
  function closeModal() {
    modalOpen.value = false;
    confirmOpen.value = false;
  }

  function openDetails() {
    isDetailsOpen.value = true;
  }
  function closeDetails() {
    isDetailsOpen.value = false;
  }

  function confirmDialog(actionText, message, isCancelBtn, confirmBtnText) {
    return new Promise((resolve) => {
      openConfirm({
        component: ConfirmModal,
        props: {
          actionText,
          message,
          isCancelBtn,
          confirmBtnText,
          onConfirm: () => {
            resolve(true);
          },
          onCancel: () => {
            resolve(false);
          },
        },
      });
    });
  }

  return {
    activeIndex,
    handleToggleMenu,
    modalOpen,
    openModal,
    confirmOpen,
    openConfirm,
    closeModal,
    modalContent,
    confirmDialog,
    isDetailsOpen,
    openDetails,
    closeDetails,
  };
});

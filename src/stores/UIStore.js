import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";

export const useUIStore = defineStore("UIStore", () => {
  const activeIndex = ref(null);
  const modalOpen = ref(false);
  const modalContent = shallowRef(null);

  function handleToggleMenu(idx) {
    activeIndex.value = activeIndex.value === idx ? null : idx;
  }
  function openModal(content) {
    modalOpen.value = true;
    modalContent.value = content;
  }
  function closeModal() {
    modalOpen.value = false;
  }

  return {
    activeIndex,
    handleToggleMenu,
    modalOpen,
    openModal,
    closeModal,
    modalContent,
  };
});

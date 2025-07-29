import { defineStore } from "pinia";
import { ref } from "vue";

export const useSideBarStore = defineStore("side-bar", () => {
  const isSideBarOpen = ref(true);

  function closeSideBar() {
    isSideBarOpen.value = false;
  }
  function openSideBar() {
    isSideBarOpen.value = true;
  }

  return {
    isSideBarOpen,
    closeSideBar,
    openSideBar,
  };
});

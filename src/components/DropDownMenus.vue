<script setup>
import { computed, onBeforeUnmount, onMounted } from "vue";
import { useDarkThemeStore } from "@/stores/darkThemeStore";
import { useDeleteSiteStore } from "@/stores/deleteSiteStore";
import { useUIStore } from "@/stores/UIStore";
import { useFilterStore } from "@/stores/filterStore";
import { useLangStore } from "@/stores/langStore";
import { useI18n } from "vue-i18n";
import router from "@/router";
import Modal from "../../ui/Modal.vue";
import SiteInfo from "./SiteInfo.vue";
import Stats from "./Stats.vue";
import HotKeys from "./HotKeys.vue";

const UIStore = useUIStore();
const darkThemeStore = useDarkThemeStore();
const deleteSiteStore = useDeleteSiteStore();
const filterStore = useFilterStore();
const langStore = useLangStore();

const { t } = useI18n({
  useScope: "global",
});

const menusBtns = computed(() => [
  {
    name: t("common.file"),
    links: [
      {
        name: t("common.fileBtns.darkTheme"),
        action: darkThemeStore.toggleDarkTheme,
      },
      {
        name: t("common.fileBtns.language", {
          lang: langStore.currentLang.toUpperCase(),
        }),
        action: langStore.changeLocale,
      },
      { name: t("common.fileBtns.share"), action: copyLinkHandle },
      {
        name: t("common.fileBtns.deleteSite"),
        action: deleteSiteStore.deleteHandle,
      },
      { name: t("common.fileBtns.info"), action: toggleSiteInfo },
    ],
  },
  {
    name: t("common.insert"),
    links: [
      { name: "FriendlyPokerClub", to: "/friendly-poker-club" },
      { name: "Simples", to: "/simples" },
      { name: "Cyclone", to: "/cyclone" },
      { name: "Chat", to: "/ws-chat" },
    ],
  },
  {
    name: t("common.tools"),
    links: [
      { name: t("common.toolsBtns.stats"), action: toggleStats },
      { name: t("common.toolsBtns.shortcuts"), action: toggleShortcuts },
    ],
  },
  {
    name: t("common.extensions"),
    links: [
      {
        name: t("common.extensionsBtns.sepia"),
        action: filterStore.sepiaHandle,
      },
      { name: t("common.extensionsBtns.bw"), action: filterStore.bwHandle },
      {
        name: t("common.extensionsBtns.invert"),
        action: filterStore.invertHandle,
      },
      {
        name: t("common.extensionsBtns.reset"),
        action: filterStore.resetHandle,
      },
    ],
  },
  {
    name: t("common.reference"),
    links: [
      { name: t("common.referenceBtns.home"), to: "/" },
      { name: t("common.referenceBtns.aboutMe"), to: "/about-me" },
    ],
  },
]);

async function onLinkClick(link) {
  if (link.to) {
    router.push(link.to);
    UIStore.activeIndex = null;
    return;
  }

  if (typeof link.action !== "function") {
    return;
  }

  UIStore.activeIndex = null;

  try {
    await link.action();
  } catch (err) {
    console.error("Ошибка при выполнении меню–действия:", err);
  }
}

async function copyLinkHandle() {
  try {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    await UIStore.confirmDialog(t("modals.linkCopy.heading"), "", false);
  } catch (err) {
    console.error("Ошибка при копировании:", err);
  }
}

function toggleSiteInfo() {
  UIStore.openModal(SiteInfo);
}
function toggleStats() {
  UIStore.openModal(Stats);
}
function toggleShortcuts() {
  UIStore.openModal(HotKeys);
}

onMounted(() => {
  window.addEventListener("keydown", deleteSiteStore.handleKeydownDelete);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", deleteSiteStore.handleKeydownDelete);
});
</script>

<template>
  <ul class="nav">
    <li v-for="(btn, index) in menusBtns" :key="index" class="nav-elem">
      <button
        class="menu-btn u-tools-hover"
        @click="UIStore.handleToggleMenu(index + 1)"
      >
        {{ btn.name }}
      </button>
      <ul v-if="UIStore.activeIndex === index + 1" class="submenu">
        <li
          v-for="(link, linkIdx) in btn.links"
          :key="linkIdx"
          class="link-item"
          @click.stop="onLinkClick(link)"
        >
          {{ link.name }}
        </li>
      </ul>
    </li>
  </ul>
  <Modal v-if="UIStore.modalOpen">
    <template #modal-content>
      <component :is="UIStore.modalContent" />
    </template>
  </Modal>
  <Modal v-if="UIStore.confirmOpen">
    <template #modal-content>
      <component
        :is="UIStore.modalContent?.component"
        :actionText="UIStore.modalContent?.props.actionText"
        :isCancelBtn="UIStore.modalContent?.props.isCancelBtn"
        :message="UIStore.modalContent?.props.message"
        :confirmBtnText="UIStore.modalContent?.props.confirmBtnText"
        @confirm="
          UIStore.modalContent.props?.onConfirm?.();
          UIStore.closeModal();
        "
        @cancel="
          UIStore.modalContent.props?.onCancel?.();
          UIStore.closeModal();
        "
      />
    </template>
  </Modal>
</template>

<style scoped>
.nav {
  display: flex;
  list-style: none;
  gap: 0.2rem;
}
.nav-elem {
  position: relative;
}
.submenu {
  position: absolute;
  top: 2.5rem;
  left: 0;
  z-index: 10;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: max-content;
  background-color: var(--white);
  box-shadow: 0 0 1rem var(--menu-shadow-color);
  padding: 0.5rem 0;
  border-radius: 0.5rem;
}

.link-item {
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  color: var(--menu-text-color);
  transition: all 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid var(--bg-color-1);
  }

  &:hover {
    background-color: var(--tools-hover-color);
    color: var(--text-color);
  }
}
.menu-btn {
  color: var(--text-color);
}
</style>

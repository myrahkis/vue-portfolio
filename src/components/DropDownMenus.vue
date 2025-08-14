<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
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

const mobileOpen = ref(false);

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
  <div class="dropdowns-container">
    <ul :class="{ nav: true, mobile: mobileOpen }">
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
    <button class="mobile-header-menu" @click="mobileOpen = !mobileOpen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="-0.5 0 25 25"
        width="2.5rem"
        height="2.5rem"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M 19 3.32001 H 16 C 14.8954 3.32001 14 4.21544 14 5.32001 V 8.32001 C 14 9.42458 14.8954 10.32 16 10.32 H 19 C 20.1046 10.32 21 9.42458 21 8.32001 V 5.32001 C 21 4.21544 20.1046 3.32001 19 3.32001 Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M 8 3.32001 H 5 C 3.89543 3.32001 3 4.21544 3 5.32001 V 8.32001 C 3 9.42458 3.89543 10.32 5 10.32 H 8 C 9.10457 10.32 10 9.42458 10 8.32001 V 5.32001 C 10 4.21544 9.10457 3.32001 8 3.32001 Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M 19 14.32 H 16 C 14.8954 14.32 14 15.2154 14 16.32 V 19.32 C 14 20.4246 14.8954 21.32 16 21.32 H 19 C 20.1046 21.32 21 20.4246 21 19.32 V 16.32 C 21 15.2154 20.1046 14.32 19 14.32 Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M 8 14.32 H 5 C 3.89543 14.32 3 15.2154 3 16.32 V 19.32 C 3 20.4246 3.89543 21.32 5 21.32 H 8 C 9.10457 21.32 10 20.4246 10 19.32 V 16.32 C 10 15.2154 9.10457 14.32 8 14.32 Z"
        />
      </svg>
    </button>
  </div>
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
.dropdowns-container {
  position: relative;
}
.nav {
  display: flex;
  list-style: none;
  gap: 0.2rem;
}

.nav.mobile {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 1rem;
  width: max-content;
  background-color: var(--white);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 0.8rem;

  li button {
    color: var(--menu-text-color);

    &:hover {
      color: var(--text-color);
    }
  }
}

.mobile-header-menu {
  display: none;

  svg {
    color: var(--icons-color);
  }
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

@media (max-width: 762px) {
  .nav {
    display: none;
  }
  .nav.mobile {
    display: flex;
    box-shadow: 0 0 1rem var(--menu-shadow-color);
  }
  .mobile-header-menu {
    position: relative;
    display: block;
  }
  .submenu {
    top: 0;
    right: 100%;
    left: auto;
    min-width: 150px;
    color: var(--menu-text-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>

<script setup>
import { useDeleteSiteStore } from "./stores/deleteSiteStore";
import { useSideBarStore } from "./stores/sideBarStore";
import { useWidthStore } from "./stores/widthStore";
import { useUIStore } from "./stores/UIStore";
import { useI18n } from "vue-i18n";
import BlueScreen from "../ui/BlueScreen.vue";
import Ruler from "../ui/Ruler.vue";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import Details from "./components/Details.vue";
import { onMounted } from "vue";

const deleteSiteStore = useDeleteSiteStore();
const sideBarStore = useSideBarStore();
const widthsStore = useWidthStore();
const UIStore = useUIStore();

const { t } = useI18n({
  useScope: "global",
});

onMounted(() => {
  if (window.innerWidth <= 762) {
    sideBarStore.closeSideBar();
  }
});
</script>

<template>
  <BlueScreen v-if="deleteSiteStore.isSiteDeleted" />
  <div
    class="layout-grid"
    :style="{
      gridTemplateColumns: sideBarStore.isSideBarOpen
        ? 'var(--grid-open)'
        : 'var(--grid-closed)',
    }"
  >
    <Header />
    <Ruler :rotate="true" />
    <SideBar
      v-if="sideBarStore.isSideBarOpen"
      :onClose="sideBarStore.closeSideBar"
    />
    <button
      v-if="!sideBarStore.isSideBarOpen"
      @click="sideBarStore.openSideBar"
      class="open-sidebar-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <g data-name="Layer 2">
          <path
            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64Z"
            data-name="arrow-ios-back"
          />
        </g>
      </svg>
    </button>
    <main class="main-container">
      <div class="doc-container">
        <div
          class="doc"
          :style="{
            transform: `scale(${widthsStore.scale})`,
            transformOrigin: 'top center',
          }"
        >
          <RouterView />
        </div>
      </div>
      <transition name="details-slide">
        <Details v-show="UIStore.isDetailsOpen" />
      </transition>
    </main>
    <button
      class="details-btn"
      @click="UIStore.openDetails"
      v-if="!UIStore.isDetailsOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        viewBox="0 0 17 17"
      >
        <path
          fill="currentColor"
          d="M16 2v2H5V2h11ZM5 9h11V7H5v2Zm0 5h11v-2H5v2ZM2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        />
      </svg>
      <div class="tooltip-text">{{ t("common.descBtn") }}</div>
    </button>
  </div>
</template>

<style>
.layout-grid {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  transition: grid-template-columns 0.3s ease;
}
.main-container {
  overflow-y: auto;
  position: relative;
  display: grid;
  justify-items: center;
  grid-column: 2 / 3;
  grid-row: 2;
  scrollbar-width: thin;
}
.doc-container {
  width: 55%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.doc {
  margin: 0 auto;
  background-color: var(--white);
  border: 1px solid #c8cbce;
}
.details-btn {
  position: fixed;
  top: 15rem;
  left: 3.5rem;
  z-index: 3;
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 5rem;
  height: 5rem;
  padding: 1.5rem;
  border-radius: 5rem;
  background-color: var(--bg-color-1);
  transition: background-color 0.4s, max-width 0.4s ease,
    border-radius 0.4s ease;

  svg {
    color: var(--icons-color);
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: var(--tools-hover-color);
    max-width: 15rem;

    .tooltip-text {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
.tooltip-text {
  margin-left: 1rem;
  opacity: 0;
  color: var(--text-color-1);
  white-space: nowrap;
  transform-origin: left center;
  transform: translateX(-30%);
  transition: transform 0.4s ease, opacity 0.3s ease;
}

.open-sidebar-btn {
  position: absolute;
  bottom: 2.5rem;
  right: 0;
  z-index: 10;
  background-color: var(--white);
  color: var(--icons-color);
  padding: 1rem;
  padding-right: 0.3rem;
  border-top-left-radius: 3.5rem;
  border-bottom-left-radius: 3.5rem;
  box-shadow: 0 0 0.5rem var(--shadow-color-1);
  transition: all 0.2s;

  svg {
    color: var(--menu-text-color);
  }

  &:hover {
    background-color: var(--bg-color-1);
    padding: 1rem 1.8rem 1rem 1.3rem;

    svg {
      color: var(--text-color);
    }
  }
}

.details-slide-enter-active,
.details-slide-leave-active {
  transition: transform 0.5s ease, opacity 0.2s ease;
}
.details-slide-enter-from,
.details-slide-leave-to {
  transform: translateX(-5%);
  opacity: 0;
}
.details-slide-enter-to,
.details-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

@media (max-width: 1200px) {
  .doc-container {
    width: 60%;
  }
}
@media (max-width: 910px) {
  .doc-container {
    width: 70%;
  }
  .details-btn {
    top: auto;
    bottom: 3.5%;
    left: 4%;
  }
}
@media (max-width: 762px) {
  .doc-container {
    height: auto;
    width: 95%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .details-btn {
    bottom: 3%;
    left: 6.5%;
  }
}
</style>

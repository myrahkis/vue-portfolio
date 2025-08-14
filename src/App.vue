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
        fill="currentColor"
        viewBox="0 0 24 24"
        width="2rem"
        height="2rem"
      >
        <g data-name="Layer 2">
          <g data-name="arrow-ios-back">
            <rect
              opacity="0"
              transform="rotate(90 12 12)"
              width="24"
              height="24"
            />
            <path
              d="M 13.83 19 a 1 1 0 0 1 -0.78 -0.37 l -4.83 -6 a 1 1 0 0 1 0 -1.27 l 5 -6 a 1 1 0 0 1 1.54 1.28 L 10.29 12 l 4.32 5.36 a 1 1 0 0 1 -0.78 1.64 Z"
            />
          </g>
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
        viewBox="0 0 17 17"
        width="2rem"
        height="2rem"
        version="1.1"
      >
        <path
          fill="currentColor"
          d="M 16 2 v 2 h -11 v -2 h 11 Z M 5 9 h 11 v -2 h -11 v 2 Z M 5 14 h 11 v -2 h -11 v 2 Z M 2 2 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 s 1 -0.447 1 -1 s -0.448 -1 -1 -1 Z M 2 7 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 s 1 -0.447 1 -1 s -0.448 -1 -1 -1 Z M 2 12 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 s 1 -0.447 1 -1 s -0.448 -1 -1 -1 Z"
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
  grid-template-rows: 0.23fr auto;
  height: 100vh;
  transition: grid-template-columns 0.3s ease;
}
.main-container {
  position: relative;
  display: grid;
  justify-items: center;
  overflow-y: auto;
  grid-column: 2 / 3;
  grid-row: 2;
  scrollbar-width: thin;
}
.doc-container {
  height: auto;
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
  top: 21%;
  left: 2.4%;
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

<script setup>
import router from "@/router";
import { ref } from "vue";
import { useDarkThemeStore } from "@/stores/darkThemeStore";

const dropDownOpen = ref(false);
const openedIdx = ref(null);

const darkThemeStore = useDarkThemeStore();

const menusBtns = [
  {
    name: "Файл",
    links: [
      { name: "Тема сайта", action: darkThemeStore.toggleDarkTheme },
      { name: "Язык", action: changeLangHandle },
      { name: "Поделиться", action: copyLinkHandle },
      { name: "Удалить сайт", action: deleteHandle },
      { name: "Информация", action: toggleSiteInfo },
    ],
  },
  {
    name: "Вставка",
    links: [
      { name: "Simples", to: "/simples" },
      { name: "Chat", to: "/ws-chat" },
      { name: "Cyclone", to: "/cyclone" },
      { name: "FriendlyPokerClub", to: "/friendly-poker-club" },
    ],
  },
  {
    name: "Инструменты",
    links: [
      { name: "Статистика", action: toggleStats },
      { name: "Цитаты?", action: toggleQuots },
      { name: "Быстрые клавиши?", action: toggleShortcuts },
    ],
  },
  {
    name: "Расширения?",
    links: [
      { name: "Сепия", action: sepiaHandle },
      { name: "ЧБ", action: bwHandle },
    ],
  },
  {
    name: "Справка",
    links: [{ name: "Обо мне", to: "/about-me" }],
  },
];

function openHandle(idx) {
  if (idx === openedIdx.value) {
    dropDownOpen.value = false;
    openedIdx.value = null;
  } else {
    openedIdx.value = idx;
    dropDownOpen.value = true;
  }
}

function onLinkClick(link) {
  if (link.to) {
    router.push(link.to);
    dropDownOpen.value = false;
    openedIdx.value = null;
    return;
  }

  if (typeof link.action === "function") {
    link.action();
    return;
  }

  console.warn("Неизвестный тип действия для пункта меню", link);
}

function changeLangHandle() {
  return;
}
function copyLinkHandle() {
  return;
}
function deleteHandle() {
  return;
}
function toggleSiteInfo() {
  return;
}
function toggleStats() {
  return;
}
function toggleQuots() {
  return;
}
function toggleShortcuts() {
  return;
}
function sepiaHandle() {
  return;
}
function bwHandle() {
  return;
}
</script>

<template>
  <ul class="nav">
    <li
      v-for="(btn, index) in menusBtns"
      :key="index"
      class="nav-elem"
      @click="openHandle(index)"
    >
      <button class="menu-btn u-tools-hover">
        {{ btn.name }}
      </button>
      <ul v-if="index === openedIdx && dropDownOpen" class="submenu">
        <li
          v-for="(link, index) in btn.links"
          :key="index"
          class="link-item"
          @click.stop="onLinkClick(link)"
        >
          {{ link.name }}
        </li>
      </ul>
    </li>
  </ul>
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

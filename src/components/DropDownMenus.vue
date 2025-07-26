<script setup>
import { ref } from "vue";

const dropDownOpen = ref(false);
const openedIdx = ref(null);

const menusBtns = [
  {
    name: "Файл",
    links: ["Тема сайта", "Язык", "Поделиться", "Удалить сайт", "Информация"],
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
    links: ["Статистика", "Цитаты?", "Быстрые клавиши?"],
  },
  {
    name: "Расширения?",
    links: ["Сепия", "ЧБ", "???"],
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
        <router-link
          v-for="(link, index) in btn.links"
          :key="index"
          class="link-item"
          :to="link?.to"
          tag="li"
          >{{ link?.name || link }}</router-link
        >
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
  background-color: white;
  box-shadow: 0 0 1rem #cacdd2;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
}

.link-item {
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  transition: background-color 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid var(--bg-color-1);
  }

  &:hover {
    background-color: var(--tools-hover-color);
  }
}
</style>

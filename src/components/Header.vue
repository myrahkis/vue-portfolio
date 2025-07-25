<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import Ruler from "../../ui/Ruler.vue";

function updateSideHeaderOffset() {
  const topHeader = document.querySelector(".top-header");
  const sideHeader = document.querySelector(".side-header");

  if (!topHeader || !sideHeader) return;

  const h = topHeader.getBoundingClientRect().height;
  sideHeader.style.top = `${h}px`;
  sideHeader.style.height = `calc(100% - ${h}px)`;
}

onMounted(() => {
  updateSideHeaderOffset();
  window.addEventListener("load", updateSideHeaderOffset);
  window.addEventListener("resize", updateSideHeaderOffset);
});
onBeforeUnmount(() => {
  window.addEventListener("load", updateSideHeaderOffset);
  window.removeEventListener("resize", updateSideHeaderOffset);
});
</script>

<template>
  <header class="header">
    <div class="top-header">
      <div class="site-nav-container">
        <div>
          <img class="doc-icon" src="" alt="" />
          <p>Doc Name</p>
          <ul class="nav">
            <!-- выбор темы, языка?, поделиться, удалить disabled?, информация -->
            <li>Файл</li>
            <!-- проекты -->
            <li>Вставка</li>
            <!-- статистика, цитаты?, быстрые клавиши? -->
            <li>Инструменты</li>
            <!-- накладывать фильтр на страницу? -->
            <li>Расширения?</li>
            <li>Справка</li>
          </ul>
        </div>
        <div>
          <div>
            <div>
              <img class="lock-icon" src="" alt="" />
              <p>Посетитель</p>
            </div>
          </div>
          <img class="avatar" src="" alt="" />
        </div>
      </div>
      <div class="doc-tools-container">
        <div>
          <button class="cancel-btn"><-</button>
          <button class="repeat-btn">-></button>
        </div>
        <div class="drop-down-width">Width</div>
        <div class="drop-down-font">Font</div>
        <div>
          <button class="less-btn">-</button>
          <span>кегель</span>
          <button class="more-btn">+</button>
        </div>
        <div class="drop-down-text-color">Text color</div>
        <div class="drop-down-bg-text-color">Bg text color</div>
      </div>
      <Ruler :rotate="false" />
    </div>
    <Ruler :rotate="true" />
    <div class="side-header">
      <ul class="contacts-list">
        <li>тг</li>
        <li>почта</li>
        <li>гит</li>
        <li>рикрол?</li>
      </ul>
      <button class="hide-side-header">hide</button>
    </div>
    <!-- <router-link to="/">About me</router-link>
    <router-link to="/simples">Simples</router-link>
    <router-link to="/ws-chat">WS Chat</router-link>
    <router-link to="/cyclone">Cyclone</router-link>
    <router-link to="/friendly-poker-club">FriendlyPokerClub</router-link> -->
  </header>
</template>

<style scoped>
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 0 2rem;
}
.site-nav-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.nav {
  display: flex;
  list-style: none;
  gap: 0.2rem;
}

.doc-tools-container {
  display: flex;
  gap: 1rem;
  background-color: var(--bg-color-1);
  color: var(--text-color-1);
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.side-header {
  position: fixed;
  right: 0;
  height: 100%;
  background-color: var(--bg-color);
  padding: 0 1rem;
}
.contacts-list {
  list-style: none;
}

.nav li,
.doc-tools-container div,
.contacts-list li {
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 0.4rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--tools-hover-color);
  }
}
</style>

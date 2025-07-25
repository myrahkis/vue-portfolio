<script setup>
import Ruler from "../../ui/Ruler.vue";
</script>

<template>
  <header class="header">
    <div class="site-nav-container">
      <div>
        <img class="doc-icon" src="" alt="" />
        <p>Doc Name</p>
        <ul class="nav">
          <!-- выбор темы, языка?, поделиться, удалить disabled?, информация -->
          <li class="u-tools-hover">Файл</li>
          <!-- проекты -->
          <li class="u-tools-hover">Вставка</li>
          <!-- статистика, цитаты?, быстрые клавиши? -->
          <li class="u-tools-hover">Инструменты</li>
          <!-- накладывать фильтр на страницу? -->
          <li class="u-tools-hover">Расширения?</li>
          <li class="u-tools-hover">Справка</li>
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
        <button class="cancel-btn u-tools-hover"><-</button>
        <button class="repeat-btn u-tools-hover">-></button>
      </div>
      <div class="drop-down-width u-tools-hover">Width</div>
      <div class="drop-down-font u-tools-hover">Font</div>
      <div>
        <button class="less-btn u-tools-hover">-</button>
        <span>кегель</span>
        <button class="more-btn u-tools-hover">+</button>
      </div>
      <div class="drop-down-text-color u-tools-hover">Text color</div>
      <div class="drop-down-bg-text-color u-tools-hover">Bg text color</div>
    </div>
    <Ruler :rotate="false" />

    <!-- <router-link to="/">About me</router-link>
    <router-link to="/simples">Simples</router-link>
    <router-link to="/ws-chat">WS Chat</router-link>
    <router-link to="/cyclone">Cyclone</router-link>
    <router-link to="/friendly-poker-club">FriendlyPokerClub</router-link> -->
  </header>
</template>

<style scoped>
.header {
  grid-column: 1 / -1;
  grid-row: 1;
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
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}
</style>

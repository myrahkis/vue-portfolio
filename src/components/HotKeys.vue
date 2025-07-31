<script setup></script>

<template>
  <div class="hot-keys-container">
    <h2>Быстрые клавиши</h2>
    <ul class="keys-list">
      <li><span>Отмена</span><span>Ctrl + Z</span></li>
      <li><span>Повтор</span><span>Ctrl + Shift + Z</span></li>
      <li><span>Удалить</span><span>Delete</span></li>
    </ul>
  </div>
</template>

<style scoped>
.hot-keys-container {
  padding: 0 2rem;
}
.keys-list {
  list-style: none;

  li {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    padding: 0.5rem 0;

    &:not(:last-child) {
      border-bottom: 1px solid var(--menu-shadow-color);
    }
  }
}
</style>

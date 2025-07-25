<script setup></script>

<template>
  <aside class="side-header">
    <ul class="contacts-list">
      <li>тг</li>
      <li>почта</li>
      <li>гит</li>
      <li>рикрол?</li>
    </ul>
    <button class="hide-side-header">hide</button>
  </aside>
</template>

<style scoped>
.side-header {
  /* position: fixed;
  right: 0; */
  grid-column: 3 / -1;
  grid-row: 2;
  height: 100%;
  background-color: var(--bg-color);
  padding: 0 1rem;
}
.contacts-list {
  list-style: none;
}
</style>

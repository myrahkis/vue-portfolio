<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  useScope: "global",
});
</script>

<template>
  <div class="hot-keys-container">
    <h2>{{ t("modals.hotKeys.heading") }}</h2>
    <ul class="keys-list">
      <li>
        <span>{{ t("modals.hotKeys.keys1") }}</span
        ><span>Ctrl + Z</span>
      </li>
      <li>
        <span>{{ t("modals.hotKeys.keys2") }}</span
        ><span>Ctrl + Shift + Z</span>
      </li>
      <li>
        <span>{{ t("modals.hotKeys.keys3") }}</span
        ><span>Delete</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.hot-keys-container {
  padding: 0 2rem;
  min-width: 25rem;
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

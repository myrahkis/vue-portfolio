<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  useScope: "global",
});
</script>

<template>
  <div>
    <h2>{{ t("modals.info.heading") }}</h2>
    <div class="info-container">
      <p>{{ t("modals.info.p1") }}</p>
      <p>{{ t("modals.info.p2") }}</p>
      <p>{{ t("modals.info.p3") }}</p>
    </div>
  </div>
</template>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
</style>

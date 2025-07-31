<script setup>
const { actionText, message, isCancelBtn, confirmBtnText } = defineProps({
  actionText: String,
  message: { type: String, default: "" },
  isCancelBtn: {
    type: Boolean,
    default: true,
  },
  confirmBtnText: { type: String, default: "OK" },
});
const emit = defineEmits(["cancel", "confirm"]);

function onConfirm() {
  emit("confirm");
}
function onCancel() {
  emit("cancel");
}
</script>

<template>
  <div class="confirm-modal-container">
    <h2>{{ actionText }}</h2>
    <h3>{{ message }}</h3>
    <div class="btns-container">
      <button class="cancel-btn" @click="onCancel" v-if="isCancelBtn">
        Отмена
      </button>
      <button
        class="confirm-btn"
        :style="{ marginLeft: isCancelBtn === false ? 'auto' : 'none' }"
        @click="onConfirm"
      >
        {{ confirmBtnText }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.confirm-modal-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
}
.btns-container {
  display: flex;
  gap: 1rem;
}

.cancel-btn,
.confirm-btn {
  padding: 1rem 2rem;
  border-radius: 2rem;
  transition: all 0.1s;
}
.confirm-btn {
  background-color: var(--ememphasis-color);
  color: var(--white);

  &:hover {
    box-shadow: 0 0.1rem 0.3rem var(--shadow-color-1);
  }
}
.cancel-btn {
  color: var(--ememphasis-color);

  &:hover {
    background-color: #ecf2fb;
  }
}
</style>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  index: Number,
  options: Array,
  open: {
    type: Boolean,
    default: false,
  },
  labelKey: { type: String, default: "label" },
  valueKey: { type: String, default: "value" },
  modelValue: [String, Number, Object],
});

const emit = defineEmits(["update:modelValue", "toggle"]);

const selectedOpt = computed(() => {
  return (
    props.options.find((opt) => opt[props.valueKey] === props.modelValue) ||
    null
  );
});

const displayLabel = computed(() => {
  return selectedOpt.value
    ? selectedOpt.value[props.labelKey]
    : props.placeholder;
});

function toggleOpen() {
  emit("toggle", props.index);
}

function selectOption(opt) {
  emit("update:modelValue", opt[props.valueKey]);
  emit("toggle", props.index);
}
</script>

<template>
  <div class="selector">
    <div class="selected" :class="{ open }" @click="toggleOpen">
      {{ displayLabel }}
    </div>
    <div class="items" v-if="open">
      <div
        v-for="(opt, idx) in options"
        :key="idx"
        class="item"
        @click="selectOption(opt)"
      >
        {{ opt[labelKey] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.selector {
  position: relative;
  width: fit-content;
}

.selected {
  cursor: pointer;
  position: relative;
  background: transparent;
  user-select: none;
  padding-right: 0.8rem;
}
.selected.open {
  background-color: var(--dark-bg-color);
  border-color: var(--light-gradient-color);
  border-radius: 1rem 1rem 0 0;
}
.selected::after {
  content: "";
  position: absolute;
  top: 0.6em;
  right: -0.25em;
  border: 4px solid transparent;
  border-color: var(--text-color) transparent transparent transparent;
}

.items {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  width: max-content;
  background-color: var(--white);
  box-shadow: 0 0 1rem var(--menu-shadow-color);
  padding: 0.5rem 0;
  border-radius: 0.5rem;
}
.item {
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: var(--menu-text-color);
  font-weight: 500;
  transition: background 0.2s;
}
.item:hover {
  background-color: var(--tools-hover-color);
  color: var(--text-color);
}

@media (max-width: 762px) {
  .selected::after {
    content: "";
    position: absolute;
    top: 0.6em;
    right: -0.25em;
    border: 4px solid transparent;
    border-color: var(--menu-text-color) transparent transparent transparent;
  }
  .selected:hover::after {
    border-color: var(--white) transparent transparent transparent;
  }
}
</style>

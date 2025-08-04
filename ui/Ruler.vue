<script setup>
const { rotate } = defineProps({ rotate: Boolean });
</script>

<template>
  <aside class="ruler-container" :class="{ vertical: rotate }">
    <div class="ruler" :class="{ vertical: rotate }">
      <div class="labels">
        <span v-for="index in 40" :key="index" :style="{ '--i': index }"></span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.ruler-container {
  position: relative;
  width: 100%;
  border-bottom: 1px solid var(--text-color-1);
  mask-image: linear-gradient(
    to right,
    transparent,
    var(--text-color-1) 20%,
    var(--text-color-1) 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    var(--text-color-1) 20%,
    var(--text-color-1) 80%,
    transparent
  );
}

.ruler {
  position: relative;
  width: 70%;
  height: 1.5rem;
  margin: 0 auto;

  --unit: 10px;
  background-image: repeating-linear-gradient(
      to right,
      #48494a 0,
      #48494a 1px,
      transparent 1px,
      transparent var(--unit)
    ),
    repeating-linear-gradient(
      to right,
      #48494a 0,
      #48494a 1px,
      transparent 1px,
      transparent calc(var(--unit) * 3)
    );
  background-repeat: repeat-x, repeat-x;
  /* высота */
  background-size: var(--unit) 20%, calc(var(--unit) * 3) 40%;
  background-position: bottom, bottom;

  /* фейд */
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );

  counter-reset: tick;
}

.ruler .labels {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
.ruler .labels span {
  position: absolute;
  top: 0;
  left: calc(var(--unit) * (var(--i) * 3));
  counter-increment: tick;
}
.ruler .labels span::before {
  content: counter(tick);
  position: absolute;
  top: -0.3rem;
  left: 60%;
  transform: translateX(-60%);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  white-space: nowrap;
}

.ruler-container.vertical {
  grid-column: 1 / 2;
  grid-row: 2;
  width: 2rem;
  border-bottom: none;
  border-right: 1px solid var(--text-color-1);
  mask-image: linear-gradient(
    to bottom,
    transparent,
    var(--text-color-1) 20%,
    var(--text-color-1) 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    var(--text-color-1) 20%,
    var(--text-color-1) 80%,
    transparent
  );
}

.ruler.vertical {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin: 0;

  background-image: repeating-linear-gradient(
      to bottom,
      #48494a 0,
      #48494a 1px,
      transparent 1px,
      transparent var(--unit)
    ),
    repeating-linear-gradient(
      to bottom,
      #48494a 0,
      #48494a 1px,
      transparent 1px,
      transparent calc(var(--unit) * 3)
    );
  background-repeat: repeat-y, repeat-y;
  background-size: 20% var(--unit), 40% calc(var(--unit) * 3);
  background-position: right, right;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.ruler.vertical .labels span {
  top: calc(var(--unit) * (var(--i) * 3));
  left: 0;
}

.ruler.vertical .labels span::before {
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: left center;
  left: 1.3rem;
  top: 0.8rem;
}
</style>

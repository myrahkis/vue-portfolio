<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  useScope: "global",
});
</script>

<template>
  <div class="death-screen">
    <h1>:(</h1>
    <p>
      {{ t("common.blueScreen.p1") }} <br />
      {{ t("common.blueScreen.p2") }}
    </p>
    <div class="qr-wrapper">
      <img class="qr-code" src="/src/assets/QR_code.png" alt="" />
      <p>
        {{ t("common.blueScreen.p3") }}
      </p>
    </div>
  </div>
</template>

<style>
.death-screen {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #0078d7;
  color: white;
  padding: 9rem 12rem;
  gap: 3rem;

  h1 {
    font-size: 12rem;
    font-weight: 400;
  }

  p {
    width: 55%;
    font-size: 2rem;
  }
}

.qr-wrapper {
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    font-size: 1.5rem;
  }
}
.qr-code {
  width: 8rem;
}

@media (max-width: 1100px) {
  .death-screen {
    justify-content: center;
    padding: clamp(2rem, calc(2rem + 3.5vw), 9rem)
      clamp(2rem, calc(2rem + 6vw), 12rem);

    p {
      width: 100%;
      font-size: clamp(1rem, calc(1rem + 2vw), 2rem);
    }
  }
  .qr-wrapper {
    p {
      font-size: clamp(1rem, calc(0.9rem + 1.5vw), 1.5rem);
    }
  }
  .qr-code {
    width: clamp(6rem, calc(1rem + 4vw), 8rem);
  }
}
@media (max-width: 640px) {
  .death-screen {
    h1 {
      font-size: clamp(8rem, calc(1rem + 2vw), 12rem);
    }

    p {
      font-size: clamp(1rem, calc(0.8rem + 2vw), 1.5rem);
    }
  }
  .qr-wrapper {
    p {
      font-size: clamp(0.8rem, calc(0.9rem + 1vw), 1.5rem);
    }
  }
}
</style>

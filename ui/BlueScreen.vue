<script setup></script>

<template>
  <div class="death-screen">
    <h1>:(</h1>
    <p>
      У сайта проблема и его нужно перезагрузить. <br />
      Жаль, что так случилось. Произошла неизвестная ошибка.
    </p>
    <div class="qr-wrapper">
      <img class="qr-code" src="/src/assets/QR_code.png" alt="" />
      <p>
        Пройдите по QR-коду, чтобы получить больше информации касательно ошибки.
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
    width: 50%;
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
</style>

<script setup>
import Ruler from "../ui/Ruler.vue";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="layout-grid">
    <Header />
    <Ruler :rotate="true" />
    <SideBar />
    <main class="doc-container">
      <button class="hidden-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 17"
          width="2rem"
          height="2rem"
          version="1.1"
        >
          <path
            fill="#48494a"
            d="M 16 2 v 2 h -11 v -2 h 11 Z M 5 9 h 11 v -2 h -11 v 2 Z M 5 14 h 11 v -2 h -11 v 2 Z M 2 2 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 s 1 -0.447 1 -1 s -0.448 -1 -1 -1 Z M 2 7 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 s 1 -0.447 1 -1 s -0.448 -1 -1 -1 Z M 2 12 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 s 1 -0.447 1 -1 s -0.448 -1 -1 -1 Z"
          />
        </svg>
      </button>
      <div class="doc">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout-grid {
  display: grid;
  grid-template-columns: 2rem auto 8rem;
  grid-template-rows: 0.23fr auto;
  height: 100vh;
}
.doc-container {
  position: relative;
  overflow-y: auto;
  grid-column: 2 / 3;
  grid-row: 2;
  scrollbar-width: thin;
}
.doc {
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  margin-top: -2rem;
  margin-bottom: 2rem;
  background-color: white;
  border: 1px solid #c8cbce;
}
.hidden-btn {
  position: sticky;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 1.5rem;
  border-radius: 50%;
  background-color: var(--bg-color-1);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--tools-hover-color);
  }
}
</style>

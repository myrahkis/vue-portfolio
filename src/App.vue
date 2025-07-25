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
      <div class="doc">
        <RouterView />
      </div>
    </main>
  </div>
  <!--<LayoutDoc /> -->
</template>

<style scoped>
.layout-grid {
  display: grid;
  grid-template-columns: 2rem auto 8rem;
  grid-template-rows: 0.23fr auto;
  height: 100vh;
}
.doc-container {
  overflow-y: auto;
  grid-column: 2 / 3;
  grid-row: 2;
  scrollbar-width: thin;
}
.doc {
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: white;
  border: 1px solid #a1a3a5;
}
</style>

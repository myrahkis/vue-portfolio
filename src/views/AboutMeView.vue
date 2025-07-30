<script setup>
import { useTextBgColorStore } from "@/stores/textBgColorStore";
import { useTextColorStore } from "@/stores/textColorStore";
import DocLayout from "@/components/DocLayout.vue";

const textColorStore = useTextColorStore();
const textBgColorStore = useTextBgColorStore();
</script>

<template>
  <section class="about-me-section">
    <DocLayout>
      <template #project>
        <h1>
          <span
            :style="{
              color: textColorStore.selectedColor,
              backgroundColor: textBgColorStore.selectedColor,
              lineHeight: 1.55,
            }"
            >Обо мне</span
          >
        </h1>
        <ul class="about-me-list">
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Гражданка вселенной, проживаю в Млечном пути, на Земле, в России,
              в г. Москва;</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Окончила ВУЗ по направлению информационные системы и технологии и
              активно развиваюсь во frontend;</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Почти свободно говорю на английском (С1), на 3 курсе изучала
              китайский;</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
              >Обожаю путешествовать, уже побывала в 6 странах;</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Люблю творчество: в свободное время разминаю пальцы, играя на
              гитаре или рисуя;</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
              >Также люблю отдыхать, читать и заниматься спортом;</span
            >
          </li>
          <li>
            <span
              :style="{
                color: textColorStore.selectedColor,
                backgroundColor: textBgColorStore.selectedColor,
                lineHeight: 1.55,
              }"
            >
              Считаю, что нет ничего неинтересного, поэтому посвятить себя
              чему-то конкретному не могу.</span
            >
          </li>
        </ul>
        <div>
          <img class="me-diploma-img" src="/src/assets/me-diploma.jpg" alt="" />
        </div>
      </template>
    </DocLayout>
  </section>
</template>

<style scoped>
.about-me-section {
  height: 100vh;
}

.about-me-list {
  list-style: inside;
}
.me-diploma-img {
  width: 50%;
  margin-top: 2rem;
}
</style>

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Vue портфолио",
      component: Home,
    },
    {
      path: "/simples",
      name: "Simples",
      component: () => import("../views/SimplesView.vue"),
    },
    {
      path: "/ws-chat",
      name: "Chat",
      component: () => import("../views/ChatView.vue"),
    },
    {
      path: "/cyclone",
      name: "Cyclone",
      component: () => import("../views/CycloneView.vue"),
    },
    {
      path: "/friendly-poker-club",
      name: "Friendly Poker Club",
      component: () => import("../views/FriendlyPokerClubView.vue"),
    },
    {
      path: "/about-me",
      name: "Обо мне",
      component: () => import("../views/AboutMeView.vue"),
    },
  ],
});

export default router;

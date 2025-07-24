import { createRouter, createWebHistory } from "vue-router";
import AboutMeView from "@/views/AboutMeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about-me",
      component: AboutMeView,
    },
    {
      path: "/simples",
      name: "simples",
      component: () => import("../views/SimplesView.vue"),
    },
    {
      path: "/ws-chat",
      name: "ws-chat",
      component: () => import("../views/ChatView.vue"),
    },
    {
      path: "/cyclone",
      name: "cyclone",
      component: () => import("../views/CycloneView.vue"),
    },
    {
      path: "/friendly-poker-club",
      name: "friendly-poker-club",
      component: () => import("../views/FriendlyPokerClubView.vue"),
    },
  ],
});

export default router;

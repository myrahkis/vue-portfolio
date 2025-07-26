import { createRouter, createWebHistory } from "vue-router";
import AboutMeView from "@/views/AboutMeView.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
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
    {
      path: "/about-me",
      name: "about-me",
      component: () => import("../views/AboutMeView.vue"),
    },
  ],
});

export default router;

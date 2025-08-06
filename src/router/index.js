import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { titleKey: "common.home" },
      component: Home,
    },
    {
      path: "/simples",
      name: "simples",
      meta: { titleKey: "common.simples" },
      component: () => import("../views/SimplesView.vue"),
    },
    {
      path: "/ws-chat",
      name: "chat",
      meta: { titleKey: "common.chat" },
      component: () => import("../views/ChatView.vue"),
    },
    {
      path: "/cyclone",
      name: "cyclone",
      meta: { titleKey: "common.cyclone" },
      component: () => import("../views/CycloneView.vue"),
    },
    {
      path: "/friendly-poker-club",
      name: "friendly-poker-club",
      meta: { titleKey: "common.friendlyPokerClub" },
      component: () => import("../views/FriendlyPokerClubView.vue"),
    },
    {
      path: "/about-me",
      name: "about-me",
      meta: { titleKey: "common.aboutMe" },
      component: () => import("../views/AboutMeView.vue"),
    },
  ],
});

export default router;
